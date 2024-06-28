import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export interface InputTextFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    onBlur?: (e: any) => void;
    secureTextEntry?: boolean;
    suffixIcon?: any; // Replace with ImageSourcePropType if needed
    hideIcon?: any; // Replace with ImageSourcePropType if needed
    error?: string;
    editable?: boolean;
}

const InputTextField: React.FC<InputTextFieldProps> = ({ placeholder, value, onChangeText, onBlur, secureTextEntry, suffixIcon, hideIcon, error, editable = true }) => {
    const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View>
            <View style={[styles.container, !editable && styles.disabledContainer]}>
                <TextInput
                    style={[styles.input, !editable && styles.readonlyInput]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry && hidePassword}
                    editable={editable}
                />
                {secureTextEntry ? (
                    <TouchableOpacity onPress={togglePasswordVisibility} disabled={!editable}>
                        <Image source={hidePassword ? hideIcon : suffixIcon} style={styles.icon} />
                    </TouchableOpacity>
                ) : (
                    suffixIcon && (
                        <TouchableOpacity disabled={!editable}>
                            <Image source={suffixIcon} style={styles.icon} />
                        </TouchableOpacity>
                    )
                )}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        borderRadius: 16,
        paddingHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 5,
        height: 50,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 18,
        paddingHorizontal: 10,
        color: '#667085',
    },
    disabledContainer: {
        backgroundColor: '#F9FAFB',
    },
    readonlyInput: {
        backgroundColor: '#F9FAFB',
    },
    icon: {
        marginHorizontal: 5,
        height: 25,
        width: 25,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        fontSize: 14,
    },
});

export default InputTextField;