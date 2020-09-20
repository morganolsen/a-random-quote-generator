/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Lists the different quotes, with up to 5 attributes
 * @quote {string} The actual quote
 * @source {string} The person who gave the quote
 * @tags {array} (optional): Categories of the quote
 * @citation {string} (optional): Where the quote originated
 * @year {string} (optional): The year the quote originated 
***/

const quotes = [
  {
    quote: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    source: 'Jean-Paul Sartre',
    tags: ['Politics', 'History'],
    citation: 'Characterizations of Existentialism',
    year: '1944',
  },
  {
    quote: 'Those who are free of resentful thoughts surely find peace.',
    source: 'Buddha',
    tags: ['Inspirational']
  },
  {
    quote: 'No one who lives in error is free.',
    source: 'Euripides',
    tags: ['Inspirational', 'Politics']
  },
  {
    quote: 'A ceiling is simply a floor from below.',
    source: 'Elon Musk',
    tags: ['Humor', 'Business'],
    citation: 'Twitter',
    year: '2017'
  },
  {
    quote: "Don't let the noise of others' opinions drown out your own inner voice.",
    source: 'Steve Jobs',
    tags: ['Opinion', 'Inspirational'],
    citation: 'Stanford University commencement speech',
    year: '2005'
  },
  {
    quote: 'Although the world is full of suffering, it is also full of the overcoming of it.',
    source: 'Helen Keller',
    tags: ['Historical']
  }
];

/**
 * Updates the background color of the website to a random color.
 * @returns {string} The RGB color of the new background
 */

 function randomBackgroundColor() {
   const red = getRandomNumber(256);
   const green = getRandomNumber(256);
   const blue = getRandomNumber(256);
   const rgb = `rgb(${red}, ${green}, ${blue})`;

   const body = document.querySelector('body');
   body.style.backgroundColor = rgb;

   return rgb;
 }


 /**
  * Retreives a random integer from 0 to (but not including) upper
  * 
  * @param {number} limit - The limit of the randomly generated number (1 above the max number generated)
  * @returns {number} - The generated random number
  */

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}


/**
 * Retreives a random quote from the array quotes
 * @returns {object} quote
 */

function getRandomQuote() {
  // Uses the amount of quotes in the array to make sure any new quotes will be included.
  const index = getRandomNumber(quotes.length);
  return quotes[index];
}



/**
 * Prints a random quote to the website.
 * @returns the full HJTML string displaying a random quote.
 */

function printQuote() {
  const quote = getRandomQuote();
  let html = '';
  html += `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;

  if(quote.citation){
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if(quote.year){
    html += `<span class="year">${quote.year}</span>`;
  }
  if(quote.tags){
    html += `<span style="float:left;">(Tags: ${quote.tags.join(', ')})</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 

  randomBackgroundColor();
  return html;
}

// Load a quote when the page loads:
printQuote();

// Load a new quote every 15 seconds.
setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);