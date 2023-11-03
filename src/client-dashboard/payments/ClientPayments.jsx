/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ClientPayments.scss";

import SeeMore from "../../assets/icons/see-more.svg";
import { transactionData } from "../../data/Datasets";

const ClientPayments = () => {
  return (
    <div className="artisan-payments">
      <div className="artisan-payments-container">
        <h1 className="artisan-payments-heading">Payments</h1>
        <div className="artisan-payments-content">
          <DashboardYourBalance />
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default ClientPayments;

const DashboardYourBalance = () => {
  return (
    <div className="dashboard-balance">
      <h2 className="your-balance-heading">Your Balance</h2>
      <div className="dashboard-balance-collection">
        <TotalBalance />
        <BalanceCard title="First Work Profile" balance="$5,000.83" />
        <BalanceCard title="First Work Profile" balance="$5,000.83" />
        <BalanceCard title="First Work Profile" balance="$5,000.83" />
      </div>
    </div>
  );
};

const BalanceCard = (props) => {
  return (
    <div className="balance-card">
      <h3 className="title">{props.title}</h3>
      <p>Balance</p>
      <h1 className="balance">{props.balance}</h1>
      <p>
        <Link to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

const TotalBalance = () => {
  return (
    <div className="total-balance-card">
      <p className="title">Total balance</p>
      <h1 className="balance">$201,000.83</h1>
      <p>
        <Link to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <div className="recent-transactions-container">
        <h2 className="heading">Recent Transactions</h2>
        <div className="recent-transactions-collection">
          <div className="recent-transaction-collection-header">
            <TransactionItem
              // style={{ color: "#AFB0B1", background: "trans" }}
              date="Date"
              activity="Activity"
              description="Description"
              status="Status"
            />
          </div>
          {transactionData.map((content, index) => (
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

const TransactionItem = (props) => {
  return (
    <div className="transaction-item">
      <div className="transaction-date">{props.date}</div>
      <div className="transaction-activity">{props.activity}</div>
      <div className="transaction-description">{props.description}</div>
      <div className="transaction-status">{props.status}</div>
    </div>
  );
};
