import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Login(){
  var [email,setEmail]=useState('');
  var [password,setPassword]=useState('');
  var submitForm=(event)=>{
    event.preventDefault();
    console.log(email,password);
  }
  return(<div className="container min-vh-100 d-flex align-items-center justify-content-center">
  <div className="row w-100 justify-content-center">
    <div className="col-lg-4 col-md-6">
      <div className="card shadow">
        <div className="card-header text-center bg-primary text-white">
          <h4 className="mb-0">Login</h4>
        </div>
        <div className="card-body">
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

root.render(<Login />);
