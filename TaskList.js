import React from "react";
import Task from "./Task";
function TaskList({ tasks, removeTask, selectTask }) {
return (
<div>
{tasks.map((task) => (
<Task
key={task.id}
task={task}
removeTask={removeTask}
selectTask={selectTask}
/>
))}
</div>
);
}
export default TaskList;