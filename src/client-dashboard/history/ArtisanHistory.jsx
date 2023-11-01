/* eslint-disable react/prop-types */
import "./ArtisanHistory.scss";
import { transactionData2 } from "../../data/Datasets";
import TransactionItem from "../components/TransactionItem";

const ArtisanHistory = () => {
  return (
    <div className="artisan-history">
      <div className="artisan-history-container">
        <h1 className="artisan-history-heading">History</h1>
        <div className="artisan-history-content">
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default ArtisanHistory;

const Transactions = () => {
  return (
    <div className="recent-transactions">
      <div className="recent-transactions-container">
        <h2 className="heading">Transaction History</h2>
        <div className="recent-transactions-collection">
          <div className="recent-transaction-collection-header">
            <TransactionItem
              date="Date"
              activity="Activity"
              description="Description"
              status="Status"
            />
          </div>
          {transactionData2.map((content, index) => (
            <TransactionItem
              key={index}
              date={content.date}
              activity={content.activity}
              description={content.description}
              status={content.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
