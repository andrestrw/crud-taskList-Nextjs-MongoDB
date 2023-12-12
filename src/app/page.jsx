import Task from "../models/Task";
import { connectDB } from "../utils/mongoose";
import TaskCard from "../components/TaskCard";

async function loadTasks() {
  await connectDB();
  const tasks = await Task.find();
  return tasks;
}

async function HomePage() {
  const tasks = await loadTasks();

  // JSON representation of tasks
  // return <div>{JSON.stringify(tasks)}</div>;
  // return (
  //   <div className="grid grid-cols-3 gap-2">
  //     {tasks.map((task) => (
  //       <TaskCard task={task} key={task._id}></TaskCard>
  //     ))}
  //   </div>
  // );
  return <div></div>;
}

export default HomePage;
