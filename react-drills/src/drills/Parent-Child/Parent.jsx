import { useState } from "react";
import Child from  './Child'

function Parent(){
const [message, setMessage] = useState("hello from parent")
return(
<div>
    <h2> Parent : {message}</h2>
    <Child message={message} onMessageChange={setMessage} />
 </div>
)
}
export default Parent