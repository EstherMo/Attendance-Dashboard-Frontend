import React, { Component } from "react";
import Program from "./Program";
import ProgramParticipants from "./ProgramParticipants";
import axios from "axios";
import BarChart from './BarChart';

class Programs extends Component {
  constructor() {
    super();
    this.state = {
      programs: [],
      programParticipants: [],
      totalParticipants: 0
    };

  }

  getPrograms = () => {
    axios.get("/programs").then(response => {
      const programs = response.data;
      this.setState({ programs: programs });
      //console.log("get programs", this.state);
    });
  };
  getProgramParticipants = () => {
    for (let i = 1; i < 5; i++) {
      axios.get(`/participants/program/${i}`).then(response => {
        const newParticipants = response.data;
        const programParticipants = [...this.state.programParticipants];
        const participant = { [i]: newParticipants };
        programParticipants.push(participant);
        this.setState({ programParticipants: programParticipants });
      });
    }
  };
  componentDidMount() {
    this.getPrograms();
    this.getProgramParticipants();
  }

  //this method will be sent to programParticipants component in order to change the state
  setTotal = (total) => {
    this.setState({
        totalParticipants: total
    });
}
  render() {
    return (
      <div>
        <div className="programs-wrapper">
        <h2 className="headers"> Upcoming Programs </h2>

        {this.state.programs.map((program, index) => {
          return <Program key={index} program={program.eventName} />;
        })}
        </div>
        <div className="participants-wrapper">
        <h2 className="headers"> Who Was Here This Month: </h2>

        <ProgramParticipants
          programParticipants={this.state.programParticipants}
          programs={this.state.programs}
          action={this.setTotal}
        />
        </div>
        <BarChart monthlyParticipants={this.state.totalParticipants} programs={this.state.programs.length}  />
      </div>
    );
  }
}

export default Programs;
