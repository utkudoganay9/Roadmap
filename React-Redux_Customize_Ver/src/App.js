import React, { Component } from "react";
import { Container, Row, Col, Form } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = { currentcategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }
  // json-server --watch db.json gozunun onunde dursun
  changecategory = (category) => {
    this.setState({ currentcategory: category.categoryName });
    console.log(category);
    this.getProducts(category.categoryId);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "categoryId=" + categoryId;
    }
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + "Added to Cart");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "Removed From Cart");
  };

  render() {
    const categoryinfo = { title: "Category List", baskabisey: "baskabisey" };
    const productinfo = { title: "Product List" };

    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentcategory={this.state.currentcategory}
                changecategory={this.changecategory}
                info={categoryinfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentcategory={this.state.currentcategory}
                      info={productinfo}
                    />
                  }
                ></Route>
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/form1" element={<FormDemo1 />}></Route>
                <Route path="/form2" element={<FormDemo2 />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
