import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { colors, styles, sizes, } from '../../styles'

export const Map = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, { paddingTop: 5, justifyContent: 'flex-start'  }]}>
        <Text style={[styles.text, { textAlign: 'left', color: colors.gray, fontSize: sizes.title1, fontWeight: 'bold', marginBottom: 15, }]} >Seguimiento de ubicacion</Text>
        <View style={{flex: 1, backgroundColor: 'red', width: '100%', borderRadius: 8, overflow: 'hidden'}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1}}
            region={{
              latitude: 14.966437,
              longitude:  -91.770393,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        </View>
    </SafeAreaView>
  )
}
