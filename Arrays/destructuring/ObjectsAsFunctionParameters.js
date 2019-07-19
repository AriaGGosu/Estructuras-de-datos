// pass an Objects as a Function's Parameters

const profileUpdate = ({name, age , nationality, location}) => {
    let nombre = name;
    let edad = age;
    let nacionalidad = nationality;
    let lugar = location;

    console.log(nombre,edad,nacionalidad,lugar);

}

const newProfile = { 
    name:"hector", 
    age :12 , 
    nationality: "chilena", 
    location: "Santiago"
};

profileUpdate(newProfile);ss