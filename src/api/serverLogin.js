export const serverLogin = async (email, password) => {
  // return fetch(
  //   `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  // ).then(res => res.json()).then(data => data.success);
  const ops = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`https://loft-taxi.glitch.me/auth`, ops)
    .then((response) => response.json())
};
