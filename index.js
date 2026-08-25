const natural = require('natural'); // <-- natural npm package import

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

function getSentiment(text) {
  return analyzer.getSentiment(text.split(' '));
}

module.exports = { getSentiment };
