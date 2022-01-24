import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// In this exercise, you used the ActivityIndicator component to show a loading message in your app for when data has been requested from the server but a response has not yet returned. You were able to do so by checking the isLoading property of the campsites, promotions, and partners state in the Redux store. You also configured your app to display an error message if the state in the Redux store indicated that there was an error (via the errMess prop). Otherwise, you continued to display the view/screen as before.

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#5637DD' />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingText: {
            color: '#5637DD',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
);

export default Loading;