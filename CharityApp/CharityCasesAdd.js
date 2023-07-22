/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
// import React from 'react';
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
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';
// import NetInfo from '@react-native-community/netinfo';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NetInfo from '@react-native-community/netinfo';

import {
  bigBackground,
  footerIcons,
  footerIconsOff,
  footerView,
  loginView,
} from '../UserApp/Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';

export default class CharityCasesAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      categories: [],
      charity_data: this.props.route.params.charity_data,
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

  net() {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        this.setState({ network: true, loading: true });
        if (this.state.cases.length == 0) {
          this.getdata();
        }
      } else {
        this.setState({ network: false, loading: false });
      }
    });
  }

  // Functions search
  searchfun(value) {
    let newarr = this.state.cases;
    let counter = 0;
    let found = false;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i].case_name.toUpperCase().includes(value.toUpperCase().trim())) {
        newarr[i].case_show = 1;
        found = true;
      } else {
        newarr[i].case_show = 0;

        // counter++;
      }

      this.setState({ cases: newarr, numOfItems: counter, found: found });
    }
  }

  // select cases......
 
  DeleteCase(index) {
    this.state.cases.splice(index, 1);
    this.setState({ cases: this.state.cases });
  }
  render() {
    return (
      <>
        {this.state.network ? (
          <>
            <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
            {/* Header */}
            <View
              style={{
                backgroundColor: bigBackground,
              }}>
              {/* Search */}

              <SearchBar
                fontColor="#c6c6c6"
                iconColor="#c6c6c6"
                shadowColor="#282828"
                cancelIconColor="#c6c6c6"
                backgroundColor={this.state.searchColor}
                placeholder="البحث بإسم الحالة"
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
                  marginTop: 20,
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
            </View>

            {/* Body */}
            {this.state.found ? (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                  flex: 1,
                  backgroundColor: bigBackground,
                }}>
                {this.state.cases.length != 0 ? (
                  <>
                    <ScrollView>
                      {this.state.loading ? (
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <ActivityIndicator
                            size={50}
                            color={'#4e7d91'}
                            style={{ marginTop: height * 0.3 }}
                          />
                        </View>
                      ) : (
                        <View>
                          {this.state.cases.map((item, index) =>
                            // key = {index};
                            // item.category_cases.map((user_item, user_index) =>
                            item.case_show == 1 ? (
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
                                    onPress={() => {
                                      this.props.navigation.navigate(
                                        'FullCasesDetails',
                                        { cases: item, categories: item },
                                      );
                                    }}>
                                    <Image
                                      source={require("../Images/icon.png")}
                                      style={{
                                        width: '26%',
                                        height: '60%',
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
                                        width: '70%',
                                        // backgroundColor: '#000',
                                      }}>
                                      <Text
                                        style={{
                                          fontSize: 18,
                                          fontWeight: '600',
                                          color: '#000',
                                          textAlign: 'left',
                                        }}>
                                        الحالة رقم: {item.case_identfication}
                                      </Text>

                                      <Text
                                        style={{
                                          fontSize: 18,
                                          fontWeight: '500',
                                          color: '#000',
                                          marginLeft: width * .12
                                        }}>
                                        {item.category_name}
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    onPress={() => {
                                      Alert.alert('', 'هل تريد الحذف ', [
                                        {
                                          text: 'نعم',
                                          onPress: () => this.DeleteCase(index),
                                        },
                                        { text: 'لا', onPress: () => null },
                                      ]);
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
                      )}
                    </ScrollView>
                    {/* <View> */}

                  </>
                ) : (
                  <>
                    <View>
                      <Text
                        style={{
                          color: '#aaa',
                          textAlign: 'center',
                          // justifyContent: 'center',
                          marginTop: RFValue(250),
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        لا يوجد حالات
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
                  لا يوجد حالات بهذا الأسم
                </Text>
              </KeyboardAvoidingView>
            )}
          </>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: bigBackground,
            }}>
            <View
              style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../Images/offline.png')}
                resizeMode="contain"
                style={{ width: 250, height: 250 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: '#1D1D1D',
                }}>
                لا يوجد اتصال بالانترنت{' '}
              </Text>
            </View>
          </View>
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
    width: width * 0.35,
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
