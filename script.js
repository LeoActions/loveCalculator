function love() {
  var name1 = document.getElementById('NameOne').value;
  var name2 = document.getElementById('NameTwo').value;

  var random = Math.floor(Math.random() * 100);
  window.localStorage.setItem('items', JSON.stringify({ score: random }));

  if (name1.length <= 2) {
    alert('Enter at least 3 character');
  } else if (name2.length <= 2) {
    alert('Enter at least 3 character');
  } else if (random <= 40) {
    window.location.assign('/html/low.html');
    // document.getElementById('statement').innerHTML = 'Bad Relationship';
  } else if (random <= 41 || random <= 80) {
    window.location.assign('/html/mid.html');
    // document.getElementById('statement').innerHTML = 'Good Relationship';
  } else {
    window.location.assign('/html/high.html');
    // document.getElementById('statement').innerHTML = 'Perfect Relationship';
  }
}

function love2() {
  window.location.assign('/index.html');
}
