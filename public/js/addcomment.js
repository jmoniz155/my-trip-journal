const handleNewCommentSubmit = async (event) => {
  event.preventDefault();
  try {
    const comment = document.querySelector('#comment').value.trim();
    const tripid = document.querySelector('#commentlink').value.trim();
    
    const commentResponse = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, tripid }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    if (!commentResponse.ok) {
      alert('Failed to create Trip.');
      return;
    }

    // document.location.reload();
    
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector('.newCommentSubmit')
  .addEventListener('submit', handleNewCommentSubmit);