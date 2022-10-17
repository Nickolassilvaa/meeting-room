import { useState } from 'react'
import {
  Container,
  CreateAccount,
  EnterCodeDiv,
  Login,
  LoginDiv,
  TextEnterCode,
  Title,
  InputCode,
  Button,
  DisplayInputAndButton,
} from './styles'

export function Home() {
  const [inputValue, setInputValue] = useState('')

  function controleInputValue(e: any) {
    setInputValue(e.target.value)
    console.log(inputValue)
  }
  return (
    <Container>
      <Title>Crie uma sala</Title>

      <LoginDiv>
        <Login to="/login">Faça login</Login>
        <CreateAccount to="#">Não tem uma conta? Cria uma agora!</CreateAccount>
      </LoginDiv>

      <EnterCodeDiv>
        <TextEnterCode htmlFor="code">
          Entrar em uma sala existente
        </TextEnterCode>

        <DisplayInputAndButton>
          <InputCode
            id="code"
            type="text"
            value={inputValue}
            onChange={controleInputValue}
            placeholder="Insira o código da sala"
          />

          <Button type="submit" disabled={inputValue === ''}>
            Entrar
          </Button>
        </DisplayInputAndButton>
      </EnterCodeDiv>
    </Container>
  )
}
