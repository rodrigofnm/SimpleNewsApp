import DestaquesSlider from './components/mainpage/DestaquesSlider.js';
import DesportoNews from './components/mainpage/DesportoNews.js';
import EconomiaNews from './components/mainpage/EconomiaNews.js';
import PoliticaNews from './components/mainpage/PoliticaNews.js';

const MainPage = ({ destaques, desportoNews, politicaNews, economiaNews }) => {
    return <>
        <section id='sliderSection' className='sliderSection'>
            <DestaquesSlider destaques={destaques} />
        </section>
        <section id='desportoSection' className='desportoSection'>
            <DesportoNews desportoNews={desportoNews} />
        </section>
        <section id='politicaSection' className='desportoSection'>
            <PoliticaNews politicaNews={politicaNews} />
        </section>
        <section id='economiaSection' className='desportoSection'>
            <EconomiaNews economiaNews={economiaNews} />
        </section>
    </>
}

export default MainPage