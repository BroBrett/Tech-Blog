const newFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('blog-id')) {
      const description = document.querySelector('#comment-desc').value.trim();
      const blog_id = event.target.getAttribute('blog-id');
      if (description) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ description, blog_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace(`/blogs/${blog_id}`);
        } else {
          alert('Failed to create comment');
        }
      }
    }
  };