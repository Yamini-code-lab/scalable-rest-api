import { useEffect,useState }
from "react";

import api from "../services/api";



function Dashboard() {
    

    const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";
    };



    const [tasks,setTasks] =
        useState([]);

    const [title,setTitle] =
        useState("");

    const [description,
        setDescription] =
        useState("");

    const loadTasks = async () => {

        const res =
            await api.get("/tasks");

        setTasks(res.data);
    };

    useEffect(()=>{

        loadTasks();

    },[]);

    const createTask =
    async ()=>{

        await api.post(
            "/tasks",
            {
                title,
                description
            }
        );

        loadTasks();
    };

    const deleteTask =
    async(id)=>{

        await api.delete(
            `/tasks/${id}`
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
                onChange={(e)=>
                    setTitle(e.target.value)}
            />

            <input
                placeholder="Description"
                onChange={(e)=>
                    setDescription(
                        e.target.value
                    )}
            />

            <button
                onClick={createTask}
            >
                Add Task
            </button>

            <hr/>

            {
                tasks.map(task=>(
                    <div key={task.id}>

                        <h4>
                            {task.title}
                        </h4>

                        <p>
                            {task.description}
                        </p>

                        <button
                        onClick={()=>
                            deleteTask(
                                task.id
                            )}
                        >
                            Delete
                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default Dashboard;