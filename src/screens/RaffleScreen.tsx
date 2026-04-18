import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { ParticipantInput } from '../components/ParticipantInput';
import { ParticipantList, Participant } from '../components/ParticipantList';
import { WinnerModal } from '../components/WinnerModal';

export const RaffleScreen: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [winnerId, setWinnerId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddParticipant = (name: string) => {
    const newParticipant: Participant = {
      id: Date.now().toString() + Math.random().toString(36).substring(7),
      name,
    };
    setParticipants((prev) => [...prev, newParticipant]);
  };

  const handleSelectWinner = () => {
    if (participants.length === 0) return;

    // Pick a random participant
    const randomIndex = Math.floor(Math.random() * participants.length);
    const selectedWinner = participants[randomIndex];

    setWinnerId(selectedWinner.id);
    setModalVisible(true);
  };

  const handleReset = () => {
    setParticipants([]);
    setWinnerId(null);
    setModalVisible(false);
  };

  const winnerName = winnerId 
    ? participants.find((p) => p.id === winnerId)?.name || null 
    : null;

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sorteo App 🎲</Text>
        <Text style={styles.headerSubtitle}>Añade participantes y elige un ganador de forma justa y animada.</Text>
      </View>

      <ParticipantInput onAddParticipant={handleAddParticipant} />
      
      <ParticipantList 
        participants={participants} 
        winnerId={winnerId} 
        onSelectWinner={handleSelectWinner} 
        onReset={handleReset} 
      />

      <WinnerModal 
        visible={modalVisible} 
        winnerName={winnerName} 
        onClose={() => setModalVisible(false)} 
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1A',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#00D09C',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
