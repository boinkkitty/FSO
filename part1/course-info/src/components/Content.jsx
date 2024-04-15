import Part from "./Part"

const Content = ({parts}) => {
    return (
        <div>
            <Part parts = {parts[0]} />
            <Part parts = {parts[1]} />
            <Part parts = {parts[2]} />
        </div>
    )
}

/*
const Content = ({part1, part2, part3}) => {
    return (
        <div>
            <Part parts={part1} />
            <Part parts={part2} />
            <Part parts={part3} />
        </div>
    )
}

*/

export default Content


