// import useDownloader from 'react-use-downloader';

/*
// const fs = require('fs');

const DownloadImage = (url) => {
  fetch(url).then((response) => {
    response.blob().then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'meme.png';
      a.click();
    });
    //window.location.href = response.url;
  });
};


export default DownloadImage;
*/
/*
export default function App(image) {
  const handleDownload = async (event) => {
    event.preventDefault();
    const response = await fetch(image);
    if (response.status === 200) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'image';
      document.body.appendChild(link);
      link.click();
      link.remove();
      return { success: true };
    }
  };
}
*/
