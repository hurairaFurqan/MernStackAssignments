const Currency_Formatter = Intl.NumberFormat(undefined, {
  currency: "PKR",
  style: "currency",
});

const CurrencyFormatter = (number) => {
  return Currency_Formatter.format(number);
};

export default CurrencyFormatter;