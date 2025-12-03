/*

Fireflies.ai Notetaker Kalpana
4:00 PM
Kalpana invited Fireflies.ai here to record & take notes. View Security & Privacy info: https://fireflies.ai/policy

Type:
'/ff pause' - Pause recording
'/ff leave' - Remove Fireflies

View Realtime notes here: https://app.fireflies.ai/live/01KAB7GE0BXSSN0YW8WQYAS5JP?ref=live_chat
keep
Pinned

Ankit Kumar Pandey ATR946
4:03 PM
You are given a JavaScript object that may contain nested objects.
Your task is to write a function that flattens the object so that all nested keys are converted into a single level using dot notation (‘.’).
Only objects will be nested.
Primitive values (string, number, boolean, null) remain unchanged.


Example: 

Input : 
{
  id: "STU1001",                        
  name: {                               
    first: "Aarav",
    last: "Verma"
  },
  contact: {                            
    email: "aarav.verma@example.com",
    phone: "9876543210",
    address: {
      city: "Delhi",
      pin: 110001
    }
  }
    
}


Output:
{
  "id": "STU1001",
  "name.first": "Aarav",
  "name.last": "Verma",
  "contact.email": "aarav.verma@example.com",
  "contact.phone": "9876543210",
  "contact.address.city": "Delhi",
  "contact.address.pin": 110001
}
Invitation: Google Meet - Video Interview (TR-1) | November 19,2025 at 04:00 P.M. | Mr Vikash Kumar - MERN (DSA)[L1] with Mr Ravneet Singh
*/

function getUniqueChar(str) {
  let charObj = {};
  let resChar = "";
  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
      resChar = char;
    }
  }

  if (charObj[resChar] === 1) {
    return resChar;
  } else {
    console.log("All characters are repeating");
  }
}

console.log(getUniqueChar("aaskjh"));

function sortArr(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArr([1, 8, 65, 3, 2]));
