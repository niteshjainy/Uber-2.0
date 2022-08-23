import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "tailwind-react-native-classnames";

const NavFavourites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Pardeshipura, Indore, India",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "C21 Mall, Indore, India",
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { borderWidth: 0.5 }]}></View>
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5 `}>
          <Icon
            type="ionicon"
            name={icon}
            color="white"
            size={18}
            style={tw`mr-4 rounded-full bg-gray-300 p-3 `}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}> {destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
