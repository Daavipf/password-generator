import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useStorage(){
  const readItem = async (key: string): Promise<any[]> => {
    try {
      const passwords = await AsyncStorage.getItem(key)
      return passwords ? JSON.parse(passwords) : []
    } catch (error) {
      console.log("Houve um erro ao ler", error)
      return []
    }
  }

  const storeItem = async (key: string, value: string) => {
    try {
      let passwords = await readItem(key)
      passwords.push(value)
      await AsyncStorage.setItem(key, JSON.stringify(passwords))
    } catch (error) {
      console.log("Houve um erro salvando", error)
    }
  }

  const deleteItem = async (key: string, item: string) => {
    try {
      let passwords = await readItem(key)
      let myPasswords: string[] = passwords.filter((password) => {
        return (password !== item)
      })
      await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
      return myPasswords
    } catch (error) {
      console.log("Houve um erro deletnado", error)
      return []
    }
  }

  return {
    readItem, storeItem, deleteItem
  }
}