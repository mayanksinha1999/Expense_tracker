import React,{useContext} from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <div>
        <h3>History</h3>
       <Divider/>
        <List>
          {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction}/>
          ))}
           
            
        </List>
    </div>
  )
}

export default TransactionList