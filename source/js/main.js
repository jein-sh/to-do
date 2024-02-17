import {filterTask, showFilter} from './modules/filter-task';
import {editText, closeEditBlock} from './modules/edit-text';
import {addDataCard, addDataTask, deleteDataCard, getData, deleteDataTask, checkDataTask} from './modules/get-data';
import {getId} from './untils';

document.addEventListener('DOMContentLoaded', function () {
  getData();
  getId(0, 10000);

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-delete-card]')) {
      const card = evt.target.closest('.card');
      deleteDataCard(card.id);
    }

    if (evt.target.closest('[data-add-card]')) {
      addDataCard();
    }

    if (evt.target.closest('[data-delete-task]')) {
      const card = evt.target.closest('.card');
      const task = evt.target.closest('.task');

      deleteDataTask(card.id, task.id);
      showFilter(card);
    }

    if (evt.target.closest('[data-add-task]')) {
      const card = evt.target.closest('.card');
      addDataTask(card.id);
      showFilter(card);
    }

    if (evt.target.closest('[data-check]')) {
      const card = evt.target.closest('.card');
      const task = evt.target.closest('.task');

      if (task.classList.contains('is-done')) {
        task.classList.remove('is-done');
        checkDataTask(card.id, task.id, false);
      } else {
        task.classList.add('is-done');
        checkDataTask(card.id, task.id, true);
      }
    }

    if (evt.target.closest('[data-edit]')) {
      const editBlock = evt.target.closest('[data-edit]').parentNode;

      if (evt.target.closest('.card__top')) {
        editText(editBlock, true);
      } else {
        editText(editBlock, false);
      }
    }

    if (evt.target.closest('[data-close]')) {
      if (evt.target.closest('.card__top')) {
        const block = evt.target.closest('.card');
        closeEditBlock(block, false, true);
      } else {
        const block = evt.target.closest('.task');
        closeEditBlock(block, false, false);
      }
    }

    if (evt.target.closest('[data-save]')) {
      if (evt.target.closest('.card__top')) {
        const block = evt.target.closest('.card');
        closeEditBlock(block, true, true);
      } else {
        const block = evt.target.closest('.task');
        closeEditBlock(block, true, false);
      }
    }

    if (evt.target.closest('.card__filter .btn')) {
      const card = evt.target.closest('.card');
      const filterActive = evt.target.closest('.card__filter .btn');

      filterTask(card, filterActive);
    }
  });
});
