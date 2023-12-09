function loadEventContent(file) {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        // Update the content div with the fetched data
        document.getElementById('event-info-container').innerHTML = data;
      })
      .catch(error => {
        console.error('There was a problem fetching the file:', error);
      });
}