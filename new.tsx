import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const GoogleSignInComponent = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1012652072709-k03d2mseacq1k983cips7de8egn8urop.apps.googleusercontent.com', // From Google Developer Console
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
    } catch (error:any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login flow
        console.log('User cancelled the login');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Operation is in progress
        console.log('Sign-In in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services are not available
        console.log('Play Services are not available');
      } else {
        console.error('Google Sign-In Error:', error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('User signed out');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Sign In with Google" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default GoogleSignInComponent;
