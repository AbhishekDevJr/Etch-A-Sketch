// Creating 16x16 child divs for grid-container
const gridContainer = document.querySelector('.grid-container');
//console.log(gridContainer);

for(let i = 0; i < 16; i++){
     let tempDiv = document.createElement('div');
     tempDiv.classList.add('itemDivParent' + i);
     tempDiv.style.width = '100%';
     tempDiv.style.height = '5.84vh';
     tempDiv.style.border = '1px solid black';
     tempDiv.style.display = 'flex';
     tempDiv.style.flexDirection = 'row';
     tempDiv.style.justifyContent = 'space-between';
     tempDiv.style.alignItems = 'center';
     //const itemDivParent  = document.querySelector('');
     //console.log(tempDiv.getAttribute('class'));
     //console.log(itemDivParent);
     for(let j = 0; j < 16; j++){
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


}
