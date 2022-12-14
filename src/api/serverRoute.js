export const serverRoute = (payload) => {
  fetch(
    `https://loft-taxi.glitch.me/route ?address1=${payload.address1}&address2=${payload.address2}`,
    {}
  )
    .then((response) => response.json())
    .then((data) => data.success);
};
