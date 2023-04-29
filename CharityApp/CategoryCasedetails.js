/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bigBackground, headerColor} from '../UserApp/Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';
import {RFValue} from 'react-native-responsive-fontsize';
import {Hoshi} from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  smallBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  secondaryColor,
  loginView,
  logintext,
  loginIcons,
  textInputcolor,
  iconContainer,
  eyeColor,
  textinTextinput,
  errorColor,
} from '../UserApp/Colors';
import {footerView, footerIcons} from '../UserApp/Colors';
class CategoryCasedetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedstate: false,
      categoryCase: this.props.route.params.categoryCase,
      icon_name: 'create-outline',
      // index:categoryCase.case_id
      edit_case_index: '',
      edit_case_name: '',
      edit_case_identfication: '',
      edit_case_age: '',
      edit_case_needs: '',
      edit_case_explaination: '',
      //   edit_case_category: '',
      Modalvisible: false,
    };
  }

  update() {
    let arr = this.state.categoryCase;
    arr.case_name = this.state.edit_case_name;
    arr.case_identfication = this.state.edit_case_identfication;
    arr.case_age = this.state.edit_case_age;
    arr.case_needs = this.state.edit_case_needs;
    arr.case_explaination = this.state.edit_case_explaination;
    // arr.case_category = this.state.edit_case_category;

    this.setState({
      categoryCase: arr,
      Modalvisible: false,
    });
    console.log(this.state.categoryCase);
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.3,
            backgroundColor: bigBackground,
            // backgroundColor: "#ff0",
          }}>
          <View
            style={{
              flexDirection: 'row-reverse',
              marginTop: RFValue(25),
              justifyContent: 'space-between',
            }}>
            {/* the saved icon */}
            <TouchableOpacity
              onPress={() => {
                // this.props.navigation.navigate('FullCaseEdit', {
                //   fullEdit: this.state.categoryCase,
                // });
                this.setState({Modalvisible: true});
              }}
              style={{
                alignItems: 'center',
                width: width * 0.25,
                justifyContent: 'center',
                marginTop: height * -0.01,
              }}>
              <Ionicons
                name={this.state.icon_name}
                size={35}
                color={loginView}
              />
            </TouchableOpacity>

            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  // marginRight: width * 0.2,
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: headerColor,
                  // marginTop: height * -0.01,
                }}>
                {this.state.categoryCase.case_name}
              </Text>
            </View>

            {/* icon back arrow  */}
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
        <View
          style={{
            backgroundColor: bigBackground,
            flex: 1,
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
            marginTop: height * -0.15,
          }}>
          <ScrollView>
            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                marginTop: height * 0.04,
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: 'bold',
              }}>
              شرح الحالة:
            </Text>
            <Text
              style={{
                marginLeft: width * 0.03,
                marginTop: height * 0.01,
                fontSize: 18,
                width: '95%',
                color: '#000',
                textAlign: 'justify',
                paddingHorizontal: '5%',
                // minHeight: height * 0.35,
                fontSize: 20,
                fontWeight: '500',
              }}>
              {this.state.categoryCase.case_explaination}
            </Text>

            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                marginTop: height * 0.04,
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: 'bold',
              }}>
              العمر:
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                {this.state.categoryCase.case_age} سنه
              </Text>
            </Text>
            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                marginTop: height * 0.04,
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: 'bold',
              }}>
              الرقم التعريفي :
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                {this.state.categoryCase.case_identfication}
              </Text>
            </Text>

            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                marginTop: height * 0.04,
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              المطلوب :
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                  //   marginBottom: 20,
                }}>
                {this.state.categoryCase.case_needs}
              </Text>
            </Text>
          </ScrollView>
        </View>

        <Modal
          visible={this.state.Modalvisible}
          onRequestClose={() => {
            this.setState({Modalvisible: false});
          }}>
          <>
            <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

            {/* Header  */}
            <View style={styles.headerContainer}>
              {/* Header Arrow  */}
              <TouchableOpacity
                style={styles.headerArrowContainer}
                onPress={() => {
                  // this.props.navigation.navigate('FullCaseEdit', {
                  //   fullEdit: this.state.categoryCase,
                  // });
                  this.setState({Modalvisible: false});
                }}>
                <FontAwesome5
                  name="chevron-right"
                  size={20}
                  style={{color: secondaryColor}}
                />
              </TouchableOpacity>

              {/* Header Tittle  */}
              <View style={styles.headerTittleContainer}>
                <Text style={styles.headerTittleTxtStyle}>
                  {' '}
                  تعديل البيانات{' '}
                </Text>
              </View>
            </View>

            {/* Body */}
            <KeyboardAvoidingView style={styles.bodyContainer}>
              <ScrollView>
                {/* Case Name  */}
                <View style={styles.containerOfEachTxtInput}>
                  <Hoshi
                    value={this.state.edit_case_name}
                    onChangeText={value => {
                      this.setState({edit_case_name: value});
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
                    value={this.state.edit_case_identfication}
                    onChangeText={value => {
                      this.setState({edit_case_identfication: value});
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
                    value={this.state.edit_case_age}
                    onChangeText={value => {
                      this.setState({edit_case_age: value});
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
                  <Hoshi
                    value={this.state.edit_case_explaination}
                    onChangeText={value => {
                      this.setState({edit_case_explaination: value});
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
                      paddingTop: 20,
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
                  {this.state.case_explaination_error}
                </Text>

                {/* Case Requirment  */}
                <View style={styles.containerOfEachTxtInput}>
                  <Hoshi
                    value={this.state.edit_case_needs}
                    onChangeText={value => {
                      this.setState({edit_case_needs: value});
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
                  {this.state.case_needs_error}
                </Text>
              </ScrollView>

              {/* Add Case Btn  */}
              <TouchableOpacity
                style={styles.addCaseBtn}
                onPress={() => {
                  //   this.Case_Details_Validation();
                  this.update();
                }}>
                <Text
                  style={{
                    fontSize: width * 0.05,
                    color: footerView,
                  }}>
                  تعديل
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </>
        </Modal>
      </>
    );
  }
}

export default CategoryCasedetails;
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
