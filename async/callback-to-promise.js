'use strict';
// callback to promise 작업


class UserStorage {
  loginUser(id, password){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (
          (id === 'jin' && password === 'young') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          if (user === 'jin') {
            resolve({ name: 'jin', role: 'admin'});
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter you id');
// prompt() api의 기능 알아보기
const password = prompt('enter your password');
userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(`hello ${user.name} you are ${user.rold}`))
.catch(alert);

