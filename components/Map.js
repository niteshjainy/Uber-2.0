import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const dispatch = useDispatch();
  return (
    <MapView
      mapType="mutedStandard"
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="oigin"
          draggable
          onDragEnd={(e) => {
            dispatch(
              setOrigin({
                location: {
                  lat: e.nativeEvent.coordinate.latitude,
                  lng: e.nativeEvent.coordinate.longitude,
                },
              })
            );
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
