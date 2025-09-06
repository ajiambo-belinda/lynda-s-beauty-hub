// Part 1: Welcome message button
const messageBtn = document.getElementById('message-btn');
const messageOutput = document.getElementById('message-output');

messageBtn.addEventListener('click', () => {
  messageOutput.textContent = 
    "🌸 Hello and welcome to Lynda's Beauty Hub! We're delighted to have you here. Explore our beauty services, indulge in self-care, and let us help you radiate confidence and beauty every day.";
});

// Part 2: Modal booking form open/close
const modal = document.getElementById('booking-modal');
const openBtn = document.getElementById('book-btn');
const closeBtn = document.getElementById('close-modal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Light/Dark Mode toggle
const toggleModeBtn = document.getElementById('toggle-mode-btn');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Part 4: FAQ toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
  });
});

// Part 5: Dropdown service selection output
const dropdownSelect = document.getElementById('dropdown-select');
const dropdownOutput = document.getElementById('dropdown-output');

dropdownSelect.addEventListener('change', () => {
  dropdownOutput.textContent = dropdownSelect.value ? `You selected: ${dropdownSelect.value}` : '';
});

// Part 6: Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    const target = button.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});