console.log("login");
const login = async (email, password) => {
  try {
    const loggedInUser = await axios({
      method: "POST",
      url: "http://127.0.0.1:2000/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    window.location.replace("http://127.0.0.1:2000");
  } catch (err) {
    alert("Invalid username or password");
  }
};

document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log("email", email);
  login(email, password);
});

