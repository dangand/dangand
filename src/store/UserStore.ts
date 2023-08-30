import { makeObservable, observable, computed, action } from "mobx";

type DataUser = {
  email?: string;
  nama?: string;
  accessToken?: string;
};

class UserStore {
  userData: any | null = {};

  constructor() {
    makeObservable(this, {
      userData: observable,
      setUser: action,
      //   isNegative: computed,
      //   add: action,
      //   subtract: action,
    });
  }

  setUser(userData: any | null) {
    this.userData = userData;
  }
}

const store = new UserStore();
export default store;
