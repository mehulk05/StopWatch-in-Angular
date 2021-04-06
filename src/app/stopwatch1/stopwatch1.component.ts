import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch1',
  templateUrl: './stopwatch1.component.html',
  styleUrls: ['./stopwatch1.component.css']
})
export class Stopwatch1Component implements OnInit {
  mm = 0;
  ss = 0;
  ms = 0;

  
  timer = {
    mm:0,
    ss:0,
    ms:0
  }
  isRunning = false;
  timerId:any = 0;
  list = []

  hideElement = false;
  selectedIndex: any;
  constructor() { }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem("list") || "[]");
    this.timer = JSON.parse(localStorage.getItem("timerValue"))  || this.timer;
    this.isRunning = (localStorage.getItem("runningFlag")) =="true"?true:false ;
    if(this.isRunning){
      console.log("cam here",this.isRunning)
      this.callingOnLocalStorage()
    }
  }

  clickHandler(flag?) {
   
    if (!this.isRunning) {
      // Stop => Running
      this.timerId = setInterval(() => {
       
        this.timer.ms++;
        
        if (this.timer.ms >= 100) {
          this.timer.ss++;
          this.timer.ms = 0;
        }
        if (this.timer.ss >= 60) {
          this.timer.mm++;
          this.timer.ss = 0
        }
        localStorage.setItem('timerValue', JSON.stringify(this.timer));
      }, 10);
    } else {
      clearInterval(this.timerId);
    }
    if(flag==false || flag== undefined){
      this.isRunning = !this.isRunning;
      localStorage.setItem('runningFlag',this.isRunning.toString());
    }
    
  }


  callingOnLocalStorage(){
    this.timerId = setInterval(() => {
       
      this.timer.ms++;
      
      if (this.timer.ms >= 100) {
        this.timer.ss++;
        this.timer.ms = 0;
      }
      if (this.timer.ss >= 60) {
        this.timer.mm++;
        this.timer.ss = 0
      }
      localStorage.setItem('timerValue', JSON.stringify(this.timer));
    }, 10);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  stop(timer){
    this.list.push({
      mm:timer.mm,
      ss:timer.ss,
      ms:timer.ms
    })
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  deleteAll(){
    this.list=[]
    this.timer = {
      mm:0,
      ss:0,
      ms:0
    }
    localStorage.clear()
  }

  remove(index){
    for(let i=0 ;i<= this.list.length ;i++){
  		if(index== this.list[i]){
  			this.list.splice(i,1)
  		}
  	}
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  setButton(flag,selectedIndex){
    console.log(flag)
    this.selectedIndex  = selectedIndex
   if(flag==true){
     this.hideElement = false
   }
   else{
     this.hideElement=true
   }
  }
}



