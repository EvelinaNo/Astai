import { useState } from 'react';
import { people } from './studentai';


export const MyTeam = () => {
  const [myTeam, setMyTeam] = useState([]);

const addMemberToMyTeam = (teamMember) => {
setMyTeam([...myTeam, teamMember])
}
  return (
    <>
      {people.map((person) => {
        return <button onClick={() =>addMemberToMyTeam(person)} key={person.Id}>Add {person.name}</button>
      })}
      <div>Mano komanda</div>
      <ul>
      {myTeam.map(teamMember => <li key={teamMember.Id}>{teamMember.name} {teamMember.age}</li>)}
      </ul>
    </>
  );
};
