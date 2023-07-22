/* eslint-disable prettier/prettier */
import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
  I18nManager,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  bigBackground,
  footerIcons,
  footerIconsOff,
  footerView,
  loginView,
} from './Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class AllCharities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charities_list: [],
      numOfItems: 0,
      found: true,
      search_key: '',
      loading: true,
      network: false,
      cancel_button: false,
      searchBox_width: '95%',
      searchColor: '#FFFFFF',
    };
  }

  searchfun(value) {
    let newarr = this.state.charities_list;
    let counter = 0;
    let found = false;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i].user_name.toUpperCase().includes(value.toUpperCase().trim())) {
        newarr[i].charity_show = 1;
        found = true;
      } else {
        newarr[i].charity_show = 0;

        // counter++;
      }
      if (newarr[i].user_name == '') {
        this.setState({ searchColor: '#FFFFFF' });
      }

      this.setState({ charities_list: newarr, numOfItems: counter, found: found });
    }
  }

 
 




  render() {
    return (
      <>
        {/* {this.state.network ? (
          <> */}
        {/* Header */}
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        <View
          style={{
            height: height * 0.085,
            backgroundColor: bigBackground,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* Search */}
          <SearchBar
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            backgroundColor={this.state.searchColor}
            placeholder="البحث بإسم المؤسسه"
            onClearPress={() => {
              this.setState({ searchColor: '#FFFFFF' });
              this.searchfun('');
            }}
            onPressIn={() => this.setState({ searchColor: footerView })}
            value={this.state.search_key}
            onChangeText={value => {
              if (value.length == 0) {
                this.setState({ searchColor: '#FFFFFF' });
              } else {
                this.setState({ searchColor: footerView });
              }
              this.setState({ search_key: value });
              this.searchfun(value);
            }}
            style={{
              marginBottom: 10,
              marginTop: 10,
              width: '95%',
              borderRadius: 35,
              elevation: 5,
              backgroundColor:
                this.state.searchColor === footerView
                  ? footerView
                  : '#FFFFFF',
            }}
            textInputStyle={{
              paddingRight: 10,
              paddingLeft: 10,
              width: this.state.searchColor === footerView ? '75%' : '85%',
            }}
            clearIconImageStyle={{
              width: this.state.searchColor === footerView ? 30 : 0,
            }}
          />
          {this.state.cancel_button ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  cancel_button: false,
                  searchBox_width: '95%',
                  search_key: null,
                });
              }}
              style={{ alignSelf: 'center', marginLeft: '2%' }}>
              <Icon name={'times'} color={'#D9D9D9'} size={19} />
            </TouchableOpacity>
          ) : null}
        </View>
        {/* Body */}
        {this.state.found ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              flex: 1,
              backgroundColor: bigBackground,
            }}>
            {this.state.charities_list.length != 0 ? (
              <>
                <ScrollView>
                  <View>
                    {this.state.charities_list.map((item, index) =>
                      // key = {index};
                      // item.category_cases.map((user_item, user_index) =>
                      item.charity_show == 1 ? (
                        <View
                          key={index}
                          style={{
                            backgroundColor: '#ffffff',
                            marginVertical: 10,
                            borderRadius: 15,
                            width: '95%',
                            alignSelf: 'center',
                            elevation: 2,
                          }}>
                          <View
                            style={{
                              height: height * 0.13,
                              width: '100%',
                              flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                              style={{
                                height: height * 0.13,
                                width: '80%',
                                flexDirection: 'row',
                              }}
                              key={index}
                            //   onPress={() => {
                            //     this.props.navigation.navigate(
                            //       'FullCasesDetails',
                            //       {caseDetails: item},
                            //     );
                            //             }}
                            >
                              <Image
                                source={{ uri: item.user_photo }}
                                style={{
                                  width: '28%',
                                  height: '75%',
                                  // borderRadius: 15,
                                  alignSelf: 'center',
                                  // borderWidth: 0.5,
                                  borderColor: '#B9C9CE',
                                  marginLeft: '4%',
                                }}
                                resizeMode="center"
                              />
                              <View
                                style={{
                                  alignSelf: 'center',
                                  marginLeft: '5%',
                                  width: '50%',
                                  // backgroundColor: '#000',
                                }}>
                                <Text
                                  key={index}
                                  style={{
                                    fontSize: 19,
                                    fontWeight: '600',
                                    color: '#000',
                                    textAlign: 'left',
                                  }}>
                                  {item.user_name}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                this.DeleteCase(index);
                                // console.log(this.state.charities_list.user_id)
                              }}
                              style={{
                                // backgroundColor: '#00f',
                                width: '20%',
                                // height: '100%',
                                // alignSelf: 'center',
                                justifyContent: 'center',
                              }}>
                              <Icon
                                name="trash"
                                size={24}
                                style={{
                                  color: '#D9D9D9',
                                  alignSelf: 'center',
                                  marginLeft: '3%',
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      ) : null,
                    )}
                  </View>
                  {/* )} */}
                </ScrollView>
                {/* <View> */}
              </>
            ) : (
              <>
                <View>
                  <Image
                    source={require('../Images/No_data.png')}
                    resizeMode="contain"
                    style={{
                      width: 300,
                      height: 250,
                      alignSelf: 'center',
                      marginTop: width * 0.35,
                    }}
                  />
                  <Text
                    style={{
                      color: '#aaa',
                      textAlign: 'center',
                      // justifyContent: 'center',
                      marginTop: RFValue(30),
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    لا يوجد مؤسسات
                  </Text>
                </View>
                {/* <View> */}
              </>
            )}
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              height: '82%',
              width: '100%',
              //  backgroundColor: "#f0f",
              // flex: 1,
              backgroundColor: '#fff',
              // borderTopLeftRadius: 40,
              // borderTopRightRadius: 40,
              // marginTop: height * -0.09,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Image
              source={require('../Images/notFoundCases.png')}
              resizeMode="contain"
              style={{ width: 300, height: 250, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
              لا يوجد مؤسسات بهذا الأسم
            </Text>
          </KeyboardAvoidingView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  addCaseBtn: {
    bottom: 0,
    elevation: 5,
    right: RFValue(15),
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.3,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: height * 0.05,
    padding: width * 0.009,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    marginBottom: height * 0.03,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
  },
});
