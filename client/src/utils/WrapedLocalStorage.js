// local storage
class WrapedLocalStorage 
{
  constructor()
  { }

  // получение значения из local storage
  getItem(key)
  {
    const data   =  window.localStorage.getItem(key);
    const parsed = JSON.parse(data);

    console.log(key, parsed, data);

    return parsed;
  }

  // изменение значения в local storage
  setItem(key, storage)
  {
    window.localStorage.setItem(key, JSON.stringify(storage));
  }

  // удаление значения в local storage
  removeItem(key)
  {
    window.localStorage.removeItem(key);
  }

  // очищение local storage
  clear()
  {
    window.localStorage.clear();
  }
}


export default new WrapedLocalStorage();