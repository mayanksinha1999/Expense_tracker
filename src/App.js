import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import { Container } from '@mui/system';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Container style={{padding:"0", width:"400px"}}>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </Container>
     
      </GlobalProvider>
    
  );
}

export default App;
