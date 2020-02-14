import React from "react";
const PlayerCard = props => {
  const { name, rank, team } = props.player;
  return (
    <div className="card-wrapper">
      {/* <p>{props.name}</p>
      <p>Rank: {props.rank}</p>
      <p>Team: {props.team}</p> */}

      {/* <p>{props.player.name}</p>
      <p>Rank: {props.player.rank}</p>
      <p>Team: {props.player.team}</p> */}

      <p>{name}</p>
      <p>{rank}</p>
      <p>{team}</p>
    </div>
  );
};
export default PlayerCard;
