import { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface PasswordItemProps {
  data: string,
  removePassword: () => void
}

export default function PasswordItem({data, removePassword}: PasswordItemProps){
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  function handleShowPassword(){
    setPasswordVisible(!passwordVisible)
  }

  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      {passwordVisible ? (<Text style={styles.text}>{data}</Text>)
      : (<View style={styles.hiddenPassword}></View>)
      }
      
      <Pressable onPress={handleShowPassword}>
        {passwordVisible ? (<FontAwesome5 size={20} name="eye" color="white"/>) 
        : (<FontAwesome5 size={20} name="eye-slash" color="white"/>)
        }
        
      </Pressable>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0e0e0e',
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text:{
    color: '#FFF'
  },
  hiddenPassword:{
    height: 12,
    width: '50%',
    borderRadius: 8,
    backgroundColor: '#FFF'
  }
})