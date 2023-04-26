/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// import { StatusBar, View, TouchableOpacity, Image, StyleSheet, AppRegistry } from 'react-native';
// import { Dimensions } from 'react-native';
// // import RadioButtonRN from 'radio-buttons-react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// // import { Select, Option } from "react-native-single-select";
// import {
//   bigBackground,
//   loginView,
//   textinTextinput, headerColor,
//   errorColor, footerIconsOff,
//   secondaryColor, footerIcons, footerView, textInputcolor, DonateView
// } from './Colors';
// import * as React from 'react';
// import { RadioButton, Text } from 'react-native-paper';
// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

// export default class TypeOfDonate extends React.Component {
//   state = {
//     value: 'first',
//     borderColor: '#FFF'
//   };

//   render() {
//     return (
//       <View style={{ flex: 1, marginTop: 40 }}>
//         <RadioButton.Group
//           onValueChange={value => this.setState({ value })
//           }
//           value={this.state.value}
//           borderColor={this.state.borderColor}

//         >
//           <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * .1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, borderColor: this.state.borderColor, borderWidth: 1, elevation: 2 }}>
//             <Image resizeMode='center' style={{ width: 40, height: 40 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9473/9473416.png' }} />
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>الدفع اونلاين</Text>
//             <RadioButton
//               // onPress={() => {
//               //   this.setState({ borderColor: DonateView })
//               // }}
//               value="first" />

//           </View>
//           <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//             <Text>Second</Text>
//             <RadioButton value="second" />
//           </View>
//           <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//             <Text>Second</Text>
//             <RadioButton value="third" />
//           </View>
//         </RadioButton.Group>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   headerContainer: {
//     alignItems: 'center',
//     // marginBottom: height * 0.1,
//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between',
//     // paddingHorizontal: width * 0.05,
//     // backgroundColor: '#f0f',
//     marginTop: RFValue(15),
//     // marginBottom:RFValue(25),
//   },
//   leftArrowContainer: {
//     width: width * 0.12,
//     height: height * 0.05,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: RFValue(15),
//     marginHorizontal: width * 0.03,
//     borderWidth: 1,
//     borderColor: secondaryColor,
//     marginLeft: RFValue(15),

//   },
//   styleOfPageTitle: {
//     fontSize: 18,
//     color: headerColor,
//     width: width * 0.6,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginRight: width * 0.2,
//     // backgroundColor:'#ff0',
//   },

// })

import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Dimensions } from 'react-native';
import {
  bigBackground,
  loginView,
  textinTextinput, headerColor,
  errorColor, footerIconsOff,
  secondaryColor, footerIcons, footerView, textInputcolor, DonateView
} from './Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const TypeOfDonate = (props) => {

  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: '#1D1D1D', marginBottom: 10 }}>وسيلة الدفع</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * .1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, borderColor: checked === 'first' ? DonateView : '#FFF', borderWidth: 1.5, elevation: 2 }}>
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
      <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * .1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, borderColor: checked === 'second' ? DonateView : '#FFF', borderWidth: 1.5, elevation: 2, marginTop: 10 }}>
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
          <Text style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: 'bold', marginTop: 20, marginLeft: 10, color: '#1D1D1D' }}>تأكيد الاوردر و الدفع من خلال</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Visa');
            }}
            style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * .1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, elevation: 2, marginTop: 20 }}>
            <View style={{ width: 55, height: 45, backgroundColor: '#FFF', elevation: 2, justifyContent: 'center', borderRadius: 10 }}>
              <Image resizeMode='center' style={{ width: 40, height: 35, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5700/5700956.png' }} />
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1D1D' }}>بطاقه بنكية</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png' }} />
              <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://static.wixstatic.com/media/0a548a_31361fe3b2614bd4b816710bf570b60e~mv2.png/v1/fill/w_80,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/985px-Mastercard-logo_svg.png' }} />
              <Image resizeMode='center' style={{ width: 25, height: 35 }} source={{ uri: 'https://static.wixstatic.com/media/0a548a_84fb622736d54422a0976f04338eb13a~mv2.png/v1/crop/x_1,y_0,w_234,h_152/fill/w_83,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Meeza_Egyptian_company_logo.png' }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#FFF', width: '95%', height: height * .1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, elevation: 2, marginTop: 20 }}>
            <View style={{ width: 55, height: 45, backgroundColor: '#FFF', elevation: 2, justifyContent: 'center', borderRadius: 10 }}>
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
            <TouchableOpacity style={{ marginTop: height * .54, width: 180, height: 50, backgroundColor: loginView, justifyContent: 'center', alignSelf: 'center', borderRadius: 15 }}>
              <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>تأكيد طلبك</Text>
            </TouchableOpacity>
          </View>)}
    </View>
  );
};

export default TypeOfDonate;