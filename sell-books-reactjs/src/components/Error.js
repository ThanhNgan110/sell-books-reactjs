const Error = (props) => {
    const convertArray = Object.keys(props);
    const showError = convertArray.map((key, index) =>(
        <p className="message-error" key={index}>{props[key]}</p>
    ))

  
    return <>{showError}</>;
  };
  
  export default Error;
  