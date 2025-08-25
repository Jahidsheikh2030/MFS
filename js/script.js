
document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const setemail = "01401952442";
  const setpass = "1234";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Email:", email);
  console.log("Password:", password);

  if(email === setemail && password === setpass) {
    window.location.href = "mian.html";  // also check spelling of 'mian.html'
  } else {
    alert("Email or password is wrong!");
  }});
