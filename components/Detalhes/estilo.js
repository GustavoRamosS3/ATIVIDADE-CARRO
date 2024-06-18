import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head:{
        paddingVertical: 19,
        paddingStart:8,
        borderBottomColor: '#ccc',
        borderNottomWhidht: 1,
        backgroundColor: '#fff' ,
        flexDirection: 'row'
    },
    head_title:{
        fontSize: 18,
        fontWeight: '500',
        color: '#e11138',
        marginHorizontal: 7
    },
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slides:{
        flexDirection: 'row',
        width: 450,
        height: 300
    },
    foto:{
        width: 450,
        height: 320,
    },
    info:{
        width: 350,
        textAlign: 'left'
    },
    titulo:{
        fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
        marginTop: 10,
		color: "#e11138",
    },
    valor:{
        fontSize: 15,
		marginBottom: 10,
        marginTop: 3,
		color: "#e11138",
    },
});

export default styles;