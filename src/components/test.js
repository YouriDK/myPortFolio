import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 100,
    };
  }

  onClick() {
    this.state.like === 100 ? 101 : 100;
    cx.bind()
  }
  render() {
    return (
      <>
        <button onClick={this.onClick()}>
          <h2>
            Like | <span>{this.state.like}</span>
          </h2>
        </button>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
