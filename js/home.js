document.getElementById("addMoneyBtn").addEventListener("click",(e)=>{
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const account = document.getElementById("account").value
    const amount = parseInt(document.getElementById("amount").value)
    const pin = document.getElementById("pin").value
    
     let taka = parseInt(document.getElementById("taka").innerText);
    if(amount>=100){
        taka = taka + amount;
         document.getElementById("taka").innerText = taka; // update UI
        
        
    }else{
        alert("Less 100 not allow");

    }

}) 

document.getElementById("WithdrawMoney").addEventListener("click", (e) => {
  e.preventDefault();

  const account = document.getElementById("Withdrawaccount").value;
  const amount = parseInt(document.getElementById("Withdrawamount").value);
  const pin = parseInt(document.getElementById("Withdrawpin").value);
  let taka = parseInt(document.getElementById("taka").innerText);
  const WithdrawPIN = 1234;

  if (isNaN(amount) || isNaN(pin)) {
    alert("Please enter valid numeric values");
    return;
  }

  if (WithdrawPIN === pin) {
    if (amount >= 100) {
      if (taka >= amount) {
        taka -= amount;
        document.getElementById("taka").innerText = taka;
      } else {
        alert("Insufficient balance");
      }
    } else {
      alert("Less than 100 not allowed");
    }
  } else {
    alert("Enter a valid PIN");
  }
});

document.getElementById("TransferMoneybtn").addEventListener("click", (e) => {
  e.preventDefault();

  
  const amount = parseInt(document.getElementById("TransferMoneyamount").value);
  const pin = parseInt(document.getElementById("TransferMoneypin").value); 

  let taka = parseInt(document.getElementById("taka").innerText);
  const TransferMoneypin = 1234;

  if (isNaN(amount) || isNaN(pin)) {
    alert("Please enter valid numeric values");
    return;
  }

  if (TransferMoneypin === pin) {
    if (amount >= 100) {
      if (taka >= amount) {
        taka -= amount;
        document.getElementById("taka").innerText = taka;
      } else {
        alert("Insufficient balance");
      }
    } else {
      alert("Less than 100 not allowed");
    }
  } else {
    alert("Enter a valid PIN");
  }
});



//  const transactions = [
//       { label: "Electricity Bill", time: "Today 01:44 AM" },
//       { label: "Bank Deposit", time: "Today 01:44 AM" },
//       { label: "Mobile Recharge", time: "Today 01:44 AM" },
//       { label: "Gas Bill", time: "Today 01:44 AM" }
//     ];

    // const list = document.getElementById('history');

    // transactions.forEach(tx => {
    //   const item = document.createElement('div');
    //   item.className = 'transaction';

    //   const label = document.createElement('div');
    //   label.className = 'label';
    //   label.innerHTML = `<span class="icon">💰</span><strong>${tx.label}</strong> - ${tx.time}`;

    //   const menu = document.createElement('div');
    //   menu.className = 'menu';
    //   menu.textContent = '⋮';

    //   item.appendChild(label);
    //   item.appendChild(menu);
    //   list.appendChild(item);








document.getElementById("ADDMoney").addEventListener("click", (e) => {
  e.preventDefault(); // stops form submission / reload
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("AddMoney").style.display = "block";
  document.getElementById("TransferMoney").style.display = "none";
  document.getElementById("GetBonus").style.display = "none";
  document.getElementById("PAYBill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});

document.getElementById("CASHOut").addEventListener("click", (e) => {
  e.preventDefault(); 
  document.getElementById("cashOut").style.display = "block";
  document.getElementById("AddMoney").style.display = "none";
  document.getElementById("TransferMoney").style.display = "none";
  document.getElementById("GetBonus").style.display = "none";
  document.getElementById("PAYBill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});

document.getElementById("transferMONEY").addEventListener("click", (e) => {
  e.preventDefault(); 
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("AddMoney").style.display = "none";
  document.getElementById("TransferMoney").style.display = "block";
  document.getElementById("GetBonus").style.display = "none";
  document.getElementById("PAYBill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});

document.getElementById("GEtBouns").addEventListener("click", (e) => {
  e.preventDefault(); 
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("AddMoney").style.display = "none";
  document.getElementById("TransferMoney").style.display = "none";
  document.getElementById("GetBonus").style.display = "block";
  document.getElementById("PAYBill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});

document.getElementById("PAyBill").addEventListener("click", (e) => {
  e.preventDefault(); 
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("AddMoney").style.display = "none";
  document.getElementById("TransferMoney").style.display = "none";
  document.getElementById("GetBonus").style.display = "none";
  document.getElementById("PAYBill").style.display = "block";
  document.getElementById("transaction").style.display = "none";
});

document.getElementById("TransacTIONs").addEventListener("click", (e) => {
  e.preventDefault(); 
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("AddMoney").style.display = "none";
  document.getElementById("TransferMoney").style.display = "none";
  document.getElementById("GetBonus").style.display = "none";
  document.getElementById("PAYBill").style.display = "none";
  document.getElementById("transaction").style.display = "block";
});





