import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

interface WinnerModalProps {
  visible: boolean;
  winnerName: string | null;
  onClose: () => void;
}

export const WinnerModal: React.FC<WinnerModalProps> = ({ visible, winnerName, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>🎉 ¡Tenemos un Ganador! 🎉</Text>
          
          <View style={styles.winnerContainer}>
            <Text style={styles.winnerName}>{winnerName}</Text>
          </View>
          
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>¡Genial!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1E1E2C',
    width: '80%',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#00D09C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#00D09C',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  winnerContainer: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  winnerName: {
    fontSize: 24,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#00D09C',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
