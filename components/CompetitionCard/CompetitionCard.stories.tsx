import React from 'react';
import { Story, Meta } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import { CompetitionCard, CompetitionCardProps } from './CompetitionCard';
import { Competition, competitions } from '../../models/competition_model';

export default {
  title: 'CompetitionCard',
  component: CompetitionCard,
} as Meta;

// Example competitions


// Template for the story
const Template: Story<CompetitionCardProps> = (args) => (
  <View style={styles.container}>
    <CompetitionCard {...args} />
  </View>
);

// Define different stories based on the example data
export const Default = Template.bind({});
Default.args = {
  comp: competitions[0],
  onPress: (name: string) => alert(`Selected competition: ${name}`),
};

export const SecondCompetition = Template.bind({});
SecondCompetition.args = {
  comp: competitions[1],
  onPress: (name: string) => alert(`Selected competition: ${name}`),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
