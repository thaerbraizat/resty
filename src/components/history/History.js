
function History(props) {
    
     function api(i) {
      const obj = {
        method: props.history[i].method,
        url: props.history[i].url,
        request: props.history[i].request,
      };
      console.log(obj);
       props.handleApiCalls(obj);
    }
  
    return (
     <>
        <ul>
          {props.history.map((element, i) => {
            return (
              <li  key={i}> Method: {element.method} Url: {element.url}
               <button onClick={() => api(i)}>call api</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
  export default History;
  
  