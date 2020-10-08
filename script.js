class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassedInMilliSeconds: 0
    }
    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
      if (!this.timer) {
        let startTime = Date.now();
        this.timer = setInterval(() => {
          const stopTime = Date.now();
          const timePassedInMilliSeconds = stopTime - startTime + this.state.timePassedInMilliSeconds;

          this.setState({
            timePassedInMilliSeconds,
          });

          startTime = stopTime;
        }, 250); // Executed every 250 millisecond
      }
    }

    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    }

    reset() {
      this.stop();
      this.setState({
        timePassedInMilliSeconds: 0
      })
    }

  render() {
    return (
      <div>
        <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
          {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button onClick={this.start} className="btn btn-outline-primary mr-2">
            start
          </button>
          <button onClick={this.stop} className="btn btn-outline-danger mr-2">
            stop
          </button>
          <button onClick={this.reset}className="btn btn-outline-warning">
            reset
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);
