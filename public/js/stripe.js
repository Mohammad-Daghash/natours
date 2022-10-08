import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
    'pk_test_51LnVavF4s34FO5CJ9LqcrR98gAQ4lG5UlgAQnMT0NqlnOMllaVDo4wItRjo2990zVSguEZH0fU2tsrxCMHGrYeUD00KPX2w5vH'
);

export const bookTour = async tourId => {
    try {
        // 1) Get checkout session from API
        const session = axios(`/api/v1/bookings/checkout-session/${tourId}`);
        // console.log(session);

        // 2) Create checkout form + chanre credit card
        await stripe.redirectToCheckout({
            sessionId: (await session).data.session.id,
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};
