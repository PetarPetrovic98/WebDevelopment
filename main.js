const crudws = new crudWebservice('http://localhost', 3001);
const audioEl = document.querySelector('#audioEl');
let audioIDs = {};
let playState = 0;

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const playBtn = document.querySelector('#play-btn');
const pbar = document.querySelector('#duration_slider');

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

//audiobooks contains all audiobooks and chapers
crudws.fetchData().then((audiobooks) => {
  document.querySelector('#track_image').src = audiobooks[0].coverImage;
  document.querySelector('#title').innerHTML = audiobooks[0].title;
  document.querySelector('#author').innerHTML = audiobooks[0].author;
  document.querySelector('#description').innerHTML = audiobooks[0].description;
});
crudws.fetchAudiotrack().then((chapers) => {
  audioIDs = chapers;
  //updateui
  audioEl.src = 'http://localhost:3001/audiotracks/604cbdd9d3efd82b44b93ab8';
  audioEl.load();
});

playBtn.addEventListener('click', (e) => {
  if (playState) audioEl.pause();
  else audioEl.play();
  playBtn.innerHTML = !playState ? 'Pause' : 'Play';
  playState = playState == 1 ? 0 : 1;
});

audioEl.addEventListener('timeupdate', () => {
  pbar.value = Math.floor(audioEl.currentTime);
  document.querySelector('.current-time').innerHTML = calculateTime(
    audioEl.currentTime
  );
});
