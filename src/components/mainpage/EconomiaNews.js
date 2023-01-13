import { Link } from "react-router-dom";

const EconomiaNews = ({ economiaNews }) => {
    return <>
        <div className="sectionTitle">
            <h2>ECONOMIA</h2>
            <aside>
                <div>
                    <hr id="hrTitleSection1" />
                    <hr id="hrTitleSection2" />
                </div>
            </aside>
        </div>
        <div className="cards">
            {economiaNews.map((noticia) => {
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

export default EconomiaNews