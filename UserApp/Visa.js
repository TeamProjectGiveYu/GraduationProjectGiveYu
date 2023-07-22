/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
    Alert,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import CreditCardForm, { Button } from 'rn-credit-card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    bigBackground,
    loginView, headerColor,
    secondaryColor,
    errorColor,
} from './Colors';
import axios from 'axios';
import { useState } from 'react';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const Visa = (props) => {
    const formMethods = useForm({
        // to trigger the validation on the blur event
        mode: 'onBlur',
        defaultValues: {
            cardNumber: '',
            expiration: '',
            holderName: '',
            cvv: '',
            cardNumberInvalid: '',
            cardNumberRequired: '',
            securityCodeInvalid: '',
            securityCodeRequired: '',
            card_Data: {},
            
        },

    });
    const [user_data, setuser_data] = useState(props.route.params.user_data)
    const { handleSubmit, formState, reset } = formMethods;

    function onSubmit(model) {
        axios
            .post('http://x.php', {
                x: model.x.replace(),
                y: xxxxxxxxx.y,
                z: model.z,
                t: model.t,
                p: model.p,
            })
            .then(res => {
                console.log(res.data)
                if (typeof res.data == typeof {}) {
                    props.navigation.navigate('Money', {
                       
                    });
                } else if (res.data = 'Card_inCorrect') {
                    Alert.alert('بيانات البطاقة البنكية غير صحيحة');
                } else if (res.data == 'Card_not_found') {
                    Alert.alert('هذه البطاقة غير متاحه');
                }
            });
    }

    return (
        <FormProvider {...formMethods}>
            <SafeAreaView style={styles.container}>
                <View
                    style={{
                        flex: 0.14,
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
                            <Text style={styles.styleOfPageTitle}>إضافه كرت دفع</Text>
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
                <KeyboardAvoidingView
                    style={styles.avoider}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <CreditCardForm
                        LottieView={LottieView}
                        translations={{
                            cardNumber: 'Card Number',
                            cardHolderName: 'Cardholder Name',
                            nameSurname: 'Name Surname',
                            mmYY: 'MM/YY',
                            expiration: 'Expiration',
                            securityCode: 'Security Code',
                            next: 'Next',
                            done: 'Done',
                            cardNumberRequired: 'CardNumber is required.',
                            cardNumberInvalid: 'This cardNumber looks invalid.',
                            cardHolderNameRequired: 'Cardholder name is required.',
                            cardHolderNameInvalid: 'This cardholder name looks invalid.',
                            expirationRequired: 'Expiration date is required.',
                            expirationInvalid: 'This expiration date looks invalid.',
                            securityCodeRequired: 'Security code is required.',
                            securityCodeInvalid: 'This security date looks invalid.',
                        }}

                        inputColors={{
                            focused: loginView,
                            errored: errorColor,
                            regular: '#B9C4CA',
                        }}
                        overrides={{
                            labelText: {
                                marginTop: 16,
                            },
                            errorText: {
                                color: errorColor
                            },
                            input: {
                                borderRadius: 20,
                                height: height * .09,
                                color: headerColor,
                            },
                            labelContainer: {
                                marginLeft: 10,
                            },
                            outline: {
                                borderWidth: 0
                            }

                        }}

                    />
                </KeyboardAvoidingView>
                {formState.isValid && (
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                        title={'إتمام عملية الدفع'}
                    />
                )}
            </SafeAreaView>
        </FormProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    avoider: {
        flex: 1,
        padding: 5,
    },
    button: {
        margin: 36,
        marginTop: 0,
        backgroundColor: loginView,
        width: 200,
        alignSelf: 'center',
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
});
export default Visa;

