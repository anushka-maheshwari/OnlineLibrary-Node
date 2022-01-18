console.log("detail");
const detail = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:2000/api/v1/books/getBook'
    });
    if ((res.data.status = 'success'));
  } catch (err) {
    console.log(err.response);
  }
};

document.getElementById("detailsbtn").addEventListener('click',(e)=>{
  detail();
})