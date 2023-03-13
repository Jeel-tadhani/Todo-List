import React, { useContext } from 'react';
import './TodoList.css';
import { Context } from '../../store/Context';
import List from '../List/List';

const TodoList = () => {
    const value =useContext(Context);
    return (
        <>
        <div className='header'>
            <h2 className='header-h2'>Todo List</h2>
            <br/>
            <button id='header-btn' onClick={()=>{value.setInputvisi(true)}}>Create Task</button>
        </div>
        <div className = "task-container">
        {
            value.list.map((item,index)=>{
             return <List title={item.title} description={item.description} index={index}/> 
            })
        }
        </div>
        </>
    );
};

export default TodoList;