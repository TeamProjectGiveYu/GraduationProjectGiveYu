/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  ScrollView,
  Alert,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { footerView, footerIcons, footerIconsOff, bigBackground, loginView, DonateView, secondaryColor, headerColor } from './Colors'
// import ElevatedView from 'react-native-elevated-view';
import Communications from 'react-native-communications';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class Donation extends React.Component {
  constructor() {
    super();
    this.state = {
      btnDisable: false,
      showAlert: false,
    };
  }
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

 
  render() {
    const { showAlert } = this.state;
    return (
      <>
        <StatusBar backgroundColor={loginView} />
        <View
          style={{
            flex: 1,
            backgroundColor: bigBackground,
          }}>
          <ScrollView>
            <View>
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
                    <Text style={styles.styleOfPageTitle}>التبرع برسالة</Text>
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

              <Image
                source={{ uri: 'https://www.booksaregems.org/uploads/3/0/4/7/30473660/moneyjar_orig.gif' }}
                style={{
                  alignSelf: 'center',
                  marginTop: width * .24,
                  width: width * .6,
                  height: height * .25,
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 30, marginBottom: 5, color: '#1D1D1D' }}>ساهم معانا فى إنقاذ حياة شخص محتاج</Text>
            </View>
            <View style={{ margin: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => {
                  this.showAlert();
                }}
                style={{ width: width * .45, height: height * .08, borderRadius: width * .05, backgroundColor: DonateView, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>تبرع ب 5 جنيه</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.showAlert();
                }}
                style={{ width: width * .45, height: height * .08, borderRadius: width * .05, backgroundColor: DonateView, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>تبرع ب 10 جنيه</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.showAlert();
                }}
                style={{ width: width * .45, height: height * .08, borderRadius: width * .05, backgroundColor: DonateView, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>تبرع ب 20 جنيه</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.showAlert();
                }}
                style={{ width: width * .45, height: height * .08, borderRadius: width * .05, backgroundColor: DonateView, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>تبرع ب 30 جنيه</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.showAlert();
                }}
                style={{ width: width * .45, height: height * .08, borderRadius: width * .05, backgroundColor: DonateView, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>تبرع ب 40 جنيه</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.showAlert();
                }}
                style={{ width: width * .45, height: height * .08, borderRadius: width * .05, backgroundColor: DonateView, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>تبرع ب 50 جنيه</Text>
              </TouchableOpacity>


            </View>
          </ScrollView>
        </View >
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message=" هل تريد التبرع لهذه المؤسسة بمبلغ 5 جنيه"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="لا أريد التبرع"
          confirmText="نعم أريد التبرع"
          confirmButtonColor={loginView}
          messageStyle={{ fontSize: 20, fontWeight: 'bold' }}
          actionContainerStyle={{ width: width * .8, alignSelf: 'center' }}
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.sendSMS();
          }}
        />
        {/*////////// <view body> /////////// */}



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
})
export default Donation;
