import React, { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);

    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSignup = async () => {
        try {
            const promise = await axios.post(`${BASE_URL}/auth/signup`, {
                user: username,
                pass: password
            })
            .then((response) => {if (response.status === 200) {
                    alert("Account created successfully!");
                    // redirect to account
                    
                }
            });

        }
        catch (error) {
            if (error.response?.status === 409) { // 409 error code means conflict
                alert("Someone has that username.")
            }
            else {
                alert("An error has occurred. Try again later")
            }
        }
    }

    const passwordPasses = confirmPassword != '' && password === confirmPassword;
    const canSubmit = username != '' && passwordPasses;

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
                <Box className="confirm-password">
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    error={!passwordPasses}
                    helperText={!passwordPasses ? "Passwords do not match" : ""}
                    />
                </Box>

                <Box className="signup-button" sx={{padding: '5px'}}>
                    <Button variant="contained" disabled={!canSubmit} onClick={handleSignup}>
                        Sign Up
                    </Button>
                </Box>


            </Box>
            
        </div>
    )
}