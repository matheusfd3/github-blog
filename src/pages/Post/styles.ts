import styled from 'styled-components'

export const PostContainer = styled.main`
  box-sizing: content-box;
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 2rem;

  margin-top: -5.5rem;
`
export const Header = styled.header`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 0.75rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1px solid transparent;

    color: ${(props) => props.theme.blue};

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const Title = styled.strong`
  display: block;
  margin-top: 1.25rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
`

export const Infos = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;

  margin-top: 0.5rem;
`

export const Info = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${(props) => props.theme['base-span']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Article = styled.article`
  padding: 2.5rem 2rem;

  code {
    display: block;
    background: ${(props) => props.theme['base-post']};
    color: ${(props) => props.theme.blue};
    padding: 1rem;
    border-radius: 6px;
  }
`
