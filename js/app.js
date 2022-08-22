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

  

 function loadPlayerName() {
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



//  calculate per player expese 


// get input value 
function getValueFromInput(id){
    const inputValue=parseFloat(document.getElementById(id).value)
    return inputValue
}


function handleCalculate(){
    const getPlayerExpense=getValueFromInput("per-player-expense")
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
    const totalPlayerExpense=parseFloat(getPlayerExpense)*nameCollection.length
    const getPlayerExpenseResult=document.getElementById("player-expense").innerText=totalPlayerExpense.toFixed(2)
    return getPlayerExpenseResult
    
}


function calculateTotal(){
    const managerExpense=getValueFromInput("manager-expense")
    const coachExpense=getValueFromInput("coach-expense")
    const playersExpense=handleCalculate()
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

  let  totalexpense=(managerExpense+coachExpense+playersExpense )

  document.getElementById("result").innerText=parseFloat(totalexpense).toFixed(2) 
 
}