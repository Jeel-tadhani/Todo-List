import React, { createContext, useState } from "react";


const Context = createContext()

const Wrapper = (props) => {
    

    function onsubmit(e,titled,descriptiond,handleOnSubmit){
        e.preventDefault();
        const l=[...list,{title:titled,description:descriptiond}]
        setList(l);
        console.log(list);
        setInputvisi(false)
        handleOnSubmit();
    }
    const [inputvisi,setInputvisi] = useState(false);
    const [list,setList]=useState([{title:"jell",description:"jdshfjkhas"}]);
    return (
        <Context.Provider value={{ inputvisi,setInputvisi,onsubmit ,list}}>
            {props.children}
        </Context.Provider>
    )
}
export { Wrapper, Context }