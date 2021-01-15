const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Returns a Random Integer between range
Math.randInt = function(min, max) { 
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// Returns a Random Float between range
Math.randFloat = function(min, max) {
    return Math.random() * (max - min + 1) + min;
}

// Returns Cosecant of n
Math.cosec = function(n) {
    return 1 / this.sin(n);
}

// Returns Secant of n
Math.sec = function(n) {
    return 1 / this.cos(n)
}

// Returns Cotangent of n
Math.cotan = function(n) {
    return 1 / this.tan(n);
}
