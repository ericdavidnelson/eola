import styled from "@emotion/styled";
import GlobalStyles from "./prebuilt/GlobalStyles";

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const Layout = ({ children, title }) => {
  return (
    <div>
    <title>{title}</title>
      <GlobalStyles />
      <Elements stripe={stripePromise}>{children}</Elements>
    </div>
  );
};

export default Layout;
