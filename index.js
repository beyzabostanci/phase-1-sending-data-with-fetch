function submitData (userName, userEmail) {
    const user ={
        "name": userName,
        "email": userEmail
    }//our user needs
    const userData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      };

    return fetch("http://localhost:3000/users", userData)//fetching data and giving it an order
    .then(function (response) {
        return response.json();//give a response
      })
      .then(function (object) {
        console.log(object);
        document.body.innerHTML = object.id//show them in the html body
      })
      .catch(function (error) {
        console.log(error.message);
        document.body.innerHTML = error.message//error message
      })
}