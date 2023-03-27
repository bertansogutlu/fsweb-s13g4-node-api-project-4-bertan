const uuid = require('uuid');

function getId() {
    return uuid.v1();
}

const initialUsers = ()=> {
    return [
        {id: getId(), kullaniciAdi: 'bertan', sifre: '123'},
        {id: getId(), kullaniciAdi: 'defne', sifre: '123'},
        {id: getId(), kullaniciAdi: 'pasa', sifre: '123'},
        {id: getId(), kullaniciAdi: 'veysel', sifre: '123'},
    ]
}

const users = initialUsers();

const getAllUsers = ()=>{
    return users;
}

const createNewUser = (user)=> {
    let createdUser = user;
    user.id = getId();
    users.push(user);
    return user;
}

const findUser = (user)=> {
    let isFind = false;
    for (const e of users) {
        if (e.kullaniciAdi === user.kullaniciAdi && e.sifre === user.sifre) {
            isFind = true;
            break;
        }
    }
    return isFind;
}

const isSameUserName = (userName) => {
        return users.some(e => e.kullaniciAdi === userName);
}

module.exports = {getAllUsers, createNewUser, findUser, isSameUserName};