
module.exports = function towelSort (matrix) {
    if (matrix !== undefined) {
        matrix.map(function(elem, index) {
            index % 2 === 0 ? elem : elem.reverse();
        });
        return matrix.flat();
    }
    return [];
}
