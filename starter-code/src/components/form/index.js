
// import { useState} from 'react';
// import React from 'react';

// import './form.scss';



// function Form (props){

//   let [method, setmethod] = useState('get');
//   let [showText,setshowText] = useState(false);
//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       method:method,
//       url: props.urll ,
//     };
//    props.handleApiCall(formData);
//   }

// function setMethod(e){
//   setmethod(e.target.id);
// }
//   function handleText(e){
//     setshowText(!showText);
//     setmethod(e.target.id);  
//   }


//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label >
//           <span>URL: </span>
//           <input name='url' type='text' onChange={props.takeInput} />
//           <button type="submit" >GO!</button>
//         </label>
//         <label className="methods">
//           <span style={{background:"red"}} name="GET" id="get" onClick={setMethod}>GET</span>
//           <span style={{background:"blue"}} name="post"  id="post" onClick={handleText}>POST</span>
//           <span style={{background:"orange"}} name="put" id="put" onClick={handleText}>PUT</span>
//           <span style={{background:"pink"}} name="delete" id="delete" onClick={setMethod}>DELETE</span>
//         </label>

//         {showText && <textarea name="space" rows="20" cols="30" />}
//       </form>
//     </>
//   )
// }

// export default Form;
import React from 'react';
import { useState } from 'react';

import './form.scss';


function Form(props) {
  let [method, setmethod] = useState('get');
  let [showText, setshowText] = useState(false);
  let [url, seturl] = useState("");
  let [requestBody, setrequestBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  
    
    const formData = {
      method: method,
      url: url,
      reqBody: requestBody
    };
    console.log("formData",formData);
    props.handleApiCall(formData);
  }
  function handleText(e) {
    setshowText(!showText);
    setmethod(e.target.id);
  }
  function setMethod(e) {
    setmethod(e.target.id);
  }
  function seturll(e) {
    seturl(e.target.value);
  }

  function handleRequestBody(e){
    setrequestBody(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={seturll} />
          <button type="submit" >GO!</button>
        </label>
        <label className="methods">
          <span style={{ background: "red" }} name="GET" id="get" onClick={setMethod}>GET</span>
          <span style={{ background: "blue" }} name="post" id="post" onClick={handleText}>POST</span>
          <span style={{ background: "orange" }} name="put" id="put" onClick={handleText}>PUT</span>
          <span style={{ background: "pink" }} name="delete" id="delete" onClick={setMethod}>DELETE</span>
        </label>

        {showText && <textarea name="space" rows="20" cols="30" onChange={handleRequestBody}/>}
      </form>
    </>
  )
  // return (
  //   <>



  //     <form onSubmit={handleSubmit}>
  //     <label className="methods" htmlFor='select' > select hte method you want </label>
  //         <select name="select" id='select'> 
  //         <option style={{background:"red"}}  id="get" value='get'>GET</option>
  //         <option style={{background:"blue"}} id="post" value='post'>POST</option>
  //         <option style={{background:"orange"}} id="put" value='put'>PUT</option>
  //         <option style={{background:"pink"}} id="delete" value='delete'>DELETE</option>
  //         </select>

  //       <label >
  //         <span>URL: </span>
  //         <input name='url' type='text' id='url'/>
  //         <button type="submit">GO!</button>
  //       </label>
  //       <textarea id="text" name="text" rows="4" cols="50" >
  //         </textarea>

  //     </form>

  //   </>
  // );

}

export default Form;