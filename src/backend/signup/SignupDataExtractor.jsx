
export var signupData = {
    name: "",
    email: "",
    password: "",
}

export function ValidateEmail(e) {

    var input = e.target.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
    //   alert("Valid email address!");
  
    //   document.form1.text1.focus();
  
      console.log("okay")
      return true;
  
    } else {
  
    //   alert("Invalid email address!");
  
    //   document.form1.text1.focus();
      console.log("not okay")
      return false;
  
    }
  
  }