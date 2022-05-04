var con="United States,California"
var title="Software Enginner"


function ipLookUp () {
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {
          console.log('User\'s Location Data is ', response);
          con= response.country+","+response.regionName
          console.log(con);
      },

      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
  );
}
ipLookUp()
function getRow(a,b,c,d,e){
    console.log(a,b,c,d,e)
    return `
            <tr> 
            <td>
            <div class="d-flex px-2 py-1">
                <div>
               <!-- <img src="../assets/img/small-logos/logo-xd.svg" class="avatar avatar-sm me-3" alt="xd">--!>
                </div>
                <div class="d-flex flex-column justify-content-center">
               
                <h6 class="mb-0 text-sm" >${a}</h6>
                </div>
            </div>
            </td>
            <td class="align-middle text-sm">
            <span class="text-xs font-weight-bold"> $${b} </span>
            </td>
            </td>
            <td class="align-middle text-sm">
            <span class="text-xs font-weight-bold"> ${c} </span>
            </td>

           
            <td>
            <div class="d-flex align-items-center">
              <span class="me-2 text-xs font-weight-bold">${e}%</span>
                <div class="progress">
                  <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="${e}" aria-valuemin="0" aria-valuemax="100" style="width: ${e}%;"></div>
                </div>
            </div>
            <a href="${d}">
            <button class="listing-btn">Apply</button>
            </a>
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
      "Software engineer - New Grad",
      "Hewlett Packard Enterprise",
      "Fort Collins, CO",
      "2 days ago",
      "154000",
      "49",
      "https://www.linkedin.com/jobs/view/software-engineer-intern-at-bridxe-3050444066?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=RAcBd5JdqN4W6DcNN%2BjmeQ%3D%3D&position=3&pageNum=0&trk=public_jobs_jserp-result_search-card"
    ],
    [
      "Software Engineer Intern",
      "BridXe",
      "Los Angeles Metropolitan Area",
      "3 days ago",
      "120000",
      "24",
      "https://www.linkedin.com/jobs/view/software-engineer-cloud-at-qualcomm-3050457022?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=Iypvs9HcaY4ek0ShyzxpJA%3D%3D&position=4&pageNum=0&trk=public_jobs_jserp-result_search-card"
    ],
    [
      "Software Engineer (Cloud)",
      "Qualcomm",
      "San Diego, CA",
      "6 days ago",
      "160000",
      "60",
      "https://www.linkedin.com/jobs/view/entry-level-web-developer-at-2-a-m-talent-3057361005?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=%2FN6etf1udMs86%2FtFAXluBw%3D%3D&position=5&pageNum=0&trk=public_jobs_jserp-result_search-card"
    ],
    [
      "Entry Level Web Developer",
      "2 a.m. Talent",
      "Jacksonville, FL",
      "13 hours ago",
      "109000",
      "80",
      "https://www.linkedin.com/jobs/view/software-engineer-at-comcast-3053795781?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=XREEnbpmTWPuflqzscdcxA%3D%3D&position=6&pageNum=0&trk=public_jobs_jserp-result_search-card"
    ],
    [
      "Software Engineer",
      "Comcast",
      "Philadelphia, PA",
      "9 hours ago",
      "187000",
      "56",
      "https://www.linkedin.com/jobs/view/mmcp-software-engineer-at-qualcomm-3050456202?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=JO881%2FI4%2BISNr1jfIH%2FPZQ%3D%3D&position=7&pageNum=0&trk=public_jobs_jserp-result_search-card"
    ],
    
    [
      "Cloud Software Developer",
      "Qualcomm",
      "San Diego, CA",
      "13 hours ago",
      "154000",
      "49",
      "https://www.linkedin.com/jobs/view/software-engineer-at-cadflow-ai-3050432876?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=79O1CKEZ89AXXqRu3PSBfg%3D%3D&position=16&pageNum=0&trk=public_jobs_jserp-result_search-card"
    ],
    [
      "Software Engineer Bachelor's (Co-Op) United States",
      "Cisco",
      "Seattle, WA",
      "6 hours ago",
      "124000",
      "67",
      "https://www.linkedin.com/jobs/view/software-engineer-at-simplehash-3049891646?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=zDW8Knqc8%2BzLQc8wYnOhUQ%3D%3D&position=17&pageNum=0&trk=public_jobs_jserp-result_search-card"
    ],
    [
      "Software Engineer",
      "CADflow.ai",
      "Los Angeles Metropolitan Area",
      "11 hours ago",
      "143000",
      "32",
      "https://www.linkedin.com/jobs/view/software-development-engineer-at-actalent-3057327019?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=wTSw6NY5RBmxXabf2xedgA%3D%3D&position=18&pageNum=0&trk=public_jobs_jserp-result_search-card"
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
console.log("sssss",s)
finalArr.forEach(el => {
        let newRow = document.createElement('tr')
        newRow.innerHTML = getRow(el[1],el[4],el[2],el[6],el[5])
        document.getElementById('t1').appendChild(newRow)
    })