class User {
  constructor(
    
    userID,
    email,
    password,
    firstName,
    lastName,
    mobileNumber,
    location,
    isWorker,
    isClient,
    isAgency,
    isAdmin,
    isSuperAdmin,
    govtID,

  ) {
    this.userID = userID;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobileNumber = mobileNumber;
    this.isAdmin = isAdmin;
    this.isWorker = isWorker;
    this.isAgency = isAgency;
    this.isClient = isClient;
    this.isSuperAdmin = isSuperAdmin;
    this.govtID = govtID;
  }

  async signup() {
    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          mobileNumber: this.mobileNumber,
          password: this.password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        return data.user;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login() {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          mobileNumber: this.mobileNumber,
        }),
      });

      const data = await response.json();

      if (data.success) {
        return data.user;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async logout() {
    try {
      const response = await fetch("http://localhost:3000/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "apllication/json",
        },
        body: JSON.stringify({
          userID: this.userID,
        }),
      });

      const data = await response.json();

      if (data.success) {
        return data.user;
      } else {
        throw new Error(data.message);
      }
    } 
    catch (error) {
      throw new Error(error.message);
    }
  }
}

export default User;
