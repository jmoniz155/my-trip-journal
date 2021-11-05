console.log("Heelloooo")
const deleteTrip = async function (event) {
    console.log("clicked", event)
    event.preventDefault();
    const tripID = document.querySelector('.delete-trip-btn')
    console.log(tripID.value)
    await fetch(`/api/trip/` + tripID.value , {
      method: 'DELETE'
    })
   
    // .then(function() { 
    //     document.location.replace("/");
    // })
    // .catch(err => console.log(err))
    

  };
  
  
      // document.location.reload();
      
     
  
  document
    .querySelector('.delete-trip-btn')
    .addEventListener('click', deleteTrip);