//get all button using class
const getButton = document.getElementsByClassName("card-button");

//loop for get single button 
 let nameCollection=[];
for (let i = 0; i < getButton.length; i++) {
  const element = getButton[i];
  element.addEventListener("click", function () {
    const getParent = element.parentNode;
    // console.log(getParent);
   
    const playerName= getParent.querySelector(".player-name").innerText;
    console.log(nameCollection);
    nameCollection.push(playerName);
    loadPlayerName();
    // element.setAttribute('disabled');

  });
  console.log(nameCollection);
}

  

 function loadPlayerName() {
    if (nameCollection.length>5) {
        alert('You are not alled to select more then 5')
        return;
    }
    const getul=document.getElementById('name-wraper');
    getul.classList.add('text-white', 'font-md','mb-[22px]', 'text-sm', 'text-[#FFFFFF]')
    // console.log(getul);
    const li = document.createElement('li');
     for (let i =0; i<nameCollection.length; i++){
        li.innerText = nameCollection[i];
        getul.appendChild(li);
     }
 }