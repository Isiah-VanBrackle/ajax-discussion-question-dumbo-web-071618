const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let button = document.querySelector("button")
  button.addEventListener( "click", function() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(json => {
        let data = json.results[0]
        console.log(data);
        return data
      })
      .then( data => {
      let full_name = document.querySelector("#fullname")
      full_name.innerHTML = `<p>${data.name.first} ${data.name.last}</p>`
      let email = document.querySelector("#email")
      email.innerText = `${data.email}`
      let street = document.querySelector("#street")
      street.innerText = `${data.location.street}`
      let city = document.querySelector("#city")
      city.innerText = `${data.location.city}`
      let state = document.querySelector("#state")
      state.innerText = `${data.location.state}`
      let post = document.querySelector("#postcode")
      post.innerText = `${data.location.postcode}`
      let phone = document.querySelector("#phone")
      phone.innerText = `${data.phone}`
      let cell = document.querySelector("#cell")
      cell.innerText = `${data.cell}`
      let dob = document.querySelector("#date_of_birth")
      dob.innerText = `${data.dob.date}`
      let profile_picture = document.querySelector("#profile_picture")
      profile_picture.src = data.picture.medium})

  })
});
