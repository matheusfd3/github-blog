import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import {
  Avatar,
  Bio,
  Info,
  Infos,
  LinkToGithub,
  Name,
  NameBioContainer,
  Profile,
  ProfileCardContainer,
  ProfileContainer,
} from './styles'

interface IUser {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export function ProfileCard() {
  const [user, setUser] = useState<IUser>({} as IUser)

  async function fetchGithubUser() {
    const response = await api.get<IUser>('users/matheusfd3')
    setUser({ ...response.data, company: 'Rocketseat' })
  }

  useEffect(() => {
    fetchGithubUser()
  }, [])

  return (
    <ProfileCardContainer>
      <ProfileContainer>
        <Avatar src={user.avatar_url} alt="" />
        <Profile>
          <NameBioContainer>
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
          </NameBioContainer>
          <Infos>
            <Info>
              <FontAwesomeIcon fontSize={18} icon={faGithub} />
              {user.login}
            </Info>
            {user.company && (
              <Info>
                <FontAwesomeIcon fontSize={16} icon={faBuilding} />
                {user.company}
              </Info>
            )}
            <Info>
              <FontAwesomeIcon fontSize={14} icon={faUserGroup} />
              {user.followers} seguidores
            </Info>
          </Infos>
        </Profile>
        <LinkToGithub href={user.html_url} target="_blank" rel="noreferrer">
          github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkToGithub>
      </ProfileContainer>
    </ProfileCardContainer>
  )
}
