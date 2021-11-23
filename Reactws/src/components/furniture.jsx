import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Furniture extends React.Component {
  state = {
    furnitures: [],
    furniture: {},
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost:8080//api/ShowCustomerShopping/getAllFurnitureDetails"
      )
      .then((response) => {
        console.log(response);
        this.setState({ furnitures: response.data });
      })

      .catch((error) => console.log(error));
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080//api/showFurniture/deleteFurniture/${id}`)
      .then((res) => {
        const furnitures = this.state.furnitures.filter(
          (fur) => fur.furnitureId != id
        );
        this.setState({ furnitures: furnitures });
      });
  };
  render() {
    return (
      <div className="container">
        <Link
          to="/furnitures/add"
          className="btn btn-primary btn-large mb-1 mt-2 float-end"
        >
          Add
        </Link>
        <table className="table w-100  mt-5">
          <thead>
            <tr>
              <th>Furniture Id</th>
              <th>Furniture Name</th>
              <th>Furniture Color</th>
              <th>Furniture Model</th>
              <th>Price</th>
              <th colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.furnitures.map((furniture) => (
              <tr>
                <td>{furniture.furnitureId}</td>
                <td>{furniture.furnitureName}</td>
                <td>{furniture.furnitureColor}</td>
                <td>{furniture.furnitureModel}</td>
                <td>{furniture.price}</td>
                <td>
                  <Link to={`/furnitures/update/${furniture.furnitureId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-info "
                    />
                  </Link>
                </td>

                <td>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger "
                    onClick={() => this.handleDelete(furniture.furnitureId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Furniture;
