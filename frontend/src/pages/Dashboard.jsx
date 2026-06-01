import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    const loadTasks = async () => {
        const res = await api.get("/tasks");
        setTasks(res.data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const createTask = async () => {

        await api.post(
            "/tasks",
            {
                title,
                description
            }
        );

        setTitle("");
        setDescription("");

        loadTasks();
    };

    const deleteTask = async (id) => {

        await api.delete(
            `/tasks/${id}`
        );

        loadTasks();
    };

    const updateTask = async (task) => {

        const newTitle = prompt(
            "Enter new title",
            task.title
        );

        const newDescription = prompt(
            "Enter new description",
            task.description
        );

        if (!newTitle) return;

        await api.put(
            `/tasks/${task.id}`,
            {
                title: newTitle,
                description: newDescription,
                status: "pending"
            }
        );

        loadTasks();
    };

    return (
        <div>

            <button onClick={logout}>
                Logout
            </button>

            <h2>Dashboard</h2>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />

            <input
                placeholder="Description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />

            <button onClick={createTask}>
                Add Task
            </button>

            <hr />

            {tasks.map((task) => (
                <div key={task.id}>

                    <h4>{task.title}</h4>

                    <p>{task.description}</p>

                    <button
                        onClick={() =>
                            updateTask(task)
                        }
                    >
                        Edit
                    </button>

                    <button
                        onClick={() =>
                            deleteTask(task.id)
                        }
                    >
                        Delete
                    </button>

                </div>
            ))}

        </div>
    );
}

export default Dashboard;