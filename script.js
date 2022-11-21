function GUVIGEEK() {
  const name = document.forms.RegForm.Name.value;
  const email = document.forms.RegForm.EMail.value;
  const phone = document.forms.RegForm.Telephone.value;
  const what = document.forms.RegForm.Subject.value;
  const password = document.forms.RegForm.Password.value;
  const address = document.forms.RegForm.Address.value;
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
  const regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
  const regName = /\d+$/g; // Javascript reGex for Name validation

  if (name == "" || regName.test(name)) {
    window.alert("Please enter your name properly.");
    name.focus();
    return false;
  }

  if (address == "") {
    window.alert("Please enter your address.");
    address.focus();
    return false;
  }

  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    password.focus();
    return false;
  }

  if (password.length < 6) {
    alert("Password should be atleast 6 character long");
    password.focus();
    return false;
  }
  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
    phone.focus();
    return false;
  }

  if (what.selectedIndex == -1) {
    alert("Please enter your course.");
    what.focus();
    return false;
  }

  return true;
}
