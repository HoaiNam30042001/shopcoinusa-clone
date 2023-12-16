export const localUserServ = {
  get: () => {
    let dataJson = localStorage.getItem("loginData");
    return JSON.parse(dataJson);
  },
  set: (currentUser) => {
    let dataJson = JSON.stringify(currentUser);
    localStorage.setItem("loginData", dataJson);
  },
  remove: () => {
    localStorage.removeItem("loginData");
  },
};
