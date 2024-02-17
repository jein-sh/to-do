const showFilter = (card) => {
  const filter = card.querySelector('.card__filter');
  const tasks = card.querySelectorAll('.task');

  if (tasks.length) {
    filter.classList.remove('is-hidden');
  } else {
    filter.classList.add('is-hidden');
  }
};

const filterTask = (card, filter) => {
  const tasks = card.querySelectorAll('.task');
  const filterBtns = card.querySelectorAll('.card__filter .btn');
  const message = card.querySelector('.card__message');
  const addBtn = card.querySelector('[data-add-task]');

  filterBtns.forEach((el) => {
    el.classList.remove('is-active');
  });

  filter.classList.add('is-active');

  if (filter.dataset.filter === 'all') {
    message.classList.add('is-hidden');
    addBtn.classList.remove('is-hidden');
  } else {
    addBtn.classList.add('is-hidden');
    message.classList.remove('is-hidden');
  }

  tasks.forEach((el)=> {
    el.classList.remove('is-hidden');

    if (filter.dataset.filter === 'done' && !el.classList.contains('is-done')) {
      el.classList.add('is-hidden');
    }

    if (filter.dataset.filter === 'active' && el.classList.contains('is-done')) {
      el.classList.add('is-hidden');
    }
  });

  const hiddenTasks = card.querySelectorAll('.task.is-hidden');

  if (tasks.length === hiddenTasks.length) {
    message.classList.remove('is-hidden');

    if (filter.dataset.filter === 'active') {
      message.textContent = 'У Вас нет активных задач';
    }

    if (filter.dataset.filter === 'done') {
      message.textContent = 'У Вас нет выполненных задач';
    }
  } else {
    message.classList.add('is-hidden');
  }
};


export {filterTask, showFilter};
