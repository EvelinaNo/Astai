export const Daiktas = ({ name, isPacked }) => {
  return (
    <li> 
      {name} {isPacked ? "✔" : "❌"}  
    </li>

  );
};
