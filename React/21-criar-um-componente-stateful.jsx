class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Altere apenas o código abaixo desta linha
    this.state = {
      firstName : "Name"
    }
    // Altere apenas o código acima desta linha
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};