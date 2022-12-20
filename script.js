// Creating 16x16 child divs for grid-container
const gridContainer = document.querySelector('.grid-container');

let gridVar = 16; // Default value for Grid
for(let i = 0; i < gridVar; i++){
     let tempDiv = document.createElement('div');
     tempDiv.classList.add('itemDivParent' + i);
     tempDiv.style.width = '100%';
     tempDiv.style.height = '5.84vh';
     tempDiv.style.border = '1px solid black';
     tempDiv.style.display = 'flex';
     tempDiv.style.flexDirection = 'row';
     tempDiv.style.justifyContent = 'space-between';
     tempDiv.style.alignItems = 'center';
     
     for(let j = 0; j < gridVar; j++){
        //Creating Row of Divs
        let tempDivChild = document.createElement('div');
        tempDivChild.classList.add('itemDivChild' + j);
        tempDivChild.style.width = '6.1vw';
        tempDivChild.style.height = '5.84vh';
        tempDivChild.style.border = '1px solid blue';

        //Adding Hover Affect
        tempDivChild.addEventListener('mouseover', (e) => {
            tempDivChild.style.backgroundColor = 'black';
            //return;
        });

        //Removing Hover Affect
        tempDivChild.addEventListener('mouseleave', (e) => {
            tempDivChild.style.backgroundColor = 'white';
            return;
        });
        tempDiv.appendChild(tempDivChild);
     }
     gridContainer.appendChild(tempDiv);

     //Button1 takes Input from user and sets the Grid Variable
     /*function handleButton1(){
        gridVar = prompt('Enter the Number of boxes per side.');
        console.log(gridVar);
        
     }*/

     
     
}


//EventListener for Button1
const gridButton1 = document.querySelector('#button1');
gridButton1.addEventListener('click', (e) => {
   gridVar = prompt('Enter the Number of boxes per side.');
   console.log(gridVar)
   console.log('Button1 was clicked');
   //location.reload();
   
   return;
});
