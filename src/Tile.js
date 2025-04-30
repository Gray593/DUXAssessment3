import { Link } from "react-router-dom";

export default function Trending({name,src,link,overview}){

    return(
        <div className="tile" id={name}>
            <Link to={link}>
                <img src={src}/>
                    <h2 className= "tileTitle">
                        {name}
                    </h2>
                    <div className="overview">
                        <p className="overviewPara">
                            {overview}
                        </p>
                    </div>
                
            </Link>
        </div>
    )

}

