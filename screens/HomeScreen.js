import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 pt-12 bg-gray-500`}>
        <Image
          style={{
            width: "100%",
            height: 60,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
      <View style={tw`p-5 bg-gray-400 mb-5`}>
        <GooglePlacesAutocomplete
          placeholder="My current location"
          debounce={400}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
      </View>
      <NavOptions />
      <NavFavourites />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
