/* eslint-disable react/prop-types */
import "./components.scss";

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

export default TransactionItem;
