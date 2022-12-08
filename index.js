import TelegramBot from "node-telegram-bot-api";
import axios, { all } from "axios";
import fs from "fs";
import jsdom from "jsdom";
import { JSDOM } from "jsdom";
import { type } from "os";

const bot = new TelegramBot("5089797196:AAEp_Qz3sbIvcZoCHflmP6WNEKFv_Wi5y-c", {
  polling: true,
});

const re = (regex) => {
  return new RegExp("^" + regex + "$");
};

//const fileStream = fs.createReadStream('./db.json');
//let dbFile = "./db.json/db.txt";
// bot.on("message", (message) => {bot.sendPhoto(message.chat.id, message.photo.file_id)});

// bot.on("message", (m) => {
//   //console.log(m);
//   // fs.writeFileSync(
//   //   "./db.json/db.json",
//   //   //JSON.stringify([m.from, { message: m.text}], 4)
//   //   JSON.stringify({
//   //     userInfo: m.from,
//   //     userMessage: m.text || m.caption,
//   //     userPhoto: m.photo,
//   //   })
//   // );

//   const userId = m.from.id;
//   const userFirstName = m.from.first_name;
//   const userLastName = m.from.last_name;
//   const userNickname = m.from.username;
//   //const userProfilePhoto = bot.getUserProfilePhotos(userId).then((data) => data.photos[0][0].file_path);

//   // console.log(userProfilePhoto);

//   //bot.sendMessage(userId, console.log());

//   bot.sendMessage(
//     userId,
//     `Привет ${userFirstName} ${userLastName} или же ${userNickname}`
//   );
//   // .sendPhoto(userId, userProfilePhoto /*"./img/3.png"*/, {
//   //   caption: `Привет ${userFirstName} ${userLastName} или же ${userNickname}`,
//   // })
//   // .catch((e) => console.log(e));

//   //bot.sendPhoto(m.from.id, bot.getUserProfilePhotos(m.from.id), {});
// });

//fs.readFile("./db.json/db.json");
// let array;

// array = JSON.parse(
//   fs.readFileSync(
//     "./db.json/db.json",
//     (err, data) => data
//     //if (err) throw err;
//     // return data;
//   )
// );
// } catch (e) {
//   console.log(e);
// }
//console.log(array);

//bot.sendPhoto(array.userInfo.id, array.userPhoto[0].file_id);
/////////////////////
// bot.on("message", (message) => {
//   //bot.sendPhoto(message.chat.id, message.photo[0].file_id);

//   // bot.sendPhoto(array.userInfo.id, message.photo[0].file_id);
//   bot
//     .sendPhoto(array.userInfo.id, message.photo[0].file_id, {
//       caption: message.caption,
//     })
//     .catch((err) => console.log(err.message));
// });
//////////////////////
//bot.sendPhoto();

// let obj = {
//   name: "",
//   secName: "",
//   username: ""
// };

// let name;

// bot.on("message", (message) => {
//   console.log(message);

//   name = message.from.first_name;
//   obj.secName = message.from?.last_name;
//   obj.username = message.from.username;
// });

// fs.writeFileSync("./db.json/db.txt", JSON.stringify(obj));
//fs.writeFileSync(fs.open("./db.json/db.txt"));
//bot.onText(re("anime"), (m) => {bot.sendMessage(m.chat.id, "for idiots")});

//id = 408909550

//idKiril = 456403097;

//bot.on("message", (message) => {bot.sendPhoto(408909550, message.photo[0].file_id)});

// const getFile = async (req, res, next) => {

//   res.contentType('application/pdf');

//   fileStream.pipe(res);
// };

// // 2 - (не используя стримы) загружаем файл полностью в память и затем отправляем
// const getFile = async (req, res, next) => {
//   const file = fs.readFileSync('path to file');

//   res.contentType('application/pdf');

//   res.send(file);
// };

