import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ResizeComponent from './ResizeComponent'
import WithResizeUsage from './WithResizeUsage'

function App() {

  return (
    <>
    {/* <ResizeComponent name="Developer"/> */}
    <WithResizeUsage name="Developer" />
    </>
  )
}

export default App
