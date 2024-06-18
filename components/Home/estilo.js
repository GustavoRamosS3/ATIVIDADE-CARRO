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
        width: '102%',
        backgroundColor: '#e11138',
        padding: 7,
		borderRadius: 30,
		marginTop: 50,
      },
	  mensage:{
		color: '#ffffff',		
		margin: 10
	  },
	  header:{
		width: "100vw",
		height: 250,
		marginBottom: 50,
		borderStyle: 'solid',
		borderWidth: 0.2,
		borderColor:"#e11138",
		marginTop: 2,
	  },
	  title:{
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		color: "#e11138",
	  },
	  Text:{
		color: "#e11138",
		fontSize: 16,
	  },
	  Textos:{
		alignItems: 'center',
		justifyContent: 'center',
		width: 269,
		marginLeft: 23,
	  },
	  marginTop: {
		marginTop: 10,
	  },
});

export default estilo;