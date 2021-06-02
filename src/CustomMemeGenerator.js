import { useEffect, useState } from 'react';

export default function CustomMemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [select, setSelect] = useState('');
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://api.memegen.link/images/buzz.png');

  const [disabled, setDisabled] = useState(true);

  // Fetching array of images from URL to display in the select menu
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.memegen.link/templates/');
        const json = await response.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
      setDisabled(false);
    };
    fetchData();
  }, []);

  // Event handlers to get the values from the input fields
  const handleTopTextChange = (event) => setTopText(event.currentTarget.value);
  const handleBottomTextChange = (event) =>
    setBottomText(event.currentTarget.value);
  const handleSelectMenuOnChange = (event) =>
    setSelect(event.currentTarget.value);

  // Event handler to display the selected meme
  const handleMemeSleectionOnClick = () => {
    setUrl(
      `https://api.memegen.link/images/${select}/${topText}/${bottomText}.png`,
    );
  };

  // Function that handles download of the custom meme
  function downloadFunction(blob, filename) {
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.setAttribute('download', filename);
    document.body.appendChild(anchor);

    // Trigger the custom meme download on click
    anchor.click();

    // Clean
    window.URL.revokeObjectURL(anchor.href);
    document.body.removeChild(anchor);
  }

  // Download the custom meme using Blob and use a filename form the URL if no other is provided
  function downloadImage(URL, filename) {
    if (!filename) filename = URL.match(/\/([^/#?]+)[^/]*$/)[1];
    fetch(URL, {
      headers: new Headers({
        Origin: window.location.origin,
      }),
      mode: 'cors',
    })
      .then((response) => response.blob())
      .then((blob) => downloadFunction(blob, filename))
      .catch((e) => console.error(e));
  }

  return (
    <section>
      <h1>Custom Meme Generator</h1>
      <form>
        <div>
          <span>
            {/* Input field for the top text */}
            <label htmlFor="topLine">Enter top line text</label>
            <input
              type="text"
              id="topLine"
              placeholder="eg: to infinity"
              onChange={handleTopTextChange}
              value={topText}
            />
          </span>
          <span>
            {/* Input field for the bottom text */}
            <label htmlFor="bottomLine">Enter bottom line text</label>
            <input
              type="text"
              id="bottomLine"
              placeholder="eg: and beyond"
              onChange={handleBottomTextChange}
              value={bottomText}
            />
          </span>
        </div>

        {/* Going through an array of images and generating the dropdown menu for user to choose a meme template */}
        <label htmlFor="meme">Choose your meme</label>
        <select value={select} id="meme" onChange={handleSelectMenuOnChange}>
          <option>Please select</option>
          {data.map((objects) => (
            <option value={objects.id} key={objects.id}>
              {objects.name}
            </option>
          ))}
        </select>

        <div>
          {/* Generate meme button */}
          <button type="button" onClick={handleMemeSleectionOnClick}>
            Show Meme
          </button>

          {/* Download custom meme button*/}
          <button
            type="button"
            onClick={() => {
              downloadImage(
                `https://api.memegen.link/images/${select}/${topText}/${bottomText}.png`,
              );
            }}
            disabled={topText ? false : true}
          >
            Download Meme
          </button>
        </div>
        <img alt="Generated Meme" src={url} />
      </form>
    </section>
  );
}
