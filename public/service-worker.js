self.addEventListener("install", (event) => {
    console.log("Service Worker installed");
  });
  
  self.addEventListener("fetch", (event) => {
    console.log("Service Worker fetching", event.request.url);
  });
  