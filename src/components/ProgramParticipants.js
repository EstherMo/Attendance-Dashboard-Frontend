import React, { Component } from "react";

class ProgramParticipants extends Component {
  constructor() {
    super();
    this.state = {
      totalParticipants: 0
    };
  }

  setMainTotal() {
    this.props.action(this.state.totalParticipants);
  }

  componentDidMount = () => {
    this.setState({ totalParticipants: 75 }, function() {
      this.setMainTotal();
    });
  };

  render() {
    let total;
    let programName = [];
    return (
      <div>
        {this.props.programParticipants.map(
          (allParticipantsinPrograms, index) => {
            for (var programKey in allParticipantsinPrograms) {
              if (allParticipantsinPrograms.hasOwnProperty(programKey)) {
                let participantsPerProgram = allParticipantsinPrograms[programKey];
                total = this.state.totalParticipants + participantsPerProgram.length;
                // push program names to an array-- not used yet
                // programName = this.props.programs.map((program,index)=> {
                //     if(program.id = programKey){
                //         programName.push(program.eventName);
                //         console.log("program",program);
                //     }
                // })
                var results = participantsPerProgram.map(
                  (eachParticipant, index) => {
                    return (
                      <div key={index} className="text">
                        <h4> ✅ {eachParticipant.firstName + " " + eachParticipant.lastName}</h4>
                      </div>
                    );
                  }
                );
              } else {
                return null;
              }
            }
            return <div key={index}>{results}</div>;
          }
        )}
      </div>
    );
  }
}

export default ProgramParticipants;
