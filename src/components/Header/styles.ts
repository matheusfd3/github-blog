import styled from 'styled-components'
import coverImg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  background-image: url(${coverImg});
  background-repeat: no-repeat;

  height: 18.5rem;

  img {
    margin-top: 4rem;
    width: 9.25rem;
    height: 6.125rem;
  }
`
