function searching()
{
  //first clear the whole list impo
  document.querySelectorAll(".tr").forEach(function(ele) {
    ele.remove();
  })

  const table = document.getElementById("table");
  const name =   document.getElementById("name").value;  
  const mobile = document.getElementById("mobile").value;
  const req = new XMLHttpRequest();

  req.open("GET", "/Employee/searching?name=" + name + "&mobile=" + mobile);

  req.send();
  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      const obj = JSON.parse(req.responseText);
      console.log(obj);
      if(obj.length>0){
        for(let i=0; i<obj.length;i++){ 
          table.innerHTML += "<tr class='tr'><td>"+(i+1)+"</td><td>"+obj[i]['firstName']+"</td><td>"+obj[i]['email']+"</td><td>"+obj[i]['city']+"</td><td>"+obj[i]['phoneNumber']+"</td><td><a href='/Employee/edit?edit="+obj[i]['id']+"'>Edit</a></td><td><a href='/Employee/delete?delete="+obj[i]['id']+"'>Delete</a></td></tr>";
      }
      }else{
        table.innerHTML += " <tr class='tr'><td colspan='7' >Data Node Found</td></tr>"
      }
    }
  };
  



  return false;

}
