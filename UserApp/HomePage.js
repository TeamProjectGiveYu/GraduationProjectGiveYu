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
  I18nManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
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
      searchColor: '#F2F5FC',
    };
  }

  componentDidMount() {
    this.net();
    // setTimeout(() => {
    //   alert(this.state.network);
    // }, 10);
  }
  componentWillUnmount() {
    this.net();
  }

  net() {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        this.setState({network: true, loading: true});
        if (this.state.charities.length == 0) {
          this.getdata();
        }
      } else {
        this.setState({network: false, loading: false});
      }
    });
  }

  //get_data_from_database
  getdata() {
    axios
      .get('http://192.168.1.7/GP_backend/selectCharityAndCategory.php')
      .then(res => {
        if (res.status == 200) {
          if (res.data == 'Error') {
            alert('try again');
          } else if (typeof res.data == typeof []) {
            this.setState({charities: res.data});
          } else {
            alert('try again');
          }
        } else {
          alert('try again');
        }
        this.setState({loading: false});
      });
  }
  // Functions
  searchfun(value) {
    let newarr = this.state.charities;
    let counter = 0;
    let found = false;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i].charity_name.includes(value.toUpperCase().trim())) {
        newarr[i].charity_show = 1;
        found = true;
      } else {
        newarr[i].charity_show = 0;

        // counter++;
      }

      this.setState({charities: newarr, numOfItems: counter, found: found});
    }
  }

  // CharityDetails(item) {
  //   this.props.navigation.navigate('CharityInfo_Categories', {
  //     charityDetails: item,
  //   });
  // }

  render() {
    return (
      <>
        {this.state.network ? (
          <>
            {/* Header */}
            <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

            <View
              style={{
                height: height * 0.085,
                backgroundColor: bigBackground,

                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              {/* <View style={{alignContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 25,
                    // fontWeight: 'bold',
                    color: '#ffffff',
                    marginLeft: 5,
                  }}>
                  الرئيسية
                </Text>
              </View> */}

              {/* Search */}

              <SearchBar
                fontColor="#c6c6c6"
                iconColor="#c6c6c6"
                shadowColor="#282828"
                cancelIconColor="#c6c6c6"
                backgroundColor={this.state.searchColor}
                placeholder="البحث بإسم المؤسسه"
                onClearPress={() => {
                  this.setState({searchColor: '#F2F5FC'});
                  this.searchfun('');
                }}
                onPressIn={() => this.setState({searchColor: '#dae2f5'})}
                searchIcon={false}
                value={this.state.search_key}
                onChangeText={value => {
                  this.setState({search_key: value});

                  this.searchfun(value);
                }}
                style={{marginBottom: 10, marginTop: 10, width: '95%'}}
                textInputStyle={{
                  borderRadius: 25,
                  elevation: 2,
                  paddingRight: 10,
                  paddingLeft: 10,
                  marginLeft: 5,
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
                  style={{alignSelf: 'center', marginLeft: '2%'}}>
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
                  // borderTopLeftRadius: 40,
                  // borderTopRightRadius: 40,
                  // marginTop: height * -0.07,
                }}>
                <ScrollView
                  style={
                    {
                      // marginTop: '4%',
                      // borderTopLeftRadius: 40,
                      // borderTopRightRadius: 40,
                    }
                  }>
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
                        style={{marginTop: height * 0.3}}
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
                              marginVertical: 10,
                              borderRadius: 15,
                              width: '95%',
                              alignSelf: 'center',

                              elevation: 2,
                            }}>
                            <TouchableOpacity
                              style={{
                                height: height * 0.13,
                                width: '100%',
                                flexDirection: 'row',
                              }}
                              key={index}
                              onPress={() => {
                                this.props.navigation.navigate('CharityInfo', {
                                  charityDetails: item,
                                });
                              }}>
                              <Image
                                source={{uri: item.charity_logo}}
                                style={{
                                  width: '28%',
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
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                    textAlign: 'left',
                                  }}>
                                  {item.charity_name}
                                </Text>
                                <Text
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 15,
                                    fontWeight: '200',
                                    color: '#333',
                                  }}>
                                  {item.charity_name}
                                </Text>
                              </View>
                              <Icon
                                name="chevron-left"
                                size={28}
                                style={{
                                  color: '#D9D9D9',
                                  alignSelf: 'center',
                                  marginLeft: '3%',
                                }}
                              />
                            </TouchableOpacity>
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
                  height: '82%',
                  width: '100%',
                  //  backgroundColor: "#f0f",
                  // flex: 1,
                  backgroundColor: '#E5ECF4',
                  // borderTopLeftRadius: 40,
                  // borderTopRightRadius: 40,
                  // marginTop: height * -0.09,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../Images/notfound.jpg')}
                  resizeMode="contain"
                  style={{width: 300, height: 250, alignSelf: 'center'}}
                />
                <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
                  لا يوجد مؤسسات بهذا الأسم
                </Text>
              </KeyboardAvoidingView>
            )}
            {/* footer */}

            <View
              style={{
                height: height * 0.09,
                backgroundColor: footerView,
                // backgroundColor:footerIconsOff,
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                elevation: 15,
                shadowRadius: 9.51,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 7},
                shadowOpacity: 0.43,
                justifyContent: 'space-around',
                bottom: 0,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('HomePage');
                }}
                style={{
                  alignItems: 'center',
                  width: width * 0.16,
                  height: height * 0.08,
                  justifyContent: 'center',
                  // marginRight: width * 0.05,
                }}>
                <Ionicons
                  name="home"
                  size={30}
                  style={{
                    color: footerIcons,
                    marginTop: 10,
                  }}></Ionicons>
                <Text
                  style={{
                    color: footerIcons,
                    fontSize: width * 0.02,
                    marginTop: 4,
                    fontWeight: 'bold',
                  }}>
                  الرئيسية
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('DonateInstitutions');
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
                  size={30}
                  style={{
                    color: footerIconsOff,
                    marginTop: 10,
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
                  this.props.navigation.navigate('FavoriteCases');
                }}
                style={{
                  alignItems: 'center',
                  width: width * 0.16,
                  height: height * 0.08,
                  justifyContent: 'center',
                  // marginRight: width * 0.1,
                }}>
                <Ionicons
                  name="heart-circle"
                  size={30}
                  style={{
                    color: footerIconsOff,
                    marginTop: 10,
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
                  this.props.navigation.navigate('MyAccount');
                }}
                style={{
                  alignItems: 'center',
                  width: width * 0.16,
                  height: height * 0.08,
                  justifyContent: 'center',
                  // marginRight: width * 0.1,
                }}>
                <Ionicons
                  name="person-circle"
                  size={30}
                  style={{
                    color: footerIconsOff,
                    marginTop: 10,
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
            <View style={{flex: 1, marginTop: 100, alignSelf: 'center'}}>
              <Image
                source={require('../Images/offline.png')}
                resizeMode="contain"
                style={{width: 300, height: 300}}
              />
              <Text
                style={{fontSize: 20, alignSelf: 'center', fontWeight: 'bold'}}>
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
