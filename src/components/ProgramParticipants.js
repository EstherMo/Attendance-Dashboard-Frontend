import React, { Component } from 'react';

class ProgramParticipants extends Component {
    state = {}
    render() { 
        let programName;
        let firstName; 
        let lastName;
        return ( 
            <div>
                {this.props.programParticipants.map((allParticipantsinPrograms, index) => {
                    for (var programKey in allParticipantsinPrograms) {
                        if (allParticipantsinPrograms.hasOwnProperty(programKey)) {
                            let participantsPerProgram = allParticipantsinPrograms[programKey];
                            //return (<h2> program name </h2>)
                            var results = participantsPerProgram.map((eachParticipant, index) => {
                                    console.log("each participant", eachParticipant)
                                    //programName = "program Name";
                                    firstName = eachParticipant.firstName;
                                    lastName = eachParticipant.lastName;
                                    return (
                                        <div key={index}>
                                        <h4>
                                        {firstName + " " + lastName}
                                        </h4>
                                    </div>
                                    )
                                   
                            })
                        } else {
                            return null;
                        }
                        
                    }
                    return(
                        <div>
                            {results}
                        </div>
                    )
                })}
            </div>
         )
    }
}
 
export default ProgramParticipants;