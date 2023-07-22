/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {
  bigBackground,
  loginView, headerColor,
  secondaryColor,
  errorColor,
} from './Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class Delegate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      UserAddress: '',
      Donate: '',
      username_err: '',
      address_err: '',
      Donate_err: '',
      user_data: this.props.route.params.user_data,
      charityDetails: this.props.route.params.charityDetails,
    };
  }
 
  Validation_Before_Send() {
    let errors = 0;

   
        //UserNmae Conditions
        if (this.state.UserName.trim() == '') {
          this.setState({ username_err: 'الرجاء إدخال إسم المستخدم' });
          errors++;
        } else {
          this.setState({ username_err: '' });
        }

        //Address Conditions
        if (this.state.UserAddress.trim() == '') {
          this.setState({ address_err: 'الرجاء إدخال العنوان' });
          errors++;
        } else {
          this.setState({ address_err: '' });
        }
        //donate Conditions
        if (this.state.Donate.trim() == '') {
          this.setState({ Donate_err: 'الرجاء إدخال قيمة التبرع' });
          errors++;
        } else {
          this.setState({ Donate_err: '' });
        }
        if (errors == 0) {
          if (res.data == 'notification_send') {
            alert("notification_send");
            // console.log(res.data);
          } else if (res.data == 'failed_to_send_notification') {
            alert('failed_to_send_notification');
          } else if (res.data == 'notification_not_found') {
            alert('notification_not_found');
          }
        

        }
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.12,
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
              <Text style={styles.styleOfPageTitle}>إرسال مندوب</Text>
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
                marginTop: RFValue(-5),
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

        <View
          style={{
            flex: 0.88,
            backgroundColor: bigBackground,
          }}>

          {/* bottum type of donate */}
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              marginLeft: 10,
              fontWeight: 'bold',
              marginTop: 10
            }}>
            يرجى ادخال البيانات التاليه
          </Text>
          <ScrollView>
            <TextInput
              style={{ width: width * .95, alignSelf: 'center', backgroundColor: bigBackground, height: height * .1, marginTop: height * .02, fontSize: 18 }}
              label="الأسم"
              value={this.state.UserName}
              onChangeText={value => {
                this.setState({ UserName: value });

              }}
              activeUnderlineColor={loginView}
              textColor='#1D1D1D'
            />
            <Text
              style={{
                fontSize: 15,
                color: errorColor,
                textAlign: 'center',
                marginBottom: height * 0.01,
              }}>
              {this.state.username_err}
            </Text>



            <TextInput
              style={{ width: width * .95, alignSelf: 'center', backgroundColor: bigBackground, height: height * .1, fontSize: 18 }}
              label="العنوان"
              value={this.state.UserAddress}
              onChangeText={value => {
                this.setState({ UserAddress: value });
              }}
              activeUnderlineColor={loginView}
              textColor='#1D1D1D'
              multiline={true}
            />
            <Text
              style={{
                fontSize: 15,
                color: errorColor,
                textAlign: 'center',
                marginBottom: height * 0.01,
              }}>
              {this.state.address_err}
            </Text>
            <TextInput
              style={{ width: width * .95, alignSelf: 'center', backgroundColor: bigBackground, height: height * .1, fontSize: 18 }}
              label="قيمة التبرع"
              value={this.state.Donate}
              onChangeText={value => {
                this.setState({ Donate: value });
              }}
              activeUnderlineColor={loginView}
              textColor='#1D1D1D'
              multiline={true}
            />
            <Text
              style={{
                fontSize: 15,
                color: errorColor,
                textAlign: 'center',
                marginBottom: height * 0.01,
              }}>
              {this.state.Donate_err}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.Validation_Before_Send();
              }}
              style={{
                alignSelf: 'center',
                width: width * 0.5,
                backgroundColor: loginView,
                height: height * 0.06,
                borderRadius: 10,
                marginTop: height * 0.25,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                ارسال طلب
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* </View> */}


      </>
    );
  }
}
const styles = StyleSheet.create({
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
});
export default Delegate;
