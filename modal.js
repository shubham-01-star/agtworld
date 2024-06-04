const signUpModal = document.getElementById('signUpModal');
const signInModal = document.getElementById('signInModal');
const openSignUpModalBtn = document.getElementById('openSignUpModal');
const goToSignInLink = document.getElementById('goToSignIn');
const goToSignUpLink = document.getElementById('goToSignUp');

// Function to open a specific modal
function openModal(modal) {
  modal.style.display = 'block';
}

// Function to close a specific modal
function closeModal(modal) {
  modal.style.display = 'none';
}

// Open sign-up modal when button is clicked
openSignUpModalBtn.addEventListener('click', () => {
  openModal(signUpModal);
});

// Switch to sign-in modal from sign-up modal
goToSignInLink.addEventListener('click', () => {
  closeModal(signUpModal);
  openModal(signInModal);
});

// Switch to sign-up modal from sign-in modal
goToSignUpLink.addEventListener('click', () => {
  closeModal(signInModal);
  openModal(signUpModal);
});

// Close modal by clicking outside the content area (optional)
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target);
  }
});
