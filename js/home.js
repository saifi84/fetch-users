
function setRemoval(id) {
  var element = document.querySelector(".row_" + id) 
  element.remove(id);
}
function setEdit(id) {
  document.getElementById("task-edit_"+id).contentEditable = true;

}

let users = localStorage.getItem("users");
const data= JSON.parse(users);
let result = data.map(item => {
  if(item.email !== localStorage.getItem('email'))
  {
  return`
  <ul class="list-group ">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="../assets/images/avatar.png" alt="" style="width: 45px; height: 45px" class="rounded-circle">
      <div class="ms-3 ">
        <p class="fw-bold mb-1 ">${item.name}</p>
        <p class="fw-bold mb-1 ">${item.email}</p>
      </div>
    </div>    
  </li>

</ul>
  `
  }
});
document.getElementById("users-list").insertAdjacentHTML('beforeend',result);


let name=localStorage.getItem('name')?localStorage.getItem('name'):''
  console.log(name);
  if(name=='')
  {
    alert('login first');
    window.location.href="login.html";
  }
  function logout()
  {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.href="login.html";
  }


const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});


imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});


file.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
            localStorage.setItem("image" , reader.result);
        });

        reader.readAsDataURL(choosedFile);

  
    }
});



