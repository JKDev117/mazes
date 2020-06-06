/* 22.2 Assignment */
/* 9. Find ALL the ways out of the maze   */

let maze4 = [
  [' ', ' '],
  [' ', 'e']
]

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let myBigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function calculateDirection(array){
    console.log('visited nodes: ')
    for(let i=0; i<array.length-1; i++){
        const x2_x1 = array[i+1][0] - array[i][0] //x2 - x1
        const y2_y1 = array[i+1][1] - array[i][1] //y2 - y1
      
        if(x2_x1 == 0 && y2_y1 > 0){
          console.log("R")
        } else if(x2_x1 > 0 && y2_y1 == 0){
          console.log("D")
        } else if(x2_x1 == 0 && y2_y1 < 0){
          console.log("L")
        } else if(x2_x1 < 0 && y2_y1 == 0){
          console.log("U")
        }
      }
}


function findMazeExit(maze, row=0, column=0, visited=[]){

        //base case
        if(maze[row][column]=='e'){
            console.log('maze:', maze)
            visited.push([row, column])
            calculateDirection(visited)
            console.log(`Exit found at row ${row} column ${column}`);
            return;
        } 
        
        //general case
        if(maze[row][column] == ' '){
            maze[row][column] = 'v';
            visited.push([row, column])
            
            //Right
            if(column < maze[0].length - 1){ 
                findMazeExit(maze, row, column + 1, visited)
            }
            
            //Down
            if(row < maze.length - 1){ 
                const D =findMazeExit(maze, row+1, column, visited)
            }
            
            //Up
            if(row > 0 && column !=maze[0].length-1){
                const U = findMazeExit(maze, row-1, column, visited)
            
            //Left
            if(column > 0){
                const L = findMazeExit(maze, row, column-1, visited)
            }
    
        }

        /*
        if(visited.length > 0){
            return visited
        } else {
            return false
        }
        */
    }

}



//findMazeExit([[]])
//console.log(findMazeExit([[]]))


//findMazeExit([[e]]) //base maze
//console.log(findMazeExit([['e']]))


//findMazeExit([[' ','e']])
//console.log(findMazeExit([[' ','e']]))


//findMazeExit([[' ',' ','e']])
//console.log(findMazeExit([[' ',' ','e']]))


//findMazeExit([[' ',' ',' ','e']])
//console.log(findMazeExit([[' ',' ',' ','e']]))


//findMazeExit(maze4)
//console.log(findMazeExit(maze4))

//findMazeExit(mySmallMaze)
console.log(findMazeExit(myBigMaze))