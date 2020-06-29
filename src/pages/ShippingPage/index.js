import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

class ShippingPage extends React.Component {
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);

  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] !== "dun") ingredients[param[0]] = param[1];
  //     else price = param[1];
  //   }

  //   this.setState({ ingredients, price });
  // }

  cancelOrder = () => {
    this.props.history.goBack();
  };

  showShipContact = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>Таны захиалга амттай байх болно гэж найдаж байна...</strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Дүн: {this.props.price} төг</strong>
        </p>
        <Burger />
        <Button
          daragdsan={this.cancelOrder}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          daragdsan={this.showShipContact}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />

        {/* <Route path="/ship/contact" component={ContactData} /> */}
        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
