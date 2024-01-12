/* eslint-disable react/prop-types */
const TransactionItem = (props) => {
  return (
    <tr className="transaction-item flex px-[10px] text-[14px] justify-between ">
      <td className="transaction-date  md:w-[80px] w-[80px] h-[40px] flex items-center md:text-[14px] text-[11px] ">
        {props.date}
      </td>
      <td className="transaction-activity md:w-[150px] w-[120px] h-[40px] md:text-[14px] text-[11px] flex items-center  ">
        {props.activity}
      </td>
      <td className="transaction-description w-[50px] overflow-clip md:text-[14px] text-[11px] text-clip md:w-[150px] h-[40px] md:flex hidden items-center ">
        {/* <p className="  "> */}
          {props.description}
        {/* </p> */}
      </td>
      <td className="transaction-description md:w-[150px] w-[50px] h-[40px] flex items-center justify-center md:hidden ">
        ...
      </td>
      <td className="transaction-status md:w-[150px] w-[100px] h-[40px] md:text-[14px] text-[11px] justify-end text-right items-center flex ">
        {props.status}
      </td>
    </tr>
  );
};

export default TransactionItem
