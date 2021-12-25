import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        {props.button}
      </button>
    </div>
  )
}

Button.defaultProps = {
  button: 'Sign Up',
  rootClassName: '',
}

Button.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button
