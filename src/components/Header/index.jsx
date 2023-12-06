import { Container, Profile } from './styles';

export function Header() {
return (
  <Container>
    <h1>RocketMovies</h1>
    <input type="text" placeholder="Pesquisar pelo título" />
  <Profile to="/profile">
    <div>
      <strong>Thiago Sombra</strong>
      <a href="/">Sair</a>
    </div>
    <img src="https://github.com/thiagotsdelima.png" alt="User photo" />
  </Profile>
</Container>
);
}