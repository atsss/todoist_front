import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.sass'

const TxtLink = ({ to, className, children }) => (
  <div className={ className }>
    <Link to={to} className={styles.link}>
      { children }
    </Link>
  </div>
)

export default TxtLink
