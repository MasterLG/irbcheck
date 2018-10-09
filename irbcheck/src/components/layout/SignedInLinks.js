import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";
import PropTypes from "prop-types";

class SignedInLinks extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = {
      irbid: this.state.irbid
      //title: this.state.title,
      //body: this.state.body
    };
    this.props.createPost(post);
  };
  render() {
    return (
      <ul className="right">
        <li
          className="input-field"
          style={{
            display: "flex",
            alignItems: "center",
            verticalAlign: "center",
            justifyContent: "center",
            marginTop: "5px"
          }}
        >
          <form onSubmit={this.onSubmit}>
            <input
              id="search"
              type="search"
              name="irbid"
              placeholder="search"
              onChange={this.onChange}
              value={this.props.irbid}
            />
          </form>
        </li>
        <li>
          <NavLink to="/create">New Project</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/"
            className="btn btn-floating orange lighten-1"
            style={{
              height: "28px",
              width: "28px",
              display: "flex",
              alignItems: "center",
              verticalAlign: "center",
              justifyContent: "center",
              marginTop: "1px"
            }}
          >
            NN
          </NavLink>{" "}
        </li>
      </ul>
    );
  }
}
SignedInLinks.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(SignedInLinks);
