import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export interface Participant {
  id: string;
  name: string;
}

interface ParticipantListProps {
  participants: Participant[];
  winnerId: string | null;
  onSelectWinner: () => void;
  onReset: () => void;
}

export const ParticipantList: React.FC<ParticipantListProps> = ({
  participants,
  winnerId,
  onSelectWinner,
  onReset,
}) => {
  const renderItem = ({ item }: { item: Participant }) => {
    const isWinner = item.id === winnerId;
    return (
      <View style={[styles.participantRow, isWinner && styles.winnerRow]}>
        <Text style={[styles.participantName, isWinner && styles.winnerName]}>
          {item.name}
        </Text>
        {isWinner && <Text style={styles.winnerText}>🎉 GANADOR</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Participantes ({participants.length})</Text>

      {participants.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No hay participantes aún.</Text>
          <Text style={styles.emptySubText}>Agrega algunos nombres para comenzar la rifa.</Text>
        </View>
      ) : (
        <FlatList
          data={participants}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      {participants.length > 0 && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.selectButton]}
            onPress={onSelectWinner}
          >
            <Text style={styles.selectButtonText}>Seleccionar Ganador</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.resetButton]}
            onPress={onReset}
          >
            <Text style={styles.resetButtonText}>Reiniciar Rifa</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#161622',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#AAA',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  participantRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2A2A3C',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  winnerRow: {
    backgroundColor: '#FFD700',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  participantName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  winnerName: {
    color: '#000',
    fontWeight: 'bold',
  },
  winnerText: {
    color: '#000',
    fontWeight: 'bold',
  },
  actionsContainer: {
    marginTop: 20,
    gap: 12,
  },
  actionButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectButton: {
    backgroundColor: '#00D09C',
  },
  selectButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#FF4C4C',
  },
  resetButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
