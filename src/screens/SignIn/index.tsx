import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import theme from '../../global/styles/theme';

import { Container, Header, Subtitle, Title, Form, Buttons } from './styles';

export function SignIn() {
  return (
    <Container>
      <Header>
        <Title>
          Estamos{'\n'}
          quase lá.
        </Title>
        <Subtitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </Subtitle>
      </Header>

      <Form>
        <Input iconName="mail" />
      </Form>
      <Buttons>
        <Button 
          title="Login"
          onPress={() => console.log('click')}
          enabled={false}
          loading={false}
        />

        <Button 
          title="Criar conta"
          onPress={() => console.log('click')}
          enabled={true}
          loading={false}
          color={theme.colors.background_secondary}
        />
      </Buttons>
    </Container>
  )
}