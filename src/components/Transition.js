import React, { PureComponent } from 'react'
import { Transition as SpringTransition, animated } from 'react-spring'

class Transition extends PureComponent {
  render() {
    return (
      <SpringTransition
        items={[this.props]}
        keys={props => props.location.pathname}
        native
        from={{ opacity: 0, transform: 'translateY(60px)' }}
        enter={{ opacity: 1, transform: 'translateY(0px)' }}
        leave={{ opacity: 0, transform: 'translateY(30px)' }}
      >
        {({ pathname, children }) => props => (
          <animated.div key={pathname} style={{ ...props, position: 'relative' }}>
            {children}
          </animated.div>
        )}
      </SpringTransition>
    )
  }
}

export default Transition
