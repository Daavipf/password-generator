import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "@/hooks/useStorage";
import PasswordItem from "@/components/passwordItem"

export default function Details() {
  const [passwordsList, setPasswordsList] = useState<string[]>([])
  const focused = useIsFocused()
  const { readItem, deleteItem } = useStorage()

  useEffect(()=>{
    async function getPasswords(){
      const passwords: string[] = await readItem("@pass")
      setPasswordsList(passwords)
    }

    if (focused){
      getPasswords()
    }
  }, [focused, readItem])

  async function handleDeletePassword(item: string){
    const passwords = await deleteItem("@pass", item)
    setPasswordsList(passwords)
    alert("Senha removida")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={passwordsList}
          keyExtractor={ (item) => String(item)}
          renderItem={({item}) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item) } /> }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    backgroundColor: '#392DE9',
    height: '16%',
    padding: 12,
    justifyContent: 'flex-end'
  },
  title:{
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content:{
    flex: 1,
    padding: 12,
    marginTop: 14
  }
})
