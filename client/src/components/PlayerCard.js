import React from "react";

const PlayerCard = (props) => {
    console.log(props);

    return(
        <div className="card-wrapper">
            {/* <h1>Player goes here</h1> */}
            <h1 className="card-name">{props.footballer.name}</h1>
            <div className="card-row">
                <h4 className="card-rank">Ranking: {props.footballer.rank}</h4>
                <h2 className="card-team">Team: {props.footballer.team}</h2>
            </div>
        </div>
    )
}

export default PlayerCard;