bot.on("message", (msg) => {
  const userFirstName = msg.from.first_name;
  const userLastName = msg.from.last_name;
  const userNickName = msg.from.username;
  const userMessage = msg.text;
  const userId = msg.from.id;

  console.log(
    `(id: ${userId}) ${userFirstName} ${userLastName} (${userNickName}): ${userMessage}`
  );

  msg.forward_from != undefined
    ? console.log(
        `message from: (${msg.forward_from.id}) ${msg.forward_from.first_name} ${msg.forward_from.last_name} (${msg.forward_from.username})`
      )
    : undefined;

  //fs.writeFileSync("./db.json/images.json", JSON.stringify(msg));

  //bot.sendSticker(userId, "CAACAgIAAxkBAAINqmOSYGzefb6RyK6BE_1D2exHN4wEAAIrFgAC_g04SobRwJs2jRYmKwQ");
  //const url = "https://files.yande.re/image/eba9505064684ccbe3d638f3bc0d437b/yande.re%201044069%20mimosa_%28pokemon%29%20pokemon%20pokemon_sv%20sweater%20tonayon.jpg";
  //bot.sendPhoto(userId, url, { caption: `image` }).catch(e => console.log(e.message));
});

////////////////////////////////////////////

bot.onText(/\/help/, async (msg) => {
  const userId = msg.from.id;

  bot.sendMessage(
    userId,
    `Команда random: (r _1)\
    \n_1 - число от 1 до 10\
    \n\nПример: r 8`
  );
  await bot.sendMessage(
    userId,
    `Команда random по тегу: (rt _1 _2)\
    \n_1 - число от 1 до 10\
    \n_2 - тег или теги\
    \n\nПробел в тегах заменять символом '_'\
    \nНапример, azur_lane\
    \nПри использовании нескольких тегов между тегами использовать символ '+'\
    \nНапример, hololive+swimsuits\
    \n\nПример: rt 4 sailor_moon+cleavage`
  );
});

////////////////////////////////////////////

bot.onText(/gf/, async (msg) => {
  return;
  const startTime = Date.now();
  const userId = msg.from.id;

  // if (userId == 1492333208) {
  //   console.log("Попытка взлома");
  //   // bot.sendMessage(userId, "Вы заблокированны ботом");
  //   bot.sendPhoto(userId, "./img/3.png", {
  //     caption: "Вы заблокированны ботом",
  //   });
  //   return;
  // }

  //const url = "https://yande.re/post?page=7";
  //const url = "https://yande.re/post"
  const url = "https://yande.re/post?tags=order%3Arandom";

  axios.get(url).then(async (Response) => {
    const currentPage = Response.data;

    const dom = new JSDOM(currentPage);

    const allElements = dom.window.document
      //.getElementById("post-list-posts")
      .querySelector("#post-list-posts")
      // .getElementsByClassName("directlink largeimg");
      .querySelectorAll("a.directlink.largeimg");

    //const images = [...allElements].map((a) => a.href);

    //console.log(allElements[0].href);

    //const group = [];
    console.log(`count of elemnts: ${allElements.length}`);
    for (let i = 0; i < 10; i++) {
      //if (all.allElements[i].href)
      //group.push({ type: "photo", media: allElements[i].href });

      await bot
        .sendPhoto(userId, allElements[i].href, { caption: `images ${i + 1}` })
        .catch((e) =>
          console.log(`${e.message}, image ${i + 1}\n ${allElements[i].href}\n`)
        );
      //console.log(allElements[i].href);
    }
    bot.sendMessage(
      userId,
      `Заняло секунд: ${(Date.now() - startTime) / 1000}`
    );

    console.log("функция завершена\n");

    // for (let i = 0; i <= images.length % 10; i++) {
    //   const group = images.slice(i, (i + 1) * 10 - 1);

    //   group.map(elem => {
    //     elem.media = elem;
    //     elem.type = "photo";
    //   })

    //   console.log(group);
    // bot.sendMediaGroup(userId, group).catch(e => console.log(e.message));
    // }
    // bot.sendMediaGroup(userId, images);
  });

  //image js-notes-manager--toggle js-notes-manager--image
  //image js-notes-manager--toggle js-notes-manager--image
});

////////////////////////////////////////////

