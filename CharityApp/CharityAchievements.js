/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */

import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,Share
} from 'react-native';
import {
  loginView,
  loginIcons,
  footerView,
  footerIcons,
  bigBackground,
  secondaryColor,
  footerIconsOff,
} from '../UserApp/Colors';
import { Dimensions } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';

export default class CharityAchievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achievements: [],
      charity_data: this.props.route.params.charity_data,
      show_Achievement_to_edit: false,
      Achievement_to_be_edit: '',
      edit_item_index: '',
      achievement_id:'',
      // Add Achievements
      show_add_Achievement: false,
      new_achievement: '',
    };
  }

  
  // Functions
  AddAchievement() {
    axios
      .post(
        'http://########/XXXXXXXXXXX/insert_achievements.php', {
       
      })
      .then(res => {
        // console.log(res.data);
        if (res.data == 'achievement_added') {
          // this.setState({ new_achievement: this.state.achievements.achievement_text })
          alert('تم إضافة انجاز جديدة')
          // console.log(res.data)
        } else if (res.data == 'failed_to_add_achievements') {
          alert('فشل في إضافة انجاز جديدة')
        } else if (res.data == 'charity_not_found') {
          alert('المستخدم غير موجود')
        }
      });
      this.setState({ show_add_Achievement: false });
  }

  DeleteAchievement(index) {
    // console.log(index)
    let newArray = this.state.xxxxxx;
    let achievement_id = newArray[index].xxxxxxxx;
    let dataToSend = {
      xxxxxxxx: ccccccccc,
    }
    axios.post("http://###########/XXXXXXXXXXXXXXXX/delete_achievments.php",
      dataToSend)
      .then(res => {
        // console.log(achievement_id)
        if (res.data == "deleted_success") {
          newArray.splice(index, 1)
          this.setState({ x: newArray });
          alert("تم الحذف بنجاح")
          this.setState({ x: newArray })
        } else if (res.data == "deleted_failed") {
          alert("حدث خطأ ما")
        } else if (res.data == 'achievement_not_found') {
          alert("الحالة ليست موجودة");
        }
      })
  }

  

 


  edit(index) {
    let achievements = this.state.achievements;
    this.setState({
      edit_item_index: index,
      achievement_id:achievements[index].achievement_id,
      Achievement_to_be_edit: achievements[index].achievement_text,
    });
    // console.log(this.state.achievements.achievement_time)
    this.setState({
      achievements: achievements,
    });
    // console.log(this.state.achievements.achievement_time)
  }
  update() {
    let achievements = this.state.achievements;
    achievements[this.state.edit_item_index].achievement_text =
      this.state.Achievement_to_be_edit;

    this.setState({
      achievements: achievements,
    });
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
            <Text style={styles.headerTittleTxtStyle}>إنجازات المؤسسة</Text>
          </View>
        </View>

        {/* Body */}
        {this.state.achievements.length != 0 ? (
          // Achievements Founded
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
                // Not Loading(There are Achievements for the charity)
                <View style={styles.mapItemsContainer}>
                  {this.state.achievements.map((item, index) => (
                    // Each Achievement
                    <View key={index} style={styles.eachAchievementContainer}>
                      {/* Achievement Brief Text  */}
                      <View>
                        <Text
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          style={styles.achievementBriefStyle}>
                          {item.achievement_text}
                        </Text>
                      </View>

                      {/* Footer Of Achievement View  */}
                      <View
                        style={{
                          width: width * 0.86,
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingTop: height * 0.01,
                          height: height * 0.05,
                          // paddingTop:height*0.002,
                          justifyContent: 'space-between',
                          // backgroundColor: '#0f0',
                        }}>
                        {/* Achievement Time Post  */}
                        <View style={styles.achievementTimePostContainer}>
                          <Text
                            style={{
                              // color: '#000',
                              color: footerIconsOff,
                              paddingHorizontal: width * 0.01,
                              fontSize: RFValue(12),
                            }}>
                            {item.achievement_time}
                          </Text>
                        </View>

                        {/* Achievement Options  */}
                        <View style={styles.achievementOptionsContainer}>
                          {/* Share Option  */}
                          <TouchableOpacity
                          onPress={()=>{
                            this.sharePost(index)
                          }}
                            style={styles.containerOfEachOption}>
                            <MaterialIcons
                              name="share"
                              size={18}
                              color={footerIcons}
                            />
                            <Text
                              style={{
                                color: '#000',
                                fontSize: RFValue(12),
                              }}>
                              مشاركة
                            </Text>
                          </TouchableOpacity>

                          {/* Edit Option  */}
                          <TouchableOpacity
                            style={styles.containerOfEachOption}
                            onPress={() => {
                              this.setState({
                                show_Achievement_to_edit: true,   
                              });
                              this.edit(index);
                            }}>
                            <MaterialIcons
                              name="edit"
                              size={18}
                              color={footerIcons}
                            />
                            <Text
                              style={{
                                color: '#000',
                                fontSize: RFValue(12),
                              }}>
                              تعديل
                            </Text>
                          </TouchableOpacity>

                          {/* Delete Option  */}
                          <TouchableOpacity
                            style={styles.containerOfEachOption}
                            onPress={() => {
                              this.DeleteAchievement(index);
                            }}>
                            <FontAwesome5
                              name="trash-alt"
                              size={16}
                              color={footerIcons}
                            />
                            <Text
                              style={{
                                color: '#000',
                                fontSize: RFValue(12),
                              }}>
                              حذف
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </ScrollView>

            {/* Add Category Btn  */}
            <TouchableOpacity
              style={styles.addCategoryBtn}
              onPress={() => {
                this.setState({ show_add_Achievement: true });
              }}>
              <FontAwesome5 name="plus" size={18} color={footerView} />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        ) : (
          // Achievements Not Founded
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.bodyOfNotFoundAchievements}>
            <Image
              source={require('../Images/notFoundAchievements.jpg')}
              resizeMode="contain"
              style={{ width: 300, height: 250, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
              لا توجد إنجازات حتى الآن
            </Text>

            {/* Add Category Btn  */}
            <TouchableOpacity
              style={styles.addCategoryBtn}
              onPress={() => {
                this.setState({ show_add_Achievement: true });
              }}>
              <FontAwesome5 name="plus" size={18} color={footerView} />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}

        {/* Add Achievement Modal ..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.show_add_Achievement}
          onRequestClose={() => {
            showModelInfo = this.state.show_add_Achievement;
            this.setState({ show_add_Achievement: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                 
                  value={this.state.new_achievement}
                  onChangeText={value => {
                    this.setState({ new_achievement: value });
                  }}
                  
                  label={'إضافة إنجاز'}
                  // this is used as active border color
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  multiline={true}
                  //   editable={true}
                  height={300}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    justifyContent: 'flex-start',
                    width: width * 0.8,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    elevation: 1,
                    paddingRight: 10,
                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                }}>
                {/* Cancel Btn  */}
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show_add_Achievement: false });
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: width * 0.053,
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                {/* Save Btn  */}
                <TouchableOpacity
                  onPress={() => {
                    // this.setState({ show_add_Achievement: false });
                    this.AddAchievement();
                    // this.state.new_achievement = '';
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: width * 0.053,
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Edit Achievement Modal ..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.show_Achievement_to_edit}
          onRequestClose={() => {
            this.setState({ show_Achievement_to_edit: false });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'تعديل الانجاز'}
                  value={this.state.Achievement_to_be_edit}
                  onChangeText={value => {
                    this.setState({
                      Achievement_to_be_edit:value
                    
                    });
                  }}
                  // this is used as active border color
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  multiline={true}
                  //   editable={true}
                  height={300}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    justifyContent: 'flex-start',
                    width: width * 0.8,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    elevation: 1,
                    paddingRight: 10,
                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                }}>
                {/* Cancel Btn  */}
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show_Achievement_to_edit: false });
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: width * 0.053,
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                {/* Save Btn  */}
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show_Achievement_to_edit: false });
                    this.update();
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: width * 0.053,
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  bodyOfNotFoundAchievements: {
    width: width,
    height: height * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bigBackground,
    // backgroundColor: '#E5ECF4',
  },

  eachAchievementContainer: {
    width: '95%',
    elevation: 2,
    borderRadius: 15,
    marginVertical: 10,
    alignSelf: 'center',
    paddingTop: '3%',
    paddingBottom: '1%',
    minHeight: height * 0.13,
    maxHeight: height * 0.18,
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // backgroundColor: '#f00',
  },
  achievementBriefStyle: {
    fontSize: RFValue(16),
    fontWeight: '500',
    color: '#000',
    textAlign: 'left',
  },
  achievementTimePostContainer: {
    // width:'10%',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.042,
    // backgroundColor:'#0ff',
  },
  achievementOptionsContainer: {
    // width: '30%',
    width: '60%',
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.042,
    justifyContent: 'space-around',
    paddingHorizontal: height * 0.004,
    // backgroundColor: '#0ff',
  },
  containerOfEachOption: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal:width*0.002,
    paddingHorizontal: width * 0.01,
    // backgroundColor:'#ff0',
  },

  mapItemsContainer: {
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

  categoriesContainer: {
    width: width,
    flexWrap: 'wrap',
    marginBottom: height * 0.03,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: height * 0.015,
    // backgroundColor: '#00f',
  },
  eachCategoryContainer: {
    elevation: 10,
    borderRadius: 15,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.437,
    height: height * 0.205,
    marginLeft: RFValue(15),
    marginTop: height * 0.02,
    backgroundColor: '#ffffff',
    marginBottom: height * 0.01,
    paddingHorizontal: height * 0.02,
    shadowOffset: { width: 0, height: 7 },
    // backgroundColor:'#f00',
  },
  deleteIconContainer: {
    borderWidth: 1,
    borderColor: '#000',
    width: width * 0.058,
    alignSelf: 'flex-start',
    marginTop: height * 0.007,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius:width*0.05,
    borderRadius: width * 0.07,
    // backgroundColor:'#ff0',
  },
  categoryLogoStyle: {
    width: width * 0.3,
    // height: height * 0.13,
    height: height * 0.125,
    alignSelf: 'center',
    // backgroundColor:'#f0f',
  },
  categoryName: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(17),
  },
  addCategoryBtn: {
    bottom: 0,
    elevation: 5,
    right: RFValue(15),
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.145,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: height * 0.07,
    padding: width * 0.009,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    marginBottom: height * 0.03,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
  },

  // Modal Style
  infoModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  charityInfoBox: {
    // width: width * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.6,
    marginTop: height * 0.05,
    paddingHorizontal: height * 0.02,
    paddingVertical: height * 0.04,
    borderRadius: height * 0.03,
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
    // backgroundColor: '#ff0',
  },
  charityNameImgContainer: {
    width: width * 0.8,
    // height: height * 0.2,
    flexDirection: 'row',
    // backgroundColor:'#f00',
    backgroundColor: '#fff',
  },
  charityAchieveBtn: {
    width: width * 0.3,
    alignItems: 'center',
    height: height * 0.065,
    justifyContent: 'center',
    marginTop: height * 0.035,
    borderRadius: height * 0.018,
    backgroundColor: '#4695BC',
    elevation: 15,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    // marginLeft:width*0.1
  },
});
