/* eslint-disable prettier/prettier */
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form'
import {
    Alert,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Image
} from 'react-native'
import LottieView from 'lottie-react-native'
import {
    smallBackground,
    bigBackground,
    searchIcon,
    categories,
    Footer,
    clickedIconFooter,
    unclickedIconFooter,
    loginView, logintext, loginIcons, textInputcolor, iconContainer, eyeColor, textinTextinput, errorColor
} from './Colors';
import CreditCardForm, { Button, FormModel } from 'rn-credit-card'

const Visa = () => {
    const formMethods = useForm({
        // to trigger the validation on the blur event
        mode: 'onBlur',
        defaultValues: {
            cardNumber: '',
            expiration: '',
            holderName: '',
            cvv: '',
        },
    })
    const { handleSubmit, formState } = formMethods

    function onSubmit(model) {
        Alert.alert('Success: ' + JSON.stringify(model, null, 2))
    }

    return (
        <FormProvider {...formMethods}>
            <SafeAreaView style={styles.container}>
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
                            cardNumberRequired: 'Card number is required.',
                            cardNumberInvalid: 'This card number looks invalid.',
                            cardHolderNameRequired: 'Cardholder name is required.',
                            cardHolderNameInvalid: 'This cardholder name looks invalid.',
                            expirationRequired: 'Expiration date is required.',
                            expirationInvalid: 'This expiration date looks invalid.',
                            securityCodeRequired: 'Security code is required.',
                            securityCodeInvalid: 'This security date looks invalid.',
                        }}

                        inputColors={{
                            focused: loginView,
                            errored: '#B00020',
                            regular: '#B9C4CA',
                        }}
                        horizontalStart
                        overrides={{
                            labelText: {
                                marginTop: 16,
                            },
                        }}

                    />
                </KeyboardAvoidingView>
                {formState.isValid && (
                    <Button
                        style={styles.button}
                        title={'إتمام عملية الدفع'}
                        onPress={handleSubmit(onSubmit)}
                    />
                )}
            </SafeAreaView>
        </FormProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    avoider: {
        flex: 1,
        padding: 10,
        marginTop: 20,
        justifyContent: 'center',
    },
    button: {
        margin: 36,
        marginTop: 0,
        backgroundColor: loginView,
        width: 200,
        alignSelf: 'center'
    },
})

export default Visa