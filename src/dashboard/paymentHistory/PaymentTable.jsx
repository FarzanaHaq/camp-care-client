const PaymentTable = ({ currentData }) => {
  return (
    <div className="overflow-x-auto py-5 lg:py-10 mt-5">
      <table className="table w-full">
        <thead>
          <tr className="text-gray-800 border-b-2 border-gray-200">
            <th>Title</th>
            <th>Fee</th>
            <th>Name</th>
            <th>Transaction Id</th>
            <th>Payment</th>
            <th>Conformation</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((data) => (
            <tr key={data._id} className="border-b-2 border-gray-200">
              <td className="text-gray-800">{data.name}</td>
              <td className="text-gray-800">{data.fee}$</td>
              <td className="text-gray-800">{data.userName}</td>
              <td className="text-gray-800">{data.transactionId}</td>
              <td className="text-gray-800">{data.status}</td>
              <td className="text-gray-800">{data.conformation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
