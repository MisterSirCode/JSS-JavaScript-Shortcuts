Math.prototype.randWhole = function(min, max) { 
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

Math.prototype.rand = function(min, max) {
    return Math.random() * (max - min + 1) + min;
}
