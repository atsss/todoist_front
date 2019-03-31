import React, { Component } from 'react';
import styles from './styles.module.sass';

const Header = props => (
  <header className={ styles.root } { ...props }>
    <div className={ styles.container }>
      <h1 className={ styles.h1 }> Todoist </h1>
      <span className={ styles.body }> ログイン </span>
    </div>
  </header>
);

export default Header
