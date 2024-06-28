import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, ImageSourcePropType, Image } from "react-native";
import { IconButton } from "../IconButton/IconButton";

export interface CustomButtonProps {
  onPress: () => void;
  text: string;
  prefixIconSource?: ImageSourcePropType;
  iconImageSource?: ImageSourcePropType;
  backgroundColor: string;
  disabled?: boolean;
}

const { width } = Dimensions.get('window');

export const CustomButton = ({ onPress, text, prefixIconSource, iconImageSource, backgroundColor, disabled = false }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor: disabled ? 'rgba(37, 59, 255, 0.5)' : backgroundColor }]}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
    >
      <View style={styles.buttonContent}>
        <View style={styles.prefixIconAndText}>
          {prefixIconSource && <Image source={prefixIconSource} style={styles.icon} />}
          {!prefixIconSource && !iconImageSource && (
            <Text style={[styles.buttonText, styles.centeredText]}>{text}</Text>
          )}
          {prefixIconSource && (
            <Text style={styles.buttonText}>{text}</Text>
          )}
        </View>
        {iconImageSource && <IconButton onPress={onPress} icon={iconImageSource} borderColor='white' />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginBottom: 10,
    // width: width * 0.9,
    alignItems: 'center',
    height: 60,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  prefixIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 10,
  },
  forwardImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredText: {
    textAlign: 'center',
    flex: 1,
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    fontSize: 20,
  },
});

