import React from 'react'
import styles from './styles.module.sass'

const LayoutPresenter = ({ tag: Tag = 'div', parts, className, ...props }) => {
  const { main, side } = parts
  console.log('main:', main);
  console.log('side:', side);
  return (
    <Tag className={[ styles.root, className ].join(' ')}>
      { side }
      { main }
    </Tag>
  )
}

const LayoutContainer = ({ presenter, children, ...props }) => {
  const parts = mapParts(children)
  console.log('parts container:', parts);
  return presenter({ parts, ...props })
}

const partTypes = [ 'GridMain', 'GridSide' ]

function mapParts(elems) {
  const parts = []
  elems.map(elem => {
    const idx = partTypes.indexOf(elem.type.name) // displayName => name
    if (!~idx) return
    parts[idx] = elem.props.children
  })
  const [ main, side ] = parts
  return { main, side }
}

const Layout = props => (
  <LayoutContainer
    presenter={ presenterProps => <LayoutPresenter { ...presenterProps } /> } { ...props }
  />
)

export default Layout

export const GridMain = () => <div>これはレンダリングされないもの</div>
export const GridSide = () => <div>これはレンダリングされないもの</div>
