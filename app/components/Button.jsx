import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    backgroundColor: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',

    ':hover': {
      backgroundColor: 'red',
    },

    ':focus': {
      backgroundColor: 'green',
    },

    ':active': {
      backgroundColor: 'yellow',
    },
  },

  block: {
    display: 'block',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)',
    },
  },
};

const Button = React.createClass({
  displayName: 'Button',

  propTypes: {
    children: React.PropTypes.object,
    block: React.PropTypes.bool,
  },

  render() {
    return (
      <button
        style={[
          styles.base,
          this.props.block && styles.block,
        ]}>
        {this.props.children}
      </button>
    );
  },
});

module.exports = Radium(Button);
