import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { railsActions } from "redux-rails";
import {
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";


const styles = theme => ({
  progress: {
    margin: "auto",
    marginTop: theme.spacing.unit * 4,
    width: "fit-content"
  },
  root: {
    margin: theme.spacing.unit * 3
  },
  todo: {
    marginTop: theme.spacing.unit * 4
  }
});


class Pickup extends Component {

  constructor() {
    super();
    this.state = {
      productSelected: "",
      productIsSelected: false
    }
  }

  static propTypes = {
    fetchProducts: PropTypes.func,
    createItem: PropTypes.func,
    products: PropTypes.array,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchProducts();
  }


  // method to keep the selected product in state before the user validates
  handleChange = (e) => {
    const productSelected = e.target.value;

    Promise.resolve()
      .then( () => {
        this.setState({
          productSelected: productSelected
        })
      }).then( () => {
        if (this.state.productSelected === "") {
          this.setState({ productIsSelected: false });
        } else {
          this.setState({ productIsSelected: true });
        }
      })
  }


  // method to validate the product and post a new item in the table items
  pickup = (e) => {
    e.preventDefault();

    Promise.resolve()
      .then( () => {
        this.props.createItem(this.state.productSelected);
      }).then( () => {
        this.props.addActions();
      }).then( () => {
        this.props.fetchProducts();
      }).then( () => {
        this.setState({
          productSelected: "",
          productIsSelected: false
        })
      })
  }



  render() {

    const { classes, loading, products } = this.props;

    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <div>
        <h2 className={classes.pickup}>Pick Up</h2>
        <h3>Select a product to pick up</h3>

        <form method="post" onSubmit={this.pickup}>
          <label htmlFor="pick-product">Select a product to pick up</label>
          <div>

            <select id="pick-product" name="pick-product" onChange={this.handleChange}>
              <option value=""> Select a product </option>
              {_.map(products, product => (
                <option key={product.id} value={product.id} > {product.attributes.name} </option>
              ))}
            </select>

          </div>
          <div>
            <button disabled={!this.state.productIsSelected} type="submit">Pick up</button>
          </div>
        </form>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.Products.models,
  items: state.Items.models,
  loading: state.Products.loading
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(railsActions.index({ resource: "Products" }));
  },
  createItem: (productSelected) => {
    dispatch(railsActions.create({
      resource: "Items",
      attributes: {
        product_id: productSelected
      }
    }));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Pickup);
