import { useRef } from "preact/hooks" //example from official react-xarrows github
import { render } from "preact"
import Xarrow from "react-xarrows"

const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px"}

const TestXarrow = () => {
    const box1Ref = useRef(null)
    return (
      render(
        <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
            <div ref={box1Ref} style={boxStyle}>Node 1</div>
            <p id="elem2" style={boxStyle}>Node 2</p>
            <Xarrow
                start={box1Ref} //can be react ref
                end="elem2" //or an id
            />
        </div>,
        document.getElementById("testdiv")
      )
    )
}

export default TestXarrow
