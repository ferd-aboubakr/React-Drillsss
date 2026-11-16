import { useState } from "react";

function Greeting ({name, subtitle}){  
    return (
<div>
    <h1> Hello {name}!</h1>
    <h2> you are a  {subtitle}</h2>
</div>
    )
}

export default Greeting
