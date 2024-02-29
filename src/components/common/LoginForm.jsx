import React, { useState } from 'react';
import InputText from '../common/Input/InputText'; // Assuming you have an InputText component
import Button from '../common/Button/Button'; // Assuming you have a Button component

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform login API call
        try {
            const response = await fetch(`/api/v1/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful login, e.g., store the token in state or local storage
                console.log('Login successful:', data.token);
            } else {
                // Handle login failure, e.g., display an error message
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <InputText
                type="text"
                name="username"
                placeholder="아이디"
                value={formData.username}
                onChange={handleChange}
            />
            <InputText
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
            />
            <Button type="submit" text="로그인" />
        </form>
    );
};

export default LoginForm;