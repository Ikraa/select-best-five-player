//get all button using class
const getButton = document.getElementsByClassName("card-button");

//loop for get single button 
for (let i = 0; i < getButton.length; i++) {
  const element = getButton[i];
  element.addEventListener("click", function () {
    const getParent = element.parentNode;
   
    const playerName= getParent.querySelector(".player-name").innerText;
   
   
    
  });
  
 
}
