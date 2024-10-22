document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('button');
  
    signUpButton.addEventListener('click', (e) => {
      e.preventDefault();
      signUpButton.classList.add('shake');
  
      setTimeout(() => {
        signUpButton.classList.remove('shake');
      }, 500);
    });
  });
  