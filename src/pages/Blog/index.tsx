import { ProfileCard } from './ProfileCard'
import { Publications } from './Publications'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCard />
      <Publications />
    </BlogContainer>
  )
}
