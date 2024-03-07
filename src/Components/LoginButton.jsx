import react from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const LoginButton = ({handleSubmit}) => {
return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity
        style = {styles.Button}
        title="Login"
        onPress={handleSubmit}>
            <Text style = {styles.textButton}>Login</Text>
    </TouchableOpacity>
    </View>
)
}
export default LoginButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        width: 200,
        alignItems: 'center',
    },
    Button: {
        width: 200,
        padding: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        borderRadius: 5,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },
})