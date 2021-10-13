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
      style={{ width: '100%', alignSelf: 'flex-start', paddingHorizontal: 20, marginVertical: 10 }}
    >
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
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
          size={30}
          color={colors.light}
        />
      </TouchableOpacity>
    </View>
  )
}

