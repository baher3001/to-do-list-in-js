var todo =document.querySelector('.ss')
var pendingList=document.getElementById('pendingList');
var doneList=document.getElementById('doneList');
var add = document.getElementById('add');

var counter =0;  

add.onclick = function()
{   
    if(todo.value) // if there is info in input , print it 
    {
        // unique id for each item  

        var newItem = document.createElement('li');
        newItem.setAttribute('id',counter);
         newItem.innerHTML = `<a class="first" onclick="done(${counter})"> &#9989;</a>`+`<span id="a-${counter}"> ${todo.value} </span> ` + `<a class="secand"  onclick={removeItem(${counter})}>&#10006;</a>`;
        pendingList.appendChild(newItem);
        todo.value=" ";
        counter+=1;  

    }

}

function removeItem(id)
{   
   document.getElementById(id).remove(); // 38 mintues
   
}

function done(id)
{
  
    var item =document.createElement('li');
    item.innerHTML = `<a style="color:black; text-decoration:line-through;"> ${document.getElementById('a-'+id).innerText}  </a>`     //document.getElementById('a-'+id).innerText
    
    doneList.append(item)
    removeItem(id);
}

function reset()
{
    todo.value = null;
    pendingList.innerHTML=null;
}

/* let data = new Date().toLocaleDateString();

console.log($data);*/ // how to get date

 /*let date = new Date().getDay();
console.log(date)
*/

var todayDate = new Date().toLocaleDateString();
var todayNum = new Date().getDay();
var days = ['Monday','Tuesday','wednesday','Thursday','Friday','Saturday','Sunday']
var day = days[todayNum-1];

 document.getElementById('day').innerText=day;
 document.getElementById('dayDate').innerText=todayDate;
//console.log(days[todayNum-1]);


//#9989 true
//