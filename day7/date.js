const callbackFun = () => {
      const inputdob = document.getElementById("dob").value;
      console.log(inputdob);

     
      document.getElementById("result").textContent = "Your DOB is: " + inputdob;
    };

    const btn = document.getElementById("btn");
    btn.addEventListener("click", (event) => {
      event.preventDefault(); 
      callbackFun();
    })
