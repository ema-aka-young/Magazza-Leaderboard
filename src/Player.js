import React from "react";

const Player = ({
  id,
  name,
  scores,
  totalPoints,
  wins,
  updateScore,
  ranking,
}) => {
  const renderRanking = () => {
    // If it's one of the top three players, display an image
    if (ranking && ranking <= 3) {
      const images = ["rank1.png", "rank2.png", "rank3.png"];
      const imageSrc = images[ranking - 1];
      return (
        <img src={imageSrc} alt={`Rank ${ranking}`} className="medal-image" />
      );
    }
    return ranking;
  };

  return (
    <tr>
      <td className="ranking-cell">{renderRanking()}</td>
      <td>{name}</td>
      {scores.map((score, index) => (
        <td key={index}>{score}</td>
      ))}
      <td>{totalPoints}</td>
      <td>{wins}</td>
    </tr>
  );
};

export default Player;
