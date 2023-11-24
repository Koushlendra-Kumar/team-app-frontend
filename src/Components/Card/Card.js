import { Cancel, CheckCircle, Girl, MailOutlineOutlined, Man, WorkOutlineOutlined } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import "./Card.css";

const Card = ({
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available,
  }) => {
    return (
      <div className="user-card">
        <h4 className="user-name">
          {first_name} {last_name}
        </h4>
        <img className="user-avatar" src={avatar} alt={first_name} />
        <div className="user-info">
          <div className="user-info-icon"><MailOutlineOutlined fontSize="small"/></div>
          <p>{email}</p>
        </div>
        <div className="user-info">
          <div className="user-info-icon">{gender === 'Male' ? <Man/>:<Girl/>}</div>
          <p>{gender}</p>
        </div>
        <div className="user-info">
          <div className="user-info-icon"><WorkOutlineOutlined/></div>
          <p>{domain}</p>
        </div>
        <div className="user-info">
          <div className="user-info-icon">
          {available ? (
            <CheckCircle style={{ color: green[400] }} />
          ) : (
            <Cancel style={{ color: red[400] }} />
          )}
          </div>
          <p>{available ? "Available": "Unavailable"}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  