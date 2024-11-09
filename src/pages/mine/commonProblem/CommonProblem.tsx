/*
 * @Author: 刘利军
 * @Date: 2024-11-06 20:46:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-11-07 13:36:55
 * @Description: KeFu
 * @PageName:
 */
import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, ListItem} from '@rneui/themed';
import {CommonProblemList} from '../../../interface';
import {QuestionsListApi} from '../../../services';

const CommonProblem: FC<NativeStackScreenProps<any, 'CommonProblem'>> = () => {
  const [selectIndex, setSelectIndex] = useState(-1);
  const [list, setList] = useState<CommonProblemList>([]);
  useEffect(() => {
    const getQuestionsList = async () => {
      const res = await QuestionsListApi({
        pageNo: 1,
        pageSize: 10,
      });
      console.log('getQuestionsList res', res);
      if (res.code === 0 && res.data) {
        setList(res.data);
      }
    };
    getQuestionsList();
  }, []);

  return (
    <View>
      {list.map((item, index) => {
        return (
          <ListItem.Accordion
            containerStyle={styles.containerStyle}
            key={index.toString()}
            isExpanded={index === selectIndex}
            onPress={() => {
              if (selectIndex === index) {
                setSelectIndex(-1);
              } else {
                setSelectIndex(index);
              }
            }}
            icon={
              <Image
                style={styles.img}
                source={require('../../../assets/static/bottom.png')}
              />
            }
            content={
              <>
                <Text style={styles.q}>Q</Text>
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>
                    {item.content}
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.child.content}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </ListItem.Accordion>
        );
      })}
    </View>
  );
};

export default CommonProblem;

const styles = StyleSheet.create({
  containerStyle: {backgroundColor: '#D8D8D8'},
  q: {
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 10,
    backgroundColor: '#FF8C56',
    fontSize: 20,
    color: '#fff',
    marginRight: 12,
  },
  img: {width: 16, height: 10},
  title: {fontSize: 18, fontWeight: '700'},
});
