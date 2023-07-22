/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
// /* eslint-disable no-undef */

import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  loginView,
  footerView,
  errorColor,
  footerIcons,
  bigBackground,
  secondaryColor,
  footerIconsOff
} from '../UserApp/Colors';
import { Dimensions } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export default class EntryCaseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Case Name
      case_name: '',
      case_name_error: '',

      // Case Identification Number
      case_identfication: '',
      case_identfication_error: '',

      // Case Age
      case_age: '',
      case_age_error: '',

      // Case Description
      case_info: '',
      case_info_error: '',

      // Case requirment
      case_needs: '',
      case_needs_error: '',
      case_money: '',
      case_money_error: '',
      case_dangerous: '',
      case_dangerous_error: '',
      categoryCases: this.props.route.params.categoryCases,
      hasFocus: false,
    };
  }

 

  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }

  //Functions:
  Case_Details_Validation() {
    new_arr = this.state.categoryCases.cases;
    let errors = 0;
    data_to_send = {
     xxxxxxxx:xxxxxxxxxxxxx
    }

    axios
      .post('http://########/XXXXXXXXXXXXXX/insert_cases.php',data_to_send)
      .then(res => {
        console.log(this.state.categoryCases.category_id)
        // Case Name Conditions
        if (this.state.case_name.trim() == '') {
          this.setState({ case_name_error: 'الرجاء إدخال إسم الحالة' });
          errors++;
        } else {
          this.setState({ case_name_error: '' });
        }

        // Case Identification Number Conditions
        if (this.state.case_identfication.trim() == '') {
          this.setState({ case_identfication_error: 'الرجاء إدخال الرقم التعريفي للحالة' });
          errors++;
        } else {
          this.setState({ case_identfication_error: '' });
        }

        // Case Age Conditions
        if (this.state.case_age.trim() == '') {
          this.setState({ case_age_error: 'الرجاء إدخال عمر الحالة' });
          errors++;
        } else {
          this.setState({ case_age_error: '' });
        }

        // Case Description Conditions
        if (this.state.case_info.trim() == '') {
          this.setState({ case_info_error: 'الرجاء إدخال شرح لوضع الحالة' });
          errors++;
        } else {
          this.setState({ case_info_error: '' });
        }

        // Case requirment Conditions
        if (this.state.case_needs.trim() == '') {
          this.setState({ case_needs_error: 'الرجاء إدخال متطلبات الحالة' });
          errors++;
        } else {
          this.setState({ case_needs_error: '' });
        }
        if (this.state.case_money.trim() == '') {
          this.setState({ case_money_error: 'الرجاء إدخال مبلغ الحالة' });
          errors++;
        } else {
          this.setState({ case_money_error: '' });
        }
        if (this.state.case_dangerous.trim() == '') {
          this.setState({ case_dangerous_error: 'الرجاء إدخال مدى خطورة الحالة' });
          errors++;
        } else {
          this.setState({ case_dangerous_error: '' });
        }
        // Correct Entered Data Condition
        if (errors == 0) {
          if (res.data == 'Cases_added') {
            alert("Cases_added");
          }
          else {
            alert('some thing is wrong');
          }
        }

      });
  }

  handleContentSizeChange = event => {
    this.setState({ height: event.nativeEvent.contentSize.height });
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Header  */}
        <View style={styles.headerContainer}>
          {/* Header Arrow  */}
          <TouchableOpacity
            style={styles.headerArrowContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <FontAwesome5
              name="chevron-right"
              size={20}
              style={{ color: secondaryColor }}
            />
          </TouchableOpacity>

          {/* Header Tittle  */}
          <View style={styles.headerTittleContainer}>
            <Text style={styles.headerTittleTxtStyle}>إضافة حالة</Text>
          </View>
        </View>

        {/* Body */}
        <KeyboardAvoidingView style={[styles.bodyContainer]}>
          <ScrollView>
            {/* Case Name  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_name}
                onChangeText={value => {
                  this.setState({ case_name: value });
                }}
                label={'الإسم'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                keyboardType="default"
                // this is used as active border color
                borderColor={footerIcons}
                // active border height
                borderHeight={3}
                inputPadding={30}
                inputStyle={{
                  textAlign: 'right',
                  fontSize: 20,
                }}
              />
            </View>

            {/* Case Name Validation Text */}
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_name_error}
            </Text>

            {/* Case Identification Number  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_identfication}
                onChangeText={value => {
                  this.setState({ case_identfication: value });
                }}
                label={'الرقم التعريفي'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                keyboardType="phone-pad"
                // this is used as active border color
                borderColor={footerIcons}
                // active border height
                borderHeight={3}
                inputPadding={30}
                inputStyle={{
                  textAlign: 'right',
                  fontSize: 20,
                }}
              />
            </View>

            {/* Case Identification Number Validation Text */}
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_identfication_error}
            </Text>

            {/* Case Age  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_age}
                onChangeText={value => {
                  this.setState({ case_age: value });
                }}
                label={'العمر'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                keyboardType="default"
                // this is used as active border color
                borderColor={footerIcons}
                // active border height
                borderHeight={3}
                inputPadding={30}
                inputStyle={{
                  textAlign: 'right',
                  fontSize: 20,
                }}
              />
            </View>

            {/* Case Age Validation Text */}
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_age_error}
            </Text>

            {/* Case Description  */}
            <View style={styles.containerOfEachTxtInput}>
              {/* <Hoshi
                value={this.state.case_info}
                onChangeText={value => {
                  this.setState({ case_info: value });
                }}
                label={'شرح لوضع الحالة'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                multiline={true}
                keyboardType="default"
                // minHeight={height * 0.1}
                // height={height * 0.4}
                backgroundColor={'#ff0'}
                // this is used as active border color
                borderColor={footerIcons}
                // active border height
                borderHeight={3}
                inputPadding={30}
                inputStyle={{
                  textAlign: 'right',
                  fontSize: 18,
                }}
              /> */}
              <Text
                style={{
                  color: "#6d7b86",
                  textAlign: "left",
                  paddingHorizontal: width * 0.08,
                  fontSize: width * 0.05,
                  fontWeight: "bold"
                }}>{'شرح لوضع الحالة'}</Text>
              <AutoGrowingTextInput
                value={this.state.case_info}
                onChangeText={value => {
                  this.setState({ case_info: value });
                }}
                style={{
                  minHeight: height * 0.1,
                  maxHright: height * 0.6,
                  // backgroundColor:"#0f0",
                  borderBottomWidth: this.state.hasFocus ? 3 : 1.5,
                  // borderColor: footerIcons,
                  borderColor: this.state.hasFocus ? footerIcons : '#bcbec2',

                  color: '#6d7b86',

                  textAlign: 'right',
                  fontSize: width * 0.05,
                  fontWeight: "bold",
                  paddingHorizontal: width * 0.08
                }}
                onFocus={this.setFocus.bind(this, true)}
                onBlur={this.setFocus.bind(this, false)}
              // placeholder={'شرح لوضع الحالة'}
              // placeholderTextColor={'#6d7b86'}
              />

            </View>

            {/* Case Name Description Text */}
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_info_error}
            </Text>

            {/* Case Requirment  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_needs}
                onChangeText={value => {
                  this.setState({ case_needs: value });
                }}
                label={'قيمة التبرع'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                keyboardType="default"
                // this is used as active border color
                borderColor={footerIcons}
                // active border height
                borderHeight={3}
                inputPadding={30}
                inputStyle={{
                  textAlign: 'right',
                  fontSize: 20,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_needs_error}
            </Text>

            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_money}
                onChangeText={value => {
                  this.setState({ case_money: value });
                }}
                label={'المبلغ المطلوب للتكفل بالحاله'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                keyboardType="default"
                // this is used as active border color
                borderColor={footerIcons}
                // active border height
                borderHeight={3}
                inputPadding={30}
                inputStyle={{
                  textAlign: 'right',
                  fontSize: 20,
                }}
              />
            </View>

            {/* Case Requirment Validation Text */}
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_money_error}
            </Text>

            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_dangerous}
                onChangeText={value => {
                  this.setState({ case_dangerous: value });
                }}
                label={'مدى خطوره الحاله'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                keyboardType="default"
                // this is used as active border color
                borderColor={footerIcons}
                // active border height
                borderHeight={3}
                inputPadding={30}
                inputStyle={{
                  textAlign: 'right',
                  fontSize: 20,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: width * 0.04,
                color: loginView,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              خطيره {'    '}
              متوسطة{'    '}
              ضعيفة{'    '}
            </Text>

            {/* Case Requirment Validation Text */}
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_dangerous_error}
            </Text>

            {/* Add Case Btn  */}
            <TouchableOpacity
              style={[styles.addCaseBtn, { alignSelf: "center", marginTop: height * 0.025 }]}
              onPress={() => {
                this.Case_Details_Validation();
              }}>
              <Text
                style={{
                  fontSize: width * 0.05,
                  color: footerView,
                }}>
                إضافة
              </Text>
            </TouchableOpacity>
          </ScrollView>


        </KeyboardAvoidingView>
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
    height: height * 0.09,
    justifyContent: 'space-evenly',
    paddingHorizontal: width * 0.03,
    backgroundColor: bigBackground,
    // backgroundColor: "#f0f",
  },
  headerArrowContainer: {
    borderWidth: 1,
    width: width * 0.1,
    alignItems: 'center',
    color: secondaryColor,
    height: height * 0.04,
    justifyContent: 'center',
    borderRadius: RFValue(10),
    borderColor: secondaryColor,
  },
  headerTittleContainer: {
    width: width * 0.8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: width * 0.05,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: RFValue(18),
  },

  // Body Style
  // ------------------------------------------------------------------------
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bigBackground,
    // backgroundColor:'#0f0',
  },
  containerOfEachTxtInput: {
    width: width * 0.95,
    marginTop: height * 0.01,
    // marginBottom: height * 0.01,
    // backgroundColor: '#ff0',
    marginLeft: width * -0.05,
    // alignSelf:"center",
    // justifyContent:"center",
    // flexWrap:"wrap"
  },
  addCaseBtn: {
    elevation: 5,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.4,
    alignItems: 'center',
    height: height * 0.06,
    padding: width * 0.009,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    marginBottom: height * 0.05,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
  },
});
