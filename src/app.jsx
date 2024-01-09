import { Router } from 'preact-router'
import { createBrowserHistory } from 'history'
import Home from './components/Home'

import './App.css'

const date = '__DATE__'
const base = '__ROUTE__'
const baseurl = `/${base}`

if (typeof window !== "undefined") {
    window.global = window;
}

const history = createBrowserHistory({
    basename: `${base}/`
});

export function App() {
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
