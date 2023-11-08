import { useState, useEffect } from 'preact/hooks'
import { Router, route } from 'preact-router'
import Swagger from './Swagger'
import AsyncRoute from 'preact-async-route'
import './Home.css'

const base = '__ROUTE__'
const baseurl = `/${base}`

function Home() {
  const [url, setUrl] = useState(`${baseurl}`)

  useEffect(() => {route(url)}, [url])

  const render_subRouter = () => {
    const handlePageRoute = async e => {
      console.log("Route to url: ", e.url)
      if (e.url.indexOf('test') >= 0) {
        //switch (e.url) {
        //  case `${baseurl}/test`:
        route(`${baseurl}/test`, true)
        //break;
      } else { //default:
        route(`${baseurl}/`, true)
      }
    }

    return(
        <Router onChange={handlePageRoute}>
          <AsyncRoute
            path={`${baseurl}/test/:rest*`}
            getComponent={() => import('./TestXarrow/index.jsx').then(module => module.default)}
            loading={()=>{return <Loading url={`${baseurl}/test`}/>}}
          />
        </Router>
    )
  }

  return (
    <div>
      <div>
        <button type="button" onClick={() => setUrl(url => url.indexOf('test') >= 0? `${baseurl}/`: `${baseurl}/test`)}>URL is: {url}
        </button>
        <hr/><br/>
      </div>
      <div id= "uicontainer">
        <Swagger />
        <div id="testdiv" />
      </div>
      { render_subRouter() }
    </div>
  )
}

export default Home
