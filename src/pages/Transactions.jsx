import transactions from 'data/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

const Transactions = () => {
  return <TransactionHistory items={transactions} />;
};
export default Transactions;
