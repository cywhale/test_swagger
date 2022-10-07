import { useState } from 'preact/hooks'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>
        <button type="button" onClick={() => setCount(count => count + 1)}>count is: {count}
        </button>
      </p>
    </div>
  )
}

export default Home
