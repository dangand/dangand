import { makeObservable, observable, computed, action } from "mobx";

type DataUser = {
  email?: string;
  nama?: string;
  accessToken?: string;
};

class UserStore {
  userData: DataUser = {
    email: "",
    nama: "",
    accessToken: "",
    // verifyCode: "",
  };

  constructor() {
    makeObservable(this, {
      userData: observable,
      setUser: action,
      //   isNegative: computed,
      //   add: action,
      //   subtract: action,
    });
  }

  setUser(userData: DataUser) {
    this.userData = userData;
  }

  //   get isNegative() {
  //     return this.count < 0 ? "Yes" : "No";
  //   }

  //   add() {
  //     this.count += 1;
  //   }

  //   subtract() {
  //     this.count -= 1;
  //   }
}

const store = new UserStore();
export default store;
