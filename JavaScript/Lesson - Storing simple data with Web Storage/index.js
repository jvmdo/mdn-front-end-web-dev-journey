// create needed constants
const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");

// Stop the form from submitting when a button is pressed
form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
  // Get the full name, split it then stringify it
  const raw = nameInput.value.split(" ");
  const name = { first: raw[0], last: raw[1] };
  const nameString = JSON.stringify(name);

  // store the entered name object as string in web storage
  localStorage.setItem("name", nameString);

  // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
  nameDisplayCheck();
});

forgetBtn.addEventListener("click", () => {
  // Remove the stored name from web storage
  localStorage.removeItem("name");

  // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
  nameDisplayCheck();
});

function nameDisplayCheck() {
  const nameString = localStorage.getItem("name");

  // check whether the 'name' data item is stored in web Storage
  if (nameString) {
    // If it is, display personalized greeting

    // Parse name to native object
    const name = JSON.parse(nameString);

    h1.textContent = `Welcome, ${name.first} ${name.last}`;
    personalGreeting.textContent = `Welcome to our website, ${name.first}! We hope you have fun while you are here.`;

    // hide the 'remember' part of the form and show the 'forget' part
    forgetDiv.style.display = "block";
    rememberDiv.style.display = "none";
  } else {
    // if not, display generic greeting
    h1.textContent = "Welcome to our website ";
    personalGreeting.textContent = `Welcome to our website. We hope you have fun while you are here.`;

    // hide the 'forget' part of the form and show the 'remember' part
    forgetDiv.style.display = "none";
    rememberDiv.style.display = "block";
  }
}

// Initial state (generic greeting)
nameDisplayCheck();
