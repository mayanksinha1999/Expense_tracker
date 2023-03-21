import { Button, Divider, Input } from '@mui/material'
import React,{useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onClick = (e) =>{
    console.log("Clicked!!");
    e.preventDefault();

    const newTransaction ={
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount

    }
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  }

  
  return (
    <>
        <h3>
            Add New Transaction
        </h3>
        <Divider/>
        <h5>Text</h5>
        <Input type="text" variant="outlined" placeholder="Enter Text..." value={text} onChange={(e)=>setText(e.target.value)} />
        <h5>Amount</h5>
        <Input type="number" variant="outlined" placeholder="Enter Amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <br/>
        <br/>
        <Button variant="contained" onClick={onClick}>Add Transaction</Button>
    </>
    
  )
}

export default AddTransaction