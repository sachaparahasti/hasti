import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

class FootballDetail extends React.Component {
  constructor(props) {
    super(props);
    this.club = props.club;
    this.trophies = props.trophies;
    this.captain = props.captain;
    this.homeGround = props.homeGround;
    this.logo = props.logo;
    this.index = props.index;
  }
  render() {
    return (
      <div   className="col-md-4">
        <div className="card club-card h-100 text-center">
          <img src={this.logo} className="card-img-top p-3" alt={this.club} />
          <div className="card-body">
            <h5 className="card-title">{this.club}</h5>
            <p className="card-text">
              <strong>Trophies:</strong> {this.trophies}
              <br />
              <strong>Captain:</strong> {this.captain}
              <br />
              <strong>Home Ground:</strong> {this.homeGround}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function Football() {
  const footballClubs = [
    {
      club: "Real Madrid",
      trophies: 14,
      captain: "Nacho Fernández",
      homeGround: "Santiago Bernabéu Stadium",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
    {
      club: "FC Barcelona",
      trophies: 5,
      captain: "Ronald Araújo",
      homeGround: "Spotify Camp Nou",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    },
    {
      club: "Manchester United",
      trophies: 3,
      captain: "Bruno Fernandes",
      homeGround: "Old Trafford",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    },
    {
      club: "Liverpool",
      trophies: 6,
      captain: "Virgil van Dijk",
      homeGround: "Anfield",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    {
      club: "Bayern Munich",
      trophies: 6,
      captain: "Manuel Neuer",
      homeGround: "Allianz Arena",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    },
    {
      club: "AC Milan",
      trophies: 7,
      captain: "Davide Calabria",
      homeGround: "San Siro",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d0/AC_Milan.svg",
    },
    {
      club: "Chelsea",
      trophies: 2,
      captain: "Reece James",
      homeGround: "Stamford Bridge",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    },
    {
      club: "Manchester City",
      trophies: 1,
      captain: "Kyle Walker",
      homeGround: "Etihad Stadium",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    {
      club: "Juventus",
      trophies: 2,
      captain: "Danilo",
      homeGround: "Allianz Stadium",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/da/Juventus_FC_2017_logo.svg",
    },
    {
      club: "Paris Saint-Germain",
      trophies: 0,
      captain: "Marquinhos",
      homeGround: "Parc des Princes",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    },
  ];
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold">Top Football Clubs</h1>
      <div className="row g-4">{/* Real Madrid */}
      {
      footballClubs.map((item,index) => {
        return (
          <FootballDetail
            key={index}
            club={item.club}
            trophies={item.trophies}
            captain={item.captain}
            homeGround={item.homeGround}
            logo={item.logo}
            index={index}
          />
        );
      })}
      </div>
    </div>
  );
}
root.render(<Football />);
