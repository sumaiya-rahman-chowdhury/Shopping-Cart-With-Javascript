let total = 0 ;
let selectedCount = 0;
function handleClick(target) {
    const nodeListLenght = document.querySelectorAll('li');
    console.log(nodeListLenght)
    if(nodeListLenght.length>=4){
        alert("You can only select up to four items.");
        return ;
    }
    // if (selectedCount >= 4) {
    //     alert("You can only select up to four items.");
    //     return;
    // }
    // this is the div we want show ouput(appendchild)
    const selectedItemsList = document.getElementById('selectedItems')
    // 
    const itemName = target.parentNode.childNodes[3].childNodes[1].innerText;
  
    const li = document.createElement('li');
    li.innerText = itemName;
    li.classList.add('shop-items') ;
    li.style.fontWeight = 600;
    // console.log(li) ;
    selectedItemsList.appendChild(li);
 
   

    // console.log(target.parentNode.childNodes[3].childNodes[3].childNodes[1])
    const price = target.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText;


    // 
    // const price = target.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText.split(" ") ;
    //    console.log(typeof(price))
    // 
   
// selectedCount ++
total = parseFloat(price) + parseFloat(total) ;
// console.log(total) ;
document.getElementById('total').innerText = total ;


}
