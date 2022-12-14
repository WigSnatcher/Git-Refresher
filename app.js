<<<<<<< HEAD
const playersList = 
[
  {
    name: "Guil",
    score: 50,
    id:1
  },
  {
    name: "Treasure",
    score: 85,
    id:2
  },
  {
    name: "Jabari",
    score: 95,
    id:3
  },
  {
    name: "James",
    score: 80,
    id:4
  }
]
const Header = (props) => 
//console.log(props);
<header>
  <h1>
    {props.title}
  </h1>
  <span className = 'stats'>Players: {props.totalPlayers}</span>
</header>;

/*const Counter = (props) =>
<div className = "counter">
    <button className = "counter-action decrement"> - </button>
    <span className = "counter-score">{props.score}</span>
    <button className = "counter-action increment"> + </button>
  </div>*/

class Counter extends React.Component{
  
    state = {
      score: 0
    };
  
    incrementScore() 
    {
      this.setState
      (prevState => {
        return{
          score: prevState.score += 1
        }
       
      });
    }

    decrementScore() 
    {
      this.setState
      (prevState =>{
        return{
          score: prevState.score -= 1
        }
      });
    }
  render()
  {
    return(
<div className = "counter">
    <button className = "counter-action decrement" onClick = {() => this.decrementScore()}> - </button>
    <span className = "counter-score">{this.state.score}</span>
    <button className = "counter-action increment" onClick = {() => this.incrementScore()}> + </button>
  </div>
    )
  };

}

const Player = (props) =>
<div className = "player">
  <span className = "player-name">
    {props.name}
  </span>
  <Counter />
</div>

const App = (props) =>
<div className = "score-board">
  <Header title = "ScoreBoard" totalPlayers = {props.initialPlayers.length}/>
  {/* JSX comment Player's list */}
  {props.initialPlayers.map (player => 
  <Player 
  name = {player.name} 
  key = {player.id}
  />
  )}
</div>

ReactDOM.render(
    <App initialPlayers = {playersList}/>,
    document.getElementById('root')
  );
=======
const Header = (props) => {
  return (
    <header>
      <span className="stats">Players: {props.totalPlayers}</span> 
      <h1>{ props.title }</h1>
    </header>
  );
}

class Counter extends React.Component {
  
  state = { 
    score: 100 
  };
  
  incrementScore() {
    this.setState( prevState => ({ 
      score: prevState.score + 1 
    }));
  }
  
  decrementScore() {
    this.setState( prevState => ({ 
      score: prevState.score - 1 
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
        <span className="counter-score"> {this.state.score} </span>
        <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
      </div>    
    );
  }
}
  
const Player= (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>???</button>
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

class App extends React.Component {
  
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
      },
      {
        name: "Treasure",
        id: 2,    
      },
      {
        name: "Ashley",
        id: 3,    
      },
      {
        name: "James",
        id: 4,    
      }
    ]
  };
        
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    });
  }
  
  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="My Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
        
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            removePlayer={ this.handleRemovePlayer }      
            name={player.name}
            id={player.id}
            key={player.id.toString()}
          />
        )}  
      </div>
    );
  }
}  

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 9c748bad7897acb9c726b4049ac44718ff47bd7c
