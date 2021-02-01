import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title,onAdd,showAddTask}) => {
    
    // const onClick = () => {
    //     console.log('Clicked')
    // } 

    return (
        <header className='header' >

            {/* inline css */}
            {/* <h1 style={{color:'red'}}>{title}</h1>  */}

            {/* internal css */}
            {/* <h1 style={headingstyle}>{title}</h1> */}
            
            
            <h1>{title}</h1>
            <Button color={showAddTask ?'red':'green'} text={showAddTask ? 'Close':'Add'} onClick={onAdd}  />
            
        </header>
    )
}



//even if title prop has not passed deafult prop-title is declared..
Header.defaultProps = {
    title: 'Task-Manager'
}


//prop title type is string
Header.propTypes ={
    // title: PropTypes.string

    //now it's required
    title:PropTypes.string.isRequired
}


// internal css
// const headingstyle ={
//     color:'red',
// }

export default Header
