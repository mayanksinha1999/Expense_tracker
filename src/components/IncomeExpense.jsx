import React,{useContext} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {GlobalContext} from '../context/GlobalState';


function IncomeExpense() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);


  const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2);
  const expense = amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0 * -1).toFixed(2);


  return (
    <div>
   <Grid container spacing={0.5}>
  <Grid item xs={6}>
    
        <Box
      sx={{
        width: 100,
        height: 50,
        backgroundColor: 'green',
        borderRadius:'10px'
      }}
    >
      <div style={{textAlign:'center'}}>
        <p style={{margin:'0px'}}>Income</p>
        <p style={{margin:'0px'}}>${income}</p>
      </div>
        
    </Box>
   
  
  </Grid>
  <Grid item xs={6}>
  <Box
      sx={{
        width: 100,
        height: 50,
        backgroundColor: 'red',
        borderRadius:'10px'
      }}
    >
      <div style={{textAlign:'center'}}>
        <p style={{margin:'0px'}}>Expense</p>
        <p style={{margin:'0px'}}>${expense}</p>
      </div>
    
    </Box>
  </Grid>
</Grid>
    </div>
  )
}

export default IncomeExpense
