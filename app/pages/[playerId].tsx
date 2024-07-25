// pages/[playerId].tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

const PlayerPage = () => {
  const router = useRouter();
  const { playerId } = router.query;

  useEffect(() => {
    if (playerId) {
      // Use the playerId as needed, e.g., fetch player data or initialize the game
      console.log(`Player ID: ${playerId}`);
    }
  }, [playerId]);

  return (
    <div>
      <h1>Welcome, Player {playerId}</h1>
    </div>
  );
};

export default PlayerPage;
