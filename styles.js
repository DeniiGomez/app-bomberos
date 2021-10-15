import { StyleSheet } from "react-native";

export const colors = {
  primary: '#1B1B2F',
  secondary: '#E43F5A',
  gray: '#A6A9B6',
  gra2: '#393E46',
  light: '#FFF',
  info: '#1F4068'
}

export const sizes = {
  title1: 24,
  title2: 20,
  body: 16,
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
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.light,
    fontSize: sizes.body,
    justifyContent: 'center',
    //textAlignVertical: 'top'
  },
  button: {
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    marginBottom: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 7,
  }
})
