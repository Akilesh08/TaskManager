import React, { useState, useEffect } from "react";
function UpdateTask({ selectedTask, updateTask, setSelectedTask }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
useEffect(() => {
setTitle(selectedTask.title);
setDescription(selectedTask.description);
}, [selectedTask]);
const handleSubmit = (e) => {
e.preventDefault();
const updatedTask = {
id: selectedTask.id,
title,
description,
};
updateTask(selectedTask.id, updatedTask);
setSelectedTask(null);
};
return (
<div>
<h2>Update Task</h2>

<form onSubmit={handleSubmit}>
<label>
Title:
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
</label>
<br />
<label>
Description:
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
</label>
<br />
<button className="but" type="submit">Update</button>
<button className="but" onClick={() => setSelectedTask(null)}>Cancel</button>
</form>
</div>
);
}
export default UpdateTask;