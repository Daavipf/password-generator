import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { ModalPassword } from "@/components/modal";


let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUBVWXYZ0123456789.!@#$%^&*()";

export default function Index() {
  const [passwordLength, setPasswordLength] = useState<number>(10)
  const [password, setPassword] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let passwordGenerated = ""
    for(let i = 0, n = charSet.length; i < passwordLength; i++){
      passwordGenerated += charSet.charAt(Math.floor(Math.random() * n))
    }
    setPassword(passwordGenerated)
    setModalVisible(true)
  }

  function handleClose(){
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')}/>
      <Text style={styles.characterTitle}>{passwordLength} caracteres</Text>
      <View style={styles.sliderContainer}>
        <Slider
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#f00"
          minimumTrackTintColor="#000"
          thumbTintColor="#392DE9"
          value={passwordLength}
          onValueChange={ (value) => setPasswordLength(Math.floor(value))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={password} handleClose={handleClose}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F3FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14
  },
  characterTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  sliderContainer:{
    width: '80%',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#FFF'
  },
  button:{
    width: '80%',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#392DE9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#FFF',
    fontSize: 18,
  }
})
