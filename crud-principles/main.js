let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("posts");
let abc = document.getElementById("abc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
  console.log("button clicked");
});

let formValidation = () => {
  if (input.value === "") {
    console.log("failure");
    msg.innerHTML = "Post Cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    storeData();
  }
};

let PostData = {};

let storeData = () => {
  PostData["post"] = input.value;
  console.log(PostData);
  createPost();
};

let createPost = () => {
  post.innerHTML += `<div>
  <p>${PostData.post} </p>
  <span class="options">
    <i onClick="updatePost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
</div>`;

  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  console.log("post deleted");
};

let updatePost = (e) => {
  console.log("post updated");
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
