const getposts = async () => {
    const respons = await fetch("https://jsonplaceholder.typicode.com/photos");
    console.log(respons);

    const data = await respons.json();

    const photosArray = [
      "https://masterpiecer-images.s3.yandex.net/c8f9ab0a6ab511ee8991baea8797b5f2:upscaled",
      "https://avatars.mds.yandex.net/get-shedevrum/11478110/img_d6927e00f37a11eea615fa438e8a26f5/orig",
      "https://masterpiecer-images.s3.yandex.net/41de7592966611eeb6f2f6c574779d3e:upscaled",
    ];

    const currentData = data.slice(0, 3).map((element, i) => {
      return {
        ...element,
        thumbnailUrl: photosArray[i],
      };
    });

    const ul = document.getElementById("ul");
    currentData.map((v) => {
      const li = document.createElement("li");
      li.className = "licll";
      const p = document.createElement("p");
      p.className = "ptt";
      p.textContent = "...";
      const image = document.createElement("img");
      image.className = "imagecll";
      image.src = v.thumbnailUrl;
      const h2 = document.createElement("h2");
      h2.className = "h2cll";
      h2.textContent = v.title;

      li.append(image, h2, p);
      ul.appendChild(li);
    });
    console.log(data[0]);
  };
  setTimeout(() => {
    getposts();
  }, 8000);

  loading();
  function loading() {
    let time = 10;
    const ul = document.getElementById("ul");

    const h1 = document.createElement("h1");
    h1.textContent = "loading...";

    ul.appendChild(h1);
    ul.classList.toggle("loading...");
    let interval = setInterval(() => {
      if (time === 0) {
        clearInterval(interval);
        ul.textContent = "";
      }
      time--;
    }, 700);
  }

  // ! задча - 2

//   const post = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(res);

//     const datas = await res.json();
//     const urlkartina = [
//       "https://images.justwatch.com/poster/207533983/s332/",
//       "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cb22693a-d025-4d74-81c5-11976cbf4858/600x900",
//       "https://kinolira.ru/wp-content/uploads/2023/07/chudo-doktor-personazhi.jpg",
//       "https://lh4.googleusercontent.com/proxy/j6VcFciC1xGPogQLVCqxpaWOgjBTHWtua_luYieGQAJVwCtU6jsvHSfy_YcngJrjtr1Tn8heHzBowG8nSk2l7nsJpsjhwtJyLyF9e8113K7AQqOoXNRYuWzdbAGggA",
//     ];

//     const curst = datas.slice(0, 4).map((element, i) => {
//       return {
//         ...element,
//         thum: urlkartina[i],
//       };
//     });
//     const ulclass = document.getElementById("ulclass");
//     curst.map((v) => {
//       const liclass = document.createElement("li");
//       liclass.className = "liclass";
//       const pteg = document.createElement("p");
//       pteg.className = "pteg";
//       pteg.textContent = "...";
//       const imgclass = document.createElement("img");
//       imgclass.className = "imgclass";
//       imgclass.src = v.thum;
//       const h2class = document.createElement("h2");
//       h2class.className = "h2class";
//       h2class.textContent = v.name;
//       const h3class = document.createElement("h3");
//       h3class.textContent = v.company["name"];
//       const pteg2 = document.createElement("p");
//       pteg2.className = "pteg2";
//       pteg2.textContent = v.phone;
//       const h22 = document.createElement("h2");
//       h22.className = "h2class2";
//       h22.textContent = v.email;
//       liclass.append(imgclass, h2class, h3class, pteg2, h22, pteg);
//       ulclass.appendChild(liclass);
//     });
//     console.log(datas[0]);
//   };
//   setTimeout(() => {
//     post();
//   }, 1000);