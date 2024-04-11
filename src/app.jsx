import { Router } from 'preact-router'
import { options } from "preact"
import { createBrowserHistory } from 'history'
import Home from './components/Home'
import './App.css'

const date = '__DATE__'
const base = '__ROUTE__'
const baseurl = `/${base}`
/*
if (typeof window !== "undefined") {
    window.global = window;
}
*/
const history = createBrowserHistory({
    basename: `${base}/`
})

export function App() {
  const oldVNode = options.vnode
  options.vnode = (vnode) => {
  // This code automatically unpacks immutable js instances when they
  // have been passed as JSX nodes.
  // https://github.com/preactjs/preact/issues/3798
  /* if (
      vnode.type !== null &&
      vnode.props &&
      typeof vnode.props.children === "object" &&
      vnode.props.children !== null &&
      vnode.props.children.constructor !== undefined &&
      typeof vnode.props.children.toArray === "function"
    ) {
      console.log("Debug vnode.props.children: ", vnode.props.children)
      //vnode.props.children = vnode.props.children.toArray()
    } */
    // Assuming the issue is specifically with a prop named 'allowedValues' in certain components
    // Adjust this condition based on actual problematic props or components
    if (vnode.props && vnode.props.allowedValues &&
        isImmutableStructure(vnode.props.allowedValues)) {
      vnode.props.allowedValues = convertToPlainStructure(vnode.props.allowedValues)
    }

    if (oldVNode) oldVNode(vnode)
  }

  // Helper function to detect if a value is an Immutable.js structure
  // You might need to adjust this function to accurately detect your specific immutable structures
  function isImmutableStructure(value) {
    return value && typeof value === 'object' && ('size' in value || '_origin' in value)
  }

  // Helper function to convert Immutable.js structures to plain JavaScript arrays/objects
  // This is a simplistic approach; you may need a more sophisticated method depending on the structure
  function convertToPlainStructure(immutableStructure) {
    // Check if the structure has a .toArray() method (common for Immutable.js Lists)
    if (typeof immutableStructure.toArray === 'function') {
      return immutableStructure.toArray()
    }
    // Add other conversion logic here if needed
    return immutableStructure // Fallback to return the original structure if no conversion is applied
  }

  return (
    <div class="App">
        <h1 class="Home-title">Just a test for swagger-ui-react</h1>
        <div class="Home-built">Built at: {date}</div>
        <Router history={history}>
          <div path={baseurl}>
            <Home />
          </div>
        </Router>
    </div>
  )
}
