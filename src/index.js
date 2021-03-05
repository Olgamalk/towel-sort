
module.exports = function towelSort (matrix) {
    matrix.map(function(elem, index) {
        index % 2 === 0 ? elem : elem.reverse();
    });
    return [].concat(...matrix);
}
