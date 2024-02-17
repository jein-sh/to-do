const list = document.querySelector('.list');

const renderList = (arr) => {

  if (!list) {
    return;
  }

  list.innerHTML = '';

  arr.forEach((el) => {
    const card = document.createElement('div');

    card.classList.add('card');
    card.setAttribute('id', el.id);

    card.innerHTML = `
        <button class="btn card__delete" type="button" data-delete-card>
          <span class="btn__icon">
            <svg width="20" height="20" aria-hidden="true" aria-label="удалить список">
              <use xlink:href="img/sprite.svg#icon-del"></use>
           </svg>
          </span>
        </button>
        <div class="card__top">
          <h2 class="card__title">
            <span>${el.title}</span>
          </h2>
          <button class="btn" type="button" data-edit>
            <span class="btn__icon">
              <svg width="40" height="40" aria-hidden="true" aria-label="редактировать название списка">
                <use xlink:href="img/sprite.svg#icon-edit"></use>
              </svg>
            </span>
          </button>
        </div>
      `;

    const cardList = document.createElement('ul');
    cardList.classList.add('card__list');

    const filter = document.createElement('div');
    filter.classList.add('card__filter');

    filter.innerHTML = `
      <button class="btn is-active" type="button" data-filter="all">Все задачи</button>
      <button class="btn" type="button" data-filter="active">Активные</button>
      <button class="btn" type="button" data-filter="done">Выполненные</button>
    `;

    const message = document.createElement('p');
    message.classList.add('card__message');
    message.classList.add('is-hidden');

    if (el.list.length === 0) {
      filter.classList.add('is-hidden');
    }

    card.append(filter);
    card.append(message);

    el.list.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('task');
      li.setAttribute('id', task.id);

      if (task.isDone) {
        li.classList.add('is-done');
      }

      li.innerHTML = `
          <button class="task__check btn" type="button" data-check>
                  <span class="btn__icon">
                    <svg width="20" height="20" aria-hidden="true" aria-label="отметить задачу выполненной">
                      <use xlink:href="img/sprite.svg#icon-check"></use>
                    </svg>
                  </span>
                </button>
                <div class="task__text">
                  <p class="task__name">${task.task}</p>
                  <p class="task__desc">${task.text}</p>
                </div>
                <button class="btn btn--sm" type="button" data-edit>
                  <span class="btn__icon">
                    <svg width="40" height="40" aria-hidden="true" aria-label="редактировать задачу">
                      <use xlink:href="img/sprite.svg#icon-edit"></use>
                    </svg>
                  </span>
                </button>
                <button class="btn btn--sm" type="button" data-delete-task>
                  <span class="btn__icon">
                    <svg width="40" height="40" aria-hidden="true" aria-label="удалить задачу">
                      <use xlink:href="img/sprite.svg#icon-del"></use>
                    </svg>
                  </span>
                </button>
        `;

      cardList.append(li);
    });

    card.append(cardList);

    const btnAdd = document.createElement('button');

    btnAdd.classList.add('btn');
    btnAdd.classList.add('btn--sm');
    btnAdd.classList.add('card__task-add');
    btnAdd.setAttribute('data-add-task', '');
    btnAdd.setAttribute('type', 'button');

    btnAdd.innerHTML = `
        <span class="btn__icon">
          <svg width="40" height="40" aria-hidden="true">
            <use xlink:href="img/sprite.svg#icon-close"></use>
          </svg>
        </span>
        <span class="btn__text">Добавить задачу</span>
    `;

    card.append(btnAdd);

    list.append(card);
  });
};

export {renderList};
