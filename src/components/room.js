import React from 'react';
import './room.css';
import hotelroomImage from '../assets/hotelroom.jpg';
import footerlogo from '../assets/elysianwhite.png';

function Room() {
  return (
    <div>

      <div className='roomcontainer'>
        <div id='rooms'>
          <h1>Rooms and Suites</h1>
          <h3>Find your perfect escape with our stylish, comfortable rooms designed to suit every need. Relax, unwind, and enjoy your stay!</h3>
          <div className="arrow"></div>
        </div>
      </div>

      {/* Second Section - Room Grid */}
      <div className="secondsection">
        <div className="room-cards">
          <div className="room-card">
            <img src={hotelroomImage} alt="Room" />
              <div className="card-details">
                <h3>Standard Room</h3>
                <p>₱3000 / night</p>
                <p>3 rooms available | 1 bed</p>
                <div className="card-actions">
                  <button  className="room-details">Room Details</button>
                  <button className="book-now">Book Now</button>
                </div>
              </div>
            </div>

          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={hotelroomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={hotelroomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={hotelroomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={hotelroomImage} alt="Room" />
            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={hotelroomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          

          {/* Add more room cards as needed */}
        </div>
      </div>
      <div className="footer">
      <div className="footer-content">
      <div className="footer-left">
        <img src={footerlogo} alt="Room" className="footer-logo" />
        <p>28 Elysian Rd, Elysian, Philippines 1119</p>
        <p>09220829292</p>
        <p>elysian@gmail.com</p>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <p>Get Updated News and Offers</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
    </div>
  </div>
</div>

</div>

    
  );
}

export default Room;
