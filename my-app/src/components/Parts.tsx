import React from "react";
import { CoursePart } from "../types";

const Part = ({data} : {data: Array<CoursePart>}) =>{
    return(
        <>
        {
            data.map(part => {
                switch(part.type){
                  case "normal":
                    return <div>
                      <div>{part.name} {part.exerciseCount}</div>
                      <div>{part.description}</div>
                    </div>
                      case "groupProject":
                        return <>
                          <div>{part.name} {part.exerciseCount}</div>
                          <div>Group Size {part.groupProjectCount}</div>
                        </>
          
                        case "submission":
                          return <>
                            <div>{part.name} {part.exerciseCount}</div>
                            <div>{part.description}</div>
                            <div>{part.exerciseSubmissionLink}</div>
                          </>

                          default:
                            return(<div>
                                "there is nothing here"
                            </div>)
          
                }
              })
        }
        </>
    )
}
export default Part