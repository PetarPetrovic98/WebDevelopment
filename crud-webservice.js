class crudWebservice {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.audiobooks = {};
    this.chapters = {};
  }
  async fetchAudiobooks() {
    const response = await fetch(this.host + ':' + this.port + '/audiobooks/');
    const audiobooks = await response.json();
    return audiobooks;
  }
  async fetchChapters(audiobookID) {
    const response = await fetch(
      this.host + ':' + this.port + '/audiobooks/' + audiobookID + '/chapters'
    );
    const audiobooks = await response.json();
    return audiobooks;
  }
  async fetchAudiotrack(trackid) {
    const response = await fetch(
      this.host + ':' + this.port + '/audiotracks/' + trackid
    );
    const audiotrack = await response.json();
    return audiotrack;
  }
  fetchAudiotrack = () => {
    return new Promise((resolve, reject) => {
      this.fetchChapters('604ca3fe9bf4669047a3bbd3').then((chapters) => {
        //console.log('chapters', chapters);
        resolve(chapters.chapters);
      });
    });
  };

  fetchData = () => {
    return new Promise((resolve, reject) => {
      this.fetchAudiobooks().then((res) => {
        console.log('audiobooks:', res);
        this.audiobooks = res.data;
        for (let i = 0; i < this.audiobooks.length; i++) {
          this.fetchChapters(this.audiobooks[i]._id).then((chapters) => {
            this.audiobooks[i].chapters = chapters.chapters;
          });
        }
        resolve(this.audiobooks);
      });
    });
  };
}
