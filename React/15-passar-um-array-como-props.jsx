const List = (props) => {
  { /* Altere o código abaixo desta linha */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* Altere o código acima desta linha */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Altere o código abaixo desta linha */ }
        <List tasks={["Comprar pão", "comprar leite"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["Pagar boletos", "comprar farinha", "comprar ovos"]}/>
        { /* Altere o código acima desta linha */ }
      </div>
    );
  }
};