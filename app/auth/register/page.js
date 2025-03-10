'use client';  // Ensure this file is treated as a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../../utils/api';  

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await api.post('/api/auth/register', { name, email, password });
            router.push('/api/auth/login');
        } catch (err) {
            setError(err.response.data.error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {error && <p>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
