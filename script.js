
'use strict';
function HashStorageFunc(storagels) {
  var self = this;
  var storage;
  if (localStorage.getItem(storagels)==null) {
    storage = {};
  } else storage = JSON.parse(localStorage.getItem(storagels));
  
  self.addValue = function (key, value) {
    storage[key] = value;
    var storageS = JSON.stringify(storage);
    localStorage.setItem(storagels,storageS);
  };

  self.getValue = function (key) {
      return (storage[key]);
  };

  self.deleteValue = function (key) {
    if (key in storage) {
      delete storage[key];
      var storageS = JSON.stringify(storage);
      localStorage.setItem(storagels,storageS);
      return true;
    } return false;
  };

  self.getKeys = function () {
    return (Object.keys(storage));
  }
};

var drinkStorage = new HashStorageFunc('storageDrink');
var dishStorage = new HashStorageFunc('storageDish');

function askInfoToAdd() {
  var drinkName = prompt('Введите название напитка');
  var isAlcoholic = confirm('Напиток алкогольный?');
  var recipe = prompt('Введите рецепт приготовления');
  var info = { 'Название': drinkName.toLowerCase(), 'Алкогольный': (isAlcoholic?'да':'нет'), 'Рецепт приготовления': recipe };
  alert('Информация о напитке "' + drinkName + '" добавлена')
  return drinkStorage.addValue(drinkName, info);
}


function getInfo() {
  var drinkName = prompt('Введите название напитка, информацию о котором Вы хотите получить').toLowerCase();
  var newHash = drinkStorage.getValue(drinkName);
  if (newHash) {
    var info = '';
    for (var key in newHash) {
      info += key + ': ' + newHash[key] + '\n';
    } alert(info);
  } else alert('Информации о таком напитке нет');
}

function getInfoToDelete() {
  var drinkName = prompt('Введите название напитка, информацию о котором Вы хотите удалить').toLowerCase();
  if (drinkStorage.deleteValue(drinkName)) {
    alert('Информация будет удалена');
  } else alert('Такого напитка нет');
}
function showAllDrinks() {
  if (drinkStorage.getKeys().length == 0) {
    return alert('Вы еще не добавили ни одного напитка');
  } else
    return alert('Имеется информация о таких напитках: ' + drinkStorage.getKeys());
}

function askInfoToAddD() {
  var dishName = prompt('Введите название блюда');
  var recipe = prompt('Введите рецепт приготовления');
  var info = { 'Название': dishName.toLowerCase(), 'Рецепт приготовления': recipe };
  alert('Информация о блюде "' + dishName + '" добавлена')
  return dishStorage.addValue(dishName, info);
}


function getInfoD() {
  var dishName = prompt('Введите название блюда, информацию о котором Вы хотите получить').toLowerCase();
  var newHash = dishStorage.getValue(dishName);
  if (newHash) {
    var info = '';
    for (var key in newHash) {
      info += key + ': ' + newHash[key] + '\n';
    } alert(info);
  } else alert('Информации о таком блюде нет');
}

function getInfoToDeleteD() {
  var dishName = prompt('Введите название блюда, информацию о котором Вы хотите удалить').toLowerCase();
  if (dishStorage.deleteValue(dishName)) {
    alert('Информация будет удалена');
  } else alert('Такого блюда нет');
}
function showAllDrinksD() {
  if (dishStorage.getKeys().length == 0) {
    return alert('Вы еще не добавили ни одного блюда');
  } else
    return alert('Имеется информация о таких блюдах: ' + dishStorage.getKeys());
}