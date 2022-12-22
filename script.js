// Creating 16x16 child divs for grid-container
const gridContainer = document.querySelector('.grid-container');
let gridVar = 16; // Default value for Grid
gridContainer.style.height = '60vh';
gridContainer.style.width = '60vw';

//Function Definition to build Grid of Divs
function createGridDivs(gridVar){
   //Grid Div height logic
   let heightVarDiv = 50/gridVar;
   
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

      //Event Listener for button3
      const gridButton3 = document.querySelector('#button3');
      gridButton3.addEventListener('click', (e) => {
         //Random RGB Value Generator
         let rgbValue1 = 256*Math.random();
         let rgbValue2 = 256*Math.random();
         let rgbValue3 = 256*Math.random();
         let rgbValueF = 'rgb' + '(' + rgbValue1 + ',' + rgbValue2 + ',' + rgbValue3 + ')';
      tempDivChild.addEventListener('mouseover', (e) => {
         tempDivChild.style.backgroundColor = rgbValueF;
      });
   });

      //Event Listener for Button5 Default Color
      const gridbutton5 = document.querySelector('#button5');
      gridbutton5.addEventListener('click', (e) => {
         tempDivChild.addEventListener('mouseover', (e) => {
            tempDivChild.style.backgroundColor = 'black';
         });
      });
      
      //Event Listener for Button4 10% Black
      const gridButton4 = document.querySelector('#button4');
      gridButton4.addEventListener('click', (e) => {
         let tempOpacity = 0.1;
         tempDivChild.addEventListener('mouseover', (e) => {  
            //console.log('opacity--> ' + tempOpacity);
            if(tempOpacity !== 1){ 
               tempOpacity+= 0.1;
               tempDivChild.style.backgroundColor = 'rgb(1, 0, 0,' + tempOpacity + ')';   
            }
            else{
               return;
            }   
         });
      });

      //Event Listener for Button 6
      const gridButton6 = document.querySelector('#button6');
      gridButton6.addEventListener('click', (e) => {
         tempDivChild.addEventListener('mouseover', (e) => {
            tempDivChild.style.backgroundColor = 'inherit';
         });
      });
      
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
      
      //Logic to remove old Grid of Divs
      while(oldDiv.firstChild){
         oldDiv.removeChild(oldDiv.firstChild);
      }
      //console.log(gridVar)
      createGridDivs(gridVar);
   }
   else{
      alert('Please enter a value less than 100 or a valid number.')
   }   
   return;
});

//Event Listener for button2
const gridButton2 = document.querySelector('#button2');
gridButton2.addEventListener('click', (e) => {
   let oldDiv = document.querySelector('.grid-container');
      //Logic to remove old Grid of Divs
      while(oldDiv.firstChild){
         oldDiv.removeChild(oldDiv.firstChild);
      }
});



   


