/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */

// import { ScrollView } from 'native-base';
import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import {
  bigBackground,
  secondaryColor,
  headerColor,
  loginView,
  footerIcons,
  footerIconsOff,
  footerView,
} from './Colors';

export default class CharityInfo_Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      charityDetails: this.props.route.params.charityDetails,
    };
  }

  //Functions:
  CasesOfCategory(cases) {
    this.props.navigation.navigate('Cases', {
      CasesOfCurrentCategory: cases,
    });
  }

  render() {
    return (
      <>
        {/* Header */}
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: height * 0.09,
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{
              alignItems: 'center',
              width: width * 0.1,
              height: height * 0.04,
              borderRadius: RFValue(10),
              marginHorizontal: width * 0.03,
              borderWidth: 1,
              borderColor: secondaryColor,
              marginLeft: RFValue(15),
              color: secondaryColor,
              marginTop: RFValue(5),
            }}>
            <Icon
              name="chevron-right"
              size={20}
              style={{
                color: secondaryColor,
                marginTop: height * 0.007,
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: RFValue(95),
            }}>
            <Image
              resizeMode="center"
              style={styles.img_icon}
              source={require('../Images/type_donate.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
                color: '#000',
              }}>
              فئات التبرع
            </Text>
          </View>
        </View>

        {/* Body */}

        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <ScrollView>
            <View
              style={{
                flex: 0.8,
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: '5%',
                marginBottom: '1%',
                justifyContent: 'space-between',
                paddingRight: height * 0.015,
                alignSelf: 'center',
              }}>
              {this.state.charityDetails.categories.map((item, index) => (
                <TouchableOpacity
                  // key={index}
                  onPress={() => {
                    this.CasesOfCategory(item.cases);
                  }}
                  style={[
                    styles.categoryContainer,
                    {
                      // backgroundColor: '#ff0',
                    },
                  ]}>
                  <Image
                    resizeMode="center"
                    style={styles.img_icon}
                    source={{uri: item.category_logo}}
                  />

                  <View>
                    <Text style={styles.categoryName}>
                      {item.category_name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* footer */}
        <View
          style={{
            height: height * 0.09,
            backgroundColor: footerView,
            // backgroundColor:"#ff0",
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
                color: footerIconsOff,
                marginTop: 10,
              }}></Ionicons>
            <Text
              style={{
                color: footerIconsOff,
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
    );
  }
}

const styles = StyleSheet.create({
  //Header:
  headerContainer: {
    alignItems: 'center',
    marginTop: height * 0.01,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    // backgroundColor: '#f0f',
  },
  leftArrowContainer: {
    width: width * 0.1,
    height: height * 0.059,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#0ff',
  },
  styleOfPageTitle: {
    fontSize: 25,
    color: '#ffffff',
    width: width * 0.4,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor:'#ff0',
  },
  charityInfoIcon: {
    width: width * 0.09,
    alignItems: 'center',
    height: height * 0.044,
    justifyContent: 'center',
    borderRadius: height * 0.1,
    backgroundColor: '#C7DBE9',
    // backgroundColor:'#f00',
  },

  // Model Style
  // ------------------------------------------------------------------------
  infoModalBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  charityInfoBox: {
    // width: width * 0.85,
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: height * 0.5,
    marginTop: height * -0.02,
    paddingHorizontal: height * 0.001,
    paddingVertical: height * 0.019,
    borderRadius: height * 0.06,
    // backgroundColor: '#D9D9D9',
  },
  charityNameImgContainer: {
    width: width * 0.8,
    height: height * 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#0ff',
  },
  charityImgContainer: {
    width: width * 0.25,
    height: height * 0.12,
    alignItems: 'center',
    // padding:height*0.05,
    justifyContent: 'center',
    // backgroundColor: '#00f',
  },
  charityNameStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: width * 0.059,
    // fontSize: RFValue(21),
  },
  charityInfoContainer: {
    width: width * 0.9,
    // alignItems: '',
    paddingHorizontal: height * 0.01,
    backgroundColor: '#ff00ff0f',
  },
  charityInfoStyle: {
    color: '#000',
    // fontWeight:'bold',
    alignSelf: 'center',
    textAlign: 'justify',
    lineHeight: RFValue(20),
    fontSize: width * 0.04,
    // fontSize: RFValue(15),
  },
  charityAccountsContainer: {
    width: width * 0.65,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: height * 0.01,
    margin: height * 0.01,
    backgroundColor: '#f0f',
    alignSelf: 'center',
  },
  accountLogoContainer: {
    width: width * 0.1,
    height: height * 0.05,
    // backgroundColor: '#FC8',
  },
  charityAchieveBtn: {
    width: width * 0.63,
    alignItems: 'center',
    height: height * 0.065,
    justifyContent: 'center',
    marginTop: height * 0.01,
    borderRadius: height * 0.018,
    backgroundColor: '#4695BC',
    elevation: 15,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.43,
    alignSelf: 'center',
  },

  // Donates Style
  // ------------------------------------------------------------------------
  Donates: {
    width: '90%',
    height: '70%',
    alignSelf: 'center',
    marginTop: height * 0.1,
    // backgroundColor: '#C7DBE9',
    // backgroundColor:'#00f',
  },

  categoryContainer: {
    width: '45%',
    height: height * 0.2,
    // alignSelf: 'center',
    paddingHorizontal: height * 0.04,
    elevation: 10,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.43,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    // elevation: 2,
    marginLeft: 15,
    marginTop: height * 0.02,
    // backgroundColor:'#f00'
    marginBottom: height * 0.01,
  },
  categoryName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 14,
    color: '#000',
    textAlign: 'center',
  },
  img_icon: {
    width: width * 0.17,
    height: height * 0.07,
    marginTop: 3,
    alignSelf: 'center',
  },
});
