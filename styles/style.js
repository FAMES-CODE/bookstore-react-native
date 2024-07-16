import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    view: {
        backgroundColor : '#F6E6CB',
        height: '100%',
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    h1: {
        textTransform: 'uppercase',
        fontWeight: 'bold', 
    },
    link: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    }
})

export default styles