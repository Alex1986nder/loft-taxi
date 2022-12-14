// export const serverRegister = (email, password, name) => {
// 	return fetch(
//     `https://loft-taxi.glitch.me/register?username=${email}&password=${password}&name=${name}`
//   ).then(res => res.json()).then(data => data.success);
// };

export const serverRegister = async (email, name, password) => {
  const ops = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, password }),
  };

  return await fetch(`https://loft-taxi.glitch.me/register`, ops)
    .then((response) => response.json())
    .then((data) => data.success);
};
