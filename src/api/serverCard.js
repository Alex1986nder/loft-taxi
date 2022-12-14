export const serverCard = async (
  token,
  cardNumber,
  expiryDate,
  cardName,
  cvc
) => {
  const ops = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      cardNumber,
      expiryDate,
      cardName,
      cvc,
    }),
  };
  return await fetch(` https://loft-taxi.glitch.me/card`, ops)
    .then((response) => response.json())
    .then((data) => data.success);
};
