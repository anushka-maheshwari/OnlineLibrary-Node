console.log("update");
document.getElementById("updateBtn").addEventListener("click", (e) => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const ISBN = document.getElementById("isbn").value;
    const author = document.getElementById("author").value;
    const numberOfCopies = document.getElementById("NumberOfCopies").value;
    console.log(title,description,ISBN,author,numberOfCopies);
    update1(title,description,ISBN,author,numberOfCopies);
});
const update1 = async (
    title,
    description,
    ISBN,
    author,
    numberOfCopies
) => {
  try {
    const updateBook = await axios({
      method: "PATCH",
      url: `http://localhost:2000/api/v1/books/updateBook`,
      data:{title,description,ISBN,author,numberOfCopies},
    });  
    window.location.replace("http://127.0.0.1:2000");
  } catch (err) {
    alert("Invalid data");
    console.log(err);
  }
};
