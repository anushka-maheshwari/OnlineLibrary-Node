console.log("create");
document.getElementById("createBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const ISBN = document.getElementById("isbn").value;
  const author = document.getElementById("author").value;
  const numberOfCopies = document.getElementById("NumberOfCopies").value;
  create(title,description,ISBN,author,numberOfCopies);
});
const create = async (
    title,
    description,
    ISBN,
    author,
    numberOfCopies
) => {
  try {
    const createBook = await axios({
      method: "POST",
      url: "http://localhost:2000/api/v1/books/createBook",
      data: {
        title,
        description,
        ISBN,
        author,
        numberOfCopies,
      },
    });
    window.location.replace("http://127.0.0.1:2000");
  } catch (err) {
    alert("Invalid data");
    console.log(err);
  }
};
