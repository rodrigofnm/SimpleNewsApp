import { useParams, Link } from "react-router-dom";

const NewsPage = ({ allNews }) => {

    const { id } = useParams();

    const showDescription = () => {
        document.querySelector(".divBtn").classList.add("displayNone")
        document.querySelector(".fullDescription").classList.add("heightDesc")
    }

    return <>
        <div className="descPage">
            <img id="banner" src={allNews[id].img} />
            <aside></aside>
            <div className="visibleInfo">
                <Link to={"/"}>
                    <div className="goBackDiv">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                        <p>VOLTAR</p>
                    </div>
                </Link>
                <h1>{allNews[id].headline}</h1>
                <div>
                    <h3>{allNews[id].thumbnail}</h3>
                </div>
                <div className="divBtn">
                    <button onClick={showDescription}>Continuar a Ler</button>
                </div>
                <div className="fullDescription">
                    <p>{allNews[id].description}</p>
                </div>
            </div>
        </div>
    </>
}

export default NewsPage