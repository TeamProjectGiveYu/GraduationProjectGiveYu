/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  loginView,
  logintext,
  errorColor,
  footerView,
  DonateView,
  footerIcons,
  headerColor,
  bigBackground,
  secondaryColor,
  footerIconsOff,
  textinTextinput,
} from '../UserApp/Colors';
import axios from 'axios';
import { Dimensions } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Icons from 'react-native-vector-icons/Icons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';



class FullCasesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedstate: false,
      cases: this.props.route.params.cases,
      categories: this.props.route.params.categories,
      icon_name: 'create-outline',
      edit_case_index: '',
      edit_case_name: '',
      edit_case_identfication: '',
      edit_case_age: '',
      edit_case_needs: '',
      edit_case_info: '',
      edit_case_category: '',
      Modalvisible: false,
      details: {},
      edit_case_id: '',
      edit_case_name_error: '',
      edit_case_identfication_error: '',
      edit_case_age_error: '',
      edit_case_category_error: '',
      edit_case_needs_error: '',
      edit_case_info_error: '',
      case_money: '',
      case_money_error: '',
      case_dangerous: '',
      case_dangerous_error: '',
      hasFocus: true,

      // Drop Down List 
      categoriesWithFlags: [
        {
          title: 'مبلغ نقدي ',
          image: require('../Images/MoneyCate.png'),
        },
        {
          title: 'الملابس',
          image: require('../Images/ClothesCate.png'),
        },
        {
          title: 'الطعام',
          image: require('../Images/FoodCateg.png'),
        },
        {
          title: 'الدواء',
          image: require('../Images/MedicineCate.png'),
        },
        {
          title: 'الاجهزه',
          image: require('../Images/DevicesCate.png'),
        },
        {
          title: 'الكتب',
          image: require('../Images/EducationCate.png'),
        },
      ],
    };
  }

  

  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }
  // Functions:
 

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

    // Case Description Conditions
    if (this.state.cases.case_category.trim() == '') {
      this.setState({ edit_case_category_error: 'الرجاء إدخال فئة الحالة' });
      errors++;
    } else {
      this.setState({ edit_case_category_error: '' });
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
       this.update();
    }
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        {/* Header  */}
        <View
          style={{
            flex: 0.11,
            backgroundColor: bigBackground,
            // marginBottom:"3%"
          }}>
          <View style={styles.headerContainer}>

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
              }}>
              <FontAwesome5
                name="chevron-right"
                size={20}
                style={{
                  color: secondaryColor,
                  marginTop: height * 0.007,
                }}
              />
            </TouchableOpacity>

            {/* Page Tittle */}
            <View
              style={{
                // flexWrap: 'wrap',
                alignSelf: 'center',
                // backgroundColor: '#f0f',
              }}>
              <Text style={styles.styleOfPageTitle}>{this.state.cases.case_name}</Text>
            </View>



          </View>
        </View>


        {/* Body */}
        <View style={[styles.pageBodyContainer]}>
          <ScrollView showsVerticalScrollIndicator={false}>

            {/* Case info  */}
            <Text style={styles.labelsOfcases}>شرح الحالة : {''}</Text>
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
              {this.state.cases.case_info}
            </Text>

            {/* Case Age  */}
            <Text style={styles.labelsOfcases}>
              العمر : {''}
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

            {/* Case Identification Number  */}
            <Text style={styles.labelsOfcases}>
              الرقم التعريفي : {''}
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

            {/* Category Of The Case  */}
            <Text style={[styles.labelsOfcases]}>
              الفئه : {''}
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                {this.state.categories.category_name}
              </Text>
            </Text>

            {/* Case Requirment  */}
            <Text style={[styles.labelsOfcases, { marginBottom: 20 }]}>
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
            <Text style={[styles.labelsOfcases, { marginBottom: 20 }]}>
              المبلغ المطلوب:  {''}
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
            <Text style={[styles.labelsOfcases, { marginBottom: 20 }]}>
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
        </View>


      </>
    );
  }
}

export default FullCasesDetails;
const styles = StyleSheet.create({
  // FullCasesDetails Style:
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Page Header
  // ------------------------------------------------------------------------
  headerContainer1: {
    flex: 0.3,
    backgroundColor: bigBackground,
    // backgroundColor: "#ff0",
  },

  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "center",
    marginTop: RFValue(25),
    // minHeight:height*0.1,
  },
  // headerContainer2: {
  //   flexDirection: 'row',
  //   marginTop: RFValue(25),
  //   alignItems: 'center',
  //   justifyContent: 'space-evenly',
  //   // backgroundColor:'#f00',
  // },

  styleOfPageTitle: {
    fontSize: RFValue(18),
    color: headerColor,
    width: width * 0.6,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: width * 0.2,
    // backgroundColor:'#ff0',
  },

  backArrowContainerStyle: {
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
    justifyContent: 'center',
  },

  // Page Body
  // ------------------------------------------------------------------------
  pageBodyContainer: {
    backgroundColor: bigBackground,
    flex: 1,
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
    // marginTop: height * 0.15,
  },
  labelsOfcases: {
    color: logintext,
    fontSize: 20,
    width: width * 0.95,
    // marginLeft: width * 0.03,
    marginTop: height * 0.02,
    // textAlign: 'justify',
    paddingHorizontal: '5%',
    fontWeight: 'bold',
    alignSelf: "center"
  },



  // Edit Page Model Style:
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Style Of Model Header
  // ------------------------------------------------------------------------


});
