const userInput = document.querySelector('#text-input');
const checkPalindromeBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

const checkPalindrome = (input) => {
  if (input === '') {
    alert('Please input a value');
    return;
  }

  const cleanInput = input.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  const reversed = cleanInput.split('').reverse().join('');

  const isPalindrome = cleanInput === reversed ? "is a palindrome" :  'is not a palindrome';
  result.textContent = `${input} ${isPalindrome}`;
  userInput.value = '';
};

checkPalindromeBtn.addEventListener('click', function () {
  checkPalindrome(userInput.value);
});
