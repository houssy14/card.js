
import React from "react";
import './App.css';


class App extends React.Component {
  state = {
    person: {
      fullName: "Houssem Touhami",
      bio: "It seems like you meant to type Development is the process of creating, improving, or enhancing something. It is a broad term that can be used in various contexts, such as software development, product development, personal development, economic development, and more",
      imgSrc:
        "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/359814263_659932206169491_7849600624901327022_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=-dAHVRnVX8sAX-NJciG&_nc_ht=scontent.ftun4-2.fna&oh=00_AfCK5Z4svkacX--hv4A5Wt40BzbzQ10voLOepZqdVVF9PQ&oe=64D1F83E",
      profession: "developer",
    },
    shows: false,
  };

  toggle = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div>
        <button className="btn"onClick={this.toggle}>Toggle</button>
        {this.state.shows === true ? (
          <>
            <h1>{this.state.person.fullName}</h1>
            <h3>{this.state.person.bio}</h3>
            <img src={this.state.person.imgSrc} />
            <h5>{this.state.person.profession}</h5>
          </>
        ) : null}
      </div>
    );
  }
}

export default App;


