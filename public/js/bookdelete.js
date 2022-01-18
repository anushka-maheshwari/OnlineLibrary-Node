console.log("delete");
document.getElementById("deleteBtn").addEventListener("click", (e) => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    delete1(title,author);
});
const delete1 = async (
    title,
    author
) => {
  try {
    const deleteBook = await axios({
      method: "DELETE",
      url: `http://localhost:2000/api/v1/books/deleteBook`,
      data:{title,author},
    });  
    window.location.replace("http://127.0.0.1:2000");
  } catch (err) {
    alert("Invalid data");
    console.log(err);
  }
};
