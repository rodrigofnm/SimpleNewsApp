import './App.css';
import mainLogo from './img/logotipoApp.png';
import MainPage from './MainPage.js';
import NewsPage from './components/NewsPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  const noticia1 = {
    id: 0,
    destaque: true,
    type: 'economia',
    img: require('./img/imgNoticias/tap.jpg'),
    headline: 'TAP Lamenta Greve e diz que está a fazer tudo para um acordo com tripulantes',
    thumbnail: 'A TAP disse esta segunda-feira que respeita e lamenta a decisão do Sindicato Nacional do Pessoal de Voo da Aviação Civil (SNPVAC) em avançar com uma greve este mês',
    description: "O SNPVAC vai avançar com um pré-aviso de greve ao trabalho na TAP por sete dias, entre 25 e 31 de janeiro, de acordo com uma nota enviada aos associados. 'Respeitamos e lamentamos a decisão do SNPVAC e continuamos a fazer todos os possíveis para chegar a um acordo que sirva os melhores interesses do país, dos nossos clientes, dos tripulantes de cabina e da TAP', disse fonte oficial da transportadora aérea. Segundo a nota do sindicato, 'dando cumprimento ao deliberado na assembleia-geral de emergência de dia 06 de dezembro, ponto 2', que definiu a 'marcação de um mínimo de cinco dias de greve a realizar até dia 31 de janeiro em datas definidas pela direção e comunicadas aos associados 24 horas antes da entrada do pré-aviso de greve', o presidente da mesa da assembleia-geral (AG) da estrutura sindical disse que 'foi informado pela direção do SNPVAC que dará amanhã entrada um pré-aviso de 7 (sete) dias de greve, correspondente aos dias 25 a 31 de janeiro, inclusive'."
  }
  const noticia2 = {
    id: 1,
    destaque: false,
    type: 'economia',
    img: require('./img/imgNoticias/transitarios.jpg'),
    headline: 'Transitários estimam que greve custe entre 100 a 150 milhões por dia',
    thumbnail: 'A Associação dos Transitários de Portugal (APAT) estima que a greve dos trabalhadores das administrações portuárias possa ter um impacto entre 100 e 150 milhões de euros por dia no comércio internacional. ',
    description: 'Assim, "a APAT apela a que se chegue a um entendimento o mais rapidamente possível, pois para além dos prejuízos causados diretamente às nossas empresas e às pessoas, causa igualmente prejuízos à imagem de Portugal e dos portos portugueses", referiu. De acordo com a associação, "ainda que não seja possível afirmar com elevado grau de certeza, estimamos que uma greve com estas características e dimensão poderá ter um impacto no comércio internacional de cerca de 100 a 150 milhões de euros/dia no país".'
  }
  const noticia3 = {
    id: 2,
    destaque: true,
    type: 'desporto',
    img: require('./img/imgNoticias/felix.jpg'),
    headline: 'João Félix estará em Londres para assinar pelo Chelsea',
    thumbnail: 'A estação pública espanhola "TVE" revelou que João Félix está na capital inglesa para fechar o acordo que o levará a jogar no Chelsea até ao final da temporada, por empréstimo do Atlético de Madrid.',
    description: 'Estará perto do fim um dos dossiês mais complexos da atual janela de mercado. João Félix vai mesmo deixar o plantel do Atlético de Madrid, mudando-se, até ao final da época, para o Chelsea, atual 10.º classificado na Liga inglesa. A relação difícil com o treinador do Atlético, Diego Simeone, fez com que Félix tenha perdido preponderância nas escolhas do técnico argentino, sendo esta a solução encontrada pelo clube madrileno para resolver um problema no plantel e, ao mesmo tempo, procurar valorizar um importante ativo. Na primeira metade da temporada, João Félix, de 23 anos, participou em 20 partidas dos "colchoneros", nas quais apontou um total de cinco golos.'
  }
  const noticia4 = {
    id: 3,
    destaque: false,
    type: 'economia',
    img: require('./img/imgNoticias/gasolina.jpg'),
    headline: 'Gasolina mais cara e gasóleo mais barato',
    thumbnail: 'O preço médio de venda da gasolina 95 simples em Portugal foi no quarto trimestre de 2022 superior em 6,1 cêntimos por litro aos valores médios na UE27, enquanto no gasóleo simples foi inferior em 6,0 cêntimos, segundos dados da ERSE.',
    description: "De acordo com o boletim de preços da UE-27 (União Europeia a 27) relativo aos combustíveis, divulgado esta quarta-feira pela Entidade Reguladora dos Serviços Energéticos (ERSE), na gasolina 95 simples, 'no quarto trimestre de 2022 Portugal apresentou um preço médio de venda [PMV] e um preço médio antes de impostos superiores aos valores médios verificados na UE-27, na ordem dos 6,1 cent/l [cêntimos por litro] e 4,0 cent/l, respetivamente'.'A carga fiscal no preço médio de venda da gasolina 95 simples foi, em Portugal, no quarto trimestre, da ordem dos 47,9%, ligeiramente inferior à média registada na UE-27 (48,0%) e superior à de Espanha (45,1%)', precisa."
  }
  const noticia5 = {
    id: 4,
    destaque: false,
    type: 'politica',
    img: require('./img/imgNoticias/governo.jpg'),
    headline: 'TAP: Costa considera que Alexandra Reis violou estatuto do gestor público',
    thumbnail: 'Primeiro-ministro considerou esta quarta-feira que a ex-secretária de Estado do Tesouro Alexandra Reis violou o estatuto do gestor público quando foi nomeada para a Navegação Aérea de Portugal (NAV) e não devolveu parte da indemnização que tinha recebido da TAP. ',
    description: '"Não tenho dúvidas de que há pelo menos uma parte em que houve uma violação do estatuto do gestor público - que foi quando a senhora engenheira foi nomeada para a NAV [Navegação Aérea de Portugal] e não procedeu à reposição de parte da indemnização que tinha recebido, admitindo que a indemnização a recebeu legalmente", sustentou António Costa. O primeiro-ministro falava no debate sobre política geral que decorre na Assembleia da República depois de ter sido questionado pela deputada única do Pessoas-Animais-Natureza (PAN), Inês Sousa Real, sobre se ponderava rever o estatuto do gestor público "sempre que haja intervenção de dinheiros públicos como foi o caso da TAP".'
  }
  const noticia6 = {
    id: 5,
    destaque: true,
    type: 'politica',
    img: require('./img/imgNoticias/marcelo.jpg'),
    headline: 'Eutanásia. Presidente do parlamento da Madeira admite levar lei ao TC',
    thumbnail: 'Belém não deu seguimento ao pedido dos presidentes das assembleias regionais dos Açores e Madeira. José Manuel Rodrigues admite pedir fiscalização ao Constitucional se a lei entrar em vigor. ',
    description: 'Marcelo Rebelo de Sousa não deu cobertura ao apelo dos presidentes dos parlamentos dos Açores e Madeira, que se queixam de ter sido ignorados pela Assembleia da República no diploma da eutanásia, mas José Manuel Rodrigues, que lidera a Assembleia Legislativa madeirense, admite avançar a título próprio e pedir a fiscalização sucessiva do diploma, caso a lei venha a entrar em vigor. Os presidentes das assembleias legislativas regionais são uma das entidades que têm a prerrogativa de pedir ao Tribunal Constitucional (TC) a fiscalização sucessiva da constitucionalidade de uma lei. De acordo com a Constituição, isto pode ser feito quando o pedido alegar "violação dos direitos das regiões autónomas" ou o "pedido de declaração de ilegalidade se fundar em violação" do estatuto político-administrativo das duas regiões.'
  }
  const noticia7 = {
    id: 6,
    destaque: true,
    type: 'desporto',
    img: require('./img/imgNoticias/sergio.jpg'),
    headline: 'Sérgio Conceição: "Satisfeito pelos 300 jogos mas são apenas números"',
    thumbnail: 'O treinador do F. C. Porto mostrou-se satisfeito por chegar aos 300 jogos ao serviço do F. C. Porto, naquele que valeu a eliminação do Arouca da Taça de Portugal (4-0) e deixou os dragões nos quartos de final da prova. ',
    description: '"Tenho de agradecer ao nosso presidente porque nem sempre foi um trajeto fácil e só a confiança dele me permite estar aqui feliz por esses números. Poderíamos ter mais uma ou outra vitória e tenho de agradecer a toda a gente que nos ajudou: jogadores e staff. Estamos satisfeitos por esse registo mas são apenas números. Olho para os nossos objetivos e estamos em todas as frentes. Isso é que importa. Espero que no final estejamos todos felizes", afirmou Sérgio Conceição. O técnico analisou a exibição de Toni Martínez, que fez um hat-trick, salientando que quer este tipo de compromisso com a equipa da parte de todos os jogadores. Sobre se a exibição do espanhol o obriga a dar-lhe a titularidade no próximo encontro, Sérgio Conceição respondeu no seu estilo habitual.'
  }
  const noticia8 = {
    id: 7,
    destaque: true,
    type: 'economia',
    img: require('./img/imgNoticias/banco.jpg'),
    headline: 'Bancários manifestam-se em Lisboa contra proposta de aumentos de 2,5%',
    thumbnail: 'O Sindicato Nacional dos Quadros e Técnicos Bancários (SNQTB) realiza esta quinta-feira em Lisboa várias manifestações em frente a alguns bancos contra a proposta "indigna" de aumentos salariais de 2,5% para 2023 apresentada pelas instituições de crédito. ',
    description: 'Segundo o presidente do SNQTB, Paulo Gonçalves Marques, o protesto visa "chamar a atenção para a indignidade da contraproposta do grupo negocial das instituições de crédito" que, perante a proposta do sindicato de aumentos de 6,25%, responderam "de forma indigna" com um valor de 2,5%. "Esta proposta não tem em conta tudo aquilo que nós argumentámos, nomeadamente os ganhos de produtividade, a rendibilidade dos capitais próprios, os níveis de imparidades e as demais condições de exploração das empresas bancárias estão em níveis recorde pela positiva dos últimos 20 anos", afirmou Paulo Gonçalves Marcos à Lusa. Em causa está também o facto de haver "cerca de 50 mil bancários que foram injustamente não abrangidos" pela medida do Governo de pagar meia pensão aos reformados.'
  }
  const noticia9 = {
    id: 8,
    destaque: false,
    type: 'desporto',
    img: require('./img/imgNoticias/selecao.jpg'),
    headline: 'Seleção nacional quer fazer história no Mundial',
    thumbnail: 'O selecionador nacional, Paulo Pereira, deu o mote e os jogadores estão empenhados em cumprir a meta de levar Portugal à melhor classificação de sempre em Mundiais de andebol, na Suécia e na Polónia. ',
    description: 'À partida para a Suécia, onde Portugal disputará o Grupo D da fase final do Mundial de andebol, juntamente com Islândia, Coreia do Sul e Hungria, Paulo Pereira apontou como objetivo melhorar o 10.º lugar alcançado há dois anos, naquela que foi a melhor classificação lusa num Campeonato do Mundo. O desejo é partilhado pelos jogadores, que se mostram confiantes em conseguir um resultado importante no torneio, que arranca na próxima quarta-feira.'
  }

  const allNews = [noticia1, noticia2, noticia3, noticia4, noticia5, noticia6, noticia7, noticia8, noticia9]

  var destaques = [], desportoNews = [], economiaNews = [], politicaNews = []

  for (let count = 0, n = 0; n < allNews.length; n++) {
    if (allNews[n].destaque) {
      destaques[count] = allNews[n]
      count++
    }
    switch (allNews[n].type) {
      case 'desporto': desportoNews.push(allNews[n])
        break
      case 'economia': economiaNews.push(allNews[n])
        break
      case 'politica': politicaNews.push(allNews[n])
        break
      default: console.log("There is a problem with the type of news.")
    }
  }

  return (<>
    <header>
      <div>
        <img className='mainLogo' src={mainLogo} alt='' />
        <h1>RM</h1><h3>NOTÍCIAS</h3>
      </div>
      <div>
        <button className='headerButton' onClick={() => { document.querySelector('#sliderSection').scrollIntoView({ behavior: 'smooth' }) }}>Destaques</button>
        <button className='headerButton' onClick={() => { document.querySelector('#desportoSection').scrollIntoView({ behavior: 'smooth' }) }}>Desporto</button>
        <button className='headerButton' onClick={() => { document.querySelector('#politicaSection').scrollIntoView({ behavior: 'smooth' }) }}>Política</button>
        <button className='headerButton' onClick={() => { document.querySelector('#economiaSection').scrollIntoView({ behavior: 'smooth' }) }}>Economia</button>
      </div>
    </header>
    <hr id='firstHr'></hr>
    <hr id='secondHr'></hr>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage destaques={destaques} desportoNews={desportoNews} politicaNews={politicaNews} economiaNews={economiaNews} />} />
        <Route path="/noticia/:id" element={<NewsPage allNews={allNews} />} />
      </Routes>
    </BrowserRouter>

  </>)
}

export default App;