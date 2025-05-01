import { Link } from "react-router-dom";

export default function Trending({name,src,link,overview}){

    return(         
        <Link to={link} id={name} className="tile" style={{backgroundImage: `url(${src})`}}>
            <h2 className="tileTitle">{name}</h2>
            <div className="overview">
                <h2 className="overviewTitle">{name}</h2>
                <h3 className="overviewSubtitle">Overview</h3>
                <p className="overviewPara">{overview}</p>
            </div>
        </Link>

    )

}

