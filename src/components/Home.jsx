import { useState } from 'preact/hooks'
import Swagger from './Swagger'
import './Home.css'

const Home = (props) => {
  const [init, setInit] = useState(false)
  // Force update trick
  // const [, updateState] = useState()
  // const forceUpdate = useCallback(() => updateState({}), [])
  // useEffect(() => { forceUpdate() }, [])

  return (
    <div>
      <div>
        <button type="button" onClick={() => setInit(true)}>Load Swagger doc is: {init?'initialized':'deactivated'}
        </button>
        <hr/><br/>
      </div>
      <Swagger />
    </div>
  )
}

export default Home
