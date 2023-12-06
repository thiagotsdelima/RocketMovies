import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
return (
<Container>
<header>
<Link to="/">
  <FiArrowLeft />
</Link>
<Link to="/">Voltar</Link>
</header>

<Form>
  <Avatar>
    <img src="https://github.com/thiagotsdelima.png" alt="User photo" />
    <label htmlFor="avatar">
    <FiCamera />
    <input
     id="avatar" 
     type="file"
     />
    </label>
  </Avatar>
 
<Input
  placeholder="Nome"
  type="text"
  icon={FiUser}
  />
  <Input
  placeholder="@gmail.com"
  type="text"
  icon={FiMail}
  />
  <Input 
  placeholder="Senha atual"
  type="Password"
  icon={FiLock}
  />
  <Input 
  placeholder="Nova senha"
  type="Password"
  icon={FiLock}
  />
  <Button title="Salvar" />
</Form>

</Container>
);
}