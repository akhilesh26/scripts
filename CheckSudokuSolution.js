/*
    This program is checking the solution of sudoku of 9*9.
    First sudoku solution is correct and second is not correct.
    Uncomment one of them and check program works fine or not.
*/

/*
// Correct solution
const sudoku = [
                    [8,3,5,4,1,6,9,2,7],
                    [2,9,6,8,5,7,4,3,1],
                    [4,1,7,2,9,3,6,5,8],
                    [5,6,9,1,3,4,7,8,2],
                    [1,2,3,6,7,8,5,4,9],
                    [7,4,8,5,2,9,1,6,3],
                    [6,5,2,7,8,1,3,9,4],
                    [9,8,1,3,4,5,2,7,6],
                    [3,7,4,9,6,2,8,1,5]
                ]

*/


// Correct solution
const sudoku = [
                    [8,3,5,4,1,6,9,2,7],
                    [2,9,6,8,5,7,4,3,1],
                    [4,1,7,2,9,3,6,5,8],
                    [5,6,9,1,3,4,7,8,2],
                    [1,2,3,6,7,8,5,4,9],
                    [7,4,8,5,2,9,1,6,3],
                    [6,5,2,7,8,1,3,9,4],
                    [9,8,1,3,4,5,2,7,6],
                    [3,7,4,9,6,2,8,1,1]
                ]



//  CountArray have friquency of 1-9 number in row or column or a 3*3 block 
const countArray = [0,0,0,0,0,0,0,0,0,0];

function clearCountArray(){

    for(let i = 1 ; i<=9;i++){
        countArray[i]=0;
    }
}

// checkRows function is insure that all row has unique number bw 1-9
function checkRows(){
    
    for(let i = 0; i<9; i++){
        clearCountArray();
        for(let j = 0; j<9; j++){
            if(countArray[sudoku[i][j]] == 1){
                console.log(`Row ${i+1} has duplicate element`);
                
                return false;     
            } else{
                countArray[sudoku[i][j]]=1;
            }
        }
    }
    console.log('All rows are valid'); 
    return true;
}

// checkColumns function is insure that all columns have unique number bw 1-9

function checkColumns(){
    
    for(let i = 0; i<9; i++){
        clearCountArray();
        for(let j = 0; j<9; j++){
            if(countArray[sudoku[j][i]] == 1){
                console.log(`Column ${i+1} has duplicate element`);
                return false;     
            } else{
                countArray[sudoku[j][i]]=1;
            }
        }
        
    }
    console.log('All columns are valid'); 
    return true;
}

// checkBlock function is insure that 3*3 block has unique number bw 1-9
function checkBlock(i,j){
    
    clearCountArray();
    for(let m=i; m<i+3; m++ ){
        for(let n=j; n<j+3; n++){
            if(countArray[sudoku[m][n]]==1){
                return false;
            } else{
                countArray[sudoku[m][n]]=1;
            }
        }
    }

    return true;
}


// checkAllBlocks fuction calls checkBlock funtion for all 9 blocks
function checkAllBlocks(){

    for(let i = 0; i<9; i+=3){
        for(let j = 0; j<9; j+=3){            
            if( !checkBlock(i,j) ){
                return false;
            }
        }
    }
    console.log('all 3*3 blocks are valid');
    return true;
}

// checkSudokuSolution is a main function to varify that given solution is correct or not

function checkSudokuSolution(){
    if((checkRows() && checkColumns()) && checkAllBlocks()){
        console.log('Sudoku solution is correct\n'); 
    } else{
        console.log('Sudoku solution is wrong \n');
        
    }
};

checkSudokuSolution();
