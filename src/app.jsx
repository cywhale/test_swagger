import { Router } from 'preact-router'
import { options } from "preact"
import { createBrowserHistory } from 'history'
import Home from './components/Home'

import './App.css'
const date = '__DATE__'
const base = '__ROUTE__'
const baseurl = `/${base}`

const history = createBrowserHistory({
    basename: `${base}/`
});

export function App() {
  const oldVNode = options.vnode
  options.vnode = (vnode) => {
    // Assuming the issue is specifically with a prop named 'allowedValues' in certain components
    // Adjust this condition based on actual problematic props or components
    if (vnode.props && vnode.props.allowedValues &&
        isImmutableStructure(vnode.props.allowedValues)) {
      vnode.props.allowedValues = convertToPlainStructure(vnode.props.allowedValues)
    }
    // Handle Immutable.js structures for specific component types
    if (typeof vnode.type === 'string') {
      if (vnode.props.children && isImmutableStructure(vnode.props.children)) {
        vnode.props.children = convertToPlainStructure(vnode.props.children)
      } else if (Array.isArray(vnode.props.children)) {
        vnode.props.children = vnode.props.children.map(child => {
          if (isImmutableStructure(child)) {
            return convertToPlainStructure(child)
          }
          return child
        })
      }
      // Ensure all vnodes have a DOM node
      if (!vnode._dom) {
        vnode._dom = document.createElement(vnode.type)
      }
    }

    if (vnode.type === 'button' && vnode.props && vnode.props.onClick) {
      const originalClick = vnode.props.onClick
      if (!vnode._dom) {
        vnode._dom = document.createElement(vnode.type)
      }

      vnode.props.onClick = (event) => {
        originalClick && originalClick(event)
      }
    }

    if (oldVNode) oldVNode(vnode)
  }

  // Override the `insertBefore` method to catch insertion errors
  const originalInsertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (!(newNode instanceof Node)) {
      console.error("Invalid node being inserted:", newNode)
      return null
    }
    return originalInsertBefore.call(this, newNode, referenceNode)
  }

  // Helper function to detect if a value is an Immutable.js structure
  // adjust this function to accurately detect specific immutable structures
  function isImmutableStructure(value) {
    return value && typeof value === 'object' && ('size' in value || '_origin' in value)
  }

  // Helper function to convert Immutable.js structures to plain JavaScript arrays/objects
  function convertToPlainStructure(immutableStructure) {
    // Check if the structure has a .toArray() method (common for Immutable.js Lists)
    if (typeof immutableStructure.toArray === 'function') {
      return immutableStructure.toArray()
    }

    if (typeof immutableStructure.toJS === 'function') {
      return immutableStructure.toJS()
    }

    return immutableStructure // Fallback to return the original structure
  }

  return (
    <div className="App">
        <h1 className="Home-title">Just a test for swagger-ui-react</h1>
        <div className="Home-built">Built at: {date}</div>
        <Router history={history}>
          <div path={baseurl}>
            <Home />
          </div>
        </Router>
    </div>
  )
}
