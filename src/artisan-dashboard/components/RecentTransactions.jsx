import TransactionItem from "../components/TransactionItem";
import { transactionData } from "../../data/Datasets";
import "./components.scss"


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
      
export default RecentTransactions;      