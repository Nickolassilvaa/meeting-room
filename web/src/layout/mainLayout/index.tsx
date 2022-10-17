import { Outlet } from 'react-router-dom'
import { Container, Content, LogoDiv } from './styles'

export function MainLayout() {
  return (
    <Container>
      <LogoDiv>teste</LogoDiv>
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
