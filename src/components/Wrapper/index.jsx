import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Wrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true});
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error">
          Something went wrong. Please try again later.
        </div>
      );
    }
    return <div className="wrapper unselectable">{children}</div>;
  }
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Wrapper;
