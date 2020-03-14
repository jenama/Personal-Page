import React from "react";
// import Axios from "axios";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      img:"https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-0/p206x206/555769_10151266620092927_706690383_n.jpg?_nc_cat=103&_nc_sid=dd7718&_nc_ohc=1pejw86iMjcAX-MCFOs&_nc_ht=scontent-bos3-1.xx&_nc_tp=6&oh=221d4626126cfb17d3caa810051066cd&oe=5E969A2D",
        //   greetings: [
        //     { language: "Hello Welcome" },
     //     { language: "Salut Bienvenue" },
        //     { language: "Hola Bienvenido" },
        //     { language: "Merhaba Hoşgeldiniz" },
        //     { language: "Nǐ hǎo huānyíng guānglín" },
        //     { language: "Namaste aapaka svaagat hai" }
        //   ]
    }
  }

  render() {
    // const { greetings } = this.state;
    return (
      <div className="home-page">
        {/* <h1 className='name'>Johanne Enama</h1> */}
        {/* {console.log("hey", greetings)} */}
        <div className='hello-container'>
          {/* <div className="greetings">
            {greetings.map(greeting => {
              return <div className="welcome-bubble">{greeting.language}</div>;
            })}
          </div> */}
          {/* <img className='image' src= {img} alt='me'/> */}
          
        </div>
      </div>
    );
  }
}

export default Homepage;
