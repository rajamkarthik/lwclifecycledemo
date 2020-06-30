import { LightningElement } from 'lwc';

export default class Lifecyclecicd extends LightningElement {
    connectedvariavle;
    disconnectedvariable;
    renderedvariable;
    
     connectedCallback(){
         alert('connected');
      this.connectedvariavle='called from Connected';
 
     }
     disconnectedCallback(){
         alert('disconnected');
     this.disconnectedvariable='calledfromdisconnected';
     }
     renderedCallback(){
         alert('rendered');
      this.renderedvariable='called from rendered';
     }
      
     get valueofthisstate(){
         return 'state of this event';
     }
     set valueofthisstate(val){
         stateofevent=val;
         alert(stateofevent);
     }
    constructor(){
        super();
        alert('constructor');
    }
    
    errorCallback(){
        alert('Errorcall');
    }
 }