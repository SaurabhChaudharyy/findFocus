/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

export default function CardComponent() {
  const [initialMinutes, setInitialMinutes] = useState(30);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            // You can add code to handle when the timer finishes
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(0);
  };

  const handleTimerChange = (newMinutes) => {
    setIsActive(false);
    setInitialMinutes(newMinutes);
    setMinutes(newMinutes);
    setSeconds(0);
  };

  return (
    <div>
      <div className="flex flex-col h-96 justify-center p-6 space-y-4 pb-24  border border-black rounded-lg">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-5xl font-bold">Pomodoro Timer</h2>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="px-2 py-1 rounded-lg border border-black bg-black text-white"
            onClick={() => handleTimerChange(30)}
          >
            30 minutes
          </button>
          <button
            className="px-2 py-1 rounded-lg border border-black bg-black text-white"
            onClick={() => handleTimerChange(40)}
          >
            40 minutes
          </button>
          <button
            className="px-2 py-1 rounded-lg border border-black bg-black text-white"
            onClick={() => handleTimerChange(50)}
          >
            50 minutes
          </button>
        </div>
        <div className="flex justify-around items-center">
          <h1 className="text-5xl font-bold">{`${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h1>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            className="px-2 py-1 rounded-lg border border-black bg-black text-white"
            onClick={toggleTimer}
            size="sm"
          >
            {isActive ? "Pause" : "Start"}
          </button>

          <button
            className="px-2 py-1 rounded-lg border border-black bg-black text-white"
            size="sm"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
