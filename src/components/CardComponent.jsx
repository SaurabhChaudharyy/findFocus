import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col h-90 justify-center p-6 space-y-4 border border-black rounded-lg">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-5xl font-bold">Todo List</h2>
        <p className="text-sm leading-none text-gray-500 dark:text-gray-400" />
        <div className="flex items-center justify-center space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=" Enter task... "
            className="border border-black rounded-lg px-2 py-1 text-gray-500 placeholder-gray-400 "
          />
          <button
            className="px-2 py-1 rounded-lg border border-black bg-black text-white"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <div className="overflow-auto max-h-80">
          <ul className="overflow-auto">
            {tasks.map((task, index) => (
              <li
                className="flex items-center justify-between px-4 py-2 text-gray-500 whitespace-normal w-64"
                key={index}
              >
                {task}
                <button
                  className="px-2 py-1 rounded-lg border border-black bg-black text-white"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
