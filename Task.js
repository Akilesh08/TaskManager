import React from "react";
function Task({ task, removeTask, selectTask }) {
const handleRemove = () => {
removeTask(task.id);
};
const handleSelect = () => {
selectTask(task);
};
return (
<div>
<h3>{task.title}</h3>

<p>{task.description}</p>
<button className="but" onClick={handleRemove}>Delete</button>
<button  className="but" onClick={handleSelect}>Edit</button>
</div>
);
}
export default Task;