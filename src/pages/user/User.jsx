import { Link } from "react-router-dom";
import "./user.css";
import {
  CalendarToday,
  EmailOutlined,
  LocationOn,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/photo-1496360711189-5edeb09fe715?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Isabella Becker </span>
              <span className="userShowUserJob">SoftWare Engineer </span>
            </div>
          </div>

          <div className="userShowBottom">
            <div className="userShowTitle">Account Details</div>

            <div className="userShowInfo">
              <PermIdentity className="useShowIcon" />
              <span className="userShowInfoTitle">issabella46773</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="useShowIcon" />
              <span className="userShowInfoTitle">10.7.2004</span>
            </div>
            <div className="userShowTitle">Contact Details</div>

            <div className="userShowInfo">
              <PhoneAndroid className="useShowIcon" />
              <span className="userShowInfoTitle">+880176876434</span>
            </div>

            <div className="userShowInfo">
              <EmailOutlined className="useShowIcon" />
              <span className="userShowInfoTitle">
                issabella46773@gmail.com
              </span>
            </div>

            <div className="userShowInfo">
              <LocationOn className="useShowIcon" />
              <span className="userShowInfoTitle">Rajshahi | Bangladesh</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Isabella3434"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Isabella Becker"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Isabella7868@gmail.com "
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+88 017 6876434"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Rajshahi | Bangladesh"
                  className="userUpdateInput"
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.unsplash.com/photo-1496360711189-5edeb09fe715?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
