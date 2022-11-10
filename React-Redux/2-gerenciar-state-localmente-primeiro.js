class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Adicione os métodos handleChange() e submitMessage() aqui
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }


  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Exiba um elemento input, um button e um ul a partir desta linha */ }
    <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
        { /* Altere o código acima desta linha */ }
      </div>
    );
  }
};