import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Competition } from "../../models/competition_model";

export interface CompetitionCardProps {
    comp: Competition; // Competition object to display
    onPress: (name: string) => void; // Function to handle competition selection
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({ comp, onPress }) => {
    return (
        <TouchableOpacity
            key={comp?.id}
            style={styles.competitionCard}
            onPress={() => onPress(comp?.name)}
        >
            {/* Heading */}
            <Text style={styles.cardTitle}>{comp?.name}</Text>



            {/* Start - End Date */}
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    {comp?.startDate}~{comp?.endDate}
                </Text>

            </View>

            {/* Location */}
            <View >
                <Text style={styles.locationText}>{comp?.location}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    competitionCard: {
        backgroundColor: '#253BFF',
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    dateText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    locationContainer: {
        backgroundColor: '#85B0FF',
        borderRadius: 12,
        padding: 10,
    },
    locationText: {
        fontSize: 18,
        color: '#B8BFFF',
    },
});
