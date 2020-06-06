//22.2 assignment Q9

let baseMaze = [['e']]

let maze1 = [[' ', 'e']]

let maze2 = [[' ', ' ','e']]

let maze3 = [[' ',' ',' ','e']]

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


function findMazeExit(maze, row=0, column=0, path=[]){
        
    if(maze[row][column]=='e'){
        console.log(`Exit found at row ${row} column ${column}`);
        console.log(maze)
        console.log(path)
        return path
    }

    if(maze[row][column]==' '){
        maze[row][column]='v'
        
        //R
        if(column < maze[0].length-1){
            findMazeExit(maze, row, column+1, [...path, 'R'])
        }
        
        //D
        if(row < maze.length-1){
            findMazeExit(maze, row+1, column, [...path, 'D'])
        }

        //L
        if(column > 0){
            findMazeExit(maze, row, column-1, [...path, 'L'])
        }   

        //U
        if(row > 0){
            findMazeExit(maze, row-1, column, [...path, 'U'])
        }

        maze[row][column]=' '
    }

}
  
  

findMazeExit(myBigMaze)





