import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',        
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '30%',
        borderRadius: 5
    },
    itemName:{
        fontSize: 20,
        fontWeight: 'Bold'
    },
    itemDescription: {
        fontSize: 20,
        fontWeight: 'thin'
    },
    img: {
        width: '50%',
        height: '50%'
    },
    btnTrocar: {
        borderRadius: 5
    }
});

export default styles;