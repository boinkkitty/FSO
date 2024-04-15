import { useState } from 'react'

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = ({text, handleClick}) => {
    return (
            <button onClick={handleClick}>
                {text}
            </button>
    )
}

const Statistic = ({good, neutral, bad}) => {
    const sum = good + neutral + bad;
    if(sum === 0) {
        return (<div>
            <p>No feedback given</p>
        </div>
        );
    }

    const averageF = () => {
        return (good + bad * -1) / sum;
    }

    const pos = () => {
        return good / sum * 100;
    }

    return (
        <div>
            <table>
                <tbody>
                        <StatisticLine text="good" value={good}/>
                        <StatisticLine text="neutral" value={neutral}/>
                        <StatisticLine text="bad" value={bad}/>
                        <StatisticLine text="all" value = {sum} />
                        <StatisticLine text="average" value={averageF()}/>
                        <StatisticLine text="positive" value={`${pos()} %`}/>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGood = () => {
        setGood(good + 1)
    }

    const addNeutral = () => {
        setNeutral(neutral + 1)
    }

    const addBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" handleClick={addGood}/>
            <Button text="neutral" handleClick={addNeutral}/>
            <Button text="bad" handleClick={addBad}/>
            <h1>statistics</h1>
            <Statistic good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
