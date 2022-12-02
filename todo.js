const r=document.getElementById('myInput')
const e=document.getElementById('content')
// function addTask(){
// e.innerHTML+=`         
// <div class="bg-white p-2 mt-3 d-flex justify-content-between border-radius rounded fw-bold">
// <p class="mt-2">${r.value}</p>

// <div>
// <button class="btn btn-primary fw-bold beast" id="damn" onclick="elv()">Edit</button>
// <i class="icofont-ui-delete p-2 text-white" id="chem" onclick="eve()"></i>
// </div>


// </div>`
// }

function addTask(){
    const der=document.createElement('div')
    der.className="bg-white p-2 mt-3 d-flex justify-content-between border-radius rounded fw-bold"
    const pes=document.createElement('p')
    pes.appendChild(document.createTextNode(`${r.value}`))
    der.appendChild(pes)
    const Les=document.createElement('div')
    Les.innerHTML=`<button class="btn btn-primary fw-bold beast" id="damn">Edit</button>
     <i class="icofont-ui-delete p-2 text-white" id="chem"></i>`

     der.appendChild(Les)
     e.appendChild(der)
     r.value=""
}
function eve(){
    document.getElementById('chem').parentElement.parentElement.remove()

}
e.addEventListener('click',(e)=>{
    if(e.target.classList.contains('icofont-ui-delete')){
        e.target.parentElement.parentElement.remove()
        console.log(e.target)
    }else if(e.target.classList.contains('beast')){
        if(e.target.innerText=="Edit"){
            e.target.innerText="Save"
            e.target.parentElement.previousElementSibling.contentEditable=true
            console.log(e.target)
        }else{
            e.target.innerText="Edit"
            e.target.parentElement.previousElementSibling.contentEditable=false
        }
      
    }

})
// function elv(){
//  let limp=document.getElementById('damn').parentElement.previousElementSibling 
//  limp.setAttribute('contenteditable','true')  
// }

