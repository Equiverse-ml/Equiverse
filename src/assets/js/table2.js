function getRow(a,b,c,d,e,f){
  console.log(a,b,c,d,e,f)
  return `
  <tr>
  <td>
    <div class="d-flex px-2">
      <script src="/src/assets/js/jquery-3.6.0.min.js"></script>
      <div class="my-auto">
        <h6 class="mb-0 text-sm">${a}</h6>
      </div>
    </div>
  </td>
  <td>
    <p class="text-sm font-weight-bold mb-0">$${b}</p>
  </td>
  <td>
    <span class="text-xs font-weight-bold">${c}</span>
  </td>
  <td>
    <p class="text-xs font-weight-bold status-pill ${d}">${d}</p>
  </td>
  <td>
    <div class="d-flex align-items-center">
      <span class="me-2 text-xs font-weight-bold">${e}%</span>
      <div>
        <div class="progress">
        asdasd
          <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="${e}" aria-valuemin="0" aria-valuemax="100" style="width: ${e}%;"></div>
        </div>
      </div>
    </div>
  </td>
  <td>
    <span class="text-xs font-weight-bold feedback-pill ${f}">${f}</span>
  </td>
  <td class="align-middle">

      <i class="fa fa-ellipsis-v text-xs">

      </i>

  </td>
</tr>
  `
}
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var s={
"output": [
  [
    "Facebook",
    "135000",
    "5 days ago",
    "Rejected",
    "90",
    "Pending"
  ],
  [
      "Amazon",
      "125000",
      "4 days ago",
      "Shortlisted",
      "50",
      "Given"
    ],
    [
      "Apple",
      "160000",
      "4 days ago",
      "Shortlisted",
      "30",
      "Given"
    ],
    [
      "Google",
      "180000",
      "4 days ago",
      "Rejected",
      "30",
      "Pending"
    ],
    [
      "Microsoft",
      "110000",
      "5 days ago",
      "Rejected",
      "25",
      "Pending"
    ],
    [
      "Netflix",
      "200000",
      "5 days ago",
      "Shortlisted",
      "5",
      "Given"
    ],
    [
      "Quora",
      "210000",
      "5 days ago",
      "Accepted",
      "50",
      "Pending"
    ],
    [
      "Stripe",
      "200000",
      "6 days ago",
      "Shortlisted",
      "5",
      "Given"
    ],
    [
      "Samsung",
      "120000",
      "6 days ago",
      "Rejected",
      "75",
      "Given"
    ],
     ]
}
//fetch("http://127.0.0.8:8000/jobs?job=SDE&loc=California", requestOptions)
//  .then(response => response.text())
  //.then(data=>{
    //  let arr = JSON.parse(data)
      //let finalArr = arr.output

      //finalArr.forEach(el => {
        //  let newRow = document.createElement('tr')
          //newRow.innerHTML = getRow(el[0],el[1],el[2],el[3])
          //document.getElementById('t1').appendChild(newRow)
      //});


 // })
  //.atch(err=>console.log)

//let arr = JSON.parse(s)
let finalArr = s.output


function renderTable(arr) {

document.getElementById('t2').innerHTML = ''

arr.forEach(el => {
  let newRow = document.createElement('tr')
  newRow.innerHTML = getRow(el[0],el[1],el[2],el[3],el[4],el[5])
  document.getElementById('t2').appendChild(newRow)
})
}

renderTable(finalArr)

document.getElementById('filter-modal-close').addEventListener('click', () => {
document.getElementById('filter-modal').style.display = 'none'
});

document.getElementById('open-filters').addEventListener('click', () => {
document.getElementById('filter-modal').style.display = 'unset'
});

document.getElementById('filter-status').addEventListener('click', () => {
let filterValue = document.getElementById('filter-status').value;
let arr = finalArr.filter((el) => el[ 3 ] === filterValue)
renderTable(arr)
})
