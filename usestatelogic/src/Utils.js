// Utils.js

export const sum = (transactions) => {
  const totals = transactions.reduce(
    (acc, curr) => {
      if (curr.type === "income") {
        acc.income += Number(curr.amount);
      } else if (curr.type === "expense") {
        acc.expense += Number(curr.amount);
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );
  

  return totals;
};