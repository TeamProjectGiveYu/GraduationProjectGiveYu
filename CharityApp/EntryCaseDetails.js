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
} from '../UserApp/Colors';
import {Dimensions} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class EntryCaseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Case Name
      case_name: '',
      case_name_err: '',

      // Case Identification Number
      case_id_num: '',
      case_id_num_err: '',

      // Case Age
      case_age: '',
      case_age_err: '',

      // Case Description
      case_descrip: '',
      case_descrip_err: '',

      // Case requirment
      case_requirment: '',
      case_requirment_err: '',

      categoryCases: this.props.route.params.categoryCases,
    };
  }

  //Functions:
  Case_Details_Validation() {
    let errors = 0;

    // Case Name Conditions
    if (this.state.case_name.trim() == '') {
      this.setState({case_name_err: 'الرجاء إدخال إسم الحالة'});
      errors++;
    } else {
      this.setState({case_name_err: ''});
    }

    // Case Identification Number Conditions
    if (this.state.case_id_num.trim() == '') {
      this.setState({case_id_num_err: 'الرجاء إدخال الرقم التعريفي للحالة'});
      errors++;
    } else {
      this.setState({case_id_num_err: ''});
    }

    // Case Age Conditions
    if (this.state.case_age.trim() == '') {
      this.setState({case_age_err: 'الرجاء إدخال عمر الحالة'});
      errors++;
    } else {
      this.setState({case_age_err: ''});
    }

    // Case Description Conditions
    if (this.state.case_descrip.trim() == '') {
      this.setState({case_descrip_err: 'الرجاء إدخال شرح لوضع الحالة'});
      errors++;
    } else {
      this.setState({case_descrip_err: ''});
    }

    // Case requirment Conditions
    if (this.state.case_requirment.trim() == '') {
      this.setState({case_requirment_err: 'الرجاء إدخال متطلبات الحالة'});
      errors++;
    } else {
      this.setState({case_requirment_err: ''});
    }

    // Correct Entered Data Condition
    if (errors == 0) {
      // Add The New Case To The Total Cases Of Category
      let casesList = this.state.categoryCases;
      casesList.push({
        case_id: 0,
        case_image: require('../Images/man.png'),
        case_name: this.state.case_name,
        case_show: 1,
      });
      this.setState({categoryCases: casesList});
      // Go Back To CasesOfCategory Page (To See The New Case You Must Do Refresh in CasesOfCategory Page)
      this.props.navigation.goBack();
      // console.log(this.state.categoryCases);
      // this.props.navigation.navigate('CasesOfCategory', {
      //   casesList: this.state.categories,
      // });
    }
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
              style={{color: secondaryColor}}
            />
          </TouchableOpacity>

          {/* Header Tittle  */}
          <View style={styles.headerTittleContainer}>
            <Text style={styles.headerTittleTxtStyle}>إضافة حالة</Text>
          </View>
        </View>

        {/* Body */}
        <KeyboardAvoidingView style={styles.bodyContainer}>
          <ScrollView>
            {/* Case Name  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_name}
                onChangeText={value => {
                  this.setState({case_name: value});
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
              {this.state.case_name_err}
            </Text>

            {/* Case Identification Number  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_id_num}
                onChangeText={value => {
                  this.setState({case_id_num: value});
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
              {this.state.case_id_num_err}
            </Text>

            {/* Case Age  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_age}
                onChangeText={value => {
                  this.setState({case_age: value});
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
              {this.state.case_age_err}
            </Text>

            {/* Case Description  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_descrip}
                onChangeText={value => {
                  this.setState({case_descrip: value});
                }}
                label={'شرح لوضع الحالة'}
                labelStyle={{
                  fontSize: width * 0.05,
                  fontWeight: 'bold',
                }}
                multiline={true}
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

            {/* Case Name Description Text */}
            <Text
              style={{
                fontSize: width * 0.04,
                color: errorColor,
                textAlign: 'center',
                // marginBottom: height * 0.01,
              }}>
              {this.state.case_descrip_err}
            </Text>

            {/* Case Requirment  */}
            <View style={styles.containerOfEachTxtInput}>
              <Hoshi
                value={this.state.case_requirment}
                onChangeText={value => {
                  this.setState({case_requirment: value});
                }}
                label={' المطلوب'}
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
              {this.state.case_requirment_err}
            </Text>
          </ScrollView>

          {/* Add Case Btn  */}
          <TouchableOpacity
            style={styles.addCaseBtn}
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
    width: width * 0.9,
    marginTop: height * 0.015,
    marginBottom: height * 0.01,
    // backgroundColor: '#ff0',
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
    shadowOffset: {width: 0, height: 7},
  },
});
