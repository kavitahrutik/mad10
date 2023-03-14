self.addEventListener('active',(res)=>{
    console.log(res);
});

self.addEventListener('install',(res)=>{
    console.log(res);
   caches.open('MY_last_cache').then((cache)=>{
    cache.add('/data.json');
    cache.add('index.html');
    cache.add('data.json');
   })
.catch((e)=>{
        console.log("failed again")
    })
});
         
    

self.addEventListener('fetch',(e)=>{
    console.log("fetched");
    
    e.respondWith(
  
    caches.match(e.request)
    .then((res) => {
    
    return res || fetch(e.request);
    })
    .catch((err) => {
    console.log(err);
    })
    )
});