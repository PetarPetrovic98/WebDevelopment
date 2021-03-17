const crudws = new crudWebservice('http://localhost', 3001);
const audioEl = document.querySelector('#audioEl');
let audioIDs = {};
let playState = 0;
let current = 0;
let total = 0;
let currentVolume = 50;

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const playBtn = document.querySelector('#play-btn');
const currentTrack = document.querySelector('.current-track');
const totalTracks = document.querySelector('.total-track');
const pbar = document.querySelector('#duration_slider');
const volumeSlider = document.querySelector('#volume-slider');
const currentVolumeEl = document.querySelector('#current-volume');
const totalTrackDuration = document.querySelector('.total-duration');

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

renderInfo = () => {
  //audiobooks contains all audiobooks and chapers
  crudws.fetchData().then((audiobooks) => {
    console.log('ad', audiobooks);
    total = audiobooks.length;
    document.querySelector('#track_image').src = audiobooks[current].coverImage;
    document.querySelector('#title').innerHTML = audiobooks[current].title;
    document.querySelector('#author').innerHTML = audiobooks[current].author;
    currentTrack.innerHTML = current + 1;
    totalTracks.innerHTML = audiobooks.length;
    document.querySelector('#description').innerHTML =
      audiobooks[current].description;
    currentVolumeEl.innerHTML = currentVolume;
    volumeSlider.value = currentVolume;
    console.log('abid', audiobooks[current].chapters[0].audiotrackID);
    audioEl.src = getAudioURI(
      audiobooks[current].chapters[0].audiotrackID
    );
    audioEl.volume = currentVolume/100;
    audioEl.load();
  });
};

resetPlayState = () => {
  playState = 0;
  playBtn.innerHTML = 'Play';
};
getAudioURI = (audiotrackID) => {
    //console.log('uri', 'http://localhost:3001/audiotracks/' + audiotrackID);
    return 'http://localhost:3001/audiotracks/' + audiotrackID;
  };

playBtn.addEventListener('click', (e) => {
  if (playState) audioEl.pause();
  else audioEl.play();
  playBtn.innerHTML = !playState ? 'Pause' : 'Play';
  playState = playState == 1 ? 0 : 1;
});

nextBtn.addEventListener('click', (e) => {
  if (current < total) {
    if (current === total - 1) {
      current = 0;
      renderInfo();
    } else {
      current++;
      renderInfo();
    }
  }
  resetPlayState();
});
prevBtn.addEventListener('click', (e) => {
  if (current === 0) {
    current = total - 1;
    renderInfo();
  } else {
    current--;
    renderInfo();
  }
  resetPlayState();
});

audioEl.addEventListener('timeupdate', () => {
  pbar.value = Math.floor(audioEl.currentTime);
  document.querySelector('.current-time').innerHTML = calculateTime(
    audioEl.currentTime
  );
});

audioEl.addEventListener('loadedmetadata', (e) => {
  console.log('metadata loaded');

  totalTrackDuration.innerHTML =
    audioEl.duration === Infinity ? '0:00' : calculateTime(audioEl.duration);
});

audioEl.addEventListener('canplay', (e) => {
  totalTrackDuration.innerHTML =
    audioEl.duration === Infinity ? '0:00' : calculateTime(audioEl.duration);
});

volumeSlider.addEventListener('change', (e) => {
  console.log(e.target.value);
  currentVolumeEl.innerHTML = e.target.value;
  audioEl.volume = e.target.value / 100;
});

//ENTRY POINT
renderInfo();
/* const chData = {
  '604ca3fe9bf4669047a3bbd3': [
    {
      _id: '604ca62d9bf4669047a3bbd4',
      title: 'Preface To The Seventh Edition',
      reader: 'Xiaoyan Arrowsmith',
      duration: '00:02:04',
      audiobookID: '604ca3fe9bf4669047a3bbd3',
      audiotrackID: '604cb9d30b825050b4d2c75b',
      index: '0',
    },
    {
      _id: '604ca6f19bf4669047a3bbd7',
      title: 'Book I - The Boy Poet I.his Ancestors',
      reader: 'istDG',
      duration: '00:17:17',
      audiobookID: '604ca3fe9bf4669047a3bbd3',
      index: '1',
      audiotrackID: '604cbcf7d3efd82b44b93a6b',
    },
  ],
  '604cad639bf4669047a3bbd8': [
    {
      _id: '604cadcc9bf4669047a3bbd9',
      title: 'Contemplations',
      reader: 'Anne Bradstreet',
      duration: '00:02:50',
      audiobookID: '604cad639bf4669047a3bbd8',
      index: '0',
      audiotrackID: '604cbdc8d3efd82b44b93aac',
    },
    {
      _id: '604cadf29bf4669047a3bbda',
      audiobookID: '604cad639bf4669047a3bbd8',
      audiotrackID: '604cbdd9d3efd82b44b93ab8',
      duration: '00:02:31',
      reader: 'Francis Scott Key',
      title: 'The Star-Spangled Banner',
      index: '1',
    },
  ],
};

console.log('export', chData);
console.log('ch', chData['604ca3fe9bf4669047a3bbd3']);
 */
