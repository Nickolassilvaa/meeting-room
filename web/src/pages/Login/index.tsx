import { Check, LockKey, User } from 'phosphor-react'

import {
  Container,
  Title,
  LoginDiv,
  InputDiv,
  PasswordDiv,
  ContentInfo,
  Root,
  Indicator,
  Remember,
  LinkText,
  Informations,
  Button,
  ContentForm,
} from './styles'

export function Login() {
  return (
    <Container>
      <Title>Faça login</Title>

      <ContentForm>
        <ContentInfo>
          <LoginDiv>
            <label htmlFor="login">Login</label>
            <InputDiv>
              <User size={20} />

              <input
                id="login"
                type="email"
                placeholder="exemple@gmail.com"
                required
              />
            </InputDiv>
          </LoginDiv>

          <PasswordDiv>
            <label htmlFor="password">Senha</label>
            <InputDiv>
              <LockKey size={20} />
              <input
                id="password"
                type="password"
                placeholder="********"
                required
              />
            </InputDiv>
          </PasswordDiv>
        </ContentInfo>

        <Remember>
          <Root id="check">
            <Indicator>
              <Check size={24} />
            </Indicator>
          </Root>
          <label htmlFor="check">Lembrar-me por 30 dias</label>
        </Remember>

        <Informations>
          <LinkText to="#">Esqueci minha senha</LinkText>
          <LinkText to="#">Não tem uma conta? Cria uma agora!</LinkText>
        </Informations>

        <Button type="submit">Criar uma sala</Button>
      </ContentForm>
    </Container>
  )
}
