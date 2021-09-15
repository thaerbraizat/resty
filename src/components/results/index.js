import React from 'react';
import Loading from '../loading/Loading';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
function Results(props){
  return (
    <section>

      { props.data ?<JSONPretty data-testid="data" data={props.data}></JSONPretty> : <Loading/>}
  
    </section>
  );
}


export default Results;
