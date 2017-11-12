import * as React from 'react';
import { PureComponent } from 'react';
import Wavesurfer from '../../src/react-wavesurfer';
import Timeline from '../../src/plugins/timeline';

export default class TimelineExample extends PureComponent {
  state: {
    audioFile: string;
    playing: boolean;
  };

  constructor(props) {
    super(props);

    this.state = {
      audioFile: '../resources/demo.wav',
      playing: false
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    const timelineOptions = {
      timeInterval: 0.5,
      height: 30,
      primaryFontColor: '#00f',
      primaryColor: '#00f'
    };
    return (
      <div className="example col-xs-12">
        <h3>Timeline</h3>
        <Wavesurfer
          audioFile={this.state.audioFile}
          playing={this.state.playing}
        >
        {ws => (
          <Timeline
            wavesurfer={ws}
            options={timelineOptions}
          />
        )}
        </Wavesurfer>
      </div>
    );
  }
}