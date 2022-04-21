import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { click } from '@testing-library/user-event/dist/click';


function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);

    const clickHandler = function(){
        console.log("Clicked!")
        setTitle("Hello");
    };
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}



export default ExpenseItem;