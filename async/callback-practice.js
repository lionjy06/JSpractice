class UserInfo {
  loginUser(id, password) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(id === 'jinyoung' && password === 'yang' ||
        id === 'potato' && password === 'good') {
          resolve(id);
        } else {
          reject(new Error('please give correct id or password'));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve,recject)=> {
      setTimeout(()=> {
        if(user === 'jinyoung') {
          resolve({name:'jinyoung', role:'consumer'})
        } else {
          reject(new Error('not correct roles'))
        }
      },2000);
    });
  }
}

const userStorage = new UserInfo();
const id = prompt('what is your id?');
const password = prompt('please provide us with password');

userStorage//
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(`welcome ${user.name} you are ${user.role}`))
.catch(alert); 
