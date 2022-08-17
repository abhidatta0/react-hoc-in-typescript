import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ResizeComponent from './ResizeComponent'
import WithResizeUsage from './WithResizeUsage'
import WithResizeAdvancedUsage from './WithResizeAdvancedUsage'

function App() {

  return (
    <>
    {/* <ResizeComponent name="Developer"/> */}
    <WithResizeUsage name="Developer" />
    <WithResizeAdvancedUsage name="Developer"/>
    </>
  )
}

export default App
