const firstName = "Basit";
const lastName = "Hussain";

const fullName = firstName + " " + lastName;
const fullNameWithTemplateString = `Hello, This is ${firstName} ${lastName}`;
const fullNameWithConcat = firstName.concat(" ", lastName);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf("b"));
console.log(fullName.lastIndexOf("s"));
console.log("Hello this is -".replace("Hello", "Hi"));
console.log("Hello this is -".replaceAll("Hello", "Hi"));
console.log("course".slice(2, ));
