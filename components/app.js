import React from "react";
import Key from './key/key';
import Screen from './screen/screen';
import '../public/styles/machine.css';

// need to import entire contents of audio folder to enable wav playback :( ?
import clapCrushed from '../public/audio/clap-crushed.wav';
import clapTape from '../public/audio/clap-tape.wav';
import cowbell808 from '../public/audio/cowbell-808.wav';
import hihat808 from '../public/audio/hihat-808.wav';
import hihatAcoustic from '../public/audio/hihat-acoustic02.wav';
import kickAcoustic from '../public/audio/kick-acoustic02.wav';
import kickDry from '../public/audio/kick-dry.wav';
import percMetal from '../public/audio/perc-metal.wav';
import tomAcoustic from '../public/audio/tom-acoustic02.wav';

export default class App extends React.Component {

  render() {
    return <div className='machine__container'>
      <Screen/>
      <div className='machine__keypad'>
        <Key letter="Q" sound={clapCrushed}/>
        <Key letter="W" sound={clapTape}/>
        <Key letter="E" sound={cowbell808}/>
        <Key letter="A" sound={hihat808}/>
        <Key letter="S" sound={hihatAcoustic}/>
        <Key letter="D" sound={kickAcoustic}/>
        <Key letter="Z" sound={kickDry}/>
        <Key letter="X" sound={percMetal}/>
        <Key letter="C" sound={tomAcoustic}/>
      </div>
    </div>;
  }
}
