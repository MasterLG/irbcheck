import React, { Component } from "react";
import IRB from "./IRB";
import IRBTCGB from "./IRBTCGB";
import IRBTAS from "./IRBTAS";
import IRBGUMRUK from "./IRBGUMRUK";

import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import PropTypes from "prop-types";

class Tables extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="project-list section">
        <IRB />
        <IRBTCGB />
        <IRBTAS />
        <IRBGUMRUK />
      </div>
    );
  }
}

Tables.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Tables);
