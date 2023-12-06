
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
return (
<Container>
<Form>
  <h1>RocketMoveis</h1>
  <p>Aplicação para acompanhar tudo que assistir.</p>
  <h2>Faça seu login</h2>
  <Input 
  placeholder="E-mail"
  type="text"
  icon={FiMail}
  />
  <Input 
  placeholder="Senha"
  type="Password"
  icon={FiLock}
  />

  <Button title="Entrar" />
  <Link to="/register">
  Criar
  </Link>
</Form>

<Background />
</Container>
);
}