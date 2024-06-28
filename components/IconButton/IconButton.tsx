import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, ImageSourcePropType, Image } from "react-native";

export interface IconButtonProps {
    onPress: () => void;
    icon: ImageSourcePropType;
    borderColor?: string;
    backgroundColor?: string;
    width?: number; // Optional width prop
    height?: number;
}

const { width } = Dimensions.get('window');

export const IconButton: React.FC<IconButtonProps> = ({ onPress, icon, borderColor, backgroundColor, width = 45, height = 45 })  => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.iconContainer,
                , // Apply borderColor if provided
                {
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor ? backgroundColor : '',
                    borderColor: borderColor ? borderColor : ''
                }// Apply backgroundColor if provided
            ]}
        >
            <Image source={icon} style={styles.forwardImage} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    iconContainer: {
        width: 45,
        height: 45,
        borderRadius: 30,
        // borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center', // Center icon vertically within its container
        alignItems: 'center', // Center icon horizontally within its container
    },
    forwardImage: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
});
