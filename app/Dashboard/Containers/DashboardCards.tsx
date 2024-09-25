import { Card, CardBody } from "@nextui-org/card";
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";
import CardComponent from "../_components/CardComponent";

const calculateTotal = (details: { label: string; value: string }[]) => {
  return details
    .map((detail) => parseFloat(detail.value))
    .reduce((acc, curr) => acc + curr, 0);
};

export default function DashboardCards() {
  const incomeData = {
    title: "Income",
    amount: "0",
    percentage: 2.4,
    isPositive: true,
    details: [
      { label: "Service sell", value: "188.21" },
      { label: "Invest", value: "55.32" },
      { label: "Extra tip", value: "22.26" },
    ],
  };

  const expenseData = {
    title: "Expense",
    amount: "0",
    percentage: 1.9,
    isPositive: false,
    details: [
      { label: "Salary", value: "78.65" },
      { label: "Bonus", value: "25.00" },
      { label: "Profit share", value: "52.32" },
      { label: "House rent", value: "20.5" },
      { label: "Electricity", value: "2.32" },
      { label: "Internet", value: "1.2" },
    ],
  };


  const totalIncome = calculateTotal(incomeData.details);
  const totalExpense = calculateTotal(expenseData.details);

  const profit = totalIncome > totalExpense ? totalIncome - totalExpense : 0;
  const loss = totalExpense > totalIncome ? totalExpense - totalIncome : 0;
  const remainingAmount = totalIncome - totalExpense;

  const percentageChange = (value: number, base: number) =>
    base !== 0 ? ((value / base) * 100).toFixed(1) : "0.0";

  const profitPercentage = percentageChange(profit, totalExpense);
  const lossPercentage = percentageChange(loss, totalIncome);

  return (
    <div>
      <div className="my-10">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
      </div>
      {/* Cards section */}
      <div className="space-y-5">
        <div className="flex gap-5">
          <CardComponent {...incomeData} />
          <CardComponent {...expenseData} />
        </div>
        <div>
          <Card>
            <CardBody>
              <div className="flex gap-5">
                <div className="w-1/2 space-y-4">

                  <div className="text-2xl flex">
                    <h2 className="w-2/3 flex justify-between">
                      Profit: <span>{profit.toFixed(2)}k</span>
                    </h2>
                    <div
                      className={`rounded-md p-1 mx-3 flex items-center gap-1 text-xs ${
                        profit > 0
                          ? "bg-green-500/10 text-green-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {profitPercentage}%
                      {profit > 0 ? (
                        <FaCaretSquareUp className="text-sm" />
                      ) : (
                        <FaCaretSquareDown className="text-sm" />
                      )}
                    </div>
                  </div>

                  <div className="text-2xl flex">
                    <h2 className="w-2/3 flex justify-between">
                      Loss: <span>{loss.toFixed(2)}k</span>
                    </h2>
                    <div
                      className={`rounded-md p-1 flex mx-3 items-center gap-1 text-xs ${
                        loss > 0
                          ? "bg-red-500/10 text-red-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {lossPercentage}%
                      {loss > 0 ? (
                        <FaCaretSquareDown className="text-sm" />
                      ) : (
                        <FaCaretSquareUp className="text-sm" />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-2xl">Remaining Amount:</p>
                  <h1 className="text-5xl my-2">
                    {remainingAmount.toFixed(2)}k
                  </h1>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
