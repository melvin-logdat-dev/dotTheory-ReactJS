import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

<>
  <Header />
  <Player />
</>;

const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1,
    },
    {
      name: "Treasure",
      score: 0,
      id: 2,
    },
    {
      name: "Ashley",
      score: 0,
      id: 3,
    },
    {
      name: "James",
      score: 0,
      id: 4,
    },
  ]);

  // const [nextPlayerId, setNextPlayerId] = useState(5);
  const [topScores, setTopScores] = useState([]);
  const nextPlayerId = useRef(5);

  useEffect(() => {
    const scores = players.map((player) => player.score);
    const uniqueSorted = [...new Set(scores)].sort((a, b) => b - a);
    setTopScores(uniqueSorted.slice(0, 3));
  }, [players]);

  const handleRemovePlayer = (id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  };

  const handleScoreChange = (id, delta) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === id) {
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id,
          };
        }
        return player;
      }),
    );
  };

  const handleAddPlayer = (name) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: nextPlayerId.current++,
      },
    ]);
  };

  return (
    <div className="scoreboard">
      <Header players={players} />

      {/* Players list */}
      {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
          place={
            topScores[0] > 0
              ? player.score === topScores[0]
                ? 1
                : player.score === topScores[1]
                  ? 2
                  : player.score === topScores[2]
                    ? 3
                    : null
              : null
          }
        />
      ))}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};

export default App;
