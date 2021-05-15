/* import './styles.css';
import React, { useEffect, useState } from 'react';

function MemeGenerator(props) {

   const [loading, setLoading] = useState('false');
   const [topText, setTopText] = useState('');
   const [bottomText, setBottomText] = useState('');
   const [allMemeImgs, setAllMemeImgs] = useState([]);
   const [randomImg, setRandomImg] = useState('https://api.memegen.link/images/buzz.png')
  };

  useEffect((props) => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((content) =>
        this.setState({
          allMemeImgs: content,
          loading: false,
        }),
      );

      console.log('mounted!')
  }, []);


  const handleChangeTop = (event) => {
    setTopText(event.target.value);
  };

  const handleChangeBottom = (event) => {
    setBottomText(event.target.value);
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const rand =
      allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].blank;
    this.setState({
      randomImg: rand,
    });
  };

    return (
      <section>
        <h1 className="boxTitle">Meme Generator</h1>
        <form className="meme-form" onSubmit={handleSubmit}>
          <input
            placeholder="Enter Text"
            type="text"
            value={topText}
            name="topText"
            onChange={handleChangeTop}
          />
          <input
            placeholder="Enter Text"
            type="text"
            value={bottomText}
            name="bottomText"
            onChange={handleChangeBottom}
          />
          <button>Generate</button>
        </form>

        <br />
        <div className="meme">
          <img src={randomImg} alt="meme" className="imageDisplay" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </section>
    );

}

export default MemeGenerator;
*/
