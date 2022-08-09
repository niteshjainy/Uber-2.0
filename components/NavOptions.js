import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "1",
    title: "Get A Ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eat",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pb-8 pt-4 pl-6 bg-gray-200 w-40 m-2 h-64`}
          onPress={() => {
            navigation.navigate(item.screen);
          }}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw` mb-4 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              reverse
              type="antdesign"
              name="arrowright"
              color="black"
              style={tw``}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
