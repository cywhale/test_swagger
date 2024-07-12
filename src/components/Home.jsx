import { useState, useEffect } from 'preact/hooks'
import { Router, route } from 'preact-router'
import AsyncRoute from 'preact-async-route'
import Swagger from './Swagger'
import useLayout from './useLayout'
import './Home.css'

const base = '__ROUTE__'
const baseurl = `/${base}`

function Home() {
  const [url, setUrl] = useState(`${baseurl}`)
  const [loaded, setLoaded] = useState(false)
  const { enTest, enBase } = useLayout()

  const toggleTest = async () => {
        document.getElementById("swaggerdiv").style.display = "none"
        document.getElementById("swaggerdiv").style.height = "0"
        document.getElementById("testdiv").style.display = "block"
        document.getElementById("testdiv").style.height = "100vh"
        await useLayout.getState().setOpts({
          enTest: true,
          enBase: false,
        })
        console.log("Route to test", enTest, enBase)
  }

  const toggleBase = async () => {
        document.getElementById("testdiv").style.display = "none"
        document.getElementById("testdiv").style.height = "0"
        document.getElementById("swaggerdiv").style.display = "block"
        document.getElementById("swaggerdiv").style.height = "auto"
        await useLayout.getState().setOpts({
          enTest: false,
          enBase: true,
        })
        console.log("Route to base", enTest, enBase)
  }

  useEffect(() => {
    if (!loaded) { setLoaded(true) }
  }, [])

  useEffect(() => {
    console.log("Button click to url: ", url)
    if (url.indexOf('test') >= 0) {
      toggleTest()
      route(`${baseurl}/test`, true)

    } else {
      toggleBase()
      route(`${baseurl}/`, true)
    }
  }, [url])

  const render_subRouter = () => {
    const handlePageRoute = async e => {
      console.log("Route to url: ", e.url, baseurl)
      if (e.url.indexOf('test') >= 0) {
        toggleTest()
        //break;
      } else { //default:
        toggleBase()
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
        <div id="swaggerdiv" style="display:block;height:auto;"><Swagger /></div>
      </div>
      <div id="testdiv" style="display:none;height:0;" />

      { loaded && render_subRouter() }
    </div>
  )
}

export default Home
