export default function playGuitar() {
  return "Playing guitar";
};

export const shredding = () => {
  return "Shredding some licks";
};

export const plucking = () => {
  return "Plucking the strings";
};


//every module file can have one default export
//export default playGuitar;

//can also export all other functions
//export {shredding, plucking};

//functions can also be exported inline, as above