import { StyleSheet, Text, View } from 'react-native';

export default function TestScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Test screen</Text>
            <Text style={styles.textTwo}>We will use it to test the new app.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#121212',
    },
    textTwo: {
        color: '#171616ff',
    }
});
