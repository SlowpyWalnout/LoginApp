import react from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const ExpedienteInput = ({expediente, setExpediente}) => {
    return (
        <View style={styles.inputExpedienteContainer}>
            <TextInput 
                style = {styles.inputExpediente}
                placeholder="Expediente" 
                keyboardType='numeric'
                value={expediente}
                maxLength={6}
                onChangeText = {(text)=> {
                    setExpediente(text)
                }}
            />
        </View>
    )
}
export default ExpedienteInput;
const styles = StyleSheet.create({
    inputExpediente: {
        backgroundColor: 'white',
        width: '100%',
        borderWidth: 1,
        borderRadius: 100,
        borderBottomColor: 'black',
        padding: 10,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputExpedienteContainer: {
        width: '60%',
        padding: 10,
        marginBottom: 20,
        
    },
})