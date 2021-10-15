import React, { useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid
} from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import { styles } from '../../styles'
import { Title } from '../utils/Title'

export const Map = () => {

  const [region, setRegion] = useState({
    latitude: 14.966437,
    longitude:  -91.770393,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const handleRegion = (region) => {
    //console.log(region)
  }

  const markers = [
    {
      title: "Hola",
      description: "Ubicacion",
      latitude: 14.966437,
      longitude: -91.770393
    }
  ]

  const origin = {
    latitude: 14.957650,
    longitude: -91.732116,
  }

  const destination = {
    latitude: 14.965599, 
    longitude: -91.730566
  }

  const GOOGLE_API_KEY = ''

  return (
      <View style={[styles.container, { paddingTop: 5, justifyContent: 'flex-start'  }]}>
        <Title text="Seguimiento!"/>
        <View style={{flex: 1, backgroundColor: 'red', width: '100%', borderRadius: 8, overflow: 'hidden',}}>
          <MapView
          onMapReady={() => {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ).then(granted => {
              console.log(granted)
              //alert(granted) // just to ensure that permissions were granted
            });
          }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            userLocationAnnotationTitle="Estas aqui"
            followsUserLocation={true}
            showsScale={true}
            showsCompass={true}
            showsPointsOfInterest={true}
            showsBuildings={true}
            style={{flex: 1, width: '100%', position: 'absolute', ...StyleSheet.absoluteFill }}
            region={region}
            initialRegion={region}
            onRegionChange={handleRegion}
            zoomEnabled={true}
          >
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_API_KEY}
              strokeWidth={3}
              strokeColor="hotpink"
            />
          </MapView>
        </View>
        </View>
  )
}
