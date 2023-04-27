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
          <p>Utilize as setas do site para navegar no conteúdo e ao final deve realizar o preenchimento do formulário que é uma avaliação do conteúdo lido aqui no site.</p>
          <strong>Antes de realizar a visita para executar o serviço</strong>
          <ul>
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
          <ul>Sapado de Segurança
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
          <ul>Confira abaixo importantes itens que envolvem a coleta seletiva:
            <li>A coleta seletiva auxilia na reciclagem de diversos tipos de materiais que seriam descartados em lixões e aterros</li>
            <li>Os materiais são separados por tipos (plástico, papel, vidro, metais, orgânico, etc), sendo, cada resíduo, destinado a um processo independente de reciclagem</li>
            <li>Sem essa separação e coleta seletiva não é possível reciclar nenhum material que é recolhido pelo serviço de coleta de lixo urbano comum das prefeituras</li>
          </ul>
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
          <p>Através da aplicação desses conceitos, busca-se otimizar o uso dos recursos disponíveis, reduzir desperdícios, eliminar atividades desnecessárias e incentivar a cultura da qualidade e da excelência.</p>
          <p>A filosofia do 5S é uma metodologia muito utilizada em empresas, mas pode ser aplicada também em residências e outros espaços, com objetivo de aprimorar a organização e a produtividade do local.</p>
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
          <p>É obrigatório a utilização de EPI’S e outros dispositivos de segurança, durante toda a atividade.</p>
          <p>“Lembre-se: Segurança e Qualidade são nossos maiores objetivos!”</p>
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
          <p>“Todos somos responsáveis pela Segurança do Trabalho”</p>
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
          <p>“Todos somos responsáveis pela Segurança do Trabalho”.</p>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem9} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Práticas Seguras</h2>
          <p>A segurança no trabalho é fundamental para garantir um ambiente de trabalho saudável e prevenir acidentes ou lesões que possam afetar a saúde e bem-estar dos trabalhadores. Algumas práticas seguras que podem ser implementadas em geral incluem:</p>
          <ol>
            <li>Treinamento e capacitação: fornecer treinamento adequado aos colaboradores sobre as melhores práticas de trabalho e segurança no local é importante para manter um ambiente de trabalho seguro.</li>
            <li>Uso de equipamentos de proteção individual (EPIs): utilizar os EPIs adequados para cada tarefa, como capacete, óculos, luvas, calçados de segurança, entre outros.</li>
            <li>Prevenção de quedas: certificar-se de que todas as áreas de trabalho estejam limpas, organizadas e sem obstáculos que possam causar quedas.</li>
            <li>Atenção à postura: incentivar uma boa postura durante o trabalho pode prevenir dores musculares, e demais danos à saúde corporal.</li>
            <li>Limpeza e organização: manter o local de trabalho limpo e organizado reduz o risco de acidentes, como tropeços ou quedas.</li>
            <li>Identificação de riscos: é importante identificar os riscos associados às atividades realizadas na empresa e tomar medidas preventivas para elimina-los ou minimizá-los.</li>
            <li>canal de comunicação aberto e transparente entre líderes e colaboradores para que eles tenham liberdade para reportar quaisquer situações de risco.</li>
            <li>Procedimentos de emergência: ter planos de emergência em caso de acidentes ou incidentes pode ajudar a minimizar os riscos e limitar danos.</li>
          </ol>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem10} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
          <h2>Trabalho em Instalações Elétricas</h2>
          <p>Trabalhar em instalações elétricas pode ser perigoso se medidas de segurança adequadas não forem tomadas. Algumas práticas seguras que devem ser adotadas ao trabalhar com instalações elétricas incluem, mas não se limitam a:</p>
          <ol>
            <li>Verificar as condições das ferramentas e equipamentos elétricos antes de usar.</li>
            <li>Desligar o fornecimento de energia elétrica à área onde você estiver trabalhando antes de iniciar qualquer trabalho.</li>
            <li>Utilizar Equipamentos de Proteção Individual (EPIs) adequados, como luvas isolantes, capacete, óculos de proteção, entre outros.</li>
            <li>Seguir as normas de segurança estabelecidas pela empresa ou instituição onde se trabalha.</li>
            <li>Identificar os riscos elétricos no local e seguir os procedimentos de segurança estabelecidos para minimizar esses riscos.</li>
            <li>Nunca toque em fios elétricos expostos ou componentes elétricos sem verificar sua segurança primeiro.</li>
            <li>Manter a distância segura de quaisquer fontes de eletricidade ativa e evitar contato com água quando operar equipamentos elétricos.</li>
            <li>Não sobrecarregar tomadas elétricas.</li>
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
          <p>“Todos somos responsáveis pela Segurança do Trabalho”.</p>
        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem12} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
        <h2>Trabalhos a quente (chama aberta)</h2>
          <p>Trabalhos a quente são atividades que envolvem fontes de calor, como soldagem, corte e esmerilhamento, e que podem gerar faíscas, chamas ou altas temperaturas. Essas atividades apresentam riscos significativos de incêndio e explosões, por isso é fundamental seguir as medidas de segurança adequadas.</p>
          <ul>
            <li>Se o trabalho a quente for realizado próximo a paredes, divisórias, forros ou telhados de construção combustível, eles devem se protegidos por cobertores resistentes ao fogo;</li>
            <li>Utilizar os EPI’S necessários ao desenvolvimento das atividades;</li>
            <li>Fazer isolamento da área de trabalho (fitas zebradas, biombos, placas, etc.) de modo que fique claro a execução do serviço naquele local;</li>
            <li>Proteger bandejas de cabos elétricos e painéis caso haja possibilidade de ser atingidas por fagulhas;</li>
            <li>A área somente seja liberada após constatação da ausência de atividades incompatíveis com o trabalho quente.</li>
          </ul>
          <p>“Todos somos responsáveis pela Segurança do Trabalho”.</p>
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
            <li>nca suba no vaso sanitário, pois ele pode quebrar, causando um grave acidente;</li>
          </ul>
          <p>“Enquanto estiveram em nossa empresa, seja visitando ou trabalhando, somos responsáveis por sua segurança e bem estar”</p>

        </DivText>
      </Item>
      <Item>
        <DivImage>
          <img src={imagem1} alt="Imagem de segurança" />
        </DivImage>
        <DivText>
        <h2>Trabalhos em Altura</h2>
          <p></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </DivText>
      </Item>
    </Carousel>
  )

}

export default CarouselItens