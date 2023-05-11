import React, { Component } from 'react';
import Messages from './Messages';
import Input from './Input';
import Sidebar from './Sidebar';
import "./Chat.css";


class Chat extends Component {

  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("PnFavtIMvMsf69yV", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });

    const room = this.drone.subscribe("observable-room");

    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  randomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }

  randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFA).toString(16);
  }

  state = {
    messages: [
      
    ],
    member: {
      username: this.props.username,
      color: this.randomColor()
    }
  }

onSendMessage = (message) => {
  if (message.length===0) return;
  this.drone.publish({
    room: "observable-room",
    message
  });
}



  render() {
    return (
      <div className="App">
      
      
      <Messages
        messages={this.state.messages}
        currentMember={this.state.member}
      />
      <Input onSendMessage={this.onSendMessage}/>
    </div>
    );
  }
}

export default Chat;
