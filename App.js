import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

function MyApp() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      console.log(code);
      await confirm.confirm(code.toString());
    } catch (error) {
      console.log(error);
    }
  }

  if (!confirm) {
    return (
      <View style={styles.head}>
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+573015050651')}
        />
      </View>
    );
  }

  return (
    <View style={styles.head}>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}
const styles = StyleSheet.create({
  head: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyApp;
