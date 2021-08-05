import { Component } from '@angular/core';
import {DummyServiceService} from './dummy-service.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name="kapil chhabra";
   
    myData=[];
      
    constructor(private dummy:DummyServiceService)
  {
    this.dummy.getData().subscribe(dataT=>{
       console.warn(dataT)
     // this.myData=dataT

       
    }, err => {
      console.log(err);
  });
  }

  getName(){
    return  this.name; }


  obj={
name:'kalu',
lastname:'kumar',
age:25}

arr=['mohan','peter','anil sidhu']

a=100;
b=200;

siteUrl=window.location.href


myName='kapil';
sonuGupta(name){
alert(name);
}


myEvent(evt){
  console.warn(evt);
}
currentVal="";
currentVal2="";
getval(val){
  console.warn(val);
  this.currentVal=val;
}
getval2(val2){
  console.warn(val2);
  this.currentVal2=val2;
}
nameF="bruce";
disabledBox=true
enableBox()
{
this.disabledBox=false
}

show="yes";
show2="green";
color='green';

 //data=['anil','rahul','chinu','kalu'];
// data=[
//       {
//         name:'kapil',
//         age:25
//       },
//       {
//         name:'sonu',
//         age:30
//       },
//       {
//         name:'mohan',
//         age:35
//       },
//       {
//         name:'rohan',
//         age:40
//       }

// ];

getUserValue(values){
console.warn(values);
}

color2="orange";
err=true;
updateColor(){
  this.color2="blue";
}


alerts: Alert[];

  // constructor() {
  //   this.reset();
  // }

  

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  model = {
    left: true,
    middle: false,
    right: false
  };

// parentData={
// name:'kapil',
// age:'26'

// };

reusableData=[
  {
    name:'kapil',
    age:'chhabra',
    phone:'99999999'
  },
  {
    name:'kalu',
    age:'chhabra',
    phone:'99999999'
  },
  {
    name:'chintu',
    age:'chhabra',
    phone:'99999999'
  }
];
nameN="";
parentComponent(data)
{
  console.warn(data);
  this.nameN=data.name;
}


lastName="chhaBra";
today=Date.now()
str="Hello angular";
val=10;




}