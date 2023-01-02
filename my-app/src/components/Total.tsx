import React from 'react'


const Total = ({data} : {data: any}) : JSX.Element => {
    return(
        <div>
                Number of exercises{" "}
                {data.reduce((accu: any , currentValue : any) => accu + currentValue.exerciseCount, 0)}
        </div>
    )
}

export default Total
