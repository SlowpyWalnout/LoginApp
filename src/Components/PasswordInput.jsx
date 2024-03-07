import react from 'react';
import {TextInput, View, StyleSheet, text} from 'react-native';

const PasswordInput = ({password, setPassword}) => {
    return (
        <View style={styles.inputPasswordContainer}>
            <TextInput 
                style = {styles.inputPassword}
                placeholder="Password" 
                multiline={false}
                secureTextEntry={true} 
                onChangeText = {(text)=> {
                    setPassword(text)
                }}
            />
        </View>
    )
}

export default PasswordInput;

const styles = StyleSheet.create({
    inputPassword: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 100,
        borderBottomColor: 'black',
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputPasswordContainer: {
        width: '60%',
        padding: 10,
        marginBottom: 20,
    },
})