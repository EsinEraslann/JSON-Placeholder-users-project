async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((user) => {
    createCards(user);
  });
}

const container = document.querySelector(".container");

function createCards(user) {
  container.innerHTML += `
    <div class="card col-12 col-lg-6">
       <div class="userContent">
        <h4><span class="pe-4 text-danger">ID: ${user.id}</span>${user.name}</h4>
       </div>
        <div class="buttonContainer">
          <button class="addressBtn" onclick = "showBtn(${user.id}, 'address')"><i class="fa-solid fa-map-location-dot"></i></button>
          <button class="companyBtn" onclick = "showBtn(${user.id}, 'company')"><i class="fa-solid fa-globe"></i></button>
          <button class="contactBtn" onclick = "showBtn(${user.id}, 'contact')"><i class="fa-regular fa-id-card"></i></button>
          <button onclick="openPrompt()"><i class="fa-solid fa-comments"></i></button>
        </div>
        <div class="content row">
          <div class="address display">
            Street:${user.address.street}<br>
            Suite:${user.address.suite}<br>
            City:${user.address.city}<br>
            Zipcode:${user.address.zipcode}<br>
            Geo: Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}
          </div>
          <div class="company display">
            Name: ${user.company.name}<br>
            CatchPhrase: ${user.company.catchPhrase}<br>
            Bs: ${user.company.bs}<br>
          </div>
          <div class="contact display">
            E-mail: ${user.email}<br>
            Phone: ${user.phone}<br>
            Website: ${user.website}<br>
          </div>
        </div>
    </div>`;
}

getUser();

function showBtn(id, type) {

  const types = ["address", "company", "contact"];

  if (types.includes(type)) {
    const elements = document.querySelectorAll(`.${type}`);
    const button = document.querySelectorAll(`.${type}Btn`);
    if (elements.length > 0 && elements[id - 1]) {
      if (elements[id - 1].classList.contains("display")) {
        elements[id - 1].classList.remove("display");
        button[id - 1].classList.add("clickActive");
      } else {
        elements[id - 1].classList.add("display");
        button[id - 1].classList.remove("clickActive");
      }
    }
  }
}


function openPrompt() {
  const userId = prompt("Lütfen 1 ile 10 arasında bir kullanıcı ID'si girin:");
  if (!isNaN(userId) && userId >= 1 && userId <= 10) {
      window.location.href = `/second part/post.html?userId=${userId}`;
  } else {
      alert("Geçersiz kullanıcı ID'si! Lütfen 1 ile 10 arasında bir ID girin.");
  }
}


