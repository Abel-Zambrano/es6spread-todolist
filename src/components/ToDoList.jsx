import React, { useState } from 'react';

function ToDoList(props) {
    const [complete, setComplete] = useState(false);

    function handleClick() {
        setComplete(prevValue => {
            return !prevValue;
        })
}
    
    return (
        <div onClick={handleClick}>
            <li style={{textDecoration: complete ? 'line-through' : 'none'}}>{props.text}</li>
        </div>
    );

}

export default ToDoList;