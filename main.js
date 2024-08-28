//  task -1
const mainh2 = document.getElementById("main-heading");
mainh2.style.fontSize = "60px";
mainh2.style.color = "green";
mainh2.textContent = "Popular products";
console.log(mainh2);
// task -2
const asidechild = document.getElementsByTagName("aside");
asidechild[0].remove();
console.log(asidechild);
// task-3

const section = document.getElementsByClassName("section")[0];
const h3 = document.getElementsByClassName("heading");
section.firstElementChild.classList.remove('heading')
console.log(section);
// ! задача - 2

let zadacha = [
    {
      icon: "https://www.pngall.com/wp-content/uploads/5/Instagram-Logo-PNG-Download-Image.png",
      title: "instagram",
      description:
        "Instagram (рус. Инстагра́м[1]) — американская социальная сеть для обмена фотографиями и видео, основанная Кевином Систромом и Майком Кригером. В апреле 2012 года компания Facebook Inc.",
      link: "https://www.instagram.com/themalikov.01?igsh=amE1bGRlemp6OXo2",
    },

    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png",
      title: "telegram",
      description:
        "Telegram (от др.-греч. τῆλε «далеко» + др.-греч. γράμμα «запись») — кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями обмена текстовыми, голосовыми и видеосообщениями",
      link: "https://t.me/skillboxru.",
    },
  ];

  let taibl = document.getElementById("link");
  zadacha.map((element) => {
    const con = document.createElement("li");
    con.className = "listcls";

    const image = document.createElement("img");
    image.src = element.icon;
    image.style.width = "130px";
    image.style.paddingLeft = "135px";
    image.style.paddingTop = "50px";

    const h1 = document.createElement("h1");
    h1.textContent = element.title;
    h1.style.fontSize = "45px";
    h1.style.paddingLeft = "100px";
    h1.style.fontFamily = " sans-serif";

    const p = document.createElement("p");
    p.textContent = element.description;
    p.style.paddingLeft = "20px";
    p.style.fontSize = "17px";
    p.style.fontFamily = "sans-serif";

    const button = document.createElement("button");
    // button.textContent = element.link;
    button.style.fontSize = "25px";
    button.style.borderRadius = "25px";
    button.style.marginLeft = "85px";
    // button.style.backgroundColor = "black";
    // button.style.color = "white";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.padding = "12px";
    // button.textContent = "READ  MORE";
    button.style.width = "225px";
    button.className = "hover";

    const a = document.createElement("a");
    a.textContent = "read more";
    a.addEventListener("click", () => {
      a.href = element.link;
    });
    button.append(a);

    con.append(image, h1, p, button);
    taibl.append(con);
  });