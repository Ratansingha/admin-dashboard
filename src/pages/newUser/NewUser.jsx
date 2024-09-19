import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Ratan " className="newUserInput" />
        </div>

        <div className="newUserItem">
          <label>FullName</label>
          <input
            type="text"
            placeholder="Ratan sihgha"
            className="newUserInput"
          />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="ratan sihgha@gmail.com"
            className="newUserInput"
          />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="less than 5 word"
            className="newUserInput"
          />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+88 01723736454"
            className="newUserInput"
          />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="Rajshahi | Bangladesh"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              placeholder="male"
              name="gender"
              id="male"
              value="male"
              className="newUserInput"
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              placeholder="female"
              name="gender"
              id="female"
              value="female"
              className="newUserInput"
            />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              placeholder="other"
              name="gender"
              id="other"
              value="other"
              className="newUserInput"
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );


};

export default NewUser;
