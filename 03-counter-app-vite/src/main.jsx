import React from 'react'
import ReactDom from 'react-dom/client'

import { App } from './HelloWorldApp.jsx'
import { FirstApp } from './FirstApp.jsx'
import { CounterApp } from './CounterApp.jsx'

import './style.css'


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={0}/>
  </React.StrictMode>
)
