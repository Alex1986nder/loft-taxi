// export const serverRegister = (email, password, name) => {
// 	return fetch(
//     `https://loft-taxi.glitch.me/register`
//   ).then(res => res.json()).then(data => data.success);
// };

export const serverRegister = async ({email, password, name, surname}) => {
  const ops = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email, password, name, surname}),
  };

  return await fetch(`https://loft-taxi.glitch.me/register`, ops)
    .then((response) => response.json())
    
};
