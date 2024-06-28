import { Meta, Story } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { CustomButton, CustomButtonProps } from "./CustomButton";

// Define the meta information for Storybook
const meta: Meta<CustomButtonProps> = {
  title: "CustomButton",
  component: CustomButton,
  argTypes: {
    onPress: { action: "clicked" },
    backgroundColor: { control: "color" },
  },
  args: {
    text: "Hello world",
    prefixIconSource: require('../../assets/icons/login_icon.png'),
    iconImageSource: require('../../assets/icons/foward_icon.png'),
    backgroundColor: '#253BFF',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

// Template component to render the CustomButton
const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};

// Story with prefix icon
export const WithPrefixIcon = Template.bind({});
WithPrefixIcon.args = {
  prefixIconSource: require('../../assets/icons/login_icon.png'),
};

// Story with icon image
export const WithIconImage = Template.bind({});
WithIconImage.args = {
  iconImageSource: require('../../assets/icons/foward_icon.png'),
};

// Disabled button story
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
