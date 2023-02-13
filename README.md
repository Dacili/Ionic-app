# Ionic-app  
**Ionic** (https://ionicframework.com/) is an open source mobile UI toolkit for building modern, high quality **cross-platform** mobile apps from a single code base in React, Vue or **Angular**.

In short, create mobile app with Angular knowledge and use of Ionic components (https://ionicframework.com/docs/components). Components are behaving a bit differently depeding on which operating systems you're running them (ios vs android).  
<br>
The UI beauty was not in my priority haha.  
Demo of app:  


https://user-images.githubusercontent.com/37112852/218172833-a20a3775-68b8-47ee-a7b6-5faa7a317d53.mp4

  
App specifications:  
``` 
   Ionic CLI: 6.20.8   
   Ionic Framework: @ionic/angular 6.4.2  
   @angular/cli: 15.1.1  
   @angular/core: ^15.0.0  
   Cordova was used (not Capacitor) - an open source project that runs web apps across multiple platforms
  ``` 

Installation of ionic:  
``` npm install -g @ionic/cli```   
Create a new Ionic app (you can choose some of the existing templates):    
``` ionic start```   
Enter the folder of newly created app and run:  
``` ionic serve```     
If you want to create new component, or services, like you usually do with angular cli (ex. ng g service medi) you could do that similarly:  
 ```ionic generate```  
 and add parameters, or just go trough cmd options that it gives you.  
 When I was trying to run app on my mobile, I had a lot of issues. First you need to install Android studio, Java SDK. Gradle made me a lot of issues, such as incompatibility with latest Java. Environment variables updates, accepting licences agreements, Unsupported class file major version 61  ionic... And so on... When I fixed all issues, you are running app on mobile with this command:   
  ```ionic cordova run android```  
  and if everything went well, you should see command like this,   
<img width="874" alt="image" src="https://user-images.githubusercontent.com/37112852/218174781-2e89483e-91d9-4b20-827c-e81bd68bf35a.png">  
And you're able to run it on your mobile! Yaay     
But what about debugging, is it possible to inspect you mobile app, as you do when running on your laptop? Yes!  
  Go to this link: chrome://inspect/devices#devices, you will see something like this:  
  <img width="566" alt="image" src="https://user-images.githubusercontent.com/37112852/218175212-42d06cce-f638-4f3b-9575-c78b6479ed7e.png">  
  At the lowest, you will see my phone connected, if you click on that inspect label, you get view like this:  
  <img width="958" alt="image" src="https://user-images.githubusercontent.com/37112852/218175414-1c337a35-56d3-40f1-9c27-3eef186ed5ac.png">
 That one is read only view, so if you click on your mobile you will see changes on that left part, if some error occurs, you will see the console errors. Awesome!  
 If you leave your app on mobile, the read only view will become something like this   <img width="887" alt="image" src="https://user-images.githubusercontent.com/37112852/218175936-3a709e0e-6da4-49ab-a028-f33495a41ef9.png">
 
Some of the commands that I was using you can check in this readme https://github.com/Dacili/Ionic-app/edit/master/README.md  


  
  
  
