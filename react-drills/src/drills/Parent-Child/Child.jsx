function Child ({message, onMessageChange}){
 return (
    <div>
    <p> Child : {message}</p>
    <input
    type = "text"
    value = {message}
    onChange = {(e) => onMessageChange(e.target.value)}/>
    
    </div>
 )  

}

export default Child