import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  isRunningFlag
  timerList
  timerData
  constructor() { }

  setIsRuningFlag(flag){
    localStorage.setItem('RUNNING_FLAG',flag.toString());
  }

  getIsRunningFlag(){
    this.isRunningFlag = localStorage.getItem("RUNNING_FLAG")
    return this.isRunningFlag
  }

  setTimerList(list){
    localStorage.setItem('TIMER_LIST', JSON.stringify(list));
  }

  getTimerList(){
    this.timerList = JSON.parse(localStorage.getItem("TIMER_LIST") || "[]");
    return this.timerList
  }

  setTimerData(timer){
    localStorage.setItem('TIMER_VALUE', JSON.stringify(timer));
  }

  getTimerData(){
    this.timerData = JSON.parse(localStorage.getItem("TIMER_VALUE")) 
    return this.timerData
  }
}
