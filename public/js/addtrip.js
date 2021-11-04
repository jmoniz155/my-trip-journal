const handleNewTripSubmit = async (event) => {
  event.preventDefault();
  try {
    const location = document.querySelector('#location').value.trim();
    const startDate = document.querySelector('#startDate').value.trim();
    const endDate = document.querySelector('#endDate').value.trim();
    const rating = document.querySelector('#rating').value.trim();
    const food = document.querySelector('#food').value.trim();
    const experience = document.querySelector('#experience').value.trim();
    const lesson = document.querySelector('#lesson').value.trim();
    const revisit = document.querySelector('#revisit').value.trim();
    
    const tripResponse = await fetch('/api/trip', {
      method: 'POST',
      body: JSON.stringify({ location, startDate, endDate, rating, food, experience, lesson, revisit }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });


    if (!tripResponse.ok) {
      alert('Failed to create Trip.');
      return;
    }

    // go to home page
    window.location.replace('/');
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector('.newTripSubmit')
  .addEventListener('submit', handleNewTripSubmit);