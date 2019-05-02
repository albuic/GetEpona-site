import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
class CopyREP extends React.Component {
  state = {
    value: '0x75d60297fc0b42492a3d99700db770b547c74617',
    copied: false,
  };
 
  render() {
    return (
      <div>
        {/* <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} /> */}
 
        {/* <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard> */}
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy</button>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}
 
const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<CopyREP />, appRoot);

export default CopyREP
