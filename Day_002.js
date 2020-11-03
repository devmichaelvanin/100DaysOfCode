const password = 'topSecret';
let entry = prompt('Please enter your password to continue:');

while (entry !== password){
  alert('That is not the correct password.')
  entry = prompt('Please enter your password to continue:');
}
alert('Your password is correct.')