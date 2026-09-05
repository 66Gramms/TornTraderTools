export function getMoneyFormatted(amount: number) {
  const moneyFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

  return <div className="text-right font-medium">{moneyFormatted}</div>;
};
