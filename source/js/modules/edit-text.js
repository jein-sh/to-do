import {editDataTitle, editDataTask} from './get-data';

const fragment = document.createDocumentFragment();
let text;
let textName;
let textDesc;

const editBlockTemplate = document.querySelector('#edit-block')
    .content
    .querySelector('.edit-block');


// редактируем текст

const editText = (block, isTitle) => {
  const editBlock = editBlockTemplate.cloneNode(true);

  fragment.appendChild(editBlock);
  block.appendChild(fragment);

  const titleInput = editBlock.querySelector('.input--title');
  const taskInput = editBlock.querySelector('.input--task');
  const textInput = editBlock.querySelector('.input--text');

  if (isTitle) {
    text = block.querySelector('h2').textContent.trim();
    taskInput.parentNode.style.display = 'none';
    textInput.parentNode.style.display = 'none';

    titleInput.value = text;
    titleInput.focus();
  } else {
    textName = block.querySelector('.task__name').textContent;
    textDesc = block.querySelector('.task__desc').textContent;
    titleInput.parentNode.style.display = 'none';

    taskInput.value = textName;
    textInput.value = textDesc;
    taskInput.focus();
  }
};

const closeEditBlock = (block, isSaved, isTitle) => {
  const editBlock = block.querySelector('.edit-block');
  const card = block.closest('.card');
  const task = block.closest('.task');

  if (isTitle) {
    const title = block.querySelector('h2');
    const titleInput = editBlock.querySelector('.input--title');

    if (isSaved && titleInput.value) {
      title.textContent = titleInput.value;
      editDataTitle(card.id, titleInput.value);
    } else {
      title.textContent = text;
    }
  } else {
    const taskInput = editBlock.querySelector('.input--task');
    const textInput = editBlock.querySelector('.input--text');
    const name = block.querySelector('.task__name');
    const desc = block.querySelector('.task__desc');

    if (isSaved && taskInput.value) {
      name.textContent = taskInput.value;
      desc.textContent = textInput.value;
      editDataTask(card.id, task.id, taskInput.value, textInput.value);
    } else {
      name.textContent = textName;
      desc.textContent = textDesc;
    }
  }

  editBlock.remove();
};

export {editText, closeEditBlock};
