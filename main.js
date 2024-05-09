

function run() {

    // Creating Our XMLHttpRequest object 
    let xhr = new XMLHttpRequest();

    // Making our connection  
    let url = 'articles.json';
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            console.log("JSON Object Content Here");
            console.log("Data Loaded");
        }
    }
    // Sending our request 
    xhr.send();
}


run();

let mainData = new Object();

const xhr = new XMLHttpRequest();
xhr.open('GET', 'articles.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
       mainData = JSON.parse(xhr.responseText);

      console.log(mainData);

      console.log(typeof mainData );
      for ( let i = 0; i <mainData.length; i++ ) {

        mainData[i].category = `All`;

        
    }
    
    console.log(mainData);

    const updatedData = JSON.stringify(mainData);
    console.log(typeof updatedData);
    console.log(updatedData);

    let div = document.createElement("div");
    div.id = "data";
    // div.innerHTML= '<h1> All Articles </h1>'


    console.log(updatedData.length);
    
    
    mainData.forEach(article => {
        let feras = document.createElement("div");
      
        
        feras.innerHTML = `<h2> Title ${article.title}  </h2>
        <p> Article Number  ${article.id} Body </p>
        <p> Author: ${article.author || article.writer} </p>
        <p> Category:  ${article.category}  </p>`;

     

        // document.body.appendChild(div);
        div.appendChild(feras);
      });

      
    
      document.body.appendChild(div);
      

    
    } else {
      console.error('Failed to fetch JSON:', xhr.statusText);
    }
  }
};




xhr.send();























