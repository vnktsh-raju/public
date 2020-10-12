import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from './employee.model';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee : Employee)
  {
    this.employeeList.push({
      name: employee.name,
      id: employee.id,
      address: employee.address,
      role: employee.role,
      department: employee.department,
      skillSet: employee.skillSet,
      dob: employee.dob,
      doj: employee.doj
    });
  }

  updateEmployee(employee : Employee){
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        id: employee.id,
        address: employee.address,
        role: employee.role,
        department: employee.department,
        skillSet: employee.skillSet,
        dob: employee.dob,
        doj: employee.doj
      });
  }

  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }

}
