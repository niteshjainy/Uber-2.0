import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native-gesture-handler";
const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`py-5 text-center text-xl`}>
        Hello Nitesh!! Where wanna go today
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink `}>
        <GooglePlacesAutocomplete
          placeholder="Choose Destination?"
          debounce={400}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={toInputBoxStyle}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionsCard");
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavFavourites />
        <View
          style={tw` flex-row justify-evenly bg-white py-2 mt-auto border-t border-gray-100`}
        >
          <TouchableOpacity
            style={tw` flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
            onPress={() => navigation.navigate("RideOptionsCard")}
          >
            <Icon name="car" size={16} color="white" type="font-awesome" />
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw` flex-row justify-between w-24 px-4 py-3 rounded-full`}
          >
            <Icon name="fast-food-outline" size={16} type="ionicon" />
            <Text style={tw`text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
