// LogoutModal.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
 
interface LogoutModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
 
const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onCancel, onConfirm }) => {
  return (
<Modal
      visible={visible}
      transparent={true}
      animationType="slide"
>
<View style={styles.modalBackground}>
<View style={styles.modalContainer}>
<Icon name="logout" size={40} color="#F46F16" />
<Text style={styles.modalTitle}>
            Are you sure you want to{"\n"}logout?
</Text>
<View style={styles.modalButtons}>
<TouchableOpacity onPress={onCancel} style={[styles.modalButton, styles.cancelButton]}>
<Text style={[styles.buttonText, { color: '#F46F16' }]}>Cancel</Text>
</TouchableOpacity>
<TouchableOpacity onPress={onConfirm} style={[styles.modalButton]}>
<LinearGradient
                colors={['#F46F16', '#F8A44C']}
                style={styles.gradientButton}
>
<Text style={[styles.buttonText, { color: '#FFF' }]}>Logout</Text>
</LinearGradient>
</TouchableOpacity>
</View>
</View>
</View>
</Modal>
  );
};
 
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 26,
    textAlign: 'center',
    color:'#0D0D0D'
 
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#F46F16',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  gradientButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
 
export default LogoutModal;