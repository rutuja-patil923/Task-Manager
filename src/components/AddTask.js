import { useState } from "react";



const AddTask = ({onAdd}) => {

    const [text,setText] = useState ('')
    const [Day,setDay] =useState('')
    const [reminder,setreminder] =useState(false)

    const onSubmit =(e) => {
        e.preventDefault()

        if(!text) {
            alert('Please Add Task')
            return
        }
        onAdd({text,Day,reminder})

        setText('')
        setDay('')
        setreminder(false)
    }
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                value={text}
                onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day and Time' 
                value={Day}
                onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked={reminder}
                value={reminder}
                onChange={(e)=> setreminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className=' btn btn-block' onClick={onSubmit} />
        </form>
    )
}

export default AddTask
