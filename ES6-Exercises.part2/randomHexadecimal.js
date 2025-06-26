//Write a JavaScript program to generate a random hexadecimal color code.
const randomHex= ()=>{
    const hexchars= "0123456789ABCDEF";
    let color="#";
    for(let i=0; i<6; i++){
        const randomIndex= Math.floor(Math.random()*hexDig.length);
        color += hexchars[randomIndex];
    }
    return color;

};
