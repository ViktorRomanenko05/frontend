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

const searchUsers = (id) => {
    return users.find(user => user.userId === id);
}

const fetchUserData = (userId) => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {

            if (userId >= 1 && searchUsers(userId)){
                const response = {
                    status: 200,
                    data: searchUsers(userId),
                };
                resolve(response.data);
            }
            else{
                const response = {
                    status: 400,
                    message: "Something went wrong",
                }
                reject(response);
            };
        }, 2000);
    } )
    return promise;
}

fetchUserData(-1)
    .then((data) => {
    console.log(data)})
    .catch((error) => {
        console.log(error.message);})
    .finally(() => {
        console.log("Fetched user data");})