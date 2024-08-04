fetch('https://teams-2eon.onrender.com')
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
           // let ul=document.getElementById('123');
            //let li=document.createElement('li')
            //li.innerHTML=element.id;
            //ul.appendChild(li);
            let table=document.getElementById('123');
            let tr=document.createElement('tr');

            let td1=document.createElement('td');
            let td2=document.createElement('td');
            let td3=document.createElement('td');
            let td4=document.createElement('td');
            let td5=document.createElement('td');
            td1.innerHTML=element.id;
            td2.innerHTML=element.name;
            td3.innerHTML=element.adress;
            td4.innerHTML=element.position;
            td5.innerHTML=element.salary;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            table.appendChild(tr);

        });
      })