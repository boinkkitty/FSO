/*
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

*/

const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
    // follows name of the prop e.g. in this case its Header *COURSE*
}
export default Header