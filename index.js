let quotebutton = document.getElementById('new-quote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

quotebutton.addEventListener('click', () => {
	fetch("https://quotes-api-self.vercel.app/quote")
		.then(response => response.json())
		.then(data => {
			quote.textContent = data.quote
			author.textContent = data.author
		})
		.catch(error => {
			console.error('Error fetching quote:', error);
      		quote.textContent = 'Oops! Could not fetch a quote right now.';
      		author.textContent = '';
		})
});