// async function getUsers() {}

// const getUsers = async () => {
//   const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await responce.json();
//   console.log(users);
// };
// getUsers();

// const getComments = async () => {
//   const responce = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const comments = await responce.json();

//   const firstFifty = comments.filter((comment) => comment.id < 51);
//   const secondtFifty = comments.filter(
//     (comment) => comment.id > 50 && comment.id < 101
//   );
//   const ThirdFifty = comments.filter((comment) => comment.id >100  );
//   const FourthFifty = comments.filter(
//     (comment) => comment.id > 50 && comment.id < 101);

//  const FifthFifty = comments.filter(
//         (comment) => comment.id > 50 && comment.id < 101);
//  const SixthFifty = comments.filter(
//             (comment) => comment.id > 50 && comment.id < 101):

//  const SeventhFifty = comments.filter(
//                 (comment) => comment.id > 50 && comment.id < 101);

// const EightFifty = comments.filter(
//                     (comment) => comment.id > 50 && comment.id < );

//  const NinthFifty = comments.filter(
//                         (comment) => comment.id > 400 && comment.id < 451);

//  const TenthFifty = comments.filter(
//                             (comment) => comment.id > 450 && comment.id < 501);
//   console.log(firstFifty);
// };
// // getComments();

getSpeacialPost = async (id) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/post/${id}`
  );
  const post = await responce.json();
  console.log(post);
};

getSpeacialPost(Math.floor(Math.random() * 40) + 30);
