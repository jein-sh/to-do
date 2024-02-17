import {renderList} from './render-list';
import {getId} from '../untils';

let data;

const getData = () => {
  if (!localStorage.getItem('todo')) {
    localStorage.setItem('todo', JSON.stringify([]));
  }

  data = JSON.parse(localStorage.getItem('todo'));
  renderList(data);
};

const deleteDataCard = (id) => {

  data = JSON.parse(localStorage.getItem('todo'));
  const index = data.findIndex((card) => String(card.id) === String(id));
  data.splice(index, 1);

  localStorage.setItem('todo', JSON.stringify(data));
  renderList(data);
};

const deleteDataTask = (idCard, idTask) => {
  data = JSON.parse(localStorage.getItem('todo'));
  const cardActiveIndex = data.findIndex((card) => String(card.id) === String(idCard));
  const index = data[cardActiveIndex].list.findIndex((task) => String(task.id) === String(idTask));
  data[cardActiveIndex].list.splice(index, 1);

  localStorage.setItem('todo', JSON.stringify(data));
  renderList(data);
};

const addDataCard = () => {
  data = JSON.parse(localStorage.getItem('todo'));
  const id = getId(0, 10000);
  const newCard = {
    id: `${id}`,
    title: 'Список задач',
    list: [],
  };

  data.push(newCard);

  localStorage.setItem('todo', JSON.stringify(data));
  renderList(data);
};

const addDataTask = (id) => {
  data = JSON.parse(localStorage.getItem('todo'));
  const idTask = getId(0, 10000);
  const newTask = {
    id: `${idTask}`,
    isDone: false,
    task: 'Задача',
    text: '',
  };

  const index = data.findIndex((card) => String(card.id) === String(id));
  data[index].list.push(newTask);

  localStorage.setItem('todo', JSON.stringify(data));
  renderList(data);
};

const editDataTitle = (id, title) => {
  data = JSON.parse(localStorage.getItem('todo'));
  const index = data.findIndex((card) => String(card.id) === String(id));
  data[index].title = title;

  localStorage.setItem('todo', JSON.stringify(data));
  renderList(data);
};

const editDataTask = (idCard, idTask, task, text) => {
  data = JSON.parse(localStorage.getItem('todo'));

  const cardActiveIndex = data.findIndex((card) => String(card.id) === String(idCard));
  const list = data[cardActiveIndex].list;
  const index = list.findIndex((el) => String(el.id) === String(idTask));
  list[index].task = task;
  list[index].text = text;

  localStorage.setItem('todo', JSON.stringify(data));
  renderList(data);
};

const checkDataTask = (idCard, idTask, check) => {
  data = JSON.parse(localStorage.getItem('todo'));

  const cardActiveIndex = data.findIndex((card) => String(card.id) === String(idCard));
  const list = data[cardActiveIndex].list;
  const index = list.findIndex((el) => String(el.id) === String(idTask));
  list[index].isDone = check;

  localStorage.setItem('todo', JSON.stringify(data));
  renderList(data);
};

export {getData, deleteDataCard, addDataCard, deleteDataTask, addDataTask, editDataTitle, editDataTask, checkDataTask};
