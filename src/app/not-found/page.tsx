"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

// Labirin yang bisa diselesaikan
const maze = [
  ["S", " ", "W", "W", "W", "W", "W"],
  ["W", " ", "W", " ", " ", " ", "W"],
  ["W", " ", "W", " ", "W", " ", "W"],
  ["W", " ", " ", " ", "W", " ", "W"],
  ["W", "W", "W", " ", "W", " ", "G"],
];

const MazeGame = () => {
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  const [playMove] = useSound("/sounds/move.mp3", { volume: 0.5 });
  const [playWin] = useSound("/sounds/win.mp3", { volume: 0.7 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      let { x, y } = playerPos;
      if (e.key === "ArrowUp" && y > 0 && maze[y - 1][x] !== "W") y--;
      if (e.key === "ArrowDown" && y < maze.length - 1 && maze[y + 1][x] !== "W") y++;
      if (e.key === "ArrowLeft" && x > 0 && maze[y][x - 1] !== "W") x--;
      if (e.key === "ArrowRight" && x < maze[0].length - 1 && maze[y][x + 1] !== "W") x++;

      if (x !== playerPos.x || y !== playerPos.y) {
        playMove();
        setPlayerPos({ x, y });
      }

      if (maze[y][x] === "G") {
        setGameOver(true);
        playWin();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerPos, gameOver, playMove, playWin]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <div className="border-4 border-green-700 p-2 bg-white shadow-md">
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <motion.div
                key={colIndex}
                className={`w-10 h-10 flex items-center justify-center text-xl font-bold 
                  ${cell === "W" ? "bg-gray-700" : "bg-gray-300"} 
                  ${cell === "G" ? "bg-green-500" : ""}`}
              >
                {rowIndex === playerPos.y && colIndex === playerPos.x ? (
                  <motion.span
                    className="text-red-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.2 }}
                  >
                    🔴
                  </motion.span>
                ) : null}
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="ml-6 text-center md:text-left">
        <h1 className="text-6xl font-bold text-green-700">404</h1>
        <p className="mt-2 text-lg text-gray-600">
          Looks like you are in a maze. Use the keyboard to control the ball to escape.
        </p>
        {gameOver && (
          <div className="mt-4">
            <h2 className="text-xl font-bold text-green-500">🎉 You Escaped! 🎉</h2>
            <Link href="/" className="inline-block mt-3 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Go back Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MazeGame;
