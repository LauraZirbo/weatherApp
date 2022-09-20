import React from 'react'
import { render as rtlRender} from '@testing-library/react'
import { Provider } from 'react-redux'

import redux from "./redux/store"
function render(
  ui,
  {
    preloadedState = {},

    // Automatically create a store instance if no store was passed in
    store = redux,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) 
}
export * from '@testing-library/react'
export {render}