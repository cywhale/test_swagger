import { useState } from 'preact/hooks'
import Swagger from './Swagger'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <button type="button" onClick={() => setCount(count => count + 1)}>count is: {count}
        </button>
        <hr/><br/>
      </div>
      <Swagger />
    </div>
  )
}

export default Home
