
drawPyramid(5);

function drawPyramid(height) {
 
    for (var row = 0; row < height; row++) {

        
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; 
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

    
        let newNode = document.createElement('p');
        newNode.innerHTML = rowStr;
        document.getElementById('pyramid').appendChild(newNode);
    }
}