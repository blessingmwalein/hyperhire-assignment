import React from 'react';
import { Modal, StyleSheet, View, Text, TouchableOpacity, Image, ImageRequireSource } from 'react-native';
import { IconButton } from '../IconButton/IconButton';
import { CustomButton } from '../Button/CustomButton';

interface SuccessModalProps {
    isVisible: boolean;
    onClose: () => void;
    leftTopIcon: ImageRequireSource;
    rightTopIcon: ImageRequireSource;
    title: string;
    description: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isVisible, onClose, leftTopIcon, rightTopIcon, title, description }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.navigationBar}>
                        <IconButton
                            onPress={() => () => { }}
                            icon={leftTopIcon} borderColor='#253BFF'
                            backgroundColor='#253BFF'
                            height={52} width={52} />
                        <IconButton
                            onPress={onClose}
                            icon={rightTopIcon}
                            borderColor='#D0D5DD'
                            backgroundColor='white' height={52} width={52} />

                    </View>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalDescription}>{description}</Text>
                    <CustomButton
                        onPress={() => onClose()}
                        backgroundColor='#253BFF'
                        text="Got it!"

                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: 50,
        paddingHorizontal: 6,

    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        // alignItems: 'center',
        // justifyContent: 'space-between',

        borderRadius: 10,
        width: '80%',
    },
    successIcon: {
        height: 80,
        width: 80,
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 20, 'marginTop': 20,
        fontWeight: 'bold',
    },
    modalDescription: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 20,

    },
    closeButton: {
        backgroundColor: '#253BFF',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default SuccessModal;
