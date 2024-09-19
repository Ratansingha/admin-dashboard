import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import "./sideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sideBarListItem active">
                <LineStyle className="sideBarIcon" />
                <span>Home</span>
              </li>
            </Link>

            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              <span>Analytics</span>
            </li>

            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              <span>Sales</span>
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sideBarListItem active">
                <PermIdentity className="sideBarIcon" />
                <span>User</span>
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sideBarListItem">
                <Storefront className="sideBarIcon" />
                <span>Products</span>
              </li>
            </Link>
            <li className="sideBarListItem">
              <AttachMoney className="sideBarIcon" />
              <span>Transactions</span>
            </li>
            <li className="sideBarListItem">
              <BarChart className="sideBarIcon" />
              <span>Reports</span>
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <MailOutline className="sideBarIcon" />
              <span>Mail</span>
            </li>

            <li className="sideBarListItem">
              <DynamicFeed className="sideBarIcon" />
              <span>FeedBack</span>
            </li>

            <li className="sideBarListItem">
              <ChatBubbleOutline className="sideBarIcon" />
              <span>Messages</span>
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <WorkOutline className="sideBarIcon" />
              <span>Manage</span>
            </li>

            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              <span>Analytics</span>
            </li>

            <li className="sideBarListItem">
              <Report className="sideBarIcon" />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
