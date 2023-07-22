/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */

import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

import {
  bigBackground,
  footerIcons,
  footerIconsOff,
  footerView,
  loginView,
} from './Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [],
      numOfItems: 0,
      found: true,
      search_key: '',
      loading: true,
      network: false,
      cancel_button: false,
      searchBox_width: '95%',
      searchColor: '#FFFFFF',
      user_data: this.props.route.params.user_data,
    };
  }

  componentDidMount() {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.net();
    // this.storeUserData();
    // setTimeout(() => {
    //   alert(this.state.network);
    // }, 10);
  }
 
  net() {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        this.setState({ network: true, loading: true });
        if (this.state.charities.length == 0) {
          this.getdata();
        }
      } else {
        this.setState({ network: false, loading: false });
      }
    });
  }

  // Functions
  searchfun(value) {
    let newarr = this.state.charities;
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

      this.setState({ charities: newarr, numOfItems: counter, found: found });
    }
  }


  render() {
    return (
      <>
        {this.state.network ? (
          <>
            {/* Header */}
            <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

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
            </View>
            {/* Body */}
            {this.state.found ? (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                  flex: 1,
                  backgroundColor: bigBackground,
                }}>
                <ScrollView>
                  {/* Loading */}
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
                      {this.state.charities.map((item, index) =>
                        item.charity_show == 1 ? (
                          <View
                            key={index}
                            style={{
                              backgroundColor: '#ffffff',
                              marginVertical: 5,
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
                              }}
                              key={index}>
                              <Image
                                source={{ uri: item.user_photo }}
                                style={{
                                  width: '25%',
                                  height: '75%',
                                  borderRadius: 15,
                                  alignSelf: 'center',
                                  borderWidth: 0.5,
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
                                  style={{
                                    fontSize: 18,
                                    fontWeight: '500',
                                    color: '#000',
                                    textAlign: 'left',
                                  }}>
                                  {item.user_name}
                                </Text>
                                <Text
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 15,
                                    fontWeight: '200',
                                    color: '#333',
                                  }}>
                                  {item.user_name}
                                </Text>
                              </View>
                              <Icon
                                name="chevron-left"
                                size={28}
                                onPress={() => {
                                  this.props.navigation.navigate(
                                    'CharityInfo',
                                    {
                                      charityDetails: item,
                                      user_data: this.state.user_data
                                    },
                                  );
                                }}
                                style={{
                                  color: '#D9D9D9',
                                  alignSelf: 'center',
                                  marginLeft: '3%',
                                }}
                              />
                            </View>
                          </View>
                        ) : null,
                      )}
                    </View>
                  )}
                </ScrollView>
              </KeyboardAvoidingView>
            ) : (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../Images/notfound.jpg')}
                  resizeMode="center"
                  style={{ width: 250, height: 250, alignSelf: 'center' }}
                />
                <Text
                  style={{ fontSize: 18, color: '#1D1D1D', fontWeight: 'bold' }}>
                  لا يوجد مؤسسات بهذا الأسم
                </Text>
              </KeyboardAvoidingView>
            )}
            {/* footer */}

            <View
              style={{
                height: height * 0.065,
                backgroundColor: footerView,
                // backgroundColor:"#ff0",
                // backgroundColor:footerIconsOff,
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                elevation: 2,
                shadowRadius: 9.51,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 7 },
                shadowOpacity: 0.43,
                justifyContent: 'space-around',
                bottom: 0,
              }}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  width: 70,
                  height: 70,
                  borderRadius: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -30,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('HomePage');
                  }}
                  style={{
                    alignItems: 'center',
                    width: width * 0.15,
                    height: height * 0.07,
                    borderRadius: 40,
                    elevation: 2,
                    backgroundColor: footerView,
                    justifyContent: 'center',
                  }}>
                  {/* <Ionicons name="home" size={30}
                    style={{
                      color: footerIcons,
                      marginTop: 10
                    }}></Ionicons> */}
                  <Image
                    source={require('../Images/wired-outline-63-home.gif')}
                    style={{
                      width: width * 0.13,
                      height: height * 0.05,
                      alignSelf: 'center',
                    }}></Image>
                  {/* <Text style={{ color: footerIcons, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
                    الرئيسية
                  </Text> */}
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('DonateInstitutions', {
                    user_data: this.state.user_data,
                  });
                }}
                style={{
                  alignItems: 'center',
                  width: width * 0.16,
                  height: height * 0.08,
                  justifyContent: 'center',
                  // marginRight: width * 0.1,
                }}>
                <Ionicons
                  name="mail"
                  size={25}
                  style={{
                    color: footerIconsOff,
                    marginTop: -10,
                  }}
                />

                <Text
                  style={{
                    color: footerIconsOff,
                    fontSize: width * 0.02,
                    marginTop: 4,
                    fontWeight: 'bold',
                  }}>
                  التبرع برسالة
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('FavoriteCases', {
                    user_data: this.state.user_data,
                  });
                }}
                style={{
                  alignItems: 'center',
                  width: width * 0.16,
                  height: height * 0.08,
                  justifyContent: 'center',
                  // marginRight: width * 0.1,
                }}>
                <Ionicons
                  name="star"
                  size={25}
                  style={{
                    color: footerIconsOff,
                    marginTop: -10,
                  }}
                />
                <Text
                  style={{
                    color: footerIconsOff,
                    fontSize: width * 0.02,
                    marginTop: 4,
                    fontWeight: 'bold',
                  }}>
                  المفضلة
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('MyAccount', {
                    user_data: this.state.user_data,
                  });
                  // this.storeUserData();
                }}
                style={{
                  alignItems: 'center',
                  width: width * 0.16,
                  height: height * 0.08,
                  justifyContent: 'center',
                  // marginRight: width * 0.1,
                }}>
                <Ionicons
                  name="person"
                  size={25}
                  style={{
                    color: footerIconsOff,
                    marginTop: -10,
                  }}
                />
                <Text
                  style={{
                    color: footerIconsOff,
                    fontSize: width * 0.02,
                    marginTop: 4,
                    fontWeight: 'bold',
                  }}>
                  الملف الشخصى
                </Text>
              </TouchableOpacity>
            </View>
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

export default HomePage;
