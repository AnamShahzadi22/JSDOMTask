window.onload = function () {
    if (!document.cookie.includes("digit=")) {
      alert("Session expired. Please log in again.");
      window.location.replace("index.html");
    }

    fetchDatafromApi();
  };

async function fetchDatafromApi(){
    try{
  let response = await  fetch('https://jsonplaceholder.typicode.com/users');
  let result =  await response.json();
  let name = '';
  result.forEach(element => {
    
  name +=  `
  <div style = "background-color: #333; color: white; padding: 10px; margin-bottom: 10px;" >
  <b> Name </b>:${element.name}  <br>
  <b> Username:</b>:${element.username}  <br>
  <b> Email  </b>:${element.email}  <br>
  <b> Address </b>:${element.address.street}  <br>
  <b> Phone </b>:${element.phone}  <br>
  <b> Website </b>:${element.website}  <br>

  </div>`;
  

    
  });
  document.getElementById('data').innerHTML = name;
  

    }
    catch(e){
        console.error(e);
        
        document.getElementById('data').innerHTML = "Failed to Fetch Data"  ; 

    }
}
