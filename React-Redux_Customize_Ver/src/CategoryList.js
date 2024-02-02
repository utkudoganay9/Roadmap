import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Foods" },
      ],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.props.info.baskabisey}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active ={category.categoryName===this.props.currentcategory?true:false}
              onClick={() => this.props.changecategory(category)}
              key={category.categoryId} // key prop'unu category.categoryId olarak değiştirin
            >
              {category.categoryName} {/* categoryName olarak değiştirin */}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentcategory}</h4>
      </div>
    );
  }
}
