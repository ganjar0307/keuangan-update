const CACHE_NAME="family-finance-v1";

const urls=[

"/",
"/login.html",
"/dashboard.html",
"/css/style.css",
"/js/api.js",
"/js/auth.js",
"/js/utils.js",
"/js/dashboard.js",
"/js/export.js",
"/offline.html"

];

self.addEventListener(
"install",
(event)=>{

event.waitUntil(

caches.open(
CACHE_NAME
)

.then(cache=>{

return cache.addAll(
urls
);

})

);

}
);

self.addEventListener(
"fetch",
(event)=>{

event.respondWith(

fetch(
event.request
)

.catch(()=>{

return caches.match(
event.request
)

.then(response=>{

return response ||

caches.match(
"/offline.html"
);

});

})

);

});