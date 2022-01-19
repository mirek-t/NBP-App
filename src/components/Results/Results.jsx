import React, {useEffect, useState} from "react";

function Results({currencyCode}) {
    const [rates, setRates] = useState([]);

    useEffect(() => {
        getData().catch(e => {
                    setRates([])}
    )}, [currencyCode]);

    async function getData() {
        if (currencyCode.length >= 3){
        const response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/last/3?format=json`);
        const data = await response.json();
        setRates(data.rates)}
    }

    // function getData() {
    //     fetch("http://api.nbp.pl/api/exchangerates/rates/a/usd/last/3?format=json")
    //     .then(response => response.json()
    //     .then(data => setRates(data.rates))
    //     .catch(e => {
    //         setRates({})
    //     }))


    return (
        <>
            {!rates.length ? (
                <h2>No results found</h2>
            ) : (
                rates.map(rate=> (
                    <pre key={rate.no}>
                        {JSON.stringify(rate, null, 2)}
                    </pre>
                ))
            )}
        </>
    )
}

export default Results;