import { Component} from "react";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      render() {
        return <div>
            <h1>Please leave feedback</h1>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <p><span>Good:</span></p>
        <p><span>Neutral</span></p>
        <p><span>Bad:</span></p>
        </div>
      }
}
export default Feedback;