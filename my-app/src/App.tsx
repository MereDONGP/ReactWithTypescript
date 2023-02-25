import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import { CoursePart } from './types';




const App = () => {
  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the easy course part",
      type: "normal",
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the hard course part",
      type: "normal",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      type: "special"
    }

  ]

  const Part = () => {
    courseParts.forEach(part => {
      switch(part.type){
        case "normal":
          <>
            <div>{part.name} {part.exerciseCount}</div>
            <div>{part.description}</div>
          </>
            break
            case "groupProject":
              <>
                <div>{part.name} {part.exerciseCount}</div>
                <div>{part.groupProjectCount}</div>
              </>
              break

              case "submission":
                <>
                  <div>{part.name} {part.exerciseCount}</div>
                  <div>{part.description}</div>
                  <div>{part.exerciseSubmissionLink}</div>
                </>
                break

      }
    })
  }

  console.log(Part())

  return (
    <div>
      <Header nmae={courseName}></Header>
      <Content data={courseParts}></Content>
      <Total data={courseParts}></Total>
    </div>
  );
};

export default App;
