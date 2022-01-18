console.log("signup");
document.getElementById("signupBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const isAdmin = document.getElementById("admin").checked;
  signup(email, password, name, phone, confirmPassword, isAdmin);
});
const signup = async (
  email,
  password,
  name,
  phone,
  confirmPassword,
  isAdmin
) => {
  try {
    const createAccount = await axios({
      method: "POST",
      url: "http://localhost:2000/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        confirmPassword,
        phone,
        isAdmin,
      },
    });
    console.log(createAccount);
    window.location.replace("http://127.0.0.1:2000/login");
  } catch (err) {
    alert("Invalid username or password");
    console.log(err);
  }
};
