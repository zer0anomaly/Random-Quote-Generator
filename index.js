let quotebutton = document.getElementById('new-quote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

quotebutton.addEventListener('click', () => {
	fetch("https://favqs.com/api/qotd")
		.then(response => response.json())
		.then(data => {
			quote.textContent = data.quote.body
			author.textContent = data.quote.author
		})
});