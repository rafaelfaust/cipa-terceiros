import React from "react"
import { Container, ContainerItems, Nav, Footer } from './Styles/styles'
import CarouselItens from "./components/CarouselItens"
import Onix from './images/ONIX_logo cinza.png'
import Cipa from './images/cipa.png'





function App() {
  return (
    <Container>
      <Nav>
        <img src={Onix}/>
        <h1>Treinamento</h1>
        <img src={Cipa}/>

      </Nav>
      <ContainerItems>
        <CarouselItens/>
      </ContainerItems>
      <Footer>
        <p>&copy; All Rights Reserved. Designed by Rafael Faust</p>
      </Footer>
    </Container>
  )
}

export default App;
