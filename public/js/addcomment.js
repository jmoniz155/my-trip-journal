const handleNewCommentSubmit = async (event) => {
  event.preventDefault();
  try {
    const comment = document.querySelector('#comment').value.trim();
    const tripid = document.querySelector('#commentlink').value;
    console.log(tripid);
    const commentResponse = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ tripid, comment }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    if (!commentResponse.ok) {
      alert('Failed to create Trip.');
      return;
    }

    document.location.reload();
    
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector('.newCommentSubmit')
  .addEventListener('submit', handleNewCommentSubmit);

const commentId = document.querySelector('input[name="post-id"]').value;
//const commentId = document.querySelectorAll('.delete-btn').value;
console.log(commentId)

const deleteComment = async (event) => {
  event.preventDefault();
  
  try {
    console.log(commentId)
    const deleteResponse = await fetch(`/api/comments/${commentId}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    if (!deleteResponse.ok) {
      alert('Failed to create Trip.');
      return;
    }

    // document.location.reload();
    
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector('.delete-btn')
  .addEventListener('click', deleteComment);