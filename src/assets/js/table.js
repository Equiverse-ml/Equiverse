function getRow(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
    return `
    <tr>
    <td>
      <div class="d-flex px-2">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
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
      "A",
      "10000",
      "5 days ago",
      "Rejected",
      "90",
      "Pending"
    ],
    [
        "B",
        "60000",
        "4 days ago",
        "Shortlisted",
        "50",
        "Given"
      ],
      [
        "C",
        "70000",
        "4 days ago",
        "Shortlisted",
        "30",
        "Given"
      ],
      [
        "D",
        "180000",
        "4 days ago",
        "Rejected",
        "10",
        "Pending"
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
    //.catch(err=>console.log)

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