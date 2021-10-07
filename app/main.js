
class Message {
  constructor(content, authorId) {
    this.content = content;
    this.authorId = authorId;
    this.timestamp = Date.now();
  }
}

function genRandomMs () {
  return Math.floor(Math.random() * 1e4)*2;
}

function prettifyDate() {
  const options = {hours: '2-digits', minute: '2-digits'};
  return new Date(timestamp).toLocaleDateString('en-US', options);
}