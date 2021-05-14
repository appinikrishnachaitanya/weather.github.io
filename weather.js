let btn = document.querySelector('#btn_search');
let search_City=document.querySelector('#city');
let apikey= "1576c7211d3c43878df44327201112";
let notFound= document.querySelector('.not_found');

btn.addEventListener('click',function(e){
    e.preventDefault();
    let city = search_City.value;

    if(city=="")
    {
        alert("Don't Be smart");
        document.getElementById("display_card").style.display = "none";
    }

    else
    {
    
    document.getElementById("report").innerHTML="";
            document.getElementById("location").innerText="";
            document.getElementById("last_update").innerText="";
            notFound.innerText="";
   
    get_data(city)

    }


});





 async function get_data(city)
{
      const response =await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`);
      //const data =response.json();
      const badstatus=response.status;
      //console.log(data);
      //console.log(badstatus);
      if(badstatus == 400)
      {
          let heading = document.createElement('h4');
          heading.innerText="No Data Found";
          notFound.appendChild(heading);
          document.getElementById("display_card").style.display = "none";
          
          return;
      }

      else
      {   
        document.getElementById("display_card").style.display = "block";
        response.json().then(function(data) {
            document.getElementById("weather_image").src="http:"+data.current.condition.icon;
            document.getElementById("report").innerHTML=data.current.condition.text;
            document.getElementById("location").innerText=data.location.name;
            document.getElementById("last_update").innerText=data.current.last_updated;
            console.log(data);
      });


} 

}