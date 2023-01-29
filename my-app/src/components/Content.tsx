import React from "react"
import Part from "./Parts"


const Content = ({data} : {data:any}) : JSX.Element => {
    return(
        <div>
            <Part data={data}></Part>
        </div>
    )
}

export default Content