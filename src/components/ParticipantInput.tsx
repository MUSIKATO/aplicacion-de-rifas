import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ParticipantInputProps {
  onAddParticipant: (name: string) => void;
}

export const ParticipantInput: React.FC<ParticipantInputProps> = ({ onAddParticipant }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    const trimmedName = name.trim();
    if (trimmedName) {
      onAddParticipant(trimmedName);
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del participante..."
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <TouchableOpacity 
        style={[styles.button, !name.trim() && styles.buttonDisabled]} 
        onPress={handleAdd}
        disabled={!name.trim()}
      >
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1E1E2C',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  input: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#444',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
