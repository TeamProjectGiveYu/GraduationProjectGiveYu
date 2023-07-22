/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';
import {
  bigBackground,
  loginView,
  textinTextinput, headerColor,
  errorColor, footerIconsOff,
  secondaryColor, footerIcons, footerView
} from './Colors';
export default class FavoriteCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favCases: [],
      x: this.props.route.params.xxxxxxx,
      // charityDetails: this.props.route.params.charityDetails,
    };
  }
  componentDidMount() {
    this.getdata();
  }
  // Functions


  // DeleteCaseFromFav(idOfCase) {
  //   this.state.favCases.splice(idOfCase, 1);
  //   this.setState({ favCases: this.state.favCases });
  // }
 
  render() {
    return (
      <>
        {/* Header */}
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.14,
            backgroundColor: bigBackground,
            // marginBottom:"3%"
          }}>
          <View style={styles.headerContainer}>



            {/* Page Tittle */}
            <View
              style={{
                flexWrap: 'wrap',
                alignSelf: 'center',
                // backgroundColor: '#f0f',
              }}>
              <Text style={styles.styleOfPageTitle}>الحالات المفضلة</Text>
            </View>

            {/* right Arrow Container */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{
                // backgroundColor: '#f0f',
                alignItems: 'center',
                width: width * 0.1,
                height: height * 0.04,
                borderRadius: RFValue(10),
                marginHorizontal: width * 0.03,
                borderWidth: 1,
                borderColor: secondaryColor,
                marginLeft: RFValue(15),
                color: secondaryColor,
                marginTop: RFValue(-5)
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

          </View>
        </View>

        {/* Body */}
        <View style={styles.bodyAndFooterContainer}>
          <View style={styles.bodyContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled">
              {/* Map Of Favorite Cases */}
              {this.state.favCases.map((favCase_item, index) => (
                <View style={styles.favCaseContainer}>
                  <TouchableOpacity
                    style={{ width: '100%' }}
                    key={index}
                    onPress={() => {
                      this.props.navigation.navigate('CaseDetails');
                    }}>
                    {/* The Description Of Favorite Case */}
                    <View style={styles.favCaseDescriptionContainer}>
                      <Text style={styles.caseTittleStyle}>
                        الحالة {favCase_item.case_identfication}
                      </Text>

                      <Text style={styles.charityNameStyle}>
                        {favCase_item.user_name}
                      </Text>
                    </View>

                    {/* The Save Icon */}
                    <TouchableOpacity
                      onPress={() => {
                        this.DeleteCaseFromFav(index);
                      }}
                      style={[styles.containerOfSaveIcon,]}>
                      <Ionicons
                        name={
                          favCase_item.caseSavedState
                            ? 'ios-bookmark-outline'
                            : 'ios-bookmark'
                        }
                        size={33}
                        color={loginView}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Footer */}
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
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomePage', {
                user_data: this.state.user_data
              });
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.05,
            }}>
            <Ionicons name="home" size={25}
              style={{
                color: footerIconsOff,
                marginTop: -10
              }}></Ionicons>
            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              الرئيسية
            </Text>
          </TouchableOpacity>
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
                marginTop: -10

              }}
            />

            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              التبرع برسالة
            </Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#FFFFFF', width: 70, height: 70, borderRadius: 60, justifyContent: 'center', alignItems: 'center', marginTop: -30 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('FavoriteCases');
              }}
              style={{
                width: width * 0.15,
                height: height * 0.07,
                borderRadius: 40,
                elevation: 2,
                backgroundColor: footerView,
                justifyContent: 'center',
              }}>
              {/* <Ionicons
                name="heart-circle-outline"
                size={30}
                style={{
                  color: footerIcons,
                  marginTop: 10

                }}
              /> */}
              <Image source={require('../Images/wired-lineal-237-star-rating-morph.gif')} style={{ width: width * .13, height: height * .05, alignSelf: 'center' }}></Image>
              {/* <Text style={{ color: footerIcons, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              المفضلة
            </Text> */}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('MyAccount', {
                user_data: this.state.user_data
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
              name="person"
              size={25}
              style={{
                color: footerIconsOff,
                marginTop: -10

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

const styles = StyleSheet.create({
  //Header:
  // -----------------------------------------------------------------------------------
  headerContainer: {
    alignItems: 'center',
    // marginBottom: height * 0.1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    // paddingHorizontal: width * 0.05,
    // backgroundColor: '#f0f',
    marginTop: RFValue(25),
    // marginBottom:RFValue(25),
  },
  leftArrowContainer: {
    width: width * 0.12,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#0ff',
    borderRadius: RFValue(15),
    marginHorizontal: width * 0.03,
    borderWidth: 1,
    borderColor: secondaryColor,
    marginLeft: RFValue(15),

  },
  styleOfPageTitle: {
    fontSize: 18,
    color: headerColor,
    width: width * 0.6,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: width * 0.2,
    // backgroundColor:'#ff0',
  },
  // -----------------------------------------------------------------------------------
  //Body & Footer:
  bodyAndFooterContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop:23
  },
  bodyContainer: {
    alignItems: 'center',
  },
  favCaseContainer: {
    backgroundColor: bigBackground,
    // backgroundColor: '#0f0',
    marginVertical: 10,
    borderRadius: 15,
    width: '96%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: height * 0.13,
    // justifyContent: 'space-between',
    elevation: 2,
    marginTop: RFValue(8),
  },
  favCaseDescriptionContainer: {
    width: width * 0.8,
    height: height * 0.12,
    justifyContent: 'center',
    marginLeft: width * 0.05,
    // backgroundColor: '#ff0'
  },
  caseTittleStyle: {
    color: textinTextinput,
    fontWeight: 'bold',
    fontSize: RFValue(19),
    marginBottom: height * 0.002,
    textAlign: "justify",
  },
  charityNameStyle: {
    color: secondaryColor,
    fontWeight: 'bold',
    fontSize: RFValue(16),
    textAlign: "justify",
  },
  containerOfSaveIcon: {
    // width: width * 0.2,
    // height: height * 0.12,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '-18%',
    marginRight: 10,
  },
});
