function ipAddressCheker(input) {
  const octets = input.split(".");

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
}
console.log(ipAddressCheker("255.2.3.4"));
