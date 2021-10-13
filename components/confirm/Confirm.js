import React from "react";
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

export const Confirm = ({ navigation }) => {
  const dimension = Dimensions.get('window')

  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = () => navigation.replace('TabBottom')

  return (
    <SafeAreaView style={{backgroundColor: colors.primary}}>
      <ScrollView>
        <Back/>
        <View style={[styles.container, { height: dimension.height - 60 }]}>
          <FormControl>
            <Label text="Escriba el código que se le envio a su correo" style={{textAlign: 'left', lineHeight: 24, color: colors.gray}}/>
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
