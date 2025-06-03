let quotebutton = document.getElementById('new-quote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

quotebutton.addEventListener('click', () => {
	fetch("https://zenquotes.io/api/random")
		.then(response => response.json())
		.then(data => {
			quote.textContent = data[0].q
			author.textContent = data[0].a
		})
		.catch(error => {
			console.error('Error fetching quote:', error);
      		quote.textContent = 'Oops! Could not fetch a quote right now.';
      		author.textContent = '';
		})
});