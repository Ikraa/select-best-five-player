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
    element.style.background="#A2A9AF"
    element.setAttribute('disabled','')
  });
  
}

//   function of loadPlayerName
 function loadPlayerName() {
     // erorr handling
    if (nameCollection.length>5) {
        alert('You are not alled to select more then 5')
        return;
    }
    const getul=document.getElementById('name-wraper');
    getul.classList.add('text-white', 'font-md', 'text-sm', 'text-[#FFFFFF]')
    // console.log(getul);
    const li = document.createElement('li');
     for (let i =0; i<nameCollection.length; i++){
        li.innerText = nameCollection[i];
        getul.appendChild(li);
     }
 }

//  calculation of player expense & others expense
//========================================================

// get input value 
function getValueFromInput(id){
    const inputValue=parseFloat(document.getElementById(id).value)
    return inputValue
}

// function of per player expense 
function handleCalculate(){
    const getPlayerExpense=getValueFromInput("per-player-expense")
    // erorr handling
  if (!nameCollection.length) {
      alert('Please select at list one player')
      return
  }
    if(isNaN(getPlayerExpense)){
        alert("Please provide a value")  
        return 
    }
    if(getPlayerExpense<0){
        alert("Provide postive value")
        
        return
    }
    // calcualtion expense of total players
    const totalPlayerExpense=parseFloat(getPlayerExpense)*nameCollection.length
    const getPlayerExpenseResult=document.getElementById("player-expense").innerText=Number(totalPlayerExpense.toFixed(2));
    return getPlayerExpenseResult 
}

//  function of calculateTotal
function calculateTotal(){
    const managerExpense=getValueFromInput("manager-expense")
    const coachExpense=getValueFromInput("coach-expense")
    const playersExpense=handleCalculate()
    //error handling
    if(isNaN(managerExpense)||isNaN(coachExpense)){
        alert("Please provide a value")  
        return
    }
    if(managerExpense<0 || coachExpense<0){
        alert("Provide postive value")
        
        return
    }
  if(typeof playersExpense ==="undefined"){
    console.log("undefind found")
    alert("Input value shoud not be string ")
    return
  }
  // handling calculation total
  const  totalexpense=(managerExpense+coachExpense+playersExpense );
  document.getElementById("result").innerText=Number(parseFloat(totalexpense).toFixed(2));
 
}
// End Player Calcualtion