import React, {
  Component
} from 'react';

export default class InputDisplay extends Component {

  constructor(props) {
    super(props);
    this.onInput = this.onInput.bind(this);
    this.state = {inputval:""};
  }
  onInput(e){
		var textVal = React.findDOMNode(this.refs.textval).value;
    this.setState({inputval:textVal});
	}
  render() {
    return ( <div>
               <div className="textfield">{this.state.inputval}</div>
               <input type="text" className="input-txt" ref="textval" onKeyPress={this.onInput}/>
            </div>);
  }

}
