import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JI7g5GGdc8KOcz7Dk94UwwEdsRksQpKMO3YiR5uZVrNplze5j4oHqTMJhiO51xNe8zC15zymEAMQeAZxJGG5dKA00olV2K6tj";
  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripekey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
