import React, { useContext, useState} from 'react';
import './TodoInput.css';
import ReactDOM from 'react-dom';
import { Context } from '../../store/Context';

const FORM_STYLES={
    position:'fixed',
    zIndex:2,
    top: '25%',
    left:'auto',
    right:"37%",
    trunsform:'translate(-50,-50)',
    backgroundColor:"white"
}

const TodoInput = () => {
    const value = useContext(Context);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    if(!value.inputvisi) return null
    function handleOnSubmit(){
        setDescription("")
        setTitle("")
    }
    
    return ReactDOM.createPortal(
        <div className='input-div'>
        <form className='input-con' style={FORM_STYLES} onSubmit={(e)=>{value.onsubmit(e,title,description,handleOnSubmit)}}>
            <div className='input-hed'>
                <h3>Create Task</h3>
                <svg focusable="false" width={20} viewBox="0 0 24 24" sizes="" class="Close__Image-sc-18afp85-0 eeJrZe" onClick={()=>{value.setInputvisi(false)}}><path fill="#141824" fill-rule="evenodd" d="M20.646 5.452a.5.5 0 000-.707l-1.391-1.391a.5.5 0 00-.707 0L12 9.9 5.452 3.354a.5.5 0 00-.707 0L3.354 4.745a.5.5 0 000 .707L9.9 12l-6.547 6.548a.5.5 0 000 .707l1.391 1.391a.5.5 0 00.707 0L12 14.1l6.548 6.547a.5.5 0 00.707 0l1.392-1.391a.5.5 0 000-.707L14.098 12l6.547-6.548z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="input-fill">
                <label>Task Name</label>
                <input type='text' onChange={(e)=>{setTitle(e.target.value)}} value={title}></input>
                <label>Description</label>
                <textarea onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea>
            </div>
            <div className='sub-btn'>
                <button type='submit' className='btn1'>Create</button>
                <button className='btn2' onClick={()=>{value.setInputvisi(false)}}>Cancel</button>
            </div>
        </form>
        </div>
        ,
        document.getElementById("portal")
    );
};

export default TodoInput;