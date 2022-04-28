

function getRow(a,b,c,d){
    return `
            <tr> 
            <td>
            <div class="d-flex px-2 py-1">
                <div>
                <img src="../assets/img/small-logos/logo-xd.svg" class="avatar avatar-sm me-3" alt="xd">
                </div>
                <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">${a}</h6>
                </div>
            </div>
            </td>
            <td class="align-middle text-center text-sm">
            <span class="text-xs font-weight-bold"> ${b} days ago </span>
            </td>
            <td class="align-middle text-center text-sm">
            <span class="text-xs font-weight-bold"> ${c} </span>
            </td>
            <td class="align-middle">
            <div class="progress-wrapper w-75 mx-auto">
                <div class="progress-info">
                <div class="progress-percentage">
                    <span class="text-xs font-weight-bold">${d}%</span>
                </div>
                </div>
                <div class="progress">
                <div class="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="${d}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            </td>
        </tr>
    `
}
var sample={0:[1,2,3,4],1:[5,6,7,8,9],2:[10,11,12,13]};

for (var key in sample){
    var value = sample[key];

    console.log(key,)
    let newRow = document.createElement('tr')
    newRow.innerHTML = getRow(value[0],value[1],value[2],value[3])
    document.getElementById('t1').appendChild(newRow)
}

