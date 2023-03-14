
        if('serviceWorker in navigator'){
            navigator.serviceWorker.register('./sw.js').then((res)=>{
                console.log("u could register the service worker!!!!!!!!!")
            }).catch((e)=>{
                console.log(e);
            });
        }
        fetch('data.json').then((e)=>{
            return e.json()
        })
            .then((list)=>{
                var table="<table>";
                    table+="<tr><th>product</th><th>price</th><th>color</th></tr>";

                for(i of list){
                        table+="<tr><td>"+i.product+"</td><td>"+i.price+"</td><td>"+i.color+"</td></tr>";
                        table+="</table>";
                }
                document.getElementById("list").innerHTML=table;
        });
        