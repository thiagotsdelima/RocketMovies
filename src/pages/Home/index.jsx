import { useState, useEffect } from "react"

import { api } from "../../Services/api"

import { Container, Title, Content } from "./styles"

import { FiPlus } from "react-icons/fi"

import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Movie } from "../../Components/Movie"



export function Home() {
 
  const [notes, setNotes] = useState([])

  const [search, setSearch] = useState("")


  useEffect(() => {

    async function fetchNotes() {

      const response = await api.get(`/notes?title=${search}`)

      setNotes(response.data)
    }

    fetchNotes()

  }, [search])



  return(
    <Container>
      <Header onChange={ e => setSearch(e.target.value)}/>

      <Title>
        <h1>Meus filmes</h1>

        <Button title="Adicionar filme" icon={FiPlus} to="/new_movie" />
      </Title>
      
      <Content>
        {
          notes &&
          notes.map( note => (
            <Movie
              key={String(note.id)}  
              data={note}
              to={`details/${String(note.id)}`}
            />
          ))
        }
      </Content>
    </Container>
  )
}
