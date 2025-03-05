function emailCheck(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  const domenExtention = domain.split(".");

  if (domenExtention.length < 2 || domenExtention[1] < 2) {
    return false;
  }
  return true;
}
console.log(emailCheck("vikash@gmailcm"));
