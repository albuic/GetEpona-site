import React from 'react'
import ReactDOM from 'react-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import copy from '../../assets/images/copy_500px.png'
 
class CopyBTC extends React.Component {
  state = {
    value: '1LrufiuFTzn2ZzKsgdPH1K1AKZDenCeYrQ',
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
          <img src={copy} alt="copy" width= "16px" height="16px"/>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}
 
// const appRoot = document.createElement('div');
// document.body.appendChild(appRoot);
// ReactDOM.render(<CopyBTC />, appRoot);

export default CopyBTC