import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useSettings(initialState = false) {
  let [display, setDisplay] = useState(initialState)
  let toggle = () => setDisplay(!display)
  return { display, toggle }
}

export const SettingsContainer = createContainer(useSettings)
