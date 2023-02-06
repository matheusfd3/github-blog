import styled from 'styled-components'

export const ProfileCardContainer = styled.main``

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`
export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NameBioContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.strong`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 160%;
`

export const Bio = styled.p`
  margin-top: 0.5rem;
`

export const Infos = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1.5rem;

  margin-top: 0.5rem;
`

export const Info = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const LinkToGithub = styled.a`
  position: absolute;
  top: 2.5rem;
  right: 2rem;

  text-decoration: none;
  text-transform: uppercase;

  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.blue};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
