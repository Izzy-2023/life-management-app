import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../../utils/api';

export default function CreateTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const router = useRouter();

    const handleCreateTask = async (e) => {
        e.preventDefault();
        try {
            await api.post('/tasks', { title, description, dueDate });
            router.push('/dashboard');
        } catch (err) {
            console.log('Error creating task:', err);
        }
    };

    return (
        <div>
            <h1>Create Task</h1>
            <form onSubmit={handleCreateTask}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    type="datetime-local" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                />
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
}

