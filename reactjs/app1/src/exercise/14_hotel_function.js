import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
class HotelDetail extends React.Component{
  constructor(props){
    super(props);
    this.hotelName=props.hotelName;
    this.location=props.location;
    this.rating=props.rating;
    this.pricePerNight=props.pricePerNight;
    this.roomsAvailable=props.roomsAvailable;
    this.contactNumber=props.contactNumber;
    this.index=props.index;
  }
  render(){
    return(
    <div className="col-md-6 col-lg-4">
      <div className="card hotel-card shadow">
        <div className="card-body">
          <h5 className="card-title">{this.name}</h5>
          <p className="text-muted mb-2">📍 {this.location}</p>
          <p className="mb-1">
            ⭐ Rating: <strong>{this.rating}</strong>
          </p>
          <p className="mb-1">💰 Price: {this.pricePerNight}</p>
          <p className="mb-1">🛏 Rooms Available: {this.roomsAvailable}</p>
          <p className="mb-3">📞 Contact: {this.contactNumber}</p>
          <a href="#" className="btn btn-primary w-100">
            Book Now
          </a>
        </div>
      </div>
    </div>
    )
  }
}
function Hotel(){
  const hotels = [
  { hotelName: "Grand Heritage Hotel", location: "Jaipur", rating: 4.4, pricePerNight: 4200, roomsAvailable: 18, contactNumber: "+91 98765 43210" },
  { hotelName: "Royal Palace Inn", location: "Udaipur", rating: 4.6, pricePerNight: 4800, roomsAvailable: 12, contactNumber: "+91 91234 56789" },
  { hotelName: "City Comfort Stay", location: "Ahmedabad", rating: 4.1, pricePerNight: 3200, roomsAvailable: 25, contactNumber: "+91 99887 66554" },
  { hotelName: "Ocean View Resort", location: "Goa", rating: 4.8, pricePerNight: 6500, roomsAvailable: 10, contactNumber: "+91 90909 12345" },
  { hotelName: "Hilltop Residency", location: "Manali", rating: 4.5, pricePerNight: 5000, roomsAvailable: 14, contactNumber: "+91 93456 78901" },
  { hotelName: "Metro Elite Hotel", location: "Delhi", rating: 4.2, pricePerNight: 3800, roomsAvailable: 30, contactNumber: "+91 92111 33445" },
  { hotelName: "Lakeview Suites", location: "Udaipur", rating: 4.7, pricePerNight: 5400, roomsAvailable: 9, contactNumber: "+91 95678 12390" },
  { hotelName: "Green Park Hotel", location: "Pune", rating: 4.3, pricePerNight: 3600, roomsAvailable: 20, contactNumber: "+91 98700 11223" },
  { hotelName: "Sunrise Residency", location: "Surat", rating: 4.0, pricePerNight: 3000, roomsAvailable: 22, contactNumber: "+91 99099 88776" },
  { hotelName: "Blue Bay Hotel", location: "Chennai", rating: 4.4, pricePerNight: 4100, roomsAvailable: 16, contactNumber: "+91 94444 55667" }
];
return(
  <div className="container my-5">
  <h2 className="text-center mb-4">Available Hotels</h2>
  <div className="row g-4">
    {
      hotels.map((item,index)=>{
        return(
          <HotelDetail hotelName={item.hotelName} location={item.location} rating={item.rating} pricePerNight={item.pricePerNight} roomsAvailable={item.roomsAvailable} contactNumber={item.contactNumber} index={index} />
        );
      })
    }
  </div>
</div>
)
  
} 

root.render(<Hotel />);
