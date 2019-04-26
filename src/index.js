import React from 'react'
import ReactDOM from 'react-dom'

export const Index = () => {
  return (
    <div>
      <h1>My Minimal Webpack React and Babel set up</h1>
    </div>
  )
}


const app = document.getElementById('app-root')

ReactDOM.render(<Index />, app)

module.hot.accept()
