"use client";
import { getTasks } from "@/api/task";
import { useState, useEffect } from "react";
import NavigationBar from "@/components/NavigationBar";
// import TaskModal from "@/components/TaskModal";
import Layout from "@/components/NavigationBar/Layout";
import TaskCard from "@/components/TaskCard";
import TaskModal from "@/components/TaskModal";

export default function Dashboard() {
  
   // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const tasksData = await getTasks();
  //             setTasks(tasksData);
  //         } catch (error) {
  //             console.error("Error fetching tasks:", error);
  //         }
  //     };
  //     fetchData();
  // }, []);

    const [view, setView] = useState('all');

    const gridStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      padding: '10px',
      marginLeft: '250px',
      alignItems : 'flex-start',
    };
    

  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'This is the first task',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'This is the second task',
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'This is the third task',
      status: 'completed',
    },
  ];

  return (
    <Layout setView = {setView}>
      {view === 'all' && <div style = {gridStyles}>
        {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
        ))}
        </div>}
      {view === 'create' && <TaskModal/>}
    
    </Layout>
  );
}
