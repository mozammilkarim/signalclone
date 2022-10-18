import { Image, StyleSheet, Text, View } from "react-native";
import {styles} from "./ChatRoomItemStyle"
export default function ChatRoomItem({chatRoom}) {
    // console.log(props)
  return (
    <View style={styles.container}>

      <Image source={{ uri: chatRoom.users[1].imageUri }} style={styles.img} />
      {chatRoom?.newMessages && <View style={styles.badgeContainer}>
        <Text style={styles.badge}>
        {chatRoom?.newMessages }
        </Text>
      </View>}
      <View style={styles.rightPart}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
          { chatRoom.users[1].name }
          </Text>
          <Text style={styles.text}>
          {chatRoom?.lastMessage?.createdAt}
          </Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode={"middle"} style={styles.text}>
        {chatRoom?.lastMessage?.content}
          How are You? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad officia facilis sit ipsam sunt dolore totam adipisci repudiandae libero id aliquid delectus temporibus tenetur animi, tempora excepturi? Natus, sed.
        </Text>
      </View>
    </View>
  );
}