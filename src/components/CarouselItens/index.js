import React from "react"
import Carousel from 'react-elastic-carousel'

import { Item, DivImage, DivText } from './styles'

import imagem1 from '../../images/seg.jpg'
import imagem2 from '../../images/02.jpg'
import imagem3 from '../../images/03.jpg'
import imagem4 from '../../images/5s.jpg'
import imagem5 from '../../images/05.jpg'
import imagem7 from '../../images/07.jpg'
import imagem8 from '../../images/08.jpg'
import imagem9 from '../../images/09.jpg'
import imagem10 from '../../images/10.jpg'
import imagem11 from '../../images/11.jpg'
import imagem12 from '../../images/12.jpg'
import imagem13 from '../../images/13.jpg'
import onix from '../../images/ONIX_PRINCIPAL DEGRADE.png'


function CarouselItens() {
  return (
    <Carousel itemsToShow={1}>
      <Item>
        <DivImage>
          <img src={imagem1} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Seja Bem Vindo(a)</h2>
          <p>Aqui zelamos pela Segurança!</p>
          <p>Por este motivo elaboramos este treinamento para vocês, a fim de informar sobre os nossos procedimentos e normas internas de segurança para a preservação dos colaboradores, do
            patrimônio envolvido e do meio ambiente.</p>
          <ul>Antes de realizar a visita para executar o serviço
            <li>No final dessa apresentação, deve realizar um teste sobre o assunto abordado com 10 perguntas</li>
            <li>O teste tem uma nota mínima para aprovação, sendo possível refazer caso não atinja</li>
            <li>Ao ser aprovado recebera um termo de comprossimo, que deve trazer assinado entregar ao chegar na empresa</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem2} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>O uso dos <span>EPI’S</span> abaixo, são obrigatórios dentro da Fábrica.</h2>
          <ul>Sapato de Segurança
            <li>Eles protegem os pés do trabalhador contra riscos físicos, riscos químicos, riscos biológicos e acidentes variados.</li>
            <li>O uso desse tipo de calçado é obrigatório em ambientes de trabalho.</li>
          </ul>
          <ul>Protetor auriculares
            <li>Os protetores auditivos ou auriculares são importantes para suavizar os níveis de ruídos que estão acima do limite de tolerância que a norma estabelece.</li>
            <li>Além disso, podem servir também para amenizar desconforto acústicos e/ou proteger de frio e da água.</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem3} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Respeite a coleta seletiva e o meio ambiente</h2>
          <p>A coleta seletiva é fundamental para preservar o meio ambiente, reduzir a extração de recursos naturais, diminuir a poluição do solo, da água e do ar e evitar a degradação ambiental.</p>
          <p>Ao encaminhar materiais recicláveis para a reciclagem, pode-se reaproveitá-los na produção de novos produtos e reduzir a quantidade de lixo enviada para os aterros sanitários.</p>
          <p>É importante incentivar a coleta seletiva em todos os lugares para garantir um ambiente mais saudável e sustentável para as atuais e futuras gerações.</p>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem4} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Aqui utilizamos a filosofia do 5S nas atividades diárias</h2>
          <p>A filosofia do 5S é um conjunto de práticas que visam a organização e a melhoria contínua dos ambientes de trabalho, promovendo um ambiente mais limpo, seguro e produtivo.</p>
          <ul>Os cinco sensos correspondem às palavras japonesas
            <li>Seiri (utilização)</li>
            <li>Seiton (organização)</li>
            <li>Seiso (limpeza)</li>
            <li>Seiketsu (padronização)</li>
            <li>Shitsuke (disciplina)</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem5} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Durante a Execução dos Trabalhos</h2>
          <ul>
            <li>Utilizar os EPI’S  obrigatórios dentro da fabrica e os de acordo com a tarefa a ser executa;</li>
            <li>Comunicar qualquer incidente e/ou acidente ocorrido no trabalho, para fins de registro, investigação e realização de medidas preventivas;</li>
            <li>Na realização de trabalhos onde haverá resíduos diversos, informar a CIPA, que irá orientar sobre o descarte correto;</li>
            <li>Depositar adequadamente os resíduos e somente em locais identificados;</li>
            <li>As áreas de trabalho devem se manter limpas e organizadas.</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem7} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Práticas Proibidas</h2>
          <ul>
            <li>O uso de bebidas alcóolicas ou drogas ilícitas por qualquer empregado durante o horário de trabalho;</li>
            <li>O uso de calçados abertos, tipo chinelo para execução dos trabalhos;</li>
            <li>Utilizar equipamentos e máquinas de forma indevida;</li>
            <li>Ocorrência de insultos, brigas ou desordens;</li>
            <li>Fotografar e filmar só é permitido com autorização antecipada.</li>
          </ul>
          <ul>Principais Causas de Acidente
            <li>Falta de Planejamento;</li>
            <li>Falta de uso de EPI;</li>
            <li>Excesso de Confiança;</li>
            <li>Perda do Interesse;</li>
            <li>Falta de Treinamento;</li>
            <li>Problemas de ordem pessoal / social.</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem8} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>O que fazer?</h2>
          <ul> Situações de emergência.
            <li>Manter a calma e evitar o pânico;</li>
            <li>Acionar a equipe de Brigadistas;</li>
            <li>Em caso de incêndio, acompanhar a equipe de brigada de incêndio até o ponto de encontro;</li>
            <li>Em caso de mal súbito, informar um brigadista;</li>
          </ul>
          <ul> Aconteceu um acidente.
            <li>O acidente deve ser relatado imediatamente ao supervisor responsável pelo trabalho;</li>
            <li>O acidentado deverá se encaminhado ao hospital, caso necessário, outas;</li>
            <li>Em caso de incêndio, acompanhar a equipe de brigada de incêndio até o ponto de encontro;</li>
            <li>Em caso de mal súbito, informar um brigadista;</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem9} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Práticas Seguras</h2>
          <ol>
            <li>Treinamento e capacitação: fornecer treinamento adequado aos colaboradores sobre as melhores práticas de trabalho e segurança no local é importante para manter um ambiente de trabalho seguro.</li>
            <li>Uso de equipamentos de proteção individual (EPIs): utilizar os EPIs adequados para cada tarefa, como capacete, óculos, luvas, calçados de segurança, entre outros.</li>
            <li>Prevenção de quedas: certificar-se de que todas as áreas de trabalho estejam limpas, organizadas e sem obstáculos que possam causar quedas.</li>
            <li>Atenção à postura: incentivar uma boa postura durante o trabalho pode prevenir dores musculares, e demais danos à saúde corporal.</li>
            <li>Limpeza e organização: manter o local de trabalho limpo e organizado reduz o risco de acidentes, como tropeços ou quedas.</li>
          </ol>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem10} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Trabalho em Instalações Elétricas</h2>
          <ol>
            <li>Verificar as condições das ferramentas e equipamentos elétricos antes de usar.</li>
            <li>Desligar o fornecimento de energia elétrica à área onde você estiver trabalhando antes de iniciar qualquer trabalho.</li>
            <li>Utilizar Equipamentos de Proteção Individual (EPIs) adequados, como luvas isolantes, capacete, óculos de proteção, entre outros.</li>
            <li>Seguir as normas de segurança estabelecidas pela empresa ou instituição onde se trabalha.</li>
            <li>Nunca toque em fios elétricos expostos ou componentes elétricos sem verificar sua segurança primeiro.</li>
            <li>Manter a distância segura de quaisquer fontes de eletricidade ativa e evitar contato com água quando operar equipamentos elétricos.</li>
            <li>Somente profissionais autorizados, em consonância coma NR-10, poderão realizar trabalhos em instalações elétricas.</li>
          </ol>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem11} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Trabalhos em Altura</h2>
          <p>O trabalho em altura apresenta riscos significativos e deve ser realizado com extrema precaução. Algumas das medidas de segurança que devem ser tomadas são:</p>
          <ul>
            <li>Considera-se trabalho em altura toda atividade executada acima de 2,00 (dois metros) do nível inferior, onde haja risco de queda;</li>
            <li>Todos os trabalhadores que tiveram de executar trabalhos em altura devem receber treinamento especifico, conforme item 35.3 da NR-35;</li>
            <li>Utilizar os EPI’S necessários ao desenvolvimento das atividades, como o sinto de segurança;</li>
            <li>Deve-se realizar isolamento e sinalização da área durante atividade;</li>
            <li>Deverá ser verificado junto a CIPA, qual a melhor forma de ancoragem, antes de iniciar o trabalho.</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem12} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
        <h2>Trabalhos a quente (chama aberta)</h2>
          <ul>
            <li>Se o trabalho a quente for realizado próximo a paredes, divisórias, forros ou telhados de construção combustível, eles devem se protegidos por cobertores resistentes ao fogo;</li>
            <li>Utilizar os EPI’S necessários ao desenvolvimento das atividades;</li>
            <li>Fazer isolamento da área de trabalho (fitas zebradas, biombos, placas, etc.) de modo que fique claro a execução do serviço naquele local;</li>
            <li>Proteger bandejas de cabos elétricos e painéis caso haja possibilidade de ser atingidas por fagulhas;</li>
            <li>A área somente seja liberada após constatação da ausência de atividades incompatíveis com o trabalho quente.</li>
          </ul>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem13} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
        <h2>Recomendações Gerais</h2>
          <p>Quando constatado o não cumprimento das normas de segurança, ou na evidência de condições que exponham pessoas a risco grave e iminente, a CIPA através de seus representantes, reserva-se o direito de paralisação / interdição imediata da atividade, até que sejam tomas as medidas cabíveis à regularização. Independente do cumprimento do cronograma da atividade / serviço em execução.</p>
          <ul>
            <li>Use o banheiro de forma adequada, mantendo-o sempre em condições de uso;</li>
            <li>Não suba no vaso sanitário, pois ele pode quebrar, causando um grave acidente;</li>
          </ul>
          <p>“Enquanto estiveram em nossa empresa, seja visitando ou trabalhando, somos responsáveis por sua segurança e bem estar”</p>

        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={onix} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeybgquqvFEefwKjkE_0hFeyZujphMgx72580kwg01ktCvhew/viewform?embedded=true" width="90%" height="90%" frameborder="0" marginheight="0" marginwidth="0" title="Teste">Carregando…</iframe>
        </DivText>
      </Item>
    </Carousel>
  )

}

export default CarouselItens