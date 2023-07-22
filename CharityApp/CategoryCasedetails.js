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
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bigBackground, headerColor } from '../UserApp/Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';
import { RFValue } from 'react-native-responsive-fontsize';
import { Hoshi } from 'react-native-textinput-effects';
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
import { footerView, footerIcons } from '../UserApp/Colors';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

class CategoryCasedetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedstate: false,
      cases: this.props.route.params.cases,
      // categories: this.props.route.params.categories,
      icon_name: 'create-outline',
      edit_case_name_error: '',
      edit_case_identfication_error: '',
      edit_case_age_error: '',
      edit_case_needs_error: '',
      edit_case_info_error: '',
      edit_case_money_error: '',
      edit_case_dangerous_error: '',
      Modalvisible: false,
      hasFocus: true,
    };
  }

  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }

 


  // update() {
  //   let arr = this.state.cases;
  //   arr.case_name = this.state.cases.case_name;
  //   arr.case_identfication = this.state.cases.case_identfication;
  //   arr.case_age = this.state.cases.case_age;
  //   arr.case_needs = this.state.cases.case_needs;
  //   arr.case_info = this.state.cases.case_info;

  //   this.setState({
  //     cases: arr,
  //     Modalvisible: false,
  //   });
  //   console.log(this.state.cases);
  // }

  //Functions:
  Case_Details_Validation() {
    let errors = 0;

    // Case Name Conditions
    if (this.state.cases.case_name.trim() == '') {
      this.setState({ edit_case_name_error: 'الرجاء إدخال إسم الحالة' });
      errors++;
    } else {
      this.setState({ edit_case_name_error: '' });
    }

    // Case Identification Number Conditions
    if (this.state.cases.case_identfication.trim() == '') {
      this.setState({
        edit_case_identfication_error: 'الرجاء إدخال الرقم التعريفي للحالة',
      });
      errors++;
    } else {
      this.setState({ edit_case_identfication_error: '' });
    }

    // Case Age Conditions
    if (this.state.cases.case_age.trim() == '') {
      this.setState({ edit_case_age_error: 'الرجاء إدخال عمر الحالة' });
      errors++;
    } else {
      this.setState({ edit_case_age_error: '' });
    }

    // Case requirment Conditions
    if (this.state.cases.case_needs.trim() == '') {
      this.setState({ edit_case_needs_error: 'الرجاء إدخال متطلبات الحالة' });
      errors++;
    } else {
      this.setState({ edit_case_needs_error: '' });
    }
    // Case Description Conditions
    if (this.state.cases.case_info.trim() == '') {
      this.setState({
        edit_case_info_error: 'الرجاء إدخال شرح لوضع الحالة',
      });
      errors++;
    } else {
      this.setState({ edit_case_info_error: '' });
    }
    if (this.state.cases.case_info.trim() == '') {
      this.setState({
        edit_case_info_error: 'الرجاء إدخال شرح لوضع الحالة',
      });
      errors++;
    } else {
      this.setState({ edit_case_info_error: '' });
    } if (this.state.cases.case_info.trim() == '') {
      this.setState({
        edit_case_info_error: 'الرجاء إدخال شرح لوضع الحالة',
      });
      errors++;
    } else {
      this.setState({ edit_case_info_error: '' });
    }
    if (this.state.cases_money == '') {
      this.setState({ edit_case_money_error: 'الرجاء إدخال مبلغ الحالة' });
      errors++;
    } else {
      this.setState({ edit_case_money_error: '' });
    }
    if (this.state.cases_dangerous == '') {
      this.setState({ edit_case_dangerous_error: 'الرجاء إدخال مدى خطورة الحالة' });
      errors++;
    } else {
      this.setState({ edit_case_dangerous_error: '' });
    }
    // Correct Entered Data Condition
    if (errors == 0) {
      
    }
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.35,
            backgroundColor: bigBackground,
            // backgroundColor: "#ff0",
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: RFValue(25),
              justifyContent: 'space-between',
              alignSelf: "center"
            }}>

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
                alignSelf: "center"
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


            <View style={{ alignSelf: 'center' }}>
              <Text
                style={{
                  // marginRight: width * 0.2,
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: headerColor,
                  fontSize: RFValue(18),
                  color: headerColor,
                  width: width * 0.6,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  // marginRight: width * 0.2,
                  // backgroundColor:'#ff0',
                  // marginTop: height * -0.01,
                }}>
                {this.state.cases.case_name}
              </Text>
            </View>

            {/* the saved icon */}
            <TouchableOpacity
              onPress={() => {
                // this.props.navigation.navigate('FullCaseEdit', {
                //   fullEdit: this.state.cases,
                // });
                this.setState({ Modalvisible: true });
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
          </View>
        </View>
        {/* Body */}
        <View
          style={{
            backgroundColor: bigBackground,
            flex: 1,
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
            marginTop: height * -0.2,
          }}>
          <ScrollView>
            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                // marginTop: height * 0.04,
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
                // minHeight: height * 0.2,
                // maxHeight: height * 2.04,
                // height: height * 0.35,
                fontSize: 20,
                fontWeight: '500',
                // backgroundColor:"#ff0"
              }}>
              {this.state.cases.case_info}
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
                {this.state.cases.case_age} سنه
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
                {this.state.cases.case_identfication}
              </Text>
            </Text>

            <Text style={{
              color: logintext,
              fontSize: 22,
              marginLeft: width * 0.03,
              marginTop: height * 0.04,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold'
            }}>
              قيمة التبرع: {''}
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
                {this.state.cases.case_needs}
              </Text>
            </Text>
            <Text style={{
              color: logintext,
              fontSize: 22,
              marginLeft: width * 0.03,
              marginTop: height * 0.04,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
              المبلغ المطلوبه:  {''}
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
                {this.state.cases.case_money}
              </Text>
            </Text>
            <Text style={{
              color: logintext,
              fontSize: 22,
              marginLeft: width * 0.03,
              marginTop: height * 0.04,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
              مدى الخطورة:  {''}
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
                {this.state.cases.case_dangerous}
              </Text>
            </Text>
          </ScrollView>
        </View >

        {/* update cases */}
        < Modal
          visible={this.state.Modalvisible}
          onRequestClose={() => {
            this.setState({ Modalvisible: false });
          }
          }>
          <>
            <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

            {/* Header  */}
            <View style={styles.headerContainer}>
              {/* Header Arrow  */}
              <TouchableOpacity
                style={styles.headerArrowContainer}
                onPress={() => {
                  // this.props.navigation.navigate('FullCaseEdit', {
                  //   fullEdit: this.state.cases,
                  // });
                  this.setState({ Modalvisible: false });
                }}>
                <FontAwesome5
                  name="chevron-right"
                  size={20}
                  style={{ color: secondaryColor }}
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
                    value={this.state.cases.case_name}
                    onChangeText={value => {
                      this.setState({
                        cases: {
                          category_id: this.state.cases.category_id,
                          case_id: this.state.cases.case_id,
                          case_name: value,
                          case_age: this.state.cases.case_age,
                          case_category: this.state.cases.case_category,
                          case_info:
                            this.state.cases.case_info,
                          case_identfication:
                            this.state.cases.case_identfication,
                          case_needs: this.state.cases.case_needs,
                          case_money: this.state.cases.case_money,
                          case_dangerous: this.state.cases.case_dangerous,
                        },
                      });
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
                  {this.state.edit_case_name_error}
                </Text>

                {/* Case Identification Number  */}
                <View style={styles.containerOfEachTxtInput}>
                  <Hoshi
                    value={this.state.cases.case_identfication}
                    onChangeText={value => {
                      this.setState({
                        cases: {
                          category_id: this.state.cases.category_id,
                          case_id: this.state.cases.case_id,
                          case_name: this.state.cases.case_name,
                          case_age: this.state.cases.case_age,
                          case_category: this.state.cases.case_category,
                          case_info:
                            this.state.cases.case_info,
                          case_identfication: value,
                          case_needs: this.state.cases.case_needs,
                          case_money: this.state.cases.case_money,
                          case_dangerous: this.state.cases.case_dangerous,
                        },
                      });
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
                  {this.state.edit_case_identfication_error}
                </Text>

                {/* Case Age  */}
                <View style={styles.containerOfEachTxtInput}>
                  <Hoshi
                    value={this.state.cases.case_age}
                    onChangeText={value => {
                      this.setState({
                        cases: {
                          category_id: this.state.cases.category_id,
                          case_id: this.state.cases.case_id,
                          case_name: this.state.cases.case_name,
                          case_age: value,
                          case_category: this.state.cases.case_category,
                          case_info:
                            this.state.cases.case_info,
                          case_identfication:
                            this.state.cases.case_identfication,
                          case_needs: this.state.cases.case_needs,
                          case_money: this.state.cases.case_money,
                          case_dangerous: this.state.cases.case_dangerous,
                        },
                      });
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
                  {this.state.edit_case_age_error}
                </Text>

                {/* Case info  */}
                <View style={styles.containerOfEachTxtInput}>

                  <Text
                    style={{
                      color: "#6d7b86",
                      textAlign: "left",
                      paddingHorizontal: width * 0.08,
                      fontSize: width * 0.05,
                      fontWeight: "bold"
                    }}>{'شرح لوضع الحالة'}</Text>
                  <AutoGrowingTextInput

                    value={this.state.cases.case_info}
                    onChangeText={value => {
                      this.setState({
                        cases: {
                          category_id: this.state.cases.category_id,
                          case_id: this.state.cases.case_id,
                          case_name: this.state.cases.case_name,
                          case_age: this.state.cases.case_age,
                          case_category: this.state.cases.case_category,
                          case_info: value,
                          case_identfication:
                            this.state.cases.case_identfication,
                          case_needs: this.state.cases.case_needs,
                          case_money: this.state.cases.case_money,
                          case_dangerous: this.state.cases.case_dangerous,
                        },
                      });
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
                  {this.state.edit_case_info_error}
                </Text>

                {/* Case Requirment  */}
                <View style={styles.containerOfEachTxtInput}>
                  <Hoshi
                    value={this.state.cases.case_needs}
                    onChangeText={value => {
                      this.setState({
                        cases: {
                          category_id: this.state.cases.category_id,
                          case_id: this.state.cases.case_id,
                          case_name: this.state.cases.case_name,
                          case_age: this.state.cases.case_age,
                          case_category: this.state.cases.case_category,
                          case_info: this.state.cases.case_info,
                          case_identfication: this.state.cases.case_identfication,
                          case_needs: value,
                          case_money: this.state.cases.case_money,
                          case_dangerous: this.state.cases.case_dangerous,
                        },
                      });
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
                    // height={200}
                    borderHeight={3}
                    inputPadding={30}
                    inputStyle={{
                      textAlign: 'right',
                      fontSize: 20,
                    }}
                    multiline={true}
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
                  {this.state.edit_case_needs_error}
                </Text>
                <View style={styles.containerOfEachTxtInput}>
                  <Hoshi
                    value={this.state.cases.case_money}
                    onChangeText={value => {
                      this.setState({
                        cases: {
                          category_id: this.state.cases.category_id,
                          case_id: this.state.cases.case_id,
                          case_name: this.state.cases.case_name,
                          case_age: this.state.cases.case_age,
                          case_category: this.state.cases.case_category,
                          case_info: this.state.cases.case_info,
                          case_identfication: this.state.cases.case_identfication,
                          case_needs: this.state.cases.case_needs,
                          case_money: value,
                          case_dangerous: this.state.cases.case_dangerous,
                        },
                      });
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
                    // height={200}
                    borderHeight={3}
                    inputPadding={30}
                    inputStyle={{
                      textAlign: 'right',
                      fontSize: 20,
                    }}
                    multiline={true}
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
                  {this.state.edit_case_money_error}
                </Text>
                <View style={styles.containerOfEachTxtInput}>
                  <Hoshi
                    value={this.state.cases.case_dangerous}
                    onChangeText={value => {
                      this.setState({
                        cases: {
                          category_id: this.state.cases.category_id,
                          case_id: this.state.cases.case_id,
                          case_name: this.state.cases.case_name,
                          case_age: this.state.cases.case_age,
                          case_category: this.state.cases.case_category,
                          case_info: this.state.cases.case_info,
                          case_identfication: this.state.cases.case_identfication,
                          case_needs: this.state.cases.case_needs,
                          case_money: this.state.cases.case_money,
                          case_dangerous: value,
                        },
                      });
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
                    // height={200}
                    borderHeight={3}
                    inputPadding={30}
                    inputStyle={{
                      textAlign: 'right',
                      fontSize: 20,
                    }}
                    multiline={true}
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
                  {this.state.edit_case_dangerous_error}
                </Text>
                {/* edit Case Btn  */}
                <TouchableOpacity
                  style={[styles.addCaseBtn, { alignSelf: "center" }]}
                  onPress={() => {
                    this.Case_Details_Validation();
                  }}>
                  <Text
                    style={{
                      fontSize: width * 0.05,
                      color: footerView,
                    }}>
                    تعديل
                  </Text>
                </TouchableOpacity>
              </ScrollView>


            </KeyboardAvoidingView>
          </>
        </Modal >
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
    width: width * 0.95,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    marginLeft: width * -0.05,
    // backgroundColor: '#ff0',
    textAlign: "justify"
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
