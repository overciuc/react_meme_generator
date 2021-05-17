/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import {
  Button,
  ButtonDiv,
  Div,
  Form,
  H1,
  Input,
  Label,
  MemeImage,
  Section,
  Select,
  Span,
} from './elements';

export default function CustomMemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [select, setSelect] = useState('');
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://api.memegen.link/images/buzz.png');

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
    <Section>
      <H1>Custom Meme Generator</H1>
      <Form>
        <Div>
          <Span>
            {/* Input field for the top text */}
            <Label htmlFor="topLine">Enter top line text</Label>
            <Input
              type="text"
              id="topLine"
              placeholder="eg: to infinity"
              onChange={handleTopTextChange}
              value={topText}
            />
          </Span>
          <Span>
            {/* Input field for the bottom text */}
            <Label htmlFor="bottomLine">Enter bottom line text</Label>
            <Input
              type="text"
              id="bottomLine"
              placeholder="eg: and beyond"
              onChange={handleBottomTextChange}
              value={bottomText}
            />
          </Span>
        </Div>

        {/* Going through an array of images and generating the dropdown menu for user to choose a meme template */}
        <Label htmlFor="meme">Choose your meme</Label>
        <Select value={select} id="meme" onChange={handleSelectMenuOnChange}>
          <option>Please select</option>
          {data.map((objects) => (
            <option value={objects.id} key={objects.id}>
              {objects.name}
            </option>
          ))}
        </Select>

        <ButtonDiv>
          {/* Generate meme button */}
          <Button type="button" onClick={handleMemeSleectionOnClick}>
            Show Meme
          </Button>

          {/* Download custom meme button*/}
          <Button
            type="button"
            onClick={() => {
              downloadImage(
                `https://api.memegen.link/images/${select}/${topText}/${bottomText}.png`,
              );
            }}
          >
            Download Meme
          </Button>
        </ButtonDiv>
        <MemeImage alt="Generated Meme" src={url} />
      </Form>
    </Section>
  );
}
