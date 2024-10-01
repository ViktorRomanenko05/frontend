const resultButton = document.querySelector("#get-data");
const dataContainer = document.querySelector(".data-container");



const getUserData = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const userData = await response.json();

        if(response.ok){
            const person = {
                fullName: `${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last}`,
                userEmail: userData.results[0].email,
                pictureUrl: userData.results[0].picture.medium,
            };

            dataContainer.innerHTML = `
      <img src = ${person.pictureUrl}>
      <div>${person.fullName}</div>
      <div>${person.userEmail}</div>
   `;

        }else{
            throw (new Error('status 400 or 500'));
        }
    } catch(error) {
        console.log(error);
    }
};

resultButton.addEventListener("click", getUserData);