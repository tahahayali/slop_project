import React, { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({ onSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);

    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        try {
            const promise = await axios.post(`${BASE_URL}/auth/login`, 
                {user: username, pass: password},
                {withCredentials: true}
        )
            .then((response) => {if (response.status === 200) {
                    alert("Logged in!");
                    onSuccess(response.data.user);
                    navigate('/account');
                }
            });

        }
        catch (error) {
            alert("Error: " + error);
        }
    }
    const canSubmit = username != '' && password != '';

    return (
        <div className="signup">
            {/* I want to make this box in the center, and I want it to be a green box */}
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                alignItems: 'center', height: '45vh',width: '30vw', backgroundColor: '#337d36ff', padding: '2rem', borderRadius: '1rem', margin: '0 auto'}}>
                
                <Box className="username" sx={{padding: '5px'}}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </Box>
                <Box className="password" sx={{padding: '5px'}}>
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </Box>

                <Box className="signup-button" sx={{padding: '5px'}}>
                    <Button variant="contained" disabled={!canSubmit} onClick={handleLogin}>
                        Log in
                    </Button>
                </Box>
            </Box>
            
        </div>
    )
}