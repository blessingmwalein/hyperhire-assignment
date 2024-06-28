import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { CustomButton } from '../components/Button/CustomButton';
import Video, { VideoRef } from 'react-native-video';
import { Container } from 'postcss';
import SuccessModal from '../components/Modal/SucceModal';
const successLeftIcon = require('../assets/icons/success_left.png');
const successRightIcon = require('../assets/icons/success_right.png');


interface SuccessPageProps {
    navigation: any;
}



const SuccessPage = ({ navigation }: SuccessPageProps) => {

    const [showSuccessModal, setShowSuccessModal] = useState(true);

    const videoRef = useRef<VideoRef>(null);
    return (

        <View style={styles.container}>
            <SuccessModal
                leftTopIcon={successLeftIcon}
                rightTopIcon={successRightIcon}
                isVisible={showSuccessModal}
                onClose={() => {
                    setShowSuccessModal(false);
                    navigation.navigate('Welcome');
                }}
                title='Welcome to Soo'
                description='Great to have you with us!'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : 'white',
    }

});

export default SuccessPage;