import { Meta, Story } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { IconButton, IconButtonProps } from "./IconButton";

// Define the meta information for Storybook
const meta: Meta<IconButtonProps> = {
  title: "IconButton",
  component: IconButton,
  argTypes: {
    onPress: { action: "clicked" },
    borderColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
  args: {
    icon: require('../../assets/icons/foward_icon.png'),
    width: 45,
    height: 45,
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

// Template component to render the IconButton
const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};

// IconButton with different icon
export const WithDifferentIcon = Template.bind({});
WithDifferentIcon.args = {
  icon: require('../../assets/icons/login_icon.png'),
};

// IconButton with custom background color
export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  backgroundColor: '#253BFF',
};

// IconButton with custom border color
export const WithBorderColor = Template.bind({});
WithBorderColor.args = {
  borderColor: '#D0D5DD',
};
