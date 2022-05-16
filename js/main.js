//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicture);


function getPicture() {

  const inputDate = document.querySelector('input').value;
  console.log(inputDate)

  fetch('https://api.nasa.gov/planetary/apod?api_key=hm9wgNee8qS4R21rraiWrICIuc9eSkoe9sScve6O&date=' + inputDate)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.media_type === 'video') {
        document.querySelector('iframe').classList.remove('hidden');
        document.querySelector('img').classList.add('hidden');
        document.querySelector('iframe').src = data.url;
      }
      else if (data.media_type === 'image') {
        document.querySelector('img').classList.remove('hidden');
        document.querySelector('iframe').classList.add('hidden');
        document.querySelector('img').src = data.url;
      }
      document.querySelector('h2').innerText = data.title.toUpperCase();
      document.querySelector('span').innerText = data.date;
      document.querySelector('h3').innerText = data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`);
    })
}
