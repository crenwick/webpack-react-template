import React from 'react';
import Button from './Button';

module.exports = React.createClass({
  render() {
    return (
      <Button
        size="large"
        block={true}>
        Radium Button
      </Button>
    );
  },
});
