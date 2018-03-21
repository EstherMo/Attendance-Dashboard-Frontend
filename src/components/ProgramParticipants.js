import React, { Component } from 'react';
import PieChart from './PieChart';

class ProgramParticipants extends Component {
    state = {}
    render() { 
        let programName = [];
        let firstName; 
        let lastName;
        let totalParticipants = 0;
        return ( 
            <div>
                {this.props.programParticipants.map((allParticipantsinPrograms, index) => {
                    for (var programKey in allParticipantsinPrograms) {
                        if (allParticipantsinPrograms.hasOwnProperty(programKey)) {
                            let participantsPerProgram = allParticipantsinPrograms[programKey];
                            totalParticipants = totalParticipants + participantsPerProgram.length;
            
                            // this.props.programs.map((program,index)=> {
                            //     if(program.id = programKey){
                            //         programName.push(program.eventName);
                            //     }
                            // })
                            // return (<h2> {programName} </h2>)
                            var results = participantsPerProgram.map((eachParticipant, index) => {
                                    
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
                            <PieChart monthlyParticipants={totalParticipants} programs={this.props.programs.length}  />
                        </div>
                    )
                })}
            </div>
         )
    }
}
 
export default ProgramParticipants;