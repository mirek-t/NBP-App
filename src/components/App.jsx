import React, {useState} from 'react';
import "./app.scss"
import Currency from "./Currency/Currency"
import Results from "./Results/Results"

function App() {
    const [value, setValue] = useState("")

    return (
    <div>
        <Currency setValue={setValue} value={value}/>
        <Results currencyCode={value}/>
    </div> 
    );
};


export default App;
