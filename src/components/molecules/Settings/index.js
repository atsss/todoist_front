import React from 'react'
import styles from './styles.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

// FIXME
// - モーダルを出すようにする
// - icon は外から渡せるようにする
// - モーダル中のオプションを外から渡せるようにする
const Settings = ({ className }) => (
  <div className={ [ styles.root, className ].join(' ') }>
    <FontAwesomeIcon icon={faEllipsisH} />
  </div>
)

export default Settings
