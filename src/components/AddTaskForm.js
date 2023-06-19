import React from 'react'

function AddTaskForm({handleInputChange, handleSubmit, newTask}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
        <label htmlFor="newItem">Add to the todo list</label>
        <input type="text" id="newItem" value={newTask} onChange={handleInputChange} />
        <button type='submit'>Add Item</button>
    </form>
  )
}

export default AddTaskForm