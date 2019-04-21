import React from 'react'
import Link from '../../atoms/Link'
import Txt from '../../atoms/Txt'

const Menu = ({ className }) => (
  <div className={ className }>
    <Link to='/'>
      <Txt weight='bold'>今日</Txt>
    </Link>
    <Link to='/tasks/new' className='u-mt10'>
      <Txt weight='bold'>新規作成</Txt>
    </Link>
  </div>
)

export default Menu
