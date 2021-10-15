import AsyncStorage from '@react-native-async-storage/async-storage'

const USER_KEY = 'DATA_USER'

export const saveUser = async data => {
	try {
		//console.log(data)
		const user = await AsyncStorage.setItem(USER_KEY, JSON.stringify(data))
		console.log('datos usuario guardados correctamente')
		return user
	} catch (err) {
		throw new Error(err.message)
	}	
}

export const getUser = async () => {
	try {
		const user = await AsyncStorage.getItem(USER_KEY)
		return user != null ? JSON.parse(user) : null
	} catch (err) {
		//console.log(`Error al obtener datos: ${err.message}`)
		throw new Error(err.message)
	}
}

export const deleteUser = async () => {
	try {
		await AsyncStorage.removeItem(USER_KEY)
		console.log('datos del usuario eliminados')
		return null
	} catch (err) {
		//console.log(`Error: ${err.message}`)
		throw new Error(err.message)
	}
}
