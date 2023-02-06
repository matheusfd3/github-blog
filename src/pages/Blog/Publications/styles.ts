import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PublicationsContainer = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.strong`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
`

export const AmountPublications = styled.span`
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
`

export const Search = styled.input`
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;

  border: solid 1px ${(props) => props.theme['base-border']};
  border-radius: 6px;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    box-shadow: 0 0 0 0 transparent;
    border-color: ${(props) => props.theme.blue};
  }
`

export const Issues = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  margin: 3rem 0;
`

export const Issue = styled(NavLink)`
  text-decoration: none;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
  }
`

export const IssueHeader = styled.div`
  display: flex;
  gap: 1rem;
`

export const IssueTitle = styled.strong`
  flex: 1;
  color: ${(props) => props.theme['base-title']};
  font-size: 1.25rem;
`

export const IssueTime = styled.time`
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
`

export const IssueContent = styled.span`
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
  margin-top: 1.25rem;
`
