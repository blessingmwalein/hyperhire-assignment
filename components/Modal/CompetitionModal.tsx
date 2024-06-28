import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Competition } from '../../models/competition_model';
import { IconButton } from '../IconButton/IconButton';
import { CompetitionCard } from '../CompetitionCard/CompetitionCard';
import InputTextField from '../InputTextField/InputTextField';
const searchIcon = require('../../assets/icons/search_icon.png');
const backIcon = require('../../assets/icons/back_icon.png');


interface CompetitionModalProps {
    showCompetitionModal: boolean;
    competitionsList: Competition[];
    setShowCompetitionModal: (show: boolean) => void;
    handleSelectCompetition: (name: string) => void;
    navigation: any;
}

export const CompetitionModal: React.FC<CompetitionModalProps> = ({ showCompetitionModal, competitionsList, setShowCompetitionModal, handleSelectCompetition, navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const updateSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <Modal
            animationType="slide"
            visible={showCompetitionModal}
            onRequestClose={() => setShowCompetitionModal(false)}
        >
            <View style={styles.modalContainer}>
                {/* Top App Bar with Back Button and Search Input */}

                <View style={styles.appBar}>
                    <IconButton
                        height={50}
                        width={50}
                        onPress={() => {
                            //close modal
                            setShowCompetitionModal(false);


                        }} icon={backIcon} borderColor='white' backgroundColor='#F9FAFB' />
                    {/* expande input field */}
                    <View style={styles.searchBarContainer}>
                        <InputTextField
                            placeholder="Asian"
                            value={searchQuery}
                            onChangeText={updateSearch}
                            suffixIcon={searchIcon}
                        />
                    </View>
                </View>
                {/* HEAD AND DESCRIPTION */}
                <Text style={styles.headerStyle}>Competition</Text>
                <Text style={styles.descriptionStyle}>An account is needed per one host. If you already have an account for the host of competition you want to sign up, you can login and  register.</Text>

                <ScrollView>
                    {competitionsList.map((comp) => (
                        <CompetitionCard key={comp.id} comp={comp} onPress={handleSelectCompetition} />
                    ))}
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 40, // Adjust based on your app bar height
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        // paddingHorizontal: 16,
    },
    searchBarContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 0,
        marginLeft: 16,
    },
    searchInputContainer: {
        backgroundColor: '#E8ECEF',
        borderRadius: 16,
    },
    searchInput: {
        fontSize: 16,
        color: '#667085',
    },
    competitionCard: {
        backgroundColor: '#253BFF',
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
        paddingVertical: 25,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    cardDescription: {
        fontSize: 16,
        color: '#667085',
        marginBottom: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        color: "#101828"
    },
    descriptionStyle: {
        fontSize: 18,
        // fontWeight: 'bold',
        marginBottom: 15,
        color: "#344054"
    },
    dateText: {
        fontSize: 20,
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

