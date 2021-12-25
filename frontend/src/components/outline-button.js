import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-button.module.css'

const OutlineButton = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.button1}
      </button>
    </div>
  )
}

OutlineButton.defaultProps = {
  button1: 'Button',
  rootClassName: '',
}

OutlineButton.propTypes = {
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default OutlineButton
