// import Header from "./components/Header"
// import Total from "./components/Total"
// import Content from "./components/Content"
// // import Part from "./components/Part"

import {useState} from "react";''

/* Last part of d

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
    const[value, setValue] = useState(0)

    const setToValue = (value) => {
        console.log(value)
        setValue(value)
    }

    // do not do this -> const Display = props => <div>{props.value}</div>

    return(
        <div>
            <Display value ={value}/>
            <Button handleClick = {setToValue(1000)} text = "1000"/>
            <Button handleClick = {setToValue(0)} text = "1000"/>
            <Button handleClick = {setToValue(value + 1)} text = "1000"/>
        </div>
    )
}
*/

/* 1d
const History = (props) => {
    if(props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return(
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button =({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1;
        setLeft(updatedLeft)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1;
        setRight(updatedRight)
    }

    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text = 'left' />
            <Button handleClick={handleRightClick} text = 'right'/>
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

 */

/*
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <History allClicks={allClick} />
        </div>
    )
}
 */

/* 1.3
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1.name} - {part1.exercises} exercises
            </p>
            <p>
                {part2.name} - {part2.exercises} exercises
            </p>
            <p>
                {part3.name} - {part3.exercises} exercises
            </p>
        </div>
    )
}
*/

/*
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header title = {course.name}/>
            <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
        </div>
    )

}

export default App

*/

export default App

/*
const handleLeftClick = () => {
    const newClicks = {
        ...clicks,
        left: clicks.left + 1;
    }
    setClicks(newClicks)
}

    simplified
const handleLeftClick = () =>
    setClicks({...clicks, left: click.left + 1})

// does not work - asynchronous
const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)
  }

const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

 */