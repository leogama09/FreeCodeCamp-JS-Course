let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Altere esta linha
let result = hello.replace(wsRegex, ""); // Altere esta linha