import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
// import Users from "../assets/dummy-data/Users";
import ChatRooms from "../assets/dummy-data/ChatRooms";
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
       data={ChatRooms}
      renderItem={({item})=><ChatRoomItem chatRoom={item}/>}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
       />
      {/* <ChatRoomItem chatRoom={Users[0]}/> */}

    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    // // backgroundColor:'red',
    // padding: 10
  },
 
})


