console.log("Heelloooo")

const deleteTrip = async function (event) {
    event.preventDefault();

    try {
        this.value
        console.log(this.value)
        const deleteResponse = await fetch(`/api/trip/${this.value}`, {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        });
    
        if (!deleteResponse.ok) {
          alert('Failed to delete Trip.');
          return;
        }
    
        // document.location.reload();
        window.location.replace('/');
      } catch (error) {
        console.log(error);
      }
    };
  
  document
    .querySelector('.delete-trip-btn')
    .addEventListener('click', deleteTrip);