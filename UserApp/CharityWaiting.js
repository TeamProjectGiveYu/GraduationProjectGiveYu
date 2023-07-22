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
  ScrollView,
  Alert,
} from 'react-native';
import {
  loginView,
  footerView,
  footerIcons,
  bigBackground,
  secondaryColor,
  footerIconsOff,
} from '../UserApp/Colors';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CharityWaiting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charity_data: this.props.route.params.charity_data,
      //   categories: [],
      approved: false,
      charity_arr: []
    };
  }

 

  approval() {
    if (this.state.charity_data.status == 'approved') {
      Alert.alert('قبول', 'تم قبول طلبك يمكنك الان الدخول', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('LogIn', {
              x: this.state.xxxxxxxxxx,
            });
            console.log('OK Pressed');
          },
        },
      ]);
    } else {
      Alert.alert('الطلب', 'طلبك قيد المراجعه برجاء الانتظار', [
        {
          text: 'OK',
          onPress: () => {
            // this.props.navigation.navigate('WaitingList');
            console.log('OK Pressed');
          },
        },
      ]);
    }
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        <ScrollView style={{ flex: 1, backgroundColor: bigBackground }}>
          <View style={styles.bodyContainer}>
            <View
              style={{
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: width * 0.45,
              }}>
              <Image
                source={require('../Images/pending_approval.png')}
                resizeMode="contain"
                style={{ width: 300, height: 300 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: '#1D1D1D',
                  textAlign: 'center',
                }}>
                الطلب قيد المراجعه
              </Text>
            </View>
            <View style={styles.containerOfLogInBtn}>
              <TouchableOpacity
                style={styles.logInButton}
                onPress={() => {
                  this.approval();
                }}>
                <Text style={styles.logInBtnTextStyle}>تحديث</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bigBackground,
    // backgroundColor:'#0f0',
  },

  containerOfLogInBtn: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: height * 0.03,
    paddingTop: height * 0.01,
    marginTop: width * 0.1,
  },
  logInButton: {
    elevation: 7,
    borderRadius: RFValue(30),
    width: width * 0.5,
    alignSelf: 'center',
    height: width * 0.14,
    justifyContent: 'center',
    backgroundColor: loginView,
    // marginTop: height * 0.07,
    // marginBottom: height * 0.1,
  },
  logInBtnTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.051,
    color: '#fff',
  },
});
