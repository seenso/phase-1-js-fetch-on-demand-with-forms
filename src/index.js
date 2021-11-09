const init = () => {
  //event listener to capture form data and override form's default behavior
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent/override form's default behavior (default = update whenever changes are made)
    // console.log('EVENT TARGET VALUE', event.target.children[1].value); //gets us the form input value
    // console.log('FORM VALUE', document.querySelector('input#searchByID').value); //also gets us form input value
    
    //fetch data based on what user types into that form
    const input = document.querySelector('input#searchByID').value;
    console.log('INPUT', input);

    fetch(`http://localhost:3000/movies/${input}`)
    .then(response => response.json()) //create json obj aka translate data into something useful
    .then(movieData => {
      //display data on page
      const title = document.querySelector('section#movieDetails h4'); //html for title
      const summary = document.querySelector('section#movieDetails p'); //html for summary

      title.innerText = movieData.title;
      summary.innerText = movieData.summary;
    });
  });

}

document.addEventListener('DOMContentLoaded', init);