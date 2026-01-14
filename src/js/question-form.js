import { validateForm } from './validation.js';


document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-question');
  const modal = document.getElementById('question-modal');
  const form = document.getElementById('question-form');
  const closeBtn = document.querySelector('.modal-close');
  const formStatus = form.querySelector('.form-status');

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
     openBtn.style.display = 'none';
    formStatus.textContent = ''; // очищаємо статус при відкритті
  });

  const closeModal = () => {
  modal.classList.remove('active');
  openBtn.style.display = '';
    formStatus.textContent = '';// тут очищаємо статус при закритті
     form.reset(); // ← очищаємо всі поля форми
};


  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
     if (e.target === modal){closeModal();}
        });

// Відправка форми
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const question = document.getElementById('question-text').value.trim();
    const contact = document.getElementById('contact').value.trim();

     formStatus.textContent = '';// очищаємо попередні повідомлення
      const error = validateForm(question, contact);
        if (error) {
          formStatus.textContent = error;
            return;
            }

    try {
      const res = await fetch('http://localhost:9000/send-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, contact })
      });



      const data = await res.json(); // ✅ обов'язково await
      formStatus.textContent = data.reply || 'Щось пішло не так...';



      if (data.success){
        formStatus.classList.add('success'); // зелене повідомлення
      form.reset();
        }
        else {
        formStatus.classList.add('error'); // червоне для невдалого відповіді
      }


    } catch (err) {
      formStatus.textContent = 'Помилка при надсиланні: ' + err.message;
    }
  });
});
