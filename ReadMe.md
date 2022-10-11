**Progrssive Web App (PWA) Template**
===

## What is a Progressive Web App ?
A Progressive Web App is a web app that delivers an app-like experience to users by using modern web capabilities. In the end, it's just your regular website that runs in a browser with some enhancements. It gives you the ability:

Progressive web apps are a way to bring that native app feeling to a traditional web app. With PWAs we can enhance our website with mobile app features which increase usability and offer a great user experience.
    
- To install it on a mobile home screen
- To access it when offline
- To access the camera
- To get push notifications
- To do background synchronization

## Project Folder Tree
- index.html
- app.js
- logo.png
- manifest.json
- serviceWorker.js

### **`index.html`**
The `index.html` serves as the interface for the app, f
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="manifest" href="manifest.json"/>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

There are two Mandatory things here to convert a normal HTML as PWA app:
- **It must link a `manifest.json` in the `<head>..</head>` tag**
```html
  <head>
    <link rel="manifest" href="manifest.json"/>
  </head>
```
- **It must link/run a `js` file in the `body` tag**
```html
  <body>
    <script src="app.js"></script>
  </body>
``` 

### **`app.js`**
The `app.js` is responsible to register the `serviceWorker.js`. 

Try to change the name of the `serviceWorkder.js` file as per the application as a good practice

> Note: The filename for the serviceWorker should match as it can be renamed per application


```js

if ("serviceWorker" in navigator) {
    //window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    //})
}
```

### **logo folder**
For a PWA Application logo is mandatory and ther shoudl be a folder carrying verious logo size and the path & size of those files are mentioned in the `manifest.json` in order to know the application that they exist in hte realtive path.



### **`manifest.json`**
A manifest file is a json file which provides identity to the PWA application and it's defiend as:
```json
{
    "name": "PWA Template",
    "short_name": "PwaTemplate",
    "start_url": "index.html",
    "display": "standalone",
    "background_color": "#fdfdfd",
    "theme_color": "#db4938",
    "orientation": "portrait-primary",
    "icons": [
      {
        "src": "logo/logox16.png",
        "type": "image/png", "sizes": "16x16"
      },
      {
        "src": "logo/logox20.png",
        "type": "image/png", "sizes": "20x20"
      },
      {
        "src": "logo/logox24.png",
        "type": "image/png", "sizes": "24x24"
      },
      {
        "src": "logo/logox32.png",
        "type": "image/png", "sizes": "32x32"
      },
      {
        "src": "logo/logox48.png",
        "type": "image/png", "sizes": "48x48"
      },
      {
        "src": "logo/logox64.png",
        "type": "image/png", "sizes": "64x64"
      },
      {
        "src": "logo/logox128.png",
        "type": "image/png", "sizes": "128x128"
      },
      {
        "src": "logo/logox256.png",
        "type": "image/png", "sizes": "256x256"
      },
      {
        "src": "logo/logox512.png",
        "type": "image/png", "sizes": "512x512"
      }
    ]
  }
```

It has attributes as:
- `"name"`: name of app 
- `"short_name"`: short name of the app
- `"start_url"`: html page to start with
- `"display"`: "standalone"
- `"background_color"`: default color
- `"theme_color"`: theme color
- "orientation": "portrait-primary",
- "icons": Array of icons of various size 

### **`serviceWorker.js`**
`ServiceWorker.js` is what provides offline capability to a PWA app and is defiend as:
```js
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(['./', './logo.png', './style.css']);
    })
  );
});

self.addEventListener("fetch", e => {
  //console.log(`intercepting fetch Request for: ${e.request.url}`);

  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
```
Here in the statement:
```js
return cache.addAll(['./', './logo.png', './style.css']);
``` 
you can provide the ralative path to a list of resources that you want to be available offline. `./` & `./logo.png` is added as default.

---