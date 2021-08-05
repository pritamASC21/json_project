
console.dir(randUser);

let profile = document.querySelector("#profile");


for (let i = 0; i <10; i++) {
    let text = document.createElement("p");
    let newImg = document.createElement("img");

    text.innerHTML = "Name: " +randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "Email: "+ randUser.results[i].email;
    newImg.src = randUser.results[i].picture.large;

    profile.appendChild(newImg);
    profile.appendChild(text);
}