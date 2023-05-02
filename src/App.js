import React from "react"
import { Container, ContainerItems, Nav, Footer } from './Styles/styles'
import CarouselItens from "./components/CarouselItens"
import Onix from './images/onixcinza.png'
import Cipa from './images/cipa.png'





function App() {
  return (
    <Container>
      <Nav>
        <img src={Onix} alt="Logo Onix"/>
        <h1>Treinamento</h1>
        <img src={Cipa} alt="Logo Cipa"/>

      </Nav>
      <ContainerItems>
        <CarouselItens/>
      </ContainerItems>
      <Footer>
        <p><a href="https://www.rafaelfaust.com.br" target="_blank">&copy; All Rights Reserved. Designed by Rafael Faust</a></p>
      </Footer>
    </Container>
  )
}

export default App;
