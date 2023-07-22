/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import {
  loginView,
  footerView,
  footerIcons,
  bigBackground,
  secondaryColor,
} from '../UserApp/Colors';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

export default class CasesOfCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // found: true,
      loading: false,
      categories: this.props.route.params.categories,
    };
  }

 

  


  // delete item...
  DeleteCaseFromCategory(index) {
    // console.log(index)
    let newArray = this.state.dddd;
    let case_id = xxxxxxxxxxxxxxxxxx;
    let dataToSend = {
      case_id: xxxxxxxxx,
    }
    axios.post("http://######/XXXXXX/delete_case.php",
      dataToSend)
      .then(res => {
        if (res.data == "deleted_success") {
          newArray.splice(index, 1)
          this.setState({ x: newArray });
          alert("تم الحذف بنجاح")
          this.setState({ x: newArray })
        } else if (res.data == "deleted_failed") {
          alert("حدث خطأ ما")
        } else if (res.data == 'case_not_found') {
          alert("الحالة ليست موجودة");
        }
      })
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
            <Text style={styles.headerTittleTxtStyle}>
              {this.state.categories.category_name}
            </Text>
            {/* <Text style={styles.headerTittleTxtStyle}>حالات التبرع</Text> */}
          </View>
        </View>

        {/* Body */}
        {this.state.categories.cases.length != 0 ? (
          // this.state.found ?
          // Cases Founded
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.bodyContainer}>
            <ScrollView>
              {/* Loading Cases */}
              {this.state.loading ? (
                // Loading (ActivityIndicator)
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <ActivityIndicator
                      size={50}
                      color={'#4e7d91'}
                      style={{ marginTop: height * 0.3 }}
                    /> */}
                </View>
              ) : (
                // Not Loading(There are Cases in this Category)
                <View style={styles.mGP_backendtemsContainer}>
                  {this.state.categories.cases.map(
                    (item, index) => (
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
                            height: height * 0.12,
                            width: '100%',
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity
                            style={{
                              height: height * 0.12,
                              width: '80%',
                              flexDirection: 'row',
                            }}
                            key={index}
                            onPress={() => {
                              this.props.navigation.navigate(
                                'CategoryCasedetails',
                                { cases: item },
                              );
                            }}>
                            <Image
                              source={{ uri: item.case_photo }}
                              style={{
                                width: '28%',
                                height: '55%',
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


                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              Alert.alert('', 'هل تريد الحذف ', [
                                { text: 'نعم', onPress: () => this.DeleteCaseFromCategory(index) },
                                { text: 'لا', onPress: () => null },
                              ]);
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
                    ),
                  )}
                </View>
              )}
            </ScrollView>

            {/* Add Case Btn  */}
            <TouchableOpacity
              style={styles.addCaseBtn}
              onPress={() => {
                this.props.navigation.navigate('EntryCaseDetails', {
                  categoryCases: this.state.categories,
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
          </KeyboardAvoidingView>
        ) : (
          // Cases Not Founded
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.bodyOfNotFoundCases}>
            <Image
              source={require('../Images/notFoundCases.png')}
              resizeMode="contain"
              style={{ width: 300, height: 250, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
              لا توجد حالات حتى الآن
            </Text>

            {/* Add Case Btn  */}
            <TouchableOpacity
              style={styles.addCaseBtn}
              onPress={() => {
                this.props.navigation.navigate('EntryCaseDetails', {
                  categoryCases: this.state.categories,
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
          </KeyboardAvoidingView>
        )}
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
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: width * 0.05,
    // backgroundColor:'#0ff',
    alignSelf: "center",
  },
  headerTittleTxtStyle: {
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: RFValue(18),
    marginTop: RFValue(20)
  },

  // Body Style
  // ------------------------------------------------------------------------
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bigBackground,
    // backgroundColor:'#0f0',
  },
  bodyOfNotFoundCases: {
    width: width,
    height: height * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bigBackground,
    // backgroundColor: '#E5ECF4',
  },
  mGP_backendtemsContainer: {
    width: width,
    alignItems: 'center',
    paddingBottom: height * 0.05,
    // backgroundColor:'#0f0',
  },
  containerOfEachCase: {
    elevation: 2,
    borderRadius: 15,
    width: width * 0.95,
    padding: width * 0.03,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: RFValue(9),
    backgroundColor: '#ffffff',
  },
  caseImgContainer: {
    borderWidth: 0.5,
    width: width * 0.166,
    height: height * 0.08,
    borderRadius: RFValue(50),
    // borderColor: '#B9C9CE',
  },
  caseNameContainer: {
    width: width * 0.6,
    // marginRight: width * 0.04,
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    // backgroundColor: '#0ff',
  },
  caseNameStyle: {
    color: '#000',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: RFValue(18),
  },
  // caseArrowStyle: {
  //   color: '#D9D9D9',
  //   alignSelf: 'center',
  //   padding: width * 0.02,
  //   // backgroundColor:'#f0f',
  // },
  deleteIconStyle: {
    color: '#D9D9D9',
    alignSelf: 'center',
    padding: width * 0.02,
    // backgroundColor:'#f0f',
  },
  addCaseBtn: {
    bottom: 0,
    elevation: 5,
    right: RFValue(15),
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.36,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: height * 0.05,
    padding: width * 0.009,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    marginBottom: height * 0.03,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
  },
});
