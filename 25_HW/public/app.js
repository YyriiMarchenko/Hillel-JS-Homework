const API_URL = "http://127.0.0.1:3000";

const usersBlock = document.querySelector(".usersBlock");

const addUsersHtml = ({ id, name, age }) => {
  const div = document.createElement("div");
  div.setAttribute("data-id", id);

  div.insertAdjacentHTML(
    "beforeend",
    `<p><span>User: ${name}; Age: ${age}
    </span><button data-action="delete">Delete</button>
    </span><button data-action="edit">Edit</button>
    </p>`
  );

  usersBlock.append(div);
};

const getUsers = () =>
  fetch(`${API_URL}/users`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      usersBlock.innerHTML = "";
      data.forEach(addUsersHtml);
    })
    .catch((error) => {
      alert(error.message);
    });

getUsers();

document.forms.user.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = this.name.value;
  const age = this.age.value;

  fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify({ name, age }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => addUsersHtml(data))
    .catch((error) => alert(error.message));
});

usersBlock.addEventListener("click", function (event) {
  if (event.target.dataset.action !== "delete") return;
  const id = event.target.closest("[data-id]").dataset.id;
  console.log(id);
  fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())

    .then(() => getUsers())
    .catch((error) => alert(error.message));
});

usersBlock.addEventListener("click", function (event) {
  if (event.target.dataset.action !== "edit") return;
  const id = event.target.closest("[data-id]").dataset.id;
  const userWrapper = event.target.closest("[data-id]");
  const formEdit = document.createElement("form");
  formEdit.innerHTML = ` <div>
    <input name="name" placeholder="Name" type="text" />
  </div>
  <div>
    <input name="age" placeholder="age" type="number" />
  </div>
  <button type="submit">Save</button>`;

  userWrapper.append(formEdit);

  formEdit
    .querySelector("[type=submit]")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const name = formEdit.name.value;
      const age = formEdit.age.value;

      fetch(`${API_URL}/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name, age }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => getUsers())
        .catch((error) => alert(error.message));
    });
});
