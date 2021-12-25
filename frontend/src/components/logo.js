import React from 'react'

import PropTypes from 'prop-types'

import styles from './logo.module.css'

const Logo = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

Logo.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/fire_fly_logo-300h.png',
}

Logo.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Logo
