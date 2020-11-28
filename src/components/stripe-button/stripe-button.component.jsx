import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HsM3jHJbDDFAO2XUeUMyXQEwG4LepyjzZwpZR9KeCAqtIlwEFYPkQcRn8YXbaxFpRKw1uNqFhm6TGPoDq0TrgLU00PVPD8DlP';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;