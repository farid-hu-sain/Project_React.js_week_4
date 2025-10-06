import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [newTask, setNewTask] = useState("");

  
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(), 
      text: newTask,
      completed: false,
    };

  
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTask(""); 
  };

 
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e2ebff, #fce8ff)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>📝 Todo List</h2>

        
        <form
          onSubmit={addTask}
          style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
        >
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Tulis tugas baru..."
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginRight: "8px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            Tambah
          </button>
        </form>

       
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888" }}>
              Belum ada tugas 
            </p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                  background: "#f8f9fb",
                  padding: "10px",
                  borderRadius: "8px",
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#aaa" : "#333",
                }}
              >
                <span onClick={() => toggleComplete(todo.id)} style={{ cursor: "pointer" }}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTask(todo.id)}
                  style={{
                    border: "none",
                    backgroundColor: "#ff7f7f",
                    color: "white",
                    borderRadius: "6px",
                    padding: "5px 8px",
                    cursor: "pointer",
                  }}
                >
                  Hapus
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
