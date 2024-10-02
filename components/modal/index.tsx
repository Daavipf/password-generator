import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import useStorage from '../../hooks/useStorage';
import * as Clipboard from 'expo-clipboard';

interface ModalPasswordProps {
  password: string;
  handleClose: () => void;
}

export function ModalPassword({password, handleClose}: ModalPasswordProps){
  const {storeItem} = useStorage()

  async function handleCopyToClipboard(){
    await Clipboard.setStringAsync(password)
    await storeItem('@pass', password)
    alert("Senha salva com sucesso")
    handleClose()
  }

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Sua nova senha:</Text>
        <Pressable style={styles.copyToClipboard} onLongPress={handleCopyToClipboard}>
          <Text style={styles.passwordText}>{password}</Text>
        </Pressable>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleCopyToClipboard}>
            <Text style={[styles.buttonText, styles.saveButtonText]}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(24,24,24,0.25)',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer:{
    width: '80%',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24
  },
  title:{
    fontSize: 20
  },
  copyToClipboard:{
    width: '100%',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#242424',
  },
  passwordText:{
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  button:{
    padding: 14,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center'
  },
  saveButton:{
    backgroundColor: '#392DE9'
  },
  buttonText:{
    fontWeight: 'bold'
  },
  saveButtonText:{
    color: '#FFF'
  }
})