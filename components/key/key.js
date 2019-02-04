import React from 'react';
import '../../public/styles/key.css';

class Key extends React.Component {
  state = {
    lightup: false
  };
  playKey = () => {
    const audio = new Audio(this.props.sound);
    audio.type = 'audio/wav';
    audio.play();
  };
  lightOn = () => {
    this.setState(() => ({lightup: true}));
    this.playKey();
  };
  lightOff = () => {
    this.setState(() => ({lightup: false}));
  };
  keydown = (e) => {if (e.key === this.props.letter.toLowerCase()) this.lightOn();}
  keyup = () => this.lightOff();
  componentDidMount() {
    document.addEventListener('keydown', this.keydown);
    document.addEventListener('keyup', this.keyup);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown);
    document.removeEventListener('keyup', this.keyup);
  }
  render() {
    return (<div className='key__container'>
      <button className={`key__button ${this.state.lightup && 'key__button--lit'}`} onMouseDown={this.lightOn} onMouseUp={this.lightOff} onKeyPress={this.keyDown}>{this.props.letter}</button>
      </div>
    )
  }
}

export default Key;
