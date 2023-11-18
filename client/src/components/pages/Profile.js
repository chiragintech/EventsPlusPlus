import React from 'react'
import './Profile.css'
import NavBar from '../NavBar';

const Profile = () => {
    
    return (
        
        <div className='details'>
        <NavBar />
        <div className="details-container">
          
        <div className='basic-info'>
        <h2>Basic Info</h2>
        <p><strong>UserName:</strong> <span id="name"></span></p>
        <p><strong>SRN:</strong> <span id="srn"></span></p>
        <p><strong>Semester:</strong> <span id="semester"></span></p>
        <p><strong>Department:</strong> <span id="Department"></span></p>
        </div>
        <script src="script.js"></script>
        <div className='profile-pic'>
        <img src='https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg'
             alt='profile'
             width={100}
             height={100}
        />
        </div>
        </div>

        <div className="details-container2">
        <div className='contact-info'>
        <h2>Contact Info</h2>
        <p><strong>PhoneNumber:</strong> <span id="name"></span></p>
        <p><strong>Email:</strong> <span id="srn"></span></p>
        <script src="script.js"></script>
        </div>
        </div>
    
        </div>
      
    );
  };
  

export default Profile;