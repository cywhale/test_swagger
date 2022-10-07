import 'preact/debug'
import "preact/devtools"
import { render } from 'preact'
import { App } from './app'

render(<App />, document.getElementById('app')!)
