/*
 * @Author: 刘利军
 * @Date: 2024-11-07 10:09:18
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 20:05:46
 * @Description:
 * @PageName:
 */
/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: 刘利军
 * @Date: 2024-11-06 17:15:30
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 19:23:25
 * @Description:
 * @PageName:
 */
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FeedbackSubmissionApi} from '../../../services';
import {useModal} from 'react-native-modalfy';
import {Button} from '@rneui/themed';
const FeedBack = ({navigation}: NativeStackScreenProps<any, 'FeedBack'>) => {
  const [memo, setMemo] = useState('');
  const [phone, setPhone] = useState('');
  const {openModal} = useModal();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <Text>请输入您的意见反馈</Text>
        <TextInput
          style={{...styles.input, height: 191}}
          numberOfLines={4}
          onChangeText={setMemo}
          multiline={true}
          textAlignVertical="top"
          placeholder="留下你宝贵的意见，我们会努力改进"
        />
        <Text>联系方式（选题）</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          textAlignVertical="top"
          placeholder="QQ，微信，手机号"
        />
        <View style={{alignItems: 'center'}}>
          <Button
            containerStyle={styles.save}
            loading={loading}
            buttonStyle={{backgroundColor: '#F65B12'}}
            onPress={async () => {
              setLoading(true);
              const res = await FeedbackSubmissionApi({
                content: memo,
                linkType: phone,
              });
              console.log('res', res);
              if (res.code === 0) {
                openModal('Toast', {message: '提交成功!'});
              }
              setLoading(false);
            }}>
            提交
          </Button>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            marginTop: 6,
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{padding: 24}}
            onPress={() => navigation.navigate('FeedBackRecording')}>
            反馈记录
          </Text>
        </View>
      </View>
    </>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    marginVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    marginBottom: 40,
  },
  save: {
    width: 288,
    borderRadius: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
