import React from 'react'
import Logo from"../assets/images/logo.png"
import '../css/employeePage.css'
import deleteimg from '../assets/icons/delete-black-18dp.svg';
import editimg from '../assets/icons/create-black-18dp.svg';
import adduserimg from '../assets/icons/add-24px.svg';
import img from "../assets/profile-images/Ellipse -1.png";

function EmployeePage() {
  return (
    <div>
        <body>
        <header class="header-content header">
        <div class="logo-content">
            <img src={Logo} alt="logo"/>
            <div>
                <span class="emp-text">EMPLOYEE</span><br/>
                <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
        </div>
    </header>
    <div>
        <div class="header-content">
                <div class="emp-detail-text">
                    Employee Details<div class="emp-count">10</div>
                </div>
                <a href="http://localhost:3000/" class="add-button">
                <img src={adduserimg} alt=""/>Add User</a>
            </div>
    <div class="table-main"/>
        <table id="table-display" class="table">
        <tbody>
        <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>startDate</th>
        <th>Actions</th>
        </tr>
        <tr>
                        <td><img class="profile" alt="" src={img}/> </td>
                        <td>G Deepthi</td>
                        <td>female</td>a
                        <td> <div class="dept-label">HR</div></td>
                        <td>30000</td>
                        <td>2/5/2022</td>
                        <td>
                        <img id="6" onClick="remove(this)" alt="delete" src={deleteimg}/>
                        <img id="6" onClick="update(this)" alt="edit" src={editimg}/>
            </td>
        </tr>
        </tbody>
        </table>
        </div>
        <div class='table-main'></div>
        <div id='table-display' class="table"></div>
    </body>
    </div>
  )
}
export default EmployeePage;