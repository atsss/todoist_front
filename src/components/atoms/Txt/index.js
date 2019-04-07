import React from 'react'
import styles from './styles.module.sass'

const txtFactory = role => ({ tag: Tag = 'p', size = 'm', weight = 'normal', className, ...props }) => (
  <Tag className={ [ styles[role], styles[size], styles[weight], className ].join(' ') } { ...props } />
);

// ↑と同じ
// const txtFactory = role => ({ tag: Tag = 'p', size = 'm', weight = 'normal', children, className, ...props }) => (
//   <Tag className={ [ styles[role], styles[size], styles[weight], className ].join(' ') } { ...props } >
//     { children }
//   </Tag>
// );

const Txt = txtFactory('default')
export default Txt

export const SubTxt = txtFactory('sub')
export const WhiteTxt = txtFactory('white')
export const WarningTxt = txtFactory('warning')
