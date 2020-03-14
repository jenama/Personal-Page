import React from "react";
import Fontawesome from '@fortawesome/react-fontawesome'

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [
                {
                 title: 'Hand-Me-Down',
                 imgUrl: '/images/handmedown.png',
                 description:'This project was done in a group of 4. We decided to build this app to promote sustainability in the fashion. We wanted to give people the chance to write a story on any fashion piece they owned using a QR code on the item.',
                 live: 'http://handmedown.herokuapp.com',
                 code: 'https://github.com/jenama/HandMeDown'
                },
                {
                    title: 'InnerCircle',
                    imgUrl: '/images/inner-circle.png',
                    description: 'This app was built was developed by a group of 3. We built this app to create a community of people who shared the same interest. The community is called a circle where people can post and meet other people.',
                    live: 'http://localhost:3001/' ,
                    code: 'https://github.com/jenama/inner-circle-app',
                },

                // {
                //     title: '',
                //     imgUrl: '',
                //     description: '',
                //     live: '',
                //     code: '',

                // }
            ]
        }
    }
  render() {
      const { projects} = this.state
      console.log('projects', projects)
    return (
    <div className="projects">
        <h2>Projects</h2>
        {projects.map(project => {
            return (
                <div>
                    
                    <h3>{project.title}</h3>
                    <img src={project.imgUrl} width='300px'/>
                    <p>{project.description}</p>
                    <a href={project.live}>live</a> {' '}
                    <a href={project.code}>code</a>
                </div>
            )
        })}
    
    </div>
    );
  }
}

export default Projects;
