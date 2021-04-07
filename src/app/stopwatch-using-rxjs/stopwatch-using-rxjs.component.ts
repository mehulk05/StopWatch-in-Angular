import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/service/local-storage.service';
import { StopwatchService } from '../shared/service/stopwatch.service';

@Component({
  selector: 'app-stopwatch-using-rxjs',
  templateUrl: './stopwatch-using-rxjs.component.html',
  styleUrls: ['./stopwatch-using-rxjs.component.css']
})
export class StopwatchUsingRxjsComponent implements OnInit ,OnDestroy{

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

  timerSubscription
  listDataSubscription
  constructor(private stopwatchService:StopwatchService,
    private loclaStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.stopwatchService.getValuesFromLocalStorage()

    this.isRunning = this.loclaStorageService.getIsRunningFlag() =="true"?true:false ;

    if(this.isRunning){
      this.continueTimer()
    }
    this.listDataSubscription = this.stopwatchService.savedTimerData.subscribe(data=>{
      this.list = data
    })

    this.timerSubscription = this.stopwatchService.timerData.subscribe(data=>{
      this.timer = data
    })
  }

  playPause(flag?) {
    if (!this.isRunning) {
      // Stop => Running
      this.timerId = setInterval(() => {
        this.stopwatchService.incrementTimer()
      }, 10);

    } else {
      clearInterval(this.timerId);
    }
    if(flag==false || flag== undefined){
      this.isRunning = !this.isRunning;
     this.loclaStorageService.setIsRuningFlag(this.isRunning)
    }
  
    
  }


  continueTimer(){
    this.timerId = setInterval(() => {
      this.stopwatchService.incrementTimer()
    }, 10);
  }



  add(timer){
    this.stopwatchService.addtimerToList(timer)
  }

  deleteAll(){
    this.stopwatchService.clearAll()
  }

  remove(index){
    this.stopwatchService.removeSingleTimerByIndex(index)
  }

  setButton(flag,selectedIndex){
    this.selectedIndex  = selectedIndex
    if(flag==true){
      this.hideElement = false
    }
    else{
      this.hideElement=true
    }
  }

  ngOnDestroy(){
    this.timerSubscription.unsubscribe()
    this.listDataSubscription.unsubscribe()
  }
}


