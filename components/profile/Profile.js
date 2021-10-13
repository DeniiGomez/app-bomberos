import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
} from 'react-native'
import { colors, styles, sizes } from '../../styles'

export const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, { paddingVertical: 5,  justifyContent: 'flex-start'}]}>
        <Text style={[styles.text, { textAlign: 'left', color: colors.gray, fontSize: sizes.title1, fontWeight: 'bold', marginBottom: 15, }]} >Perfil</Text>
      </View>
    </SafeAreaView>
  )
}
