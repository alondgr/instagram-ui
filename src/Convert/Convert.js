import React, { useEffect, useState } from 'react';
import { date } from 'yup/lib/locale';
import './Convert.scss';
const BASE_URL = 'http://api.coinlayer.com/api/live?access_key=b93af787cfae0c511088b5f8767a7dff';






export default function Convert() {

    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [amountFromCurrency, setAmountFromCurrency] = useState(true);
    console.log(exchangeRate)

    let toAmount, fromAmount;
    if (amountFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[21];
                setCurrencyOptions([date.base, ...Object.keys(data.rates)])
                setFromCurrency(firstCurrency);
                setToCurrency(Object.keys(data.rates)[149]);
                setExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountFromCurrency(false)
    }

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}&from=${fromCurrency}&to=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])

    return (
        <div className="convert">
            <h1>Convert</h1>
            <input type="number" onChange={handleFromAmountChange} value={amount} />
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}> {option}</option>
                ))}
            </select>
            <div className="equal">=</div>
            <input type="number" onChange={handleToAmountChange} value={toAmount} />
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}> {option}</option>
                ))}
            </select>
        </div>
    )
}
