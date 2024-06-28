// InputTextField.stories.tsx

import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { TextInput, StyleSheet, Image } from 'react-native';
import InputTextField from './InputTextField';

// Storybook Meta information
export const meta: Meta = {
    title: 'InputTextField',
    component: InputTextField,
};

export default meta;

// Default Story
export const Default = () => {
    const [text, setText] = useState('');
    const onChangeText = (newText: string) => setText(newText);

    return (
        <InputTextField
            placeholder="Enter text"
            value={text}
            onChangeText={onChangeText}
        />
    );
};

// Story with error
export const WithError = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState('This field is required');
    const onChangeText = (newText: string) => {
        setText(newText);
        setError(newText.trim().length === 0 ? 'This field is required' : '');
    };

    return (
        <InputTextField
            placeholder="Enter text"
            value={text}
            onChangeText={onChangeText}
            error={error}
        />
    );
};

// Story with secure text entry
export const SecureTextEntry = () => {
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const togglePasswordVisibility = () => setHidePassword(!hidePassword);

    return (
        <InputTextField
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            suffixIcon={hidePassword ? require('../../assets/icons/eye.png') : require('../../assets/icons/unhide.png')}
            hideIcon={require('../../assets/icons/unhide.png')}
        />
    );
};

// Story with readonly input
export const Readonly = () => (
    <InputTextField
        placeholder="Read-only input"
        value="Read-only value"
        onChangeText={() => {}}
        editable={false}
    />
);

// Story with disabled input
export const Disabled = () => (
    <InputTextField
        placeholder="Disabled input"
        value=""
        onChangeText={() => {}}
        editable={false}
    />
);
