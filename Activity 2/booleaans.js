const myInput = document.getElementById('myInput');
  const enableButton = document.getElementById('enableButton');

  let isInputEnabled = false; // Initial state

  enableButton.addEventListener('click', function() {
    isInputEnabled = !isInputEnabled;
    myInput.disabled = !isInputEnabled; // Set 'disabled' attribute based on inverted boolean
    if (isInputEnabled) {
      enableButton.textContent = 'Disable Input';
    } else {
      enableButton.textContent = 'Enable Input';
    }
  });