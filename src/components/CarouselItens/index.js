import React from "react"
import Carousel from 'react-elastic-carousel'
 
import { Item } from './styles'

import imagem1 from '../../images/seg.jpg'

function CarouselItens () {
    return (
        <Carousel itemsToShow={1}>
          <Item>
            <div>
                <img src={imagem1} alt="Imagem de segurança"/>
            </div>
            <div>
              <h2>Seja Bem Vindo(a)</h2>
              <p>Aqui zelamos pela Segurança!</p>
              <p>Por este motivo elaboramos este treinamento para vocês, a fim de informar sobre os nossos procedimentos e normas internas de segurança para a preservação dos colaboradores, do
                patrimônio envolvido e do meio ambiente.</p>
                <p>Utilize as setas do site para navegar no conteúdo e ao final deve realizar o preenchimento do formulário que é uma avaliação do conteúdo lido aqui no site.</p>
            </div>
          </Item>
          <Item>
            <div>
                <img src={imagem1} alt="Imagem de segurança"/>
            </div>
            <div>
              <h2>Seja Bem Vindo(a)</h2>
              <p>Aqui zelamos pela Segurança!</p>
              <p>Por este motivo elaboramos este treinamento para vocês, a fim de informar sobre os nossos procedimentos e normas internas de segurança para a preservação dos colaboradores, do
                patrimônio envolvido e do meio ambiente.</p>
                <p>Utilize as setas do site para navegar no conteúdo e ao final deve realizar o preenchimento do formulário que é uma avaliação do conteúdo lido aqui no site.</p>
            </div>
          </Item>

        </Carousel>
    )

}

export default CarouselItens