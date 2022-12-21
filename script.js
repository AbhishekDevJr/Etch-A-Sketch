// Creating 16x16 child divs for grid-container
const gridContainer = document.querySelector('.grid-container');
let gridVar = 16; // Default value for Grid
gridContainer.style.height = '91.6vh';
gridContainer.style.width = '98vw';



//Function Definition to build Grid of Divs
function createGridDivs(gridVar){

   //Grid Div height logic
   let heightVarDiv = 100/gridVar;
   console.log(heightVarDiv);
   for(let i = 0; i < gridVar; i++){
   let tempDiv = document.createElement('div');
   tempDiv.classList.add('itemDivParent' + i);
   tempDiv.style.width = '100%';
   tempDiv.style.height = heightVarDiv + 'vh';
   tempDiv.style.border = '1px solid black';
   tempDiv.style.display = 'flex';
   tempDiv.style.flexDirection = 'row';
   tempDiv.style.justifyContent = 'space-between';
   tempDiv.style.alignItems = 'center';
   
   for(let j = 0; j < gridVar; j++){
      //Creating Row of Divs
      let tempDivChild = document.createElement('div');
      tempDivChild.classList.add('itemDivChild' + j);
      tempDivChild.style.width = '100%';
      tempDivChild.style.height = heightVarDiv + 'vh';
      tempDivChild.style.border = '1px solid blue';

      //Adding Hover Affect
      tempDivChild.addEventListener('mouseover', (e) => {
          tempDivChild.style.backgroundColor = 'black';
          //return;
      });

      //Removing Hover Affect
      /*tempDivChild.addEventListener('mouseleave', (e) => {
          tempDivChild.style.backgroundColor = 'white';
          return;
      });*/
      tempDiv.appendChild(tempDivChild);
   }
   gridContainer.appendChild(tempDiv);

   

   
   
}
}
//Function Call to Build grid of Divs
createGridDivs(gridVar);


//EventListener for Button1
const gridButton1 = document.querySelector('#button1');
gridButton1.addEventListener('click', (e) => {
   gridVar = prompt('Enter the Number of boxes per side. (Limit 100)');

   if(gridVar <= 100){
      let oldDiv = document.querySelector('.grid-container');
      while(oldDiv.firstChild){
         oldDiv.removeChild(oldDiv.firstChild);
      }

      console.log(gridVar)
      createGridDivs(gridVar);
   }
   else{
      alert('Please enter a value less than 100.')
   }

   
   
   return;
});

//Event Listener for button2
const gridButton2 = document.querySelector('#button2');
gridButton2.addEventListener('click', (e) => {
   let oldDiv = document.querySelector('.grid-container');
      while(oldDiv.firstChild){
         oldDiv.removeChild(oldDiv.firstChild);
      }
});
