function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let specials = "!@#$%^&*";
    let all = letters + upper;
    let pass = "";
  
    pass += upper[Math.floor(Math.random() * upper.length)];
    if (includeNumbers) {
      all += nums;
      pass += nums[Math.floor(Math.random() * nums.length)];
    }
    if (includeSpecialChars) {
      all += specials;
      pass += specials[Math.floor(Math.random() * specials.length)];
    }
  
    while (pass.length < length) {
      pass += all[Math.floor(Math.random() * all.length)];
    }
  
    return pass;
  }
  
  console.log(generatePassword(10));
  console.log(generatePassword(10, true, true));
  