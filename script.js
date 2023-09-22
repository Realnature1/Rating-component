const circleBtns = document.querySelectorAll('.circle-btn');
const submitButton = document.getElementById('btn');
const h1Element = document.getElementById('h1-el');
const pElement = document.getElementById('p-el');
const contain = document.getElementById('contain');
const selectRating = document.getElementById('rating');
const rate = document.querySelector('.rate');

let rating = 0;

circleBtns.forEach((circleBtn, index) => {
  circleBtn.addEventListener('click', (e) => {
    const number = e.currentTarget.textContent;

    circleBtns.forEach((btn) => {
      if (btn.textContent == number) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    rating = index + 1;
  });
});

submitButton.addEventListener('click', () => {
  if (rating === 0) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Please select a rating before submitting';
    messageElement.classList.add('error-message');
  } else {
    contain.style.display = 'block';

    rate.textContent = `You selected ${rating} out of 5`;
  }
});
