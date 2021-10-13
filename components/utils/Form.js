import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useController } from "react-hook-form";

import { colors, styles } from "../../styles";

export const Input = ({ name, placeholder, control, required, type="text" }) => {
  const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  const { field } = useController({
    control,
    rules: {
      required: {
        value: required,
        message: 'Campo obligatorio'
      },
      pattern: {
        value: type === 'email' ? emailPattern : null,
        message: 'Correo no valido'
      }
    },
    defaultValue: '',
    name
  })
  return(
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={type === 'password' ? true : false}
      placeholderTextColor={colors.gray}
    />
  )
}

export const LabelError = ({ text }) => (
  <Text
    style={[styles.text, { textAlign: 'left', fontSize: 16, marginTop: 5, color: colors.secondary }]}
  >
    {text}
  </Text>
)

export const Label = ({ text, style }) => (
  <Text 
    style={[styles.text, style]}
  >
    {text}
  </Text>
)

export const Button = ({ title, style, onPress }) => (
  <TouchableOpacity 
    style={[styles.button, style]}
    onPress={onPress}
  >
    <Text 
      style={[styles.text, { fontWeight: 'bold' }]}
    >
      {title}
    </Text>
  </TouchableOpacity>
)

export const FormControl = (props) => (
  <View 
    style={{ marginBottom: 20, width: '100%'}}
  >
    {props.children}
  </View>
)
