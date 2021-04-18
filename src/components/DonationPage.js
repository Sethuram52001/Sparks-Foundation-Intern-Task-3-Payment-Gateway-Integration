import React, { useEffect } from 'react';

const DonationPage = () => {

    useEffect(() => {
        const Script = document.createElement("script");
        const Form = document.getElementById("donateForm");
        Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js');
        Script.setAttribute('data-payment_button_id', 'pl_H0IEFfRcBl21BS');
        Script.async = true;
        Form.appendChild(Script);
    }, [])

    return (
        <div>
            <h1>DonationPage</h1>
            <form id="donateForm"></form>
        </div>
     );
}
 
export default DonationPage;

/* <form>
        <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_H0IEFfRcBl21BS" async> 
        </script> 
    </form> 
*/