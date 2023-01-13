import { Link } from "react-router-dom";

const PoliticaNews = ({ politicaNews }) => {
    return <>
        <div className="sectionTitle">
            <h2>POLÍTICA</h2>
            <aside>
                <div>
                    <hr id="hrTitleSection1" />
                    <hr id="hrTitleSection2" />
                </div>
            </aside>
        </div>
        <div className="cards">
            {politicaNews.map((noticia) => {
                return <div key={noticia.id} className="card">
                    <Link to={"/noticia/" + noticia.id}>
                        <div>
                            <img src={noticia.img} alt="" />
                        </div>
                        <div>
                            <h3>{noticia.headline}</h3>
                        </div>
                    </Link>
                </div>
            })}
        </div>
    </>
}

export default PoliticaNews