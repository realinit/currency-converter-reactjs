import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
        return <img src="/images/underconst.png" style={{"width":"100%","height":"100%"}}/>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;