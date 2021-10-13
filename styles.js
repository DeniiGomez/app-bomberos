import { StyleSheet } from "react-native";

export const colors = {
  primary: '#1B1B2F',
  secondary: '#E43F5A',
  gray: '#A6A9B6',
  gra2: '#393E46',
  light: '#FFF'
}

export const sizes = {
  title1: 24,
  title2: 20,
  body: 18,
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: sizes.body,
    color: colors.light,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 4,
    padding: 10,
    backgroundColor: colors.light,
    fontSize: sizes.body,
    justifyContent: 'center'
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 4,
    padding: 10,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    marginBottom: 10,
  }
})
