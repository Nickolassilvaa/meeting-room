import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100vh;
`

const DisplayFlexAllCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoDiv = styled(DisplayFlexAllCenter)`
  width: 40%;
  height: 100vh;
  background: ${(props) => props.theme['dark-green']};
`

export const Content = styled(DisplayFlexAllCenter)`
  width: 60%;
  height: 100vh;
  background: ${(props) => props.theme['gray-100']};
`
