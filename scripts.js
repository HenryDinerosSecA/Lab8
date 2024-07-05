const apiUrl = 'https://southparkquotes.onrender.com/v1/quotes'; /* defines url of api */
        fetch(apiUrl) /* GET request, returns as a promise */
            .then(response => { /* handles initial response from url*/
                if (!response.ok) { /* checks if response was good, if not, shows error */
                    throw new Error(`HTTP no-no! status: ${response.status}`);
                }
                return response.json(); /* Jason's Promise(hehe) */
            })
            .then(data => { /* receives Jason's Promise */
                console.log('Random South Park quote:', data); /* logs received data-- */
                if (data && data.length > 0) {
                    const quoteData = data[0];
                    document.getElementById('quote').textContent = quoteData.quote;
                    document.getElementById('character').textContent = `- ${quoteData.character}`;
                } else {
                    document.getElementById('quote').textContent = 'Out of words';
                }
            })
            .catch(error => { /* --catches errors during fetching and logs them */
                console.error('Error fetching South Park quote:', error);
                document.getElementById('quote').textContent = 'Error fetching quote :(';
            });
/*this was insanely confusing at first, 
the else statement can be removed but 
I would get weird errors sometimes so i opted to keep it there */

/* NOTE: Some of the quotes may be offensive, 
I have not gone through all of them to see if that is the case. */