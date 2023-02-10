# Ionic-app  
**Ionic** (https://ionicframework.com/) is an open source mobile UI toolkit for building modern, high quality **cross-platform** mobile apps from a single code base in React, Vue or **Angular**.

In short, create mobile app with Angular knowledge and use of Ionic components (https://ionicframework.com/docs/components). Components are behaving a bit differently depeding on which operating systems you're running them (ios vs android).  
<br>
Demo of app:  


https://user-images.githubusercontent.com/37112852/218172833-a20a3775-68b8-47ee-a7b6-5faa7a317d53.mp4

  
App specifications:  
``` 
   Ionic CLI: 6.20.8   
   Ionic Framework: @ionic/angular 6.4.2  
   @angular/cli: 15.1.1  
   @angular/core: ^15.0.0  
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
 When I was trying to run app on my mobile, I had a lot of issues. First you need to install Android studio, Java SDK. Gradle made me a lot of issues, such as incompatibility with latest Java. Environment variables updates, accepting licences agreements, Unsupported class file major version 61  ionic... And so on...   
  
  
