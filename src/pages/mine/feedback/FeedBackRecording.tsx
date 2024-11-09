/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GetFeedbackListApi} from '../../../services';
import {FeedBackList, FeedBackListItem} from '../../../interface';
import {ListItem} from '@rneui/themed';

const FeedBackRecording = ({}: NativeStackScreenProps<
  any,
  'FeedBackRecording'
>) => {
  const [list, setList] = useState<FeedBackList>([]);
  useEffect(() => {
    const getList = async () => {
      const res = await GetFeedbackListApi({
        pageNo: 1,
        pageSize: 10,
      });
      console.log('res', res);
      if (res.code === 0 && res.data) {
        const data = res.data || [];
        setList(val => [...val, ...data]);
      }
    };
    getList();
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<FeedBackListItem>) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        {/* <ListItem.Title style={{fontSize: 16}}>{item.creator}</ListItem.Title> */}
        <ListItem.Subtitle>
          <ListItem.Subtitle style={{fontSize: 18}}>意见：</ListItem.Subtitle>
          {item.content}
        </ListItem.Subtitle>
        <ListItem.Subtitle>
          <ListItem.Subtitle style={{fontSize: 18}}>
            联系方式：
          </ListItem.Subtitle>
          {item.linkType}
        </ListItem.Subtitle>
        <ListItem.Content right>
          <ListItem.Subtitle right>{item.createTime}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FeedBackRecording;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  list: {
    padding: 24,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  name: {
    paddingHorizontal: 12,
  },
  memo: {
    paddingTop: 12,
  },
});
