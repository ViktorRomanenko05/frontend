//Тебе нужно написать функцию fetchUserData,
// которая принимает идентификатор пользователя userId и возвращает промис.
// Промис должен “разрешаться” через 2 секунды (используй setTimeout) и возвращать объект с
// данными пользователя. Если userId меньше 1, промис должен быть “отклонён” с ошибкой
// “Некорректный идентификатор пользователя”.

const users = [
    userOne = {
        userId: 1,
        userName: "Viktor",
    },

    userTwo = {
        userId: 0,
        userName: "Viktoria",
    }];

const searchUsers = (userId) => {
    return users.find(user => user.userId === userId);
}

const reqest = (userId) => {
    const promise = new Promise ((resolve, reject) => {

        if (userId >=1 && searchUsers(userId)) {
            const response = {
                status: 200,
                data: searchUsers(userId),
            }
            resolve(response.data);
        }
        else {
            const response = {
                status: 400,
                message: "Something went wrong",
            }
            reject(response);
        }
    })
}

const server = setTimeout(reqest, 3000);

const fetchUserData = async() => {
const reg = 0;
}