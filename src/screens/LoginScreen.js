import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = auth()?.currentUser

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Logged in successfully');
        navigation.navigate('CityList');
        // navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('User not found');
        }

        if (error.code === 'auth/wrong-password') {
          Alert.alert('Wrong password');
        }

        Alert.alert('Error: ', error.message);
      });
  };

  useEffect(() => {
    if (user) {
      navigation.navigate('CityList');
    }
  }, [user, navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles?.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.promptText}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLinkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* <GoogleSigninButton
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: '#C8C8C8',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#4a6ea9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 15,
    marginBottom: 15,
  },
  switchButtonText: {
    color: '#6200ea',
    fontSize: 14,
  },
  heading: {
    fontSize: 30,
    margin: 10,
  },
  promptText: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupLinkText: {
    color: '#6200ea',
    fontWeight: 'bold',
    marginLeft: 3,
  },
});

export default Login;
