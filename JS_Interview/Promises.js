// Promises In javaScript -----------------------------------------------------------------------------------

// 1- Syncronous vs Asynchronous Code

// Sync -------------------------------------

// console.log("start");
// console.log("Road side");
// console.log("Finish");

// Async ------------------------------------

// console.log("start");
// setTimeout(() => {
//   console.log("Road side");
// }, 1000);
// console.log("Finish");

// Call Back ----------------------------------

// console.log("Start");
// function improtantAction(username, cb) {
//   setTimeout(() => {
//     cb(`sub to ${username}`);
//   }, 1000);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`like The ${video} video`);
//   }, 2000);
// }

// function shareTheVideo(share, cb) {
//   setTimeout(() => {
//     cb(`Share The ${share} Video`);
//   }, 3000);
// }

// improtantAction("Road Side Coder", function (message) {
//   console.log(message);
// });

// likeTheVideo("javaScript Interview", (action) => {
//   console.log(action);
// });
// shareTheVideo("javaScript Interview Playlist", (share) => {
//   console.log(share);
// });

// console.log("Stop");

// Promises ----------------------------------------------------------------------------

// console.log("Start");
// const sun = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) {
//       resolve("Sub To Road Side Coder");
//     } else {
//       rejects(new Error("WHY"));
//     }
//   }, 2000);
// });
// sun
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// console.log("End");

// -----------------------------------------------------------------------------------------------------------

// console.log("start");
// const sub = (Promise.reject("Sub to Me "));
// sub.then((res) => console.log(res)).catch((res) => console.log(res));
// console.log(sub);

// console.log("stop");

// -----------------------------------------------------------------------------------------------------------
// Promise Chaining-----------------------------------

// console.log("Start");
// function improtantAction(username, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`sub to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`like The ${video} video`);
//     }, 2000);
//   });
// }

// function shareTheVideo(share, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share The ${share} Video`);
//     }, 3000);
//   });
// }

// improtantAction("RoadSide Coder")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("JavaScript Interviwe ");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo("Javscripgt interView playlist");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// console.log("Stop");

// ---------------------------------------------------------------------------------------------------------
// async - await -------------------------------

console.log("Start");
function improtantAction(username, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`sub to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like The ${video} video`);
    }, 2000);
  });
}

function shareTheVideo(share, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share The ${share} Video`);
    }, 3000);
  });
}
const result = async () => {
  try {
    const message1 = await improtantAction("RoadSide Coder");
    console.log(message1);

    const message2 = await likeTheVideo("javascipt");
    console.log(message2);

    const message3 = await shareTheVideo("javasvript Interview");
    console.log(message3);
  } catch (error) {
    console.error("promies Failed", error);
  }
};
result();
console.log("Stop");
