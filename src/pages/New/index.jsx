import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';

import { Container, Form } from './styles';

export function New() {
return (
<Container>
<div className="line"></div>
<Header />
<main>
  <Form>
    <header>
    <Link to="/">
    <FiArrowLeft />
    </Link>
    <Link to="/">Voltar</Link>
    </header>
    <Section title="Novo filme" />
    <div className="list">
    <Input placeholder="Título" />
    <Input placeholder="Sua nota (de 0 a 5)" />
    </div>
    <Textarea placeholder="Observações" />
    
    <Section>
      <h3>Marcadores</h3>
    <div className="tags">
      <NoteItem className="item" value="React"/>
      <NoteItem className="mandatory" isNew placeholder="Novo marcador"/>
      </div>
    </Section>
    <div className="footer">
    <Button className="btn-delete-movie" title="Excluir filme" />
    <Button className="btn-save-changes" title="Salvar alterações" />
    </div>
  </Form>

</main>
</Container>
);
}