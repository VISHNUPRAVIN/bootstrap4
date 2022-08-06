var res=fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data)=>data.json())
.then((data1)=>foo(data1));


function foo(arr){
  for (var i=0;i<10;i++){
  
  var div=document.createElement("div");
  div.style.backgroundColor="red";
  div.style.color="green";
  div.style.fontsize="30px";
  div.innerHTML=`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">id number=${arr[i].id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${arr[i].title}</h6>
    <p class="card-text">${arr[i].body}</p>
    
  </div>
</div>`
  document.body.append(div);
}
}