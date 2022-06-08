import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const UselessTextInput = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);


  return (
    <SafeAreaView>
      <Text style={styles.text}>Ajouter une dépense</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ajout dépenses"
        keyboardType="numeric"
      />
      <Text style={styles.text}>Ajouter un revenu</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Ajout revenus"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  }
});

export default UselessTextInput;