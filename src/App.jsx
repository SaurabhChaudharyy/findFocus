import PomodoroTimer from "./components/PomodoroTimer";
import TodoList from "./components/CardComponent";

function App() {
  return (
    <>
      <div className="flex flex-col w-full gap-4 p-4 md:gap-6 lg:grid-cols-2 xl:gap-8">
        <h1 className="text-5xl font-bold text-center">Find Focus</h1>
        <PomodoroTimer />
        <TodoList />
      </div>
    </>
  );
}

export default App;
