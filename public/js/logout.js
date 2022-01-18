console.log("logout");
const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:2000/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
  }
};

document.querySelector('.nav__el--logout').addEventListener('click',(e)=>{
  logout();
})