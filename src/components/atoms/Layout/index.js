import React from 'react'
import styles from './styles.module.sass'

const LayoutPresenter = ({ tag: Tag = 'div', parts, className, ...props }) => {
  const { main, side } = parts
  return (
    <Tag className={[ styles.root, className ].join(' ')}>
      <nav className={ styles.nav }>
        { side }
      </nav>
      <main className={ styles.main }>
        { main }
      </main>
    </Tag>
  )
}

const LayoutContainer = ({ presenter, children, ...props }) => {
  const parts = mapParts(children)
  return presenter({ parts, ...props })
}

const partTypes = [ 'GridMain', 'GridSide' ]

function mapParts(elems) {
  const parts = []
  elems.map(elem => {
    const idx = partTypes.indexOf(elem.type.name) // displayName => name
    if (!~idx) return false
    parts[idx] = elem.props.children
    return true
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
