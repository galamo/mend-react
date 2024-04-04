export function calculateTax({
  price,
  tax,
}: {
  price: number | string;
  tax: number;
}) {
  if (typeof price === "string") {
    return Number(price.replace("$", "")) * tax;
  }
  return price * tax;
}
