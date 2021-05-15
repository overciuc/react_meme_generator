import './styles.css';
// import handleDownload from 'MemeDownload.js';
import React from 'react';

class MemeGenerator extends React.Component {
  state = {
    loading: false,
    topText: '',
    bottomText: '',
    allMemeImgs: [],
    randomImg: 'https://api.memegen.link/images/buzz.png',
  };

  imageSelector(props) {}

  componentDidMount(props) {
    this.setState({
      loading: true,
    });

    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((content) =>
        this.setState({
          allMemeImgs: content,
          loading: false,
        }),
      );
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
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

  render() {
    return (
      <section className="box">
        <h1 className="boxTitle">Meme Generator</h1>
        <form className="meme-form">
          <div>
            <label>Top Text</label>
            <input
              placeholder="Enter Text"
              type="text"
              value={this.state.topText}
              name="topText"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Bottom Text</label>
            <input
              placeholder="Enter Text"
              type="text"
              value={this.state.bottomText}
              name="bottomText"
              onChange={this.handleChange}
            />
          </div>
        </form>

        <div className="div_button">
          <button onClick={this.handleSubmit} className="margin-right">
            Random Image
          </button>
          <button>Download the file</button>
        </div>

        <br />
        <div className="meme">
          <img className="imageDisplay" src={this.state.randomImg} alt="meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </section>
    );
  }
}

export default MemeGenerator;
