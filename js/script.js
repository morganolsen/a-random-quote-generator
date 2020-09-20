/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    source: 'Jean-Paul Sartre',
    citation: 'Characterizations of Existentialism',
    year: '1944',
  },
  {
    quote: 'Those who are free of resentful thoughts surely find peace.',
    source: 'Buddha'
  },
  {
    quote: 'No one who lives in error is free.',
    source: 'Euripides'
  },
  {
    quote: 'A ceiling is simply a floor from below.',
    source: 'Elon Musk',
    citation: 'Twitter',
    year: '2017'
  },
  {
    quote: "Don't let the noise of others' opinions drown out your own inner voice.",
    source: 'Steve Jobs',
    citation: 'Stanford University commencement speech',
    year: '2005'
  },
  {
    quote: 'Although the world is full of suffering, it is also full of the overcoming of it.',
    source: 'Helen Keller'
  }
]

console.log(quotes);


/***
 * `getRandomQuote` function
***/

/**
 * Retreives a random quote from the array quotes
 * @returns {object} quote
 */

function getRandomQuote() {
  const randomNumber = Math.random();

  // Selects a random number between 0 and the highest possible index of quotes
  const index = Math.floor(randomNumber * quotes.length);
  return quotes[index];
}


/***
 * `printQuote` function
***/

/**
 * Prints a random quote to the website.
 * @returns the full HJTML string displaying a random quote.
 */

function printQuote() {
  const quote = getRandomQuote();
  let html = '';
  html += `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;

  if(quote.citation){
    html += `<span class="citation">${quote.citation}</span>`  
  }
  if(quote.year){
    html += `<span class="citation">${quote.year}</span>`  
  }
  html += `</p>`
  return html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);