import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ModalProps} from 'react-native-modalfy';

const Toast = ({modal: {closeModal, getParam}}: ModalProps<'Toast'>) => {
  const message = getParam('message', '提示消息!');
  const time = getParam('time', 1000);
  setTimeout(() => {
    closeModal();
  }, time);
  return (
    <View style={styles.toast}>
      <Text style={styles.msg}>{message}</Text>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  toast: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 5,
  },
  msg: {
    color: '#fff',
  },
});
