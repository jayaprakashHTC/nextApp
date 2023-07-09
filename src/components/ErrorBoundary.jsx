import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    console.log(this.props, 'this.props.data ')
    if (this.props.data === null) {
      return (
        <div>
          <h1>Error</h1>
          <p>Oops! Something went wrong: {this.props.error}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array,
  error: PropTypes.string,
}
