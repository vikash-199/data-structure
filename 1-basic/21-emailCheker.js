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

// Method 2

const emailCheker = (email) => {
  if (!email.includes("@")) return false;

  let parts = email.split("@");
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  if (local.lenght === 0) return false;

  if (!domain.includes(".")) return false;

  if (domain.startsWith(".") || domain.endsWith(".")) return false;

  const domainParts = domain.split(".");
  if (domainParts.some((part) => part.length === 0)) return false;

  return true;
};

console.log(emailCheker("vikash@gmail.com"));
