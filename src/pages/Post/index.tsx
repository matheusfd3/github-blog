import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

import {
  Article,
  Header,
  Info,
  Infos,
  Nav,
  PostContainer,
  Title,
} from './styles'

interface IUser {
  login: string
}

interface IIssue {
  user: IUser
  title: string
  body: string
  comments: number
  html_url: string
  created_at: Date
}

export function Post() {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<IIssue>({
    created_at: new Date(),
  } as IIssue)

  useEffect(() => {
    const fetchIssue = async () => {
      const response = await api.get<IIssue>(
        `/repos/matheusfd3/github-blog/issues/${issueNumber}`,
      )

      setIssue({
        ...response.data,
        created_at: new Date(response.data.created_at),
      })
    }
    fetchIssue()
  }, [issueNumber])

  return (
    <PostContainer>
      <Header>
        <Nav>
          <NavLink to="/" title="Blog">
            <FontAwesomeIcon fontSize={12} icon={faChevronLeft} />
            Voltar
          </NavLink>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            Ver no Github
            <FontAwesomeIcon fontSize={12} icon={faArrowUpRightFromSquare} />
          </a>
        </Nav>
        <Title>{issue.title}</Title>
        <Infos>
          <Info>
            <FontAwesomeIcon fontSize={18} icon={faGithub} />
            {issue.user?.login}
          </Info>
          <Info>
            <FontAwesomeIcon fontSize={18} icon={faCalendarDay} />
            {formatDistanceToNow(issue.created_at, {
              locale: ptBR,
              addSuffix: true,
            })}
          </Info>
          <Info>
            <FontAwesomeIcon fontSize={18} icon={faComment} />
            {issue.comments + ' '}
            {issue.comments < 1 ? 'comentário' : 'comentários'}
          </Info>
        </Infos>
      </Header>
      <Article>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </Article>
    </PostContainer>
  )
}
