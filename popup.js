const databaseURL = 'https://test-fb-6c12b-default-rtdb.firebaseio.com/posts.json'; // Replace with your specific data path

        document.getElementById('fetch-data-button').addEventListener('click', () => {
            // Perform HTTP GET request to read data
            fetch(databaseURL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
					alert("n2");
                    return response.json();
                })
                .then(data => {
                    // Display the fetched data
					alert("n");
                    document.getElementById('data-output').textContent = JSON.stringify(data, null, 2);
                })
                .catch(error => {
					alert("n9");
                    console.error('Error fetching data:', error);
                    document.getElementById('data-output').textContent = `Error: ${error.message}`;
                });
        });