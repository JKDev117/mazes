//22.2 assignment Q9
//version: as if I was in the maze myself

let maze4 = [
    [' ', ' '],
    [' ', 'e']
]

let maze5 = [
    [' ',' ',' '],
    ['*',' ','*'],
    [' ',' ','e']
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
        const checkRight = column + 1 < maze[0].length && (maze[row][column+1]== ' ' || maze[row][column+1]== 'e');
        const checkDown = row + 1 < maze.length && (maze[row+1][column]== ' ' || maze[row+1][column]== 'e');
        const checkLeft = column - 1 > 0 && (maze[row][column-1]== ' ' || maze[row][column-1]== 'e');
        const checkUp = row - 1 > 0 && (maze[row-1][column]== ' ' || maze[row-1][column]== 'e');

        //base case
        if(maze[row][column]=='e'){
           visited.push([row, column])
           return findMazeExit(maze, 0, 0, visited)
        } 
        
        //general case
        if(maze[row][column]==' '){
            maze[row][column] = 'v';
            visited.push([row, column])
        } else if(row == 0 && column == 0 && maze[row][column]=='v' && (checkDown==true || checkRight==true)){
            visited.push([row, column])
        }
            
        //Right
        if(checkRight) { 
            return findMazeExit(maze, row, column + 1, visited)
        }
            
        //Down
        if(checkDown){ 
            return findMazeExit(maze, row+1, column, visited)
        }

        //Left
        if(checkLeft){
            return findMazeExit(maze, row, column-1, visited)
        }

        //Up
        if(checkUp){
            return findMazeExit(maze, row-1, column, visited)
        }

        console.log('Scotty, beam me up!')
        console.log(visited)
        return `Exit`

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
//console.log(findMazeExit(myBigMaze))


//findMazeExit(maze5)
console.log(findMazeExit(maze5))


