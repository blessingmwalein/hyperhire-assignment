import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Modal, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Checkbox from 'expo-checkbox';
import { competitions } from '../models/competition_model';
import SuccessModal from '../components/Modal/SucceModal';
import { IconButton } from '../components/IconButton/IconButton';
import { CompetitionModal } from '../components/Modal/CompetitionModal';
import { CustomButton } from '../components/Button/CustomButton';
import InputTextField from '../components/InputTextField/InputTextField';

const backIcon = require('../assets/icons/back_icon.png');
const unhide = require('../assets/icons/unhide.png');
const dropDownIcon = require('../assets/icons/drop_down_icon.png');
const hide = require('../assets/icons/eye.png');
const tick = require('../assets/icons/tick.png');

interface CreateAccountPageProps {
    navigation: any;
}

const passwordCriteria = [
    { regex: /.{8,}/, label: "At least 8 characters" },
    {
        regex: /^(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*\d){1,})(?=(.*[~`!@#$%^&*()_\-+=?]){1,}).{8,}$/,
        label: "Include at least 3 of the following: uppercase letters, lowercase letters, numbers, special characters"
    }
];

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This is a required field'),
    password: Yup.string().required('This is a required field'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'New password and Confirm password do not match.')
        .required('This is a required field'),
    firstName: Yup.string().required('This is a required field'),
    lastName: Yup.string().required('This is a required field'),
    competitionType: Yup.string().required('You must pick a competition to register'),
    termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

 const CreateAccountPage = ({ navigation }: CreateAccountPageProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showCompetitionModal, setShowCompetitionModal] = useState(false);
    const [selectedCompetition, setSelectedCompetition] = useState('');
    const [competitionsList, setCompetitions] = useState(competitions);

    const handleSelectCompetition = (competition: string) => {
        //upd form value
        setSelectedCompetition(competition);
        setShowCompetitionModal(false);
    };

    const handleSubmit = (values: any) => {
        console.log('Signing up with:', values);
        // Show success modal on form submission
        navigation.navigate('SuccessPage');
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
                competitionType: '',
                termsAccepted: false
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, dirty, setFieldValue }) => (
                <View style={styles.container}>
                    <ScrollView>
                        {/* Top Navigation Bar */}
                        <View style={styles.navigationBar}>
                            <IconButton onPress={() => navigation.goBack()} icon={backIcon} borderColor='black' />
                            <Text style={styles.title}>Create Account</Text>
                            <View style={{ width: 45 }} />
                        </View>

                        {/* Page Content */}
                        <View style={styles.content}>
                            {/* Select Dropdown for Competition Types */}
                            <TouchableOpacity
                                style={styles.competitionField}
                                onPress={() => setShowCompetitionModal(true)}
                            >
                                <InputTextField
                                    placeholder="Competition to sign up for*"
                                    value={values.competitionType}
                                    editable={false}
                                    suffixIcon={dropDownIcon}
                                    onChangeText={() => { }}
                                />
                            </TouchableOpacity>

                            {/* Email Input */}
                            <InputTextField
                                placeholder="Email*"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                error={touched.email && errors.email ? errors.email : ''}
                            />

                            {/* Password Input */}
                            <InputTextField
                                placeholder="Password*"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry={!showPassword}
                                suffixIcon={unhide}
                                hideIcon={hide}
                                error={touched.password && errors.password ? errors.password : ''}
                            />

                            {/* Confirm Password Input */}
                            <InputTextField
                                placeholder="Confirm Password*"
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                secureTextEntry={!showPassword}
                                suffixIcon={unhide}
                                hideIcon={hide}
                                error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''}
                            />
                            <View style={styles.passwordCriteria}>
                                {passwordCriteria.map((criterion, index) => (
                                    <View key={index} style={styles.criteriaItem}>
                                        {criterion.regex.test(values.password) && <Image
                                            source={tick}
                                            style={styles.tickIcon}
                                        />}
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                color: criterion.regex.test(values.password) ? 'green' : 'red',
                                            }}
                                        >
                                            {criterion.label}
                                        </Text>

                                    </View>
                                ))}
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        color: 'green',
                                    }}
                                >
                                    {'Special letters are only limited to (~`!@#$%^&*()_-+=?)'}
                                </Text>
                            </View>

                            {/* First Name Input */}
                            <InputTextField
                                placeholder="First Name in English*"
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                error={touched.firstName && errors.firstName ? errors.firstName : ''}
                            />

                            {/* Last Name Input */}
                            <InputTextField
                                placeholder="Last Name in English*"
                                value={values.lastName}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                error={touched.lastName && errors.lastName ? errors.lastName : ''}
                            />

                            {/* Terms and Conditions */}
                            <View style={styles.checkboxContainer}>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={values.termsAccepted}
                                    onValueChange={(value) => setFieldValue('termsAccepted', value)}
                                />
                                <Text style={styles.checkboxLabel}>
                                    By signing up, you agree to Cloit's
                                    Terms & Conditions and Privacy Policy.
                                </Text>
                            </View>
                            {touched.termsAccepted && errors.termsAccepted && (
                                <Text style={styles.errorText}>{errors.termsAccepted}</Text>
                            )}

                            {/* display all form erros in text */}
                            {/* Display all form errors in text */}
                            {Object.keys(errors).map((key: any) => {
                                <Text >
                                    {errors.toString()}
                                </Text> // Ensure to return null for keys that haven't been touched
                            })}


                            {/* Sign Up Button */}
                            <View style={{ marginTop: 20 }} />
                            <CustomButton
                                onPress={handleSubmit}
                                backgroundColor='#253BFF'
                                text="Sign Up"
                                disabled={!isValid || !dirty}
                            />
                        </View>

                        {/* Competition Selection Modal */}
                        <CompetitionModal
                            showCompetitionModal={showCompetitionModal}
                            competitionsList={competitionsList}
                            setShowCompetitionModal={setShowCompetitionModal}
                            handleSelectCompetition={(competition: string) => {
                                setFieldValue('competitionType', competition);
                                setSelectedCompetition(competition);
                                setShowCompetitionModal(false);
                            }}
                            navigation={navigation}
                        />
                       
                    </ScrollView>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: 'white',
    },
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        paddingHorizontal: 20,

    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 14,
        color: '#667085',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    icon: {
        height: 15,
        width: 15,
    },
    passwordCriteria: {
        marginTop: 10,
    },
    criteriaItem: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    criteriaIcon: {
        marginRight: 5,
    },
    checkbox: {
        borderColor: 'lightblue',
    },
    competitionField: {
        marginBottom: 15,
    },
    tickIcon: {
        height: 15,
        width: 15,
    },
});


export default CreateAccountPage;