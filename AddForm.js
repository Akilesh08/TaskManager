import React, { useState } from "react";
function AddForm({ addTask }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
const task = {
id: Math.floor(Math.random() * 10000),
title,
description,
};
addTask(task);
setTitle("");
setDescription("");
};
return (
<div>
<h2>Add Task</h2>
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
<button className="but" type="submit">Add</button>
</form>
</div>
);
}
export default AddForm;