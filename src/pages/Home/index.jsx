import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <div className="line"></div>
      <Header />
      <Content>
      <Section title="Meus filmes"/>
      <FiPlus />
      <Link to="/New">
      <Button title="Adicionar filme" />
      </Link>
      </Content>
      <menu>
  <section title="Interestellar">
    <Note data={{
      title: 'Interestellar', 
      p: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas ', 
      svg: '', 
      tags: [
        {id: '1', name: 'Ficção científica'},
        {id: '2', name: 'Drama'},
        {id: '3', name: 'Família'}
      ]}} 
    />
  </section>
  <section title="Interestellar">
    <Note data={{
      title: 'Interestellar', 
      p: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas  ', 
      svg: '', 
      tags: [
        {id: '1', name: 'Ficção científica'},
        {id: '2', name: 'Drama'},
        {id: '3', name: 'Família'}
      ]}} 
    />
  </section>
  <section title="Interestellar">
    <Note data={{
      title: 'Interestellar', 
      p: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas  ', 
      svg: '', 
      tags: [
        {id: '1', name: 'Ficção científica'},
        {id: '2', name: 'Drama'},
        {id: '3', name: 'Família'}
      ]}} 
    />
  </section>
</menu>

    </Container>
  );
}
