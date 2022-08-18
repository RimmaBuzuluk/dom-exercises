//Створити div
const div = document.createElement("div");
//Додати до нього класс wrapper;
div.classList.add("wrapper");
//помітити його в середину тега body
const body = document.body;
body.appendChild(div);
//Створити заголовок Р1 "DOM (Document Objet Model)"
const header = document.createElement("h1");
header.textContent = "DOM (Document Objet Model)";
//Додати H1 поперед DIV З КЛАССОМ WRAPPER;
//header.before(div);
div.insertAdjacentElement("beforebegin", header);
//створити список <ul></ul>
//Додати до нього 3 елементи з текстом "один два три"
const ul = `
<ul>
    <li>один</li>
    <li>два</li>
    <li>три </li>
</ul>`;

//помістити стисок в середину єлемента з классом wrapper
div.innerHTML = ul;
//===================================================
//Створити зображення
const img = document.createElement("img");
// Додати наступні свойства до забраження
// 1.Додати атрібут source
img.src = "http://c.files.bbci.co.uk/4A75/production/_110216091_zebra1.jpg";
//2. Додати атрібут width зі значенням 240
img.width = 240;
//3. Додати класс super
img.classList.add("super");
//4. Додати свойста alt  зы значенням "Super Man"
img.alt = "zibra";
//Помістить зображення в середину елемента з классом wrapper
div.appendChild(img);
//Використовуя html строку, створюють div З класом 'pDiv'+ з 2=мя парагрофамі
const elemHTML = `<div class='pDiv'>
<p>параграф 1</p>
<p>параграф 2</p>
</div>`;
//Помыстити цей div до елемента <ul></ul>
const ulList = div.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);
//Додати для 2-го елемента tеxt
const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");
//Удалить 1-й параграф
pDiv.firstElementChild.remove();
//Создать функцию generateAutoCard
//яка приймає 3 аргументф: brand, color, year
const generateAutoCard = (brand, color, year) => {
  const cureDate = new Date();
  const curYear = cureDate.getFullYear();
  return `
    <div class="autoCard">
        <h2>${brand.toUpperCase()} ${year}</h2>
        <p>Автомобіль ${brand.toUpperCase()}-${year} року. Возраст авто-${
    curYear - year
  }</p>
        <p>Колір: ${color}</p>
        <button type='button' class='btn'>Видалити</button>
    </div>
    `;
};
//функція повинна возвращати розменту HTML:
//створити новий div з классом autos
const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");
//создать 3 карточки авто, используя фукцию generateAutoCard
const carsList = [
  { brand: "Tesla", year: 2015, color: "червоний " },
  { brand: "Lexus", year: 2016, color: "білий" },
  { brand: "Nissan", year: 2012, color: "блакитний" },
];

const carsHTML = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join("");
//Помыстити ці 3 карточки в середину DIV з классом autos
carsDiv.innerHTML = carsHTML;
//Помістити DIV з классом autos на сторінку DOM-до DIV з классом wrapper
div.insertAdjacentElement("beforebegin", carsDiv);
//Додати кнопку Видвлити на кожну картку авто

//коли кнопка нажата-видаляти карточку із структури DOM
//1.Обрати всі кнопки
const buttons = document.querySelectorAll(".btn");
//2.Створити функцію відалення
function handlClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".autoCard").remove();
  //console.log(currentButton.parentElement);
}
//3.використовувати цикл щоб додати обробник події до кожної кнопки
buttons.forEach((buttons) => {
  buttons.addEventListener("click", handlClick);
});
