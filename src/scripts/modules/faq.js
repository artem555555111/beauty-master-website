// Модуль для работы с FAQ секцией

export class FAQManager {
  constructor() {
    this.faqItems = document.querySelectorAll('.faq-item');
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => this.toggleFAQ(item));
      }
    });
  }

  toggleFAQ(item) {
    const isActive = item.classList.contains('active');
    
    // Закрываем все FAQ
    this.faqItems.forEach(faq => {
      faq.classList.remove('active');
    });
    
    // Открываем текущий, если он не был активен
    if (!isActive) {
      item.classList.add('active');
    }
  }

  // Метод для программного открытия FAQ
  openFAQ(index) {
    if (this.faqItems[index]) {
      this.toggleFAQ(this.faqItems[index]);
    }
  }

  // Метод для программного закрытия всех FAQ
  closeAll() {
    this.faqItems.forEach(faq => {
      faq.classList.remove('active');
    });
  }
}

// Автоматическая инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  new FAQManager();
});
