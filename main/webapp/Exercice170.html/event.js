// Get the input field and submit button
const champ = document.getElementById("input-addr");
const submitBtn = document.querySelector(".submit");
const error = document.getElementById("error")

// Add event listener to the submit button
submitBtn.addEventListener("click", function() {
  // Check if the input field is empty
  if (champ.value === "") {
    
    error.innerHTML='Le champ ne peut etre vide'
  }else{
    alert('le formulaire peut etre envoye')
  }
});
