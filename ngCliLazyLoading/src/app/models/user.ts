export class User {
  private _firstName: string;
  private _lastName: string;
  private _email: string;

  // init model
  constructor() { }

  // getters & setters
  get firstName(): string {
    return this._firstName;
  }
  set firstName(firstName: string) {
    if (firstName.length > 0) {
      this._firstName = firstName;
    } else {
      throw new Error('Empty string of first name!');
    }
  }

  // last name
  get lastName(): string {
    return this._firstName;
  }
  set lastName(lastName: string) {
    if (lastName.length > 0) {
      this._lastName = lastName;
    } else {
      throw new Error('Empty string of lastName name!');
    }
  }

  // email
  get email(): string {
    return this._firstName;
  }
  set email(email: string) {
    let emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\‌​.[a-zA-Z0-9-]+)*$/;
    if (email.length > 0 && !emailRegExp.test(email)) {
      this._email = email;
    } else {
      throw new Error('Invalid email!');
    }
  }
}
