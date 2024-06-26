import React, { useState } from "react";
import LogoForCompetition from "./LogoForCompetition";
import Player from "./Player";

const Leaderboard = () => {
  const initialPlayers = [
    {
      id: 1,
      name: "Pi",
      scores: [0, 3, 0, 4, 9, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 0,
    },
    {
      id: 2,
      name: "Stecca",
      scores: [5, 7, 0, 4, 5, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 1,
    },
    {
      id: 3,
      name: "Frinzi",
      scores: [0, 7, 5, 8, 2, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 1,
    },
    {
      id: 4,
      name: "Maggi",
      scores: [5, 10, 5, 10, 6, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 4,
    },
    {
      id: 5,
      name: "Crazy",
      scores: [0, 10, 0, 9, 7, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 1,
    },
    {
      id: 6,
      name: "Muriz",
      scores: [0, 5, 5, 6, 1, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 1,
    },
    {
      id: 7,
      name: "Iminz",
      scores: [1, 2, 5, 6, 3, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 1,
    },
    {
      id: 8,
      name: "Giova",
      scores: [5, 10, 5, 7, 8, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 3,
    },
    {
      id: 9,
      name: "Doc",
      scores: [5, 1, 0, 4, 4, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 1,
    },
    {
      id: 10,
      name: "AmicoDelMagazza",
      scores: [5, 1, 0, 1, 10, 0, 0, 0, 0, 0],
      totalPoints: 0,
      wins: 2,
    },
  ];

  initialPlayers.forEach((player) => {
    player.totalPoints = player.scores.reduce((a, b) => a + b, 0);
  });

  const calculateRanking = (players) => {
    const sortedPlayers = [...players].sort(
      (a, b) => b.totalPoints - a.totalPoints
    );

    return sortedPlayers.map((player, index) => ({
      ...player,
      ranking: index + 1,
    }));
  };

  const [players, setPlayers] = useState(calculateRanking(initialPlayers));
  const updateScore = (id, gameIndex, newScore) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = prevPlayers.map((player) =>
        player.id === id
          ? {
              ...player,
              scores: player.scores.map((score, index) =>
                index === gameIndex ? newScore : score
              ),
              totalPoints:
                player.totalPoints + newScore - player.scores[gameIndex],
            }
          : player
      );

      return calculateRanking(updatedPlayers);
    });
  };

  return (
    <div>
      <div className="header">
        <img className="logo-left" src="olympic.png" alt="Left Logo" />
        <h1>MAGAZZIADI 2023/24</h1>
        <img className="logo-right" src="olympic.png" alt="Right Logo" />
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>
              <LogoForCompetition imageSrc="calcetto.png" data-alt="Calcetto" />
            </th>
            <th>
              <LogoForCompetition imageSrc="draft.png" data-alt="Draft" />
            </th>
            <th>
              <LogoForCompetition imageSrc="lol.png" data-alt="" />
            </th>
            <th>
              <LogoForCompetition imageSrc="tft.webp" data-alt="" />
            </th>
            <th>
              <LogoForCompetition imageSrc="kart.png" data-alt="" />
            </th>
            <th>
              <LogoForCompetition imageSrc="fifa.png" data-alt="" />
            </th>
            <th>
              <LogoForCompetition imageSrc="tbd.png" data-alt="" />
            </th>
            <th>
              <LogoForCompetition imageSrc="tbd.png" data-alt="" />
            </th>
            <th>
              <LogoForCompetition imageSrc="tbd.png" data-alt="" />
            </th>
            <th>
              <LogoForCompetition imageSrc="tbd.png" data-alt="" />
            </th>

            <th>Points</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
        {players.map((player) => (
            <Player key={player.id} {...player} updateScore={updateScore} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