bot.onText(/get (.+)/, async (msg, match) => {
  return;
  const userId = msg.from.id;
  const num = +match[1];

  // if (userId == 1492333208) {
  //   console.log("Попытка взлома");
  //   // bot.sendMessage(userId, "Вы заблокированны ботом");
  //   bot.sendPhoto(userId, "./img/3.png", {
  //     caption: "Вы заблокированны ботом",
  //   });
  //   return;
  // }

  if (num > 10 || num < 1) {
    bot.sendMessage(userId, "Неправильный ввод");
    return;
  }

  let countOfImage = 784149;
  let endCountOfImage = countOfImage + num;

  let images = [];
  for (countOfImage; countOfImage < endCountOfImage; countOfImage++) {
    const url = `https://yande.re/post/show/${countOfImage}`;

    await axios
      .get(url)
      .then((response) => {
        const currentPage = response.data;
        const dom = new JSDOM(currentPage);
        const image = dom.window.document.querySelector("#image");

        try {
          console.log(`${countOfImage}: ${image.src}`);

          images.push({
            type: "photo",
            media: `${image.src}`,
            caption: `image: ${countOfImage}`,
          });
          // bot
          //   .sendPhoto(userId, image.src, { caption: `image ${countOfImage}` })
          //   .catch((e) =>
          //     console.log(`${e.message}, image ${countOfImage}\n ${image}\n`)
          //   );
        } catch (e) {
          console.log(`${countOfImage}: ${image}`);
          endCountOfImage++;
        }
      })
      .catch(() => endCountOfImage++);

    //window.document.querySelector("img.image").src;
  }

  bot.sendMediaGroup(userId, images).catch((e) => console.log(e.message));
  console.log("функция завершена\n");
});

////////////////////////////////////////////

bot.onText(/r (.+)/, async (msg, match) => {
  const startTime = Date.now();
  const userId = msg.from.id;
  const num = +match[1];

  // if (userId == 1492333208) {
  //   console.log("Попытка взлома");
  //   // bot.sendMessage(userId, "Вы заблокированны ботом");
  //   bot.sendPhoto(userId, "./img/3.png", {
  //     caption: "Вы заблокированны ботом",
  //   });
  //   return;
  // }

  if (num > 10 || num < 1) {
    bot.sendMessage(userId, "Неправильный ввод");
    return;
  }

  const urlRandom = `https://yande.re/post?tags=order%3Arandom`;
  const images = [];

  await axios
    .get(urlRandom)
    .then(async (response) => {
      const currentPage = response.data;
      const dom = new JSDOM(currentPage);

      const allElements = dom.window.document
        .querySelector("#post-list-posts")
        .querySelectorAll(".thumb");

      for (let i = 0; i < num; i++) {
        const url = "https://yande.re" + allElements[i].href;

        let image;

        await axios.get(url).then((response) => {
          const currentPage = response.data;
          const dom = new JSDOM(currentPage);
          image = dom.window.document.querySelector("#image").src;
        });

        images.push({
          type: "photo",
          media: image,
        });
      }
    })
    .catch((e) => console.log(e.message));

  images[0] != undefined
    ? (images[0].caption = `Заняло секунд: ${(Date.now() - startTime) / 1000}`)
    : undefined;

  bot
    .sendMediaGroup(userId, images)
    .catch((e) => console.log(`r: ${e.message}`));
});

////////////////////////////////////////////

bot.onText(/rt (.+) (.+)/, async (msg, match) => {
  const startTime = Date.now();
  const userId = msg.from.id;
  const num = +match[1];

  // if (userId == 1492333208) {
  //   console.log("Попытка взлома");
  //   // bot.sendMessage(userId, "Вы заблокированны ботом");
  //   bot.sendPhoto(userId, "./img/3.png", {
  //     caption: "Вы заблокированны ботом",
  //   });
  //   return;
  // }

  if (num > 10 || num < 1) {
    bot.sendMessage(userId, "Неправильный ввод");
    return;
  }

  const tags = match[2];
  const urlRandom = `https://yande.re/post?tags=order%3Arandom+${tags}`;
  const images = [];

  await axios
    .get(urlRandom)
    .then(async (response) => {
      const currentPage = response.data;
      const dom = new JSDOM(currentPage);

      const allElements = dom.window.document
        .querySelector("#post-list-posts")
        .querySelectorAll(".thumb");

      for (let i = 0; i < num; i++) {
        const url = "https://yande.re" + allElements[i].href;

        let image;

        await axios.get(url).then((response) => {
          const currentPage = response.data;
          const dom = new JSDOM(currentPage);
          image = dom.window.document.querySelector("#image").src;
        });

        images.push({
          type: "photo",
          media: image,
        });
      }
    })
    .catch((e) => console.log(e.message));

  images[0] != undefined
    ? (images[0].caption = `Заняло секунд: ${(Date.now() - startTime) / 1000}`)
    : undefined;

  bot
    .sendMediaGroup(userId, images)
    .catch((e) => console.log(`rt: ${e.message}`));
});
