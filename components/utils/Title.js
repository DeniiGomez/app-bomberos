import React from "react";
import {
  View,
  Text,
} from "react-native"

import { colors, styles, sizes } from '../../styles'

export const Title = ({ text }) => (
  <View style={{ width: '100%', marginTop: 20 }}>
    <Text style={[styles.text, { textAlign: 'left', color: colors.gray, fontSize: sizes.title1, fontWeight: 'bold', marginBottom: 15, }]} >
      {text}
    </Text>
  </View>
)
