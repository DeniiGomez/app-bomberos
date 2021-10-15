import React from "react";
import {
  View,
  TouchableOpacity
} from "react-native"
import Icon from "react-native-dynamic-vector-icons";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../../styles";

export const BackNavigation = () => {

  const navigation = useNavigation()

  return (
    <View
      style={{ width: '100%', alignSelf: 'flex-start', paddingHorizontal: 20, height: 50 }}
    >
      <TouchableOpacity
        style={{
          height: 35,
          width: 35,
          backgroundColor: colors.secondary,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => navigation.goBack()}
      >
        <Icon 
          name="arrow-left"
          type="FontAwesome5"
          size={20}
          color={colors.light}
        />
      </TouchableOpacity>
    </View>
  )
}

