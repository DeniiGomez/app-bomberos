import React, { useState, useContext } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native'

import { colors, styles } from "../../styles";
import { useForm } from "react-hook-form";
import { FormControl, Input, LabelError, Button,Label } from "../utils/Form";
import { BackNavigation as Back } from "../navigator/BackNavigation";
import { UserContext } from "../../context/user/UserContext";

export const Confirm = ({ navigation }) => {

  const { confirm } = useContext(UserContext)

  const dimension = Dimensions.get('window')

  const [errorMessage, setErrorMessage] = useState({})
  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    confirm(data)
      .then(() => navigation.replace('Login'))
      .catch(err => setErrorMessage({ message: err.message }))
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.primary}}>
      <Back/>
      <ScrollView>
        <View style={[styles.container, { height: dimension.height - 50 }]}>
          <FormControl>
            {errorMessage.message && <LabelError text={`Error: ${errorMessage.message}`}/>}
          </FormControl>
          <FormControl>
            <Label text="Escribe el código que se envio a tu correo." style={{textAlign: 'left', lineHeight: 24, color: colors.gray}}/>
          </FormControl>
          <FormControl>
            <Input name="codeConfirmation" control={control} placeholder="Codigo de confirmacion" required={true} />
            {errors.codeConfirmation && <LabelError text={errors.codeConfirmation.message}/>}
          </FormControl>
          <Button 
            title="Enviar codigo"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
