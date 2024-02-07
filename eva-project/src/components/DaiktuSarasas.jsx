import { Daiktas } from './Daiktas';

export const DaiktuSarasas = () => {
  const daiktai = [
    {
      id: 1,
      name: 'lupdazis',
      isPacked: false,
    },
    {
      id: 2,
      name: 'slepetes',
      isPacked: true,
    },
    {
      id: 3,
      name: 'maudymukas',
      isPacked: false,
    },
  ];

  return (
    <>
      {daiktai.map((daiktas) => (
        <Daiktas key={daiktas.id} name={daiktas.name} isPacked={daiktas.isPacked}/>
      ))}
     </>
  );
};
