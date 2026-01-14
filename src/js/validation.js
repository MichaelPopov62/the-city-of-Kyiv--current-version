// validation.js

// Експортуємо функцію валідації
export function validateForm(question, contact) {
  if (!question) return 'Будь ласка, введіть ваше питання.';
  if (!contact) return 'Будь ласка, залиште контактні дані для відповіді.';
  return null;
}
