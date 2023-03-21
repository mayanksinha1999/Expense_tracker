import React,{useContext} from 'react';
import { ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import {GlobalContext} from '../context/GlobalState';


export default function Transaction({transaction}) {
  const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    const styles = {
        s1:{
            color:'green'
        },
        s2:{
            color:'red'
        }
    }
  return (
    <ListItem disablePadding>
             <ListItemText  primary={transaction.text}/>
              <p style={transaction.amount < 0 ? styles.s2 : styles.s1}>{sign}${Math.abs(transaction.amount)}</p>&nbsp;
             
             <Button variant="contained" onClick={()=>deleteTransaction(transaction.id)}><DeleteIcon color="error" /></Button>
    </ListItem>
  )
}
