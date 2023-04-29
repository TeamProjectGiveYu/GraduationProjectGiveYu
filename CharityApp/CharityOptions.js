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
} from '../UserApp/Colors';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CharityOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          category_id: 0,
          category_name: 'مبلغ نقدي',
          category_logo: require('../Images/MoneyCate.png'),
          category_cases: [
            {
              case_id: 0,
              case_image: require('../Images/man.png'),
              case_name: 'محمد احمد',
              case_show: 1,
              case_age: '55',
              case_needs: '5000 جنيه',
              case_explaination:
                ' حاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجله',
              case_identfication: '221',
            },
            {
              case_id: 1,
              case_image: require('../Images/woman.png'),
              case_name: 'فوزية صالح',
              case_show: 1,
              case_age: '55',
              case_needs: '5000 جنيه',
              case_explaination:
                ' حاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجله',
              case_identfication: '221',
            },
            {
              case_id: 2,
              case_image: require('../Images/man.png'),
              case_name: ' عبدالرحمن محمد',
              case_show: 1,
              case_age: '55',
              case_needs: '5000 جنيه',
              case_explaination:
                ' حاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجله',
              case_identfication: '221',
            },
            {
              case_id: 3,
              case_image: require('../Images/woman.png'),
              case_name: 'نورهان عبدالله',
              case_show: 1,
              case_age: '55',
              case_needs: '5000 جنيه',
              case_explaination:
                ' حاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجله',
              case_identfication: '221',
            },
          ],
        },
        {
          category_id: 1,
          category_name: 'الملابس',
          category_logo: require('../Images/ClothesCate.png'),
          category_cases: [
            {
              case_id: 0,
              case_image: require('../Images/man.png'),
              case_name: 'محمد احمد',
              case_show: 1,
              case_age: '60',
              case_needs: 'ملابس شتويه',
              case_explaination: 'حاله عاجله',
              case_identfication: '550',
            },
            {
              case_id: 1,
              case_image: require('../Images/woman.png'),
              case_name: 'فوزية صالح',
              case_show: 1,
              case_age: '60',
              case_needs: 'ملابس شتويه',
              case_explaination: 'حاله عاجله',
              case_identfication: '550',
            },
            {
              case_id: 2,
              case_image: require('../Images/man.png'),
              case_name: ' عبدالرحمن محمد',
              case_show: 1,
              case_age: '60',
              case_needs: 'ملابس شتويه',
              case_explaination: 'حاله عاجله',
              case_identfication: '550',
            },
          ],
        },
        // {
        //   category_id: 2,
        //   category_name: 'الطعام',
        //   category_logo: require('../Images/FoodCateg.png'),
        //   category_cases: [
        //     {
        //       case_id: 0,
        //       case_image: require('../Images/man.png'),
        //       case_name: 'محمد احمد',
        //       case_show: 1,
        //     },
        //     {
        //       case_id: 2,
        //       case_image: require('../Images/man.png'),
        //       case_name: ' عبدالرحمن محمد',
        //       case_show: 1,
        //     },
        //     {
        //       case_id: 1,
        //       case_image: require('../Images/woman.png'),
        //       case_name: 'فوزية صالح',
        //       case_show: 1,
        //     },
        //   ],
        // },
        {
          category_id: 3,
          category_name: 'الدواء',
          category_logo: require('../Images/MedicineCate.png'),
          category_cases: [
            {
              case_id: 0,
              case_image: require('../Images/woman.png'),
              case_name: 'فوزية صالح',
              case_show: 1,
              case_age: '55',
              case_needs: '3 panadol extra',
              case_explaination: 'حاله عاجله',
              case_identfication: '370',
            },
            {
              case_id: 1,
              case_image: require('../Images/woman.png'),
              case_name: 'نورهان عبدالله',
              case_show: 1,
              case_age: '55',
              case_needs: '3 panadol extra',
              case_explaination: 'حاله عاجله',
              case_identfication: '370',
            },
            {
              case_id: 2,
              case_image: require('../Images/man.png'),
              case_name: 'محمد احمد',
              case_show: 1,
              case_age: '55',
              case_needs: '3 panadol extra',
              case_explaination: 'حاله عاجله',
              case_identfication: '370',
            },
            {
              case_id: 3,
              case_image: require('../Images/man.png'),
              case_name: ' عبدالرحمن محمد',
              case_show: 1,
              case_age: '55',
              case_needs: '3 panadol extra',
              case_explaination: 'حاله عاجله',
              case_identfication: '370',
            },
          ],
        },
        // {
        //   category_id: 4,
        //   category_name: 'الأجهزة',
        //   category_logo: require('../Images/DevicesCate.png'),
        //   category_cases: [
        //     {
        //       case_id: 0,
        //       case_image: require('../Images/man.png'),
        //       case_name: 'محمد احمد',
        //       case_show: 1,
        //     },
        //     {
        //       case_id: 1,
        //       case_image: require('../Images/woman.png'),
        //       case_name: 'فوزية صالح',
        //       case_show: 1,
        //     },
        //   ],
        // },
        // {
        //   category_id: 5,
        //   category_name: 'الكتب',
        //   category_logo: require('../Images/EducationCate.png'),
        //   category_cases: [
        //     {
        //       case_id: 0,
        //       case_image: require('../Images/woman.png'),
        //       case_name: 'نورهان عبدالله',
        //       case_show: 1,
        //     },
        //   ],
        // },
      ],
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Header  */}
        <View style={styles.headerContainer}>
          {/* Header Tittle  */}
          <View style={styles.headerTittleContainer}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.headerTittleTxtStyle}>مؤسسةأهل</Text>
              <Text style={styles.headerTittleTxtStyle}>مصر</Text>
            </View>
          </View>

          {/* Notifications Icon  */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Notifications');
            }}>
            <Ionicons name="notifications" size={30} color={footerIcons} />
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={styles.bodyContainer}>
          <View>
            {/* Cases Option */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.contianerOfCharityOptions}
              onPress={() => {
                this.props.navigation.navigate('CharityCasesAdd', {
                  casesList: this.state.categories,
                });
              }}>
              {/* Cases Option Logo  */}
              <Image
                source={require('../Images/cases.png')}
                resizeMode="center"
                style={styles.optionLogoStyle}
              />

              {/* Cases Option Text  */}
              <View>
                <Text
                  style={[
                    styles.styleOfOptionTxt,
                    {marginTop: height * 0.015},
                  ]}>
                  الحالات
                </Text>
              </View>
            </TouchableOpacity>

            {/* Donation Categories Option */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.contianerOfCharityOptions}
              onPress={() => {
                // this.props.navigation.navigate('AddCategories');
                this.props.navigation.navigate('Categories', {
                  charityCategories: this.state.categories,
                });
              }}>
              {/* Donation Categories Option Logo  */}
              <Image
                source={require('../Images/type_donate.png')}
                resizeMode="center"
                style={styles.optionLogoStyle}
              />

              {/* Donation Categories Option Text  */}
              <View>
                <Text style={styles.styleOfOptionTxt}>فئات التبرع</Text>
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
    paddingLeft: width * 0.2,
    backgroundColor: bigBackground,
    // backgroundColor: "#f0f",
  },
  headerTittleContainer: {
    width: width * 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingLeft: width * 0.08,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: RFValue(18),
    // marginLeft:width *0.12,
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
    shadowOffset: {width: 0, height: 7},
    backgroundColor: '#ffffff',
  },
  styleOfOptionTxt: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(18),
  },
  optionLogoStyle: {
    width: width * 0.3,
    height: height * 0.13,
    alignSelf: 'center',
  },
});
