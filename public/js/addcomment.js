const handleNewCommentSubmit = async (event) => {
  event.preventDefault();
  try {
    const comment = document.querySelector('#comment').value.trim();
    const tripid = document.querySelector('#commentlink').value.trim();

    const tripResponse = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment, tripid }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    if (!tripResponse.ok) {
      alert('Failed to create Trip.');
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector('.newCommentSubmit')
  .addEventListener('submit', handleNewCommentSubmit);