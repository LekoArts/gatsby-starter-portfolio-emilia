import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Transition as SpringTransition, animated } from 'react-spring'

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <SpringTransition
        items={location}
        keys={l => l.pathname}
        native
        unique
        initial={{ opacity: 0 }}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(l, state) => props => (
          <animated.div key={l.pathname} style={props}>
            {children}
            {console.log(state)}
          </animated.div>
        )}
      </SpringTransition>
    )
  }
}

export default Transition

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
