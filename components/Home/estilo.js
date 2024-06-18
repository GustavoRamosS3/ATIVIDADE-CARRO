import { StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ecedf2",
		alignItems: 'center',
		justifyContent: 'top',
	},	
	cards:{
		alignItems: 'center',
		justifyContent: 'center',
	},
	card:{
        width: '85%',
        backgroundColor: '#e11138',
        padding: 7,
		borderRadius: 30,
		marginTop: 10,
      },
	  mensage:{
		color: '#ffffff',		
		margin: 10
	  },
	  header:{
		width: "100vw",
		height: 250,
		marginBottom: 50,
		borderStyle: "solid",
		borderBottomColor: "blue",
	  },
	  title:{
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		color: "#e11138",
	  },
	  Text:{
		color: "#e11138",
	  },
	  Textos:{
		marginLeft: 5,
		alignItems: 'flex-start',
		justifyContent: 'center',
	  },
	  marginTop: {
		marginTop: 10, // Adiciona uma margem no topo para separar os textos
	  },
});

export default estilo;