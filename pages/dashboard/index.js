import { useEffect, useState } from 'react';
import api from '../../utils/api';
import TaskCard from '../../components/TaskCard';
import HabitCard from '../../components/HabitCard';
import JournalCard from '../../components/JournalCard';

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [habits, setHabits] = useState([]);
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const taskRes = await api.get('/tasks');
                const habitRes = await api.get('/habits');
                const journalRes = await api.get('/journals');
                
                setTasks(taskRes.data);
                setHabits(habitRes.data);
                setJournals(journalRes.data);
            } catch (err) {
                console.log('Error fetching data:', err);
            }
        };
        
        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h2>Tasks</h2>
                {tasks.map(task => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>

            <div>
                <h2>Habits</h2>
                {habits.map(habit => (
                    <HabitCard key={habit._id} habit={habit} />
                ))}
            </div>

            <div>
                <h2>Journals</h2>
                {journals.map(entry => (
                    <JournalCard key={entry._id} entry={entry} />
                ))}
            </div>
        </div>
    );
}
