/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable, Linking, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard'
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  bigBackground,
  loginView, headerColor,
  secondaryColor, DonateView,
} from './Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const TypeOfDonate = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [checked, setChecked] = React.useState('first');
  const [user_data, setuser_data] = useState(props.route.params.user_data)
  const [charityDetails, setcharityDetails] = useState(props.route.params.charityDetails)
  const SIM = [{
    name: 'أورنج',
    link: 'https://play.google.com/store/apps/details?id=com.orange.eg.money',
    phone: '012929202888', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/284px-Orange_logo.svg.png'
  },
  {
    name: 'أتصالات',
    link: 'https://play.google.com/store/apps/details?id=com.etisalat.flous',
    phone: '01134567890',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Etisalat_Logo.svg/97px-Etisalat_Logo.svg.png'
  },
  {
    name: 'فودافون', link: 'http://vf.eg/vfcash',
    phone: '01094592045',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
  },
  { name: 'وى', 
  link: 'https://play.google.com/store/apps/details?id=com.TE.WEWallet', 
  phone: '01534567890', 
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/We_logo.svg/512px-We_logo.svg.png' }];

  const copyToClipboard = () => {
    Clipboard.setString('');
  };
  return (
    <>
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
            <Text style={styles.styleOfPageTitle}>وسيلة الدفع</Text>
          </View>

          {/* right Arrow Container */}
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
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
      <View style={{ backgroundColor: bigBackground, flex: 0.88 }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * 0.1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, borderColor: checked === 'first' ? DonateView : '#FFF', borderWidth: 1.5, elevation: 3 }}>
          <View style={{ width: 55, height: 45, backgroundColor: '#FFF', elevation: 2, justifyContent: 'center', borderRadius: 10 }}>
            <Image resizeMode='center' style={{ width: 40, height: 35, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5700/5700956.png' }} />
          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1D1D' }}>الدفع اونلاين</Text>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={DonateView}
          />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * 0.1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, borderColor: checked === 'second' ? DonateView : '#FFF', borderWidth: 1.5, elevation: 3, marginTop: 10 }}>
          <View style={{ width: 55, height: 45, backgroundColor: '#FFF', elevation: 2, justifyContent: 'center', borderRadius: 10 }}>
            <Image resizeMode='center' style={{ width: 40, height: 35, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6491/6491623.png' }} />
          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1D1D' }}>إرسال مندوب</Text>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={DonateView}
          />
        </View>
        {checked === 'first' ?
          (<View>
            <Text style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: 'bold', marginTop: 20, marginLeft: 10, color: '#1D1D1D' }}> الدفع من خلال</Text>
            <TouchableOpacity
              onPress={() => {
                console.log(user_data)
                props.navigation.navigate('Visa', {
                  user_data: user_data,

                });

              }}
              style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * 0.1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, elevation: 2, marginTop: 20 }}>
              <View style={{ width: 55, height: 45, backgroundColor: '#FFF', elevation: 3, justifyContent: 'center', borderRadius: 10 }}>
                <Image resizeMode='center' style={{ width: 40, height: 35, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5700/5700956.png' }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1D1D' }}>بطاقه بنكية</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png' }} />
                <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://static.wixstatic.com/media/0a548a_31361fe3b2614bd4b816710bf570b60e~mv2.png/v1/fill/w_80,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/985px-Mastercard-logo_svg.png' }} />
                <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://static.wixstatic.com/media/0a548a_84fb622736d54422a0976f04338eb13a~mv2.png/v1/crop/x_1,y_0,w_234,h_152/fill/w_83,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Meeza_Egyptian_company_logo.png' }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * 0.1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, elevation: 2, marginTop: 20 }}>
              <View style={{ width: 55, height: 45, backgroundColor: '#FFF', elevation: 3, justifyContent: 'center', borderRadius: 10 }}>
                <Image resizeMode='center' style={{ width: 40, height: 35, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9532/9532823.png' }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1D1D' }}>محفظة الهاتف</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://static.wixstatic.com/media/0a548a_bc35721a6c3242aea5dabf1a3a5f6326~mv2.png/v1/fill/w_94,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/vodafone-8-logo-png-transparent.png' }} />
                <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://static.wixstatic.com/media/59c60f_acac1356775d43e6bdbbffd5bf8724a2~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59c60f_acac1356775d43e6bdbbffd5bf8724a2~mv2.png' }} />
                <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://static.wixstatic.com/media/0a548a_f710f40fa47e48e4bf9daab8cf8b5cc2~mv2.png/v1/fill/w_126,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Etisalat-Logo.png' }} />
              </View>
            </TouchableOpacity>
          </View>)
          :
          (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Delegate', {
                    user_data: user_data,
                    charityDetails: charityDetails
                  });
                }}
                style={{ marginTop: height * 0.5, width: 180, height: 50, backgroundColor: loginView, justifyContent: 'center', alignSelf: 'center', borderRadius: 15 }}>
                <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>تأكيد طلبك</Text>
              </TouchableOpacity>
            </View>)}
      </View>

      <Modal style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 17, color: '#1D1D1D' }}>أختر نوع محفظة الهاتف</Text>
            <View style={{ marginTop: 10 }}>
              {SIM.map((item) => (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    Alert.alert('رقم التحويل للمؤسسه', item.phone, [{ text: 'نسخ رقم الهاتف', onPress: () => Clipboard.setString(item.phone, alert('تم')) }, { text: 'إلغاء', onPress: () => console.log('Cancel Pressed') }, { text: 'الانتقال إلى محفظه الهاتف', onPress: () => Linking.openURL(item.link) }], { cancelable: true })
                  }}
                >
                  <Image source={{ uri: item.image }} style={{ width: 20, height: 20 }} resizeMode='center' />
                  <Text style={styles.textStyle}>{item.name}</Text>
                </Pressable>
              ))}
            </View>


          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  // Model Style
  // ------------------------------------------------------------------------
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: width * 0.9,
    height: height * 0.4,
    margin: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonClose: {
    backgroundColor: '#FFF',
    width: width * 0.8,
  },
  textStyle: {
    color: '#1D1D1D',
    fontWeight: 'bold',
    marginLeft: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
})
export default TypeOfDonate;
