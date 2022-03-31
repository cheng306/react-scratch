'use strict';

const e = React.createElement;

function MyApp() {
  return (<h1>Hello, world!</h1>);
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    //use JS without babel
    // return e(
    //   'button',
    //   { className: "Class_in_JS", onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );

    //use JSX with babel
    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this LikeButton2';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }),  className: "class1" },
      'LikeButton2'
    );
  }
}

const FunctionalComponent = () => {
  return e(
    'button',
    { onClick: () => this.setState({ liked: true }),  className: "class1" },
    'LikeButton2'
  );
 };

const Welcome = function(props){
  return <p>Welcome Welcome</p>
}

const welcomeElement = <Welcome/>;

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(welcomeElement, domContainer);

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    console.log(domContainer);
    console.log(domContainer.dataset);
    console.log(domContainer.getAttribute('customAtt'));
    ReactDOM.render(
      e(LikeButton2, { commentID: commentID}),
      domContainer
    );
  });



