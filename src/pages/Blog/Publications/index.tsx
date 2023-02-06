import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { api } from '../../../lib/axios'

import {
  AmountPublications,
  Header,
  Issue,
  IssueContent,
  IssueHeader,
  Issues,
  IssueTime,
  IssueTitle,
  PublicationsContainer,
  Search,
  Title,
} from './styles'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

interface IIssue {
  title: string
  body: string
  number: number
  created_at: string
}

interface IResponseData {
  items: IIssue[]
}

export function Publications() {
  const [issues, setIssues] = useState<IIssue[]>([])

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function fetchPosts(query?: string) {
    const response = await api.get<IResponseData>('search/issues', {
      params: {
        q: `${query || ''} repo:matheusfd3/github-blog`,
      },
    })

    setIssues(response.data.items)
  }

  async function handleSearch(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const totalIssues = issues.length

  return (
    <PublicationsContainer onSubmit={handleSubmit(handleSearch)}>
      <Header>
        <Title>Publicações</Title>
        <AmountPublications>
          {totalIssues + ' '}
          {totalIssues < 1 ? 'publicação' : 'publicações'}
        </AmountPublications>
      </Header>
      <Search
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query', {
          onChange: handleSubmit(handleSearch),
        })}
      />
      <Issues>
        {issues.map((issue) => (
          <Issue key={issue.number} to={`/post/${issue.number}`} title="Post">
            <IssueHeader>
              <IssueTitle>{issue.title}</IssueTitle>
              <IssueTime
                title={format(
                  new Date(issue.created_at),
                  "d 'de' LLLL 'às' HH:mm'h'",
                  { locale: ptBR },
                )}
                dateTime={new Date(issue.created_at).toISOString()}
              >
                {formatDistanceToNow(new Date(issue.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </IssueTime>
            </IssueHeader>
            <IssueContent>
              <ReactMarkdown>
                {`${issue.body.substring(0, 150)} ...`}
              </ReactMarkdown>
            </IssueContent>
          </Issue>
        ))}
      </Issues>
    </PublicationsContainer>
  )
}
