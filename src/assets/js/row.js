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
function getRow(a,b,c,d, e, f){
    console.log(a,b,c,d)
    return `
            <tr> 
            <td>
            <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
               
                <h6 class="mb-0 text-sm" >${a}</h6>
                </div>
            </div>
            </td>

            <td class="align-middle text-sm">
            <span class="text-xs font-weight-bold"> ${b} </span>
            </td>
            <td class="align-middle  text-sm">
            <span class="text-xs font-weight-bold"> ${c} </span>
            </td>


            <td>
            <div class="d-flex align-items-center">
              <div>
              <span class="me-2 text-xs font-weight-bold">${e}%</span>
                <div class="progress">
                  <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="${e}" aria-valuemin="0" aria-valuemax="100" style="width: ${e}%;"></div>
                </div>
              </div>
            </div>
          </td>
          <td>
          <div class="d-flex align-items-center">
          <small class="d-flex align-items-center">
                $${f}
                </small>
            </div>
          <td>
          
            <td>
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
      "[R&D] Full Stack Software Engineer",
      "Humanity",
      "Denver, CO",
      "4 days ago",
      "https://www.linkedin.com/jobs/view/software-engineer-new-grad-at-hewlett-packard-enterprise-3041370241?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=HUtFqlME4jCsvF%2F99n0ffA%3D%3D&position=2&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "78",
      "145000"
    ],
    [
      "Software engineer - New Grad",
      "Hewlett Packard Enterprise",
      "Fort Collins, CO",
      "2 days ago",
      "https://www.linkedin.com/jobs/view/software-engineer-intern-at-bridxe-3050444066?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=RAcBd5JdqN4W6DcNN%2BjmeQ%3D%3D&position=3&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "65",
      "160000"
    ],
    [
      "Software Engineer Intern",
      "BridXe",
      "Los Angeles Metropolitan Area",
      "3 days ago",
      "https://www.linkedin.com/jobs/view/software-engineer-cloud-at-qualcomm-3050457022?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=Iypvs9HcaY4ek0ShyzxpJA%3D%3D&position=4&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "55",
      "123000"
    ],
    [
      "Software Engineer (Cloud)",
      "Qualcomm",
      "San Diego, CA",
      "6 days ago",
      "https://www.linkedin.com/jobs/view/entry-level-web-developer-at-2-a-m-talent-3057361005?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=%2FN6etf1udMs86%2FtFAXluBw%3D%3D&position=5&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "42",
      "142000"
    ],
    [
      "Entry Level Web Developer",
      "2 a.m. Talent",
      "Jacksonville, FL",
      "13 hours ago",
      "https://www.linkedin.com/jobs/view/software-engineer-at-comcast-3053795781?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=XREEnbpmTWPuflqzscdcxA%3D%3D&position=6&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "23",
      "122000"
    ],
    [
      "Software Engineer",
      "Comcast",
      "Philadelphia, PA",
      "9 hours ago",
      "https://www.linkedin.com/jobs/view/mmcp-software-engineer-at-qualcomm-3050456202?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=JO881%2FI4%2BISNr1jfIH%2FPZQ%3D%3D&position=7&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "20",
      "134000"
    ],
    [
      "MMCP Software Engineer",
      "Qualcomm",
      "San Diego, CA",
      "6 hours ago",
      "https://www.linkedin.com/jobs/view/entry-level-web-developer-at-2-a-m-talent-3054273961?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=99iGTgHCUVPY5RnmNN%2FBcw%3D%3D&position=8&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "10",
      "145000"
    ],
    [
      "Entry Level Web Developer",
      "2 a.m. Talent",
      "Phoenix, AZ",
      "13 minutes ago",
      "https://www.linkedin.com/jobs/view/embedded-software-engineer-new-grads-welcome-at-qualcomm-3050454446?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=ML9ukBoTaMA%2FdtMHnWCHrQ%3D%3D&position=9&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "5",
      "130000"
    ],
    [
      "Embedded Software Engineer (New Grads Welcome)",
      "Qualcomm",
      "San Diego, CA",
      "6 hours ago",
      "https://www.linkedin.com/jobs/view/associate-software-engineer-at-walgreens-3057352797?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=KFRtXaEz80zu0%2FITvzadgA%3D%3D&position=10&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "5",
      "140000"
    ],
    [
      "Associate Software Engineer",
      "Walgreens",
      "Chicago, IL",
      "9 minutes ago",
      "https://www.linkedin.com/jobs/view/front-end-software-engineer-at-cvs-health-3055592501?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=jKDtyfczHMdTdlHgUxGObA%3D%3D&position=11&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "8",
      "118000"
    ],
    [
      "Front End Software Engineer",
      "CVS Health",
      "New York, NY",
      "6 hours ago",
      "https://www.linkedin.com/jobs/view/new-grad-software-engineer-martech-at-sofi-3057189012?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=KlRJQfg2x%2Fyr2HPe5AiaoQ%3D%3D&position=12&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "6",
      "100200"
    ],
    [
      "New Grad, Software Engineer, Martech",
      "SoFi",
      "San Francisco Bay Area",
      "16 hours ago",
      "https://www.linkedin.com/jobs/view/cloud-software-developer-at-qualcomm-3050450965?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=KyYBtxqYxcQShr59a9OxvQ%3D%3D&position=14&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "5",
      "112000"
    ],
    [
      "[M10N] Backend Software Engineer",
      "Humanity",
      "Denver, CO",
      "5 hours ago",
      "https://www.linkedin.com/jobs/view/software-engineer-bachelor-s-co-op-united-states-at-cisco-3055998567?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=6FpYCC2xDNQLKzdcLSJ%2Ftw%3D%3D&position=15&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "3",
      "145000"
    ],
    [
      "Cloud Software Developer",
      "Qualcomm",
      "San Diego, CA",
      "13 hours ago",
      "https://www.linkedin.com/jobs/view/software-engineer-at-cadflow-ai-3050432876?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=79O1CKEZ89AXXqRu3PSBfg%3D%3D&position=16&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "2",
      "123000"
    ],
    [
      "Software Engineer Bachelor's (Co-Op) United States",
      "Cisco",
      "Seattle, WA",
      "6 hours ago",
      "https://www.linkedin.com/jobs/view/software-engineer-at-simplehash-3049891646?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=zDW8Knqc8%2BzLQc8wYnOhUQ%3D%3D&position=17&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "145600"
    ],
    [
      "Software Engineer",
      "CADflow.ai",
      "Los Angeles Metropolitan Area",
      "11 hours ago",
      "https://www.linkedin.com/jobs/view/software-development-engineer-at-actalent-3057327019?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=wTSw6NY5RBmxXabf2xedgA%3D%3D&position=18&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "135000"
    ],
    [
      "Software Engineer",
      "SimpleHash",
      "San Francisco, CA",
      "10 hours ago",
      "https://www.linkedin.com/jobs/view/full-stack-developer-at-moove-it-3057198482?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=I2MzA3MsDQQItBewUlJjUg%3D%3D&position=19&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "120000"
    ],
    [
      "Software Development Engineer",
      "Actalent",
      "Austin, TX",
      "14 hours ago",
      "https://www.linkedin.com/jobs/view/python-developer-entry-level-at-magnus-technology-solutions-3057350831?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=YGXQfARe9olSerSmCs7oWA%3D%3D&position=20&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "150200"
    ],
    [
      "Full Stack Developer",
      "Moove It",
      "Austin, TX",
      "1 hour ago",
      "https://www.linkedin.com/jobs/view/front-end-software-engineer-at-cvs-health-3055588938?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=2uRJqHwLLcm%2BA%2B2mPuAIFg%3D%3D&position=21&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "123129"
    ],
    [
      "Python Developer (Entry Level)",
      "Magnus Technology Solutions",
      "Atlanta, GA",
      "4 hours ago",
      "https://www.linkedin.com/jobs/view/software-engineer-front-end-at-playstation-3050460235?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=ywFPfLNUsDRJ%2BkcrL%2BGL1w%3D%3D&position=22&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "82982"
    ],
    [
      "Front End Software Engineer",
      "CVS Health",
      "Chantilly, VA",
      "45 minutes ago",
      "https://www.linkedin.com/jobs/view/software-engineer-at-tesla-3044537270?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=YeI%2B7OEQuQGbCEZVfBhOPA%3D%3D&position=23&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "126000"
    ],
    [
      "Software Engineer, Front End",
      "PlayStation",
      "San Francisco, CA",
      "16 hours ago",
      "https://www.linkedin.com/jobs/view/front-end-software-engineer-at-cvs-health-3055590773?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=36z%2BN1%2FCn0MasmPu4Yv9iA%3D%3D&position=24&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "126000"
    ],
    [
      "Software Engineer",
      "Tesla",
      "Fremont, CA",
      "5 hours ago",
      "https://www.linkedin.com/jobs/view/software-engineer-at-microsoft-3053760023?refId=3NSYkCP%2FqA4qXOmdTeHZ6A%3D%3D&trackingId=Cmw2rMppiluvXu3f6xeGiQ%3D%3D&position=25&pageNum=0&trk=public_jobs_jserp-result_search-card",
      "1",
      "126000"
    ]
  ]
}
// function get_jobs() {
// fetch("https://www.linkedin.com/jobs?job=SDE&loc=California", requestOptions)
//    .then(response => response.text())
//     .then(data=>{
//       console.log("hasdkasjdksadjlajsjasdj")
//        let arr = JSON.parse(data)
//         let finalArr = arr.output

//         finalArr.forEach(el => {
//            let newRow = document.createElement('tr')
//             newRow.innerHTML = getRow(el[0],el[1],el[2],el[3])
//             document.getElementById('t1').appendChild(newRow)
//         });


//    })
//     .catch(err=>console.log)
//   }

let arr = s
let finalArr = s.output
console.log("sssss",s)
finalArr.forEach(el => {
        let newRow = document.createElement('tr')
        newRow.innerHTML = getRow(el[1],el[3],el[2],el[4],el[5], el[6])
        document.getElementById('t1').appendChild(newRow)
    })