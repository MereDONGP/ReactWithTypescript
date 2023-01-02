import React from "react"


const Content = ({data} : {data:any}) : JSX.Element => {
    return(
        <div>
            {  
                data.map((n :any) => (
                    <p>{n.name} {n.exerciseCount}</p>
                ))  
            }
        </div>
    )
}

export default Content