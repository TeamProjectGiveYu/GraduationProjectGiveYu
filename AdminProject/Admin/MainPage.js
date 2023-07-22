/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  loginView,
  footerView,
  footerIcons,
  bigBackground,
  secondaryColor,
  footerIconsOff,
} from './Colors';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Header  */}
        <View style={styles.headerContainer}>
          {/* Header Tittle  */}

          <Text style={styles.headerTittleTxtStyle}>الرئيسيه</Text>
        </View>

        {/* Body */}
        <View style={styles.bodyContainer}>
          <View>
            {/* Cases Option */}
            <TouchableOpacity
              // activeOpacity={0.1}
              style={styles.contianerOfCharityOptions}
              onPress={() => {
                this.props.navigation.navigate('AllCharities');
              }}>
              {/* Cases Option Logo  */}
              <Image
                source={require('../Images/charity.png')}
                resizeMode="center"
                style={styles.optionLogoStyle}
              />

              {/* Cases Option Text  */}
              <View>
                <Text
                  style={[
                    styles.styleOfOptionTxt,
                    { marginTop: height * 0.015 },
                  ]}>
                  المؤسسات
                </Text>
              </View>
            </TouchableOpacity>

            {/* Donation Categories Option */}
            <TouchableOpacity
              // activeOpacity={0.7}
              style={styles.contianerOfCharityOptions}
              onPress={() => {
                this.props.navigation.navigate('WaitingList');
              }}>
              {/* Donation Categories Option Logo  */}
              <Image
                source={require('../Images/WaitingList.png')}
                resizeMode="center"
                style={styles.optionLogoStyle2}
              />

              {/* Donation Categories Option Text  */}
              <View>
                <Text style={styles.styleOfOptionTxt}>قائمة الانتظار</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  // Header Style
  // ------------------------------------------------------------------------
  headerContainer: {
    width: width,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.11,
    justifyContent: 'space-around',
    // paddingHorizontal: width * 0.03,
    // paddingLeft: width * 0.2,
    backgroundColor: bigBackground,
    // backgroundColor: "#f0f",
  },
  headerArrowContainer: {
    borderWidth: 1,
    width: width * 0.1,
    alignItems: 'center',
    color: loginView,
    height: height * 0.04,
    justifyContent: 'center',
    borderRadius: RFValue(10),
    borderColor: loginView,
    marginRight: width * 0.07,
  },
  headerTittleContainer: {
    width: width * 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: width * 0.02,
    // paddingLeft: width * 0.08,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(20),
    // marginRight: width * 0.28,
  },

  // Body Style
  // ------------------------------------------------------------------------
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bigBackground,
    // backgroundColor:'#0f0',
  },
  contianerOfCharityOptions: {
    elevation: 10,
    borderRadius: 15,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.52,
    height: height * 0.2,
    marginLeft: RFValue(15),
    marginTop: height * 0.1,
    // backgroundColor:'#ffffff',
    marginBottom: height * 0.01,
    paddingHorizontal: height * 0.02,
    shadowOffset: { width: 0, height: 7 },
    backgroundColor: '#ffffff',
  },
  styleOfOptionTxt: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(18),
    // marginTop: height * -0.02,
  },
  optionLogoStyle: {
    width: width * 0.45,
    height: height * 0.14,
    alignSelf: 'center',
    // marginTop: height * -0.03,
    resizeMode: 'contain',
  },

  optionLogoStyle2: {
    width: width * 0.45,
    height: height * 0.15,
    alignSelf: 'center',
    // marginTop: height * -0.03,
    resizeMode: 'contain',
  },
});
