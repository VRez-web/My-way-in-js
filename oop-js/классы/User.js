/*
Файл где храниться какой то класс, называется с большой буквы
 */


class User {
    //username
    //password

    constructor(userName, password) { //автоматически запускается когда создается объект и куда мы запишем свойства

        this.userName = userName
        this.password = password
    }

    validatePassword() {
        if (this.password.length > 6) {
            return true
        }
        return false
    }
}