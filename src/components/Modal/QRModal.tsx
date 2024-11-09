import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ModalProps} from 'react-native-modalfy';
import {GetQRCodeApi} from '../../services';
import {Image} from '@rneui/themed';
import {QR_TIPS} from '../../core/constants';

const QRModal = ({modal: {closeModal, getParam}}: ModalProps<'QRModal'>) => {
  const type = getParam('type');
  console.log('type', type);
  const [url, setUrl] = useState('');
  useEffect(() => {
    const getQRCodeCustomerData = async () => {
      const res = await GetQRCodeApi(type);
      if (res.code === 0 && res.data) {
        setUrl(res.data[0].imageUrl);
      }
    };
    getQRCodeCustomerData();
  }, [type]);

  return (
    <View>
      <View style={styles.QRModal}>
        <View style={styles.block}>
          <Image style={styles.image} src={url} />
        </View>
        <View style={styles.mt}>
          {QR_TIPS.map((item, index) => {
            return (
              <Text style={styles.tip} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
        <Text style={styles.save}>保存</Text>
      </View>
      <View style={{...styles.block, ...styles.mt}}>
        <Image
          onPress={() => closeModal()}
          style={styles.close}
          source={require('../../assets/static/home/close.png')}
        />
      </View>
    </View>
  );
};

export default QRModal;

const styles = StyleSheet.create({
  QRModal: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 48,
  },
  image: {
    width: 100,
    height: 200,
  },
  mt: {marginTop: 20},
  tip: {lineHeight: 20},
  save: {
    backgroundColor: '#F65B12',
    textAlign: 'center',
    borderRadius: 50,
    paddingVertical: 6,
    marginTop: 12,
    color: '#fff',
  },
  block: {alignItems: 'center'},
  close: {
    width: 30,
    height: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
});
