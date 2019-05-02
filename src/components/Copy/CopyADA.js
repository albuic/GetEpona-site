import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
class CopyADA extends React.Component {
  state = {
    value: 'DdzFFzCqrht2CsRqSYPvR9Mw3L2sPMgGx44CHDjLxSuQzrnw628AXiB42uiGJ1sPxTKW6352ZGBS9RG3RtzeDF6wWbTu2n6jEvF9CMdZ',
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
ReactDOM.render(<CopyADA />, appRoot);

export default CopyADA
