import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const DestaquesSlider = ({ destaques }) => {

    const [idMiddleDestaque, setIdMiddleDestaque] = useState(1)

    const prevDestaqueBtn = () => {
        if (idMiddleDestaque > 1) {
            setIdMiddleDestaque(idMiddleDestaque - 1)
        }
    }

    const nextDestaqueBtn = () => {
        if (idMiddleDestaque < destaques.length - 2) {
            setIdMiddleDestaque(idMiddleDestaque + 1)
            console.log(idMiddleDestaque + "prev")
        }
    }

    useEffect(() => {
        if (idMiddleDestaque === 1) {
            document.querySelector('#prevSvg').classList.add('removeDisplay')
        } else if (document.querySelector('#prevSvg').classList.contains('removeDisplay')) {
            (document.querySelector('#prevSvg').classList.remove('removeDisplay'))
        }

        if (idMiddleDestaque === destaques.length - 2) {
            document.querySelector('#nextSvg').classList.add('removeDisplay')
        } else if (document.querySelector('#nextSvg').classList.contains('removeDisplay')) {
            (document.querySelector('#nextSvg').classList.remove('removeDisplay'))
        }
    })

    return <>
        <div className="slider">

            <button className="prevBtn" onClick={prevDestaqueBtn}>
                <svg id="prevSvg" className="" viewBox="0 0 96 96" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" /></svg>
            </button>
            <button className="nextBtn" onClick={nextDestaqueBtn}>
                <svg id="nextSvg" viewBox="0 0 96 96" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg>
            </button>

            <div id="newsDestaque" key={destaques[idMiddleDestaque - 1].id}>
                <Link to={"/noticia/" + destaques[idMiddleDestaque - 1].id} className="linkCss">
                    <img alt="" src={destaques[idMiddleDestaque - 1].img}></img>
                    <h2>{destaques[idMiddleDestaque - 1].headline}</h2>
                    <aside>
                        <p>Saber mais</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 19 19"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
                    </aside>
                    <div></div>
                </Link>
            </div>

            <div id="newsDestaque" key={destaques[idMiddleDestaque].id}>
                <Link to={"/noticia/" + destaques[idMiddleDestaque].id} className="linkCss">
                    <img alt="" src={destaques[idMiddleDestaque].img}></img>
                    <h2>{destaques[idMiddleDestaque].headline}</h2>
                    <aside>
                        <p>Saber mais</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 19 19"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
                    </aside>
                    <div></div>
                </Link>
            </div>
            <div id="newsDestaque" key={destaques[idMiddleDestaque + 1].id}>
                <Link to={"/noticia/" + destaques[idMiddleDestaque + 1].id} className="linkCss">
                    <img alt="" src={destaques[idMiddleDestaque + 1].img}></img>
                    <h2>{destaques[idMiddleDestaque + 1].headline}</h2>
                    <aside>
                        <p>Saber mais</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 19 19"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>
                    </aside>
                    <div></div>
                </Link>
            </div>
        </div>
    </>
}

export default DestaquesSlider;