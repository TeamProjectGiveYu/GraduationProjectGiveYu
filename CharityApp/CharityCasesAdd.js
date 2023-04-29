/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
// import React from 'react';
import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
  I18nManager,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';
// import NetInfo from '@react-native-community/netinfo';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  bigBackground,
  footerIcons,
  footerIconsOff,
  footerView,
  loginView,
} from '../UserApp/Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CharityCasesAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases_list: [
        {
          case_image: require('../Images/man.png'),
          case_name: 'محمد احمد',
          case_show: 1,
          case_id: 1,
          case_category: 'مبلغ نقدي',
          case_age: '55',
          case_needs: '5000 جنيه',
          case_explaination:
            ' حاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجلهحاله عاجله',
          case_identfication: '221',
        },
        {
          case_image: require('../Images/woman.png'),
          case_name: 'فوزيه محمد',
          case_show: 1,
          case_id: 2,
          case_category: 'الملابس',
          case_age: '60',
          case_needs: 'ملابس شتويه',
          case_explaination: 'حاله عاجله',
          case_identfication: '550',
        },
        {
          case_image: require('../Images/woman.png'),
          case_name: 'منار محمد',
          case_show: 1,
          case_id: 3,
          case_category: 'الدواء',
          case_age: '55',
          case_needs: '3 panadol extra',
          case_explaination: 'حاله عاجله',
          case_identfication: '370',
        },
      ],

      // casesList: this.props.route.params.casesList,

      numOfItems: 0,
      found: true,
      search_key: '',
      loading: true,
      network: false,
      cancel_button: false,
      searchBox_width: '95%',
      searchColor: '#F2F5FC',
    };
  }

  // Functions
  searchfun(value) {
    let newarr = this.state.cases_list;
    let counter = 0;
    let found = false;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i].case_name.includes(value.toUpperCase().trim())) {
        newarr[i].case_show = 1;
        found = true;
      } else {
        newarr[i].case_show = 0;

        // counter++;
      }

      this.setState({cases_list: newarr, numOfItems: counter, found: found});
    }

    // let newarr = this.state.casesList;
    // let casesOfEachCat = newarr.category_cases;
    // let counter = 0;
    // let found = false;
    // for (let i = 0; i < newarr.length; i++) {
    //   for (let j = 0; j < casesOfEachCat.length; j++) {
    //     if (casesOfEachCat[j].case_name.includes(value.toUpperCase().trim())) {
    //       casesOfEachCat[j].case_show = 1;
    //       found = true;
    //     } else {
    //       casesOfEachCat[j].case_show = 0;
    //       // counter++;
    //     }

    //     this.setState({casesList: newarr, numOfItems: counter, found: found});
    //   }
    // }
  }

  DeleteCase(index) {
    this.state.cases_list.splice(index, 1);
    this.setState({cases_list: this.state.cases_list});
  }
  render() {
    return (
      <>
        {/* {this.state.network ? (
          <> */}
        {/* Header */}
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        <View
          style={{
            height: height * 0.085,
            backgroundColor: bigBackground,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* Search */}
          <SearchBar
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            backgroundColor={this.state.searchColor}
            placeholder="البحث بإسم الحاله"
            onClearPress={() => {
              this.setState({searchColor: '#F2F5FC'});
              this.searchfun('');
            }}
            onPressIn={() => this.setState({searchColor: '#dae2f5'})}
            searchIcon={false}
            value={this.state.search_key}
            onChangeText={value => {
              this.setState({search_key: value});
              this.searchfun(value);
            }}
            style={{marginBottom: 10, marginTop: 10, width: '95%'}}
            textInputStyle={{
              borderRadius: 25,
              elevation: 2,
              paddingRight: 10,
              paddingLeft: 10,
              marginLeft: 5,
            }}
          />
          {this.state.cancel_button ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  cancel_button: false,
                  searchBox_width: '95%',
                  search_key: null,
                });
              }}
              style={{alignSelf: 'center', marginLeft: '2%'}}>
              <Icon name={'times'} color={'#D9D9D9'} size={19} />
            </TouchableOpacity>
          ) : null}
        </View>
        {/* Body */}
        {this.state.found ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              flex: 1,
              backgroundColor: bigBackground,
            }}>
            {this.state.cases_list.length != 0 ? (
              <>
                <ScrollView>
                  <View>
                    {this.state.cases_list.map((item, index) =>
                      // key = {index};
                      // item.category_cases.map((user_item, user_index) =>
                      item.case_show == 1 ? (
                        <View
                          key={index}
                          style={{
                            backgroundColor: '#ffffff',
                            marginVertical: 10,
                            borderRadius: 15,
                            width: '95%',
                            alignSelf: 'center',
                            elevation: 2,
                          }}>
                          <View
                            style={{
                              height: height * 0.13,
                              width: '100%',
                              flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                              style={{
                                height: height * 0.13,
                                width: '80%',
                                flexDirection: 'row',
                              }}
                              key={index}
                              onPress={() => {
                                this.props.navigation.navigate(
                                  'FullCasesDetails',
                                  {caseDetails: item},
                                );
                              }}>
                              <Image
                                source={item.case_image}
                                style={{
                                  width: '28%',
                                  height: '75%',
                                  // borderRadius: 15,
                                  alignSelf: 'center',
                                  // borderWidth: 0.5,
                                  borderColor: '#B9C9CE',
                                  marginLeft: '4%',
                                }}
                                resizeMode="center"
                              />
                              <View
                                style={{
                                  alignSelf: 'center',
                                  marginLeft: '5%',
                                  width: '50%',
                                  // backgroundColor: '#000',
                                }}>
                                <Text
                                  style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                    textAlign: 'left',
                                  }}>
                                  {item.case_name}
                                </Text>

                                <Text
                                  style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                    textAlign: 'left',
                                  }}>
                                  {item.case_name}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                this.DeleteCase(index);
                              }}
                              style={{
                                // backgroundColor: '#00f',
                                width: '20%',
                                // height: '100%',
                                // alignSelf: 'center',
                                justifyContent: 'center',
                              }}>
                              <Icon
                                name="trash"
                                size={24}
                                style={{
                                  color: '#D9D9D9',
                                  alignSelf: 'center',
                                  marginLeft: '3%',
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      ) : null,
                    )}
                  </View>
                  {/* )} */}
                </ScrollView>
                {/* <View> */}
                {/* Add Case Btn  */}
                <TouchableOpacity
                  style={styles.addCaseBtn}
                  onPress={() => {
                    this.props.navigation.navigate('AddFullCases', {
                      categoryCases: this.state.cases_list,
                    });
                  }}>
                  <Text
                    style={{
                      fontSize: width * 0.05,
                      color: footerView,
                    }}>
                    إضافة حالة
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View>
                  <Text
                    style={{
                      color: '#aaa',
                      textAlign: 'center',
                      // justifyContent: 'center',
                      marginTop: RFValue(250),
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    لا يوجد حالات
                  </Text>
                </View>
                {/* <View> */}
                {/* Add Case Btn  */}
                <TouchableOpacity
                  style={styles.addCaseBtn}
                  onPress={() => {
                    this.props.navigation.navigate('AddFullCases');
                  }}>
                  <Text
                    style={{
                      fontSize: width * 0.05,
                      color: footerView,
                    }}>
                    إضافة حالة
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              height: '82%',
              width: '100%',
              //  backgroundColor: "#f0f",
              // flex: 1,
              backgroundColor: '#E5ECF4',
              // borderTopLeftRadius: 40,
              // borderTopRightRadius: 40,
              // marginTop: height * -0.09,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Image
              source={require('../Images/notFoundCases.png')}
              resizeMode="contain"
              style={{width: 300, height: 250, alignSelf: 'center'}}
            />
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
              لا يوجد مؤسسات بهذا الأسم
            </Text>
          </KeyboardAvoidingView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  addCaseBtn: {
    bottom: 0,
    elevation: 5,
    right: RFValue(15),
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.3,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: height * 0.05,
    padding: width * 0.009,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    marginBottom: height * 0.03,
    backgroundColor: footerIcons,
    shadowOffset: {width: 0, height: 7},
  },
});
