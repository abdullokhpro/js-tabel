const userName = document.querySelector(".hero__name__input");
const userEmail2 = document.querySelector(".hero__form__email2");
const userPassword = document.querySelector(".hero__form__password");
const userSurname = document.querySelector(".hero__surname__input");
const userPhone = document.querySelector(".hero__form__phone");
const tabelBody = document.querySelector(".about__tabel__body");
const tabel = document.querySelector(".about__tabel");
const form = document.querySelector(".hero__form");
let count = 0;
// console.log(userEmail2.value);

//////////////////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.createElement("tr");
  item.className = "about__tabel__info";

  count++;
  item.innerHTML = `
            <td class="about__tabel__data">${count}</td>
            <td class="about__tabel__data">${userName.value}</td>
            <td class="about__tabel__data">${userSurname.value}</td>
            <td class="about__tabel__data">${userEmail2.value}</td>
            <td class="about__tabel__data">${userPassword.value}</td>;
    `;

  tabelBody.appendChild(item);

  userName.value = "";
  userEmail2.value = "";
  userPhone.value = "";
  userSurname.value = "";
});

////////////////////////////////////////////////

// form.addEventListener("click", add);

// function add() {
//   let tabelInfo = document.createElement("tr");
//   tabelInfo.className = "about__tabel__info";

//   tabelInfo.innerHTML = `
//             <td class="about__tabel__data">2</td>
//             <td class="about__tabel__data">${userName.value}</td>
//             <td class="about__tabel__data">${userSurname.value}</td>
//             <td class="about__tabel__data">${userEmail.value}</td>
//             <td class="about__tabel__data">${userPassword.value}</td>;
//   `;

//   tabelBody.appendChild(tabelInfo);
// }
