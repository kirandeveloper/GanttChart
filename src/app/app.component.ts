import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gantt-angular';

  public data: Object[]; 
    public taskfield: Object;
    ngOnInit() {
        this.data = [{
            TaskID: 1,
            TaskName: 'Product Concept',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [{
                TaskID: 2,
                TaskName: 'Defining the product and its usage',
                StartDate: new Date('04/02/2019'),
                Duration: 5,
                Progress: 30
            },
 
            ]
        }, ];
        this.taskfield = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            child: 'subtasks'
        };
    }
  
}
