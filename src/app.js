import React from 'react';
import axios from 'axios';
import './app.scss';
import { useState ,useReducer } from 'react';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...


import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/History';

import {
  initialState,
  historyReducer,
  addAction,
  viewAction
} from './components/history/reducer';



function  App (props) {

  const [requestParams,setRequestParams]=useState({})
  const [result,setResult]=useState([])

  const [state, dispatch] = useReducer(historyReducer, initialState);

   const callApi = (requestParams) => {
   
    console.log(requestParams);
    let reqBody=requestParams.reqBody
    let method=requestParams.method
    let url=requestParams.url
    if(method=='post'||method=='put'){
      axios[method](url,reqBody).then(results=>{
        setResult([results.data])
        setRequestParams({...requestParams,requestParams})
        //  requestParams:requestParams
      })
    }else{
      axios[method](url).then(results=>{
        setResult([results.data])
        setRequestParams({...requestParams,requestParams})
        dispatch(addAction(requestParams));
        console.log(result);
      })
    }
  }

  const veiwApi = (requestParams) => {

    let reqBody=requestParams.reqBody
    let method=requestParams.method
    let url=requestParams.url
    if(method=='post'||method=='put'){
      axios[method](url,reqBody).then(results=>{
        setResult([results.data])
        setRequestParams({...requestParams,requestParams})
        //  requestParams:requestParams
      })
    }else{
      axios[method](url).then(results=>{
        setResult([results.data])
        setRequestParams({...requestParams,requestParams})
        dispatch(viewAction(requestParams));
        
      })
    }
  }
  

 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi}  />

        {<History history={state.history} handleApiCalls={veiwApi} />}
        <Results data={result} />
        <Footer />
      </React.Fragment>
    );
 
}

export default App;