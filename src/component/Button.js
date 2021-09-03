import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    let className="component-button"
    if(this.props.orange) {
      className += " ";
      className += "orange"
    }
    if(this.props.wide) {
      className += " ";
      className += "wide"
    }

    return (
      <div className={className}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
