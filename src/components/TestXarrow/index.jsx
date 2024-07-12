import { useRef } from "preact/hooks" //example from official react-xarrows github
import { render } from "preact"
import { Suspense } from 'preact/compat'
import Xarrow from "react-xarrows"
import useLayout from '../useLayout'

const Loading = () => <p style="color:#98AFC7;">Loading...</p>

const base = '__ROUTE__'
const baseurl = `/${base}`
const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px"}

const TestXarrow = () => {
    const box1Ref = useRef(null)
    const { enTest } = useLayout()
    console.log("Debug render in Test mode: ", enTest)

    return (
      render(
        <Suspense fallback={<Loading />}>
        {enTest &&
          <div>
            <div>
              <button type="button" onClick={() => route(`${baseurl}/`, true)}>Return to basee
              </button>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
              <div ref={box1Ref} style={boxStyle}>Node 1</div>
              <p id="elem2" style={boxStyle}>Node 2</p>
              <Xarrow
                start={box1Ref} //can be react ref
                end="elem2" //or an id
              />
            </div>
          </div>
        }
        </Suspense>,
        document.getElementById("testdiv")
      )
    )
}

export default TestXarrow
