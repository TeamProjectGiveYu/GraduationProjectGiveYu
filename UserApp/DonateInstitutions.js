/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { footerView, footerIcons, footerIconsOff, bigBackground, loginView } from './Colors'
import SearchBar from "react-native-dynamic-search-bar";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class DonateInstitutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [
        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'صناع الحياه',
          CharityShow: 1,
          CharityId: 1,
        },

        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'مستشفى 75375',
          CharityShow: 1,
          CharityId: 2,
        },

        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'رساله',
          CharityShow: 1,
          CharityId: 3,
        },

        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'مؤسسة اهل مصر',
          CharityShow: 1,
          CharityId: 1,
        },
        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'رساله',
          CharityShow: 1,
          CharityId: 2,
        },
        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'مؤسسة اهل مصر',
          CharityShow: 1,
          CharityId: 1,
        },

        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'رساله',
          CharityShow: 1,
          CharityId: 2,
        },

        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'صناع الحياه',
          CharityShow: 1,
          CharityId: 1,
        },

        {
          CharityImage: require('../Images/photo1.jpg'),
          CharityName: 'رساله',
          CharityShow: 1,
          CharityId: 2,
        },

        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'صناع الحياه',
          CharityShow: 1,
          CharityId: 1,
        },
        {
          CharityImage: require('../Images/6.png'),
          CharityName: 'رساله',
          CharityShow: 1,
          CharityId: 2,
        },
      ],
      numOfItems: 0,
      found: true,
      search_key: '',
      searchColor: '#F2F5FC'
    };
  }

  searchfun(value) {
    let newarr = this.state.charities;
    let counter = 0;
    let found = false;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i].CharityName.includes(value.toUpperCase().trim())) {
        newarr[i].CharityShow = 1;
        found = true;
      } else {
        newarr[i].CharityShow = 0;

        // counter++;
      }

      this.setState({ charities: newarr, numOfItems: counter, found: found });
    }
  }

  render() {
    return (
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
            placeholder='البحث بإسم المؤسسه'
            onClearPress={() => {
              this.setState({ searchColor: '#F2F5FC' });
              this.searchfun("");
            }}
            onPressIn={() => this.setState({ searchColor: '#dae2f5' })}
            searchIcon={false}
            value={this.state.search_key}
            onChangeText={value => {
              this.setState({ search_key: value });

              this.searchfun(value);
            }}
            style={{ marginBottom: 10, marginTop: 10, width: '95%' }}
            textInputStyle={{ borderRadius: 25, elevation: 2, paddingRight: 10, paddingLeft: 10, marginLeft: 5 }}
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
            <ScrollView
              style={{
                flex: 1
              }}>
              {this.state.charities.map((item, index) =>
                item.CharityShow == 1 ? (
                  <View
                    key={index}
                    style={{
                      backgroundColor: '#ffffffff',
                      marginVertical: 5,
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
                        this.props.navigation.navigate('Donation', {
                          charityDetails: item,
                        });
                      }}>
                      <Image
                        source={item.CharityImage}
                        style={{
                          width: '28%',
                          height: '75%',
                          borderRadius: 15,
                          alignSelf: 'center',
                          borderWidth: 0.5,
                          borderColor: '#B9C9CE',
                          marginLeft: '4%',
                        }}
                        resizeMode='stretch'
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
                          {item.CharityName}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: 15,
                            fontWeight: '200',
                            color: '#333',
                          }}>
                          {item.CharityName}
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
            </ScrollView>
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              // height: '100%',
              // width: '100%',
              //  backgroundColor: "#f0f",
              flex: 1,
              backgroundColor: '#E5ECF4',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              // marginTop: height * -0.09,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Images/notfound.jpg')}
              resizeMode="contain"
              style={{ width: 300, height: 400, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
              لا يوجد مؤسسات بهذا الأسم
            </Text>
          </KeyboardAvoidingView>
        )}

        {/* footer */}

        <View
          style={{
            height: height * 0.09,
            backgroundColor: footerView,
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            elevation: 15,
            shadowRadius: 9.51,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 7 },
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
            <Ionicons name="home" size={30}
              style={{
                color: footerIconsOff,
                marginTop: 10
              }}></Ionicons>
            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
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
                color: footerIcons,
                marginTop: 10

              }}
            />

            <Text style={{ color: footerIcons, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
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
                marginTop: 10

              }}
            />
            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
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
                marginTop: 10

              }}
            />
            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              الملف الشخصى
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default DonateInstitutions;
