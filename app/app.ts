const url: string = "http://localhost:3000/cards";


const fetchMonster = async (url: string) => {
  const fetching = await fetch(url);
  const response = await fetching.json();
  return response;
};

//TODO: CREAR OBJETOS CON LAS CLASES Y LA API
//TODO: VER COMO CHUCHA COMPILAR CORRECTAMENTE MI ARCHIVO EN TS A JS

fetchMonster(url).then((data) => console.log({ data }));
