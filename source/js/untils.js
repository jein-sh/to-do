const getId = (min, max) => {
  const elsWithId = document.querySelectorAll('[id]');
  const ids = [];
  let number = 0;

  elsWithId.forEach((el) => {
    ids.push(el.id);
  });

  while (ids.includes(String(number))) {
    number = Math.floor(Math.random() * (max - min) + min);
  }

  return number;
};

export {getId};
