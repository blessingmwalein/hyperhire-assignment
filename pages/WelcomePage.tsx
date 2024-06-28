import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { CustomButton } from '../components/Button/CustomButton';
import Video, { VideoRef } from 'react-native-video';
const background = require('../assets/BACK.jpg'); // Replace with your background image path
const gradient = require('../assets/gradient.png');

const loginIcon = require('../assets/icons/login_icon.png');
const forwardIcon = require('../assets/icons/foward_icon.png');
const emailIcon = require('../assets/icons/email_icon.png');
const vid = require('../assets//vid.gif');

const { width, height } = Dimensions.get('window');

interface WelcomePageProps {
    navigation: any;
}



const WelcomePage = ({ navigation }: WelcomePageProps) => {


    const videoRef = useRef<VideoRef>(null);
    return (

        <View style={styles.container}>
            {/* Main background image */}
           
            <ImageBackground source={vid} style={styles.backgroundImage}>
                {/* Gradient overlay */}
                <ImageBackground source={gradient} style={styles.overlay}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Soo {"\n"}and Carrots</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={() => {
                            navigation.navigate('CreateAccount');
                        }}
                            backgroundColor='#253BFF'
                            text="Sign up for free" prefixIconSource={loginIcon} iconImageSource={forwardIcon} />
                        <View style={{ height: 8 }} />
                        <CustomButton onPress={() => { }}
                            backgroundColor='#1D2939'
                            text="Continue with email" prefixIconSource={emailIcon} iconImageSource={forwardIcon} />
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-start', // Align content to the top
        alignItems: 'flex-start', // Align content to the left
        resizeMode: 'cover', // Ensure the gradient image covers the entire background image
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start', // Align content to the top
        alignItems: 'flex-start', // Align content to the left
        width: '100%',
        paddingHorizontal: 20,
        fontSize: 36,
        paddingTop: 50, // Adjust as needed for top padding
    },
    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
        marginTop: 20,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 135,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    signUpButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 10,
        width: width * 0.8,
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: width * 0.8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WelcomePage;