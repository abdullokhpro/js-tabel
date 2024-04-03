const submitBtn = document.querySelector(".hero__form__register");
const userName = document.querySelector(".hero__name__input");
const userEmail = document.querySelector(".hero__form__email");
const userPassword = document.querySelector(".hero__form__password");
const userSurname = document.querySelector(".hero__form__surname");
const userPhone = document.querySelector(".hero__form__phone");
const tabelBody = document.querySelector(".about__tabel__body");

/////////////////////////////////////////////

submitBtn.addEventListener("click", add);

function add() {
  let tabelInfo = document.createElement("tr");
  tabelInfo.className = "about__tabel__info";

  tabelInfo.innerHTML = `
            <td class="about__tabel__data">2</td>
            <td class="about__tabel__data">${userName.value}</td>
            <td class="about__tabel__data">${userSurname.value}</td>
            <td class="about__tabel__data">${userEmail.value}</td>
            <td class="about__tabel__data">${userPassword.value}</td>
  `;

  tabelBody.appendChild(tabelInfo);
}
