import React from 'react'
import TxtLink from '../../atoms/TxtLink'
import Txt from '../../atoms/Txt'

const Menu = ({ className }) => (
  <div className={ className }>
    <TxtLink to='/'>
      <Txt weight='bold'>今日</Txt>
    </TxtLink>
    <TxtLink to='/tasks/new' className='u-mt10'>
      <Txt weight='bold'>新規作成</Txt>
    </TxtLink>
  </div>
)

export default Menu
