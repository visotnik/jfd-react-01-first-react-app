import React from 'react'
// React 17
import ReactDom from "react-dom"
// React 18
import * as ReactDOMClient from 'react-dom/client';

<<<<<<< HEAD
const element = <h1>Hello world!</h1>
=======
const element = <h1>Hello world / React 18!</h1>
>>>>>>> features/hello-world
console.log (element)

const container = document.getElementById("root")

// React 17
// ReactDom.render(element, container)

// React 18
const root = ReactDOMClient.createRoot(container)
root.render(element)