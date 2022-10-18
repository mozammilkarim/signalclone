
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      // backgroundColor:'red',
      padding: 10
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor:'blue'
    },
    img: {
      height: 50,
      width: 50,
      borderRadius: 50,
      marginRight: 10
    },
    badgeContainer: {
      width:20,
      height:20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: '#3872E9',
      position:'absolute',
      left:45,
      justifyContent:'center',
      alignItems:'center',
      // top:50
    },
    badge: {
      fontSize:10,
      color:'white',
    },
    text: {
      fontSize: 12,
      // flex:1,
      color: 'grey'
    },
    rightPart: {
      flex: 1,
      justifyContent: 'center'
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 2
    }
  })