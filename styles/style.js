import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    view: {
        backgroundColor : '#111828',
        height: '100%',
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    h1: {
        textTransform: 'uppercase',
        fontWeight: 'bold', 
        color: '#5046e5',

    },
    link: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    }
})

export default styles