
import { useState} from 'react';
import React from 'react';

import './form.scss';



function Form (props){

  let [method, setmethod] = useState('get');
  let [showText,setshowText] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method:method,
      url: props.urll ,
    };
   props.handleApiCall(formData);
  }

  function setMethod(e){
    setmethod(e.target.id);
  }
  function handleText(e){
    setshowText(!showText);
    setmethod(e.target.id);  
  }
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={props.takeInput} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span style={{background:"red"}} name="GET" id="get" onClick={setMethod}>GET</span>
          <span style={{background:"blue"}} name="post"  id="post" onClick={handleText}>POST</span>
          <span style={{background:"orange"}} name="put" id="put" onClick={handleText}>PUT</span>
          <span style={{background:"pink"}} name="delete" id="delete" onClick={setMethod}>DELETE</span>
        </label>

        {showText && <textarea name="space" rows="20" cols="30" />}
      </form>
    </>
  )
}

export default Form;
