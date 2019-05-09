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


class Packup extends Component {

  constructor() {
    super();
    this.state = {
      itemSelected: "",
      itemIsSelected: false
    }
  }

  static propTypes = {
    fetchItems: PropTypes.func,
    updateItem: PropTypes.func,
    items: PropTypes.array,
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchItems();
  }


  // method to keep the selected item in state before the user validates
  handleChange = (e) => {
    const itemSelected = e.target.value;

    Promise.resolve()
      .then( () => {
        this.setState({
          itemSelected: itemSelected
        })
      }).then( () => {
        if (this.state.itemSelected === "") {
          this.setState({ itemIsSelected: false });
        } else {
          this.setState({ itemIsSelected: true });
        }
      })
  }


  // method to validate the status of the item and update the table items
  // the item will be "packed" (see table items, boolean)
  packup = (e) => {
    e.preventDefault();

    Promise.resolve()
      .then( () => {
        this.props.updateItem(this.state.itemSelected);
      }).then( () => {
        this.props.addActions();
      }).then( () => {
        this.props.fetchItems();
      }).then( () => {
        this.setState({
          itemSelected: "",
          itemIsSelected: false
        })
      })
  }


  render() {

    const { classes, loading, items } = this.props;

    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <div>
        <h2>Pack Up</h2>
        <h3>Select an item to pack up</h3>

        <form method="post" onSubmit={this.packup}>
          <label htmlFor="pick-item">Select a product to pack up</label>
          <div>
            <select id="pick-item" name="pick-item" onChange={this.handleChange}>
              <option value=""> Select an item </option>
              {_.map(items, item => {
                if (item.attributes.check === "Valide" && item.attributes.sent === 0) {
                  return (
                    <option key={item.id} value={item.id} > {item.id} - {item.attributes.name} </option>
                  )
                }
              })}
            </select>
          </div>
        <div>
          <button disabled={!this.state.itemIsSelected} type="submit">Packing up</button>
        </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.Items.models,
  loading: state.Items.loading
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => {
    dispatch(railsActions.index({ resource: "Items" }));
  },
  updateItem: (itemSelected) => {
    dispatch(railsActions.update({
      id: JSON.parse(itemSelected),
      resource: "Items",
      attributes: {
        sent: 1
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
)(Packup);
