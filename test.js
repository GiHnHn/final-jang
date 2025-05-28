// test.js
const { YoutubeTranscript } = require('./dist/index.js');

(async () => {
  try {
    const t = await YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=qWbHSOplcvY', { lang: 'ko' });
    console.log(t);
  } catch (e) {
    console.error(e);
  }
})();