"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    // init model
    function User() {
    }
    Object.defineProperty(User.prototype, "firstName", {
        // getters & setters
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            if (firstName.length > 0) {
                this._firstName = firstName;
            }
            else {
                throw new Error('Empty string of first name!');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        // last name
        get: function () {
            return this._firstName;
        },
        set: function (lastName) {
            if (lastName.length > 0) {
                this._lastName = lastName;
            }
            else {
                throw new Error('Empty string of lastName name!');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        // email
        get: function () {
            return this._firstName;
        },
        set: function (email) {
            var emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\‌​.[a-zA-Z0-9-]+)*$/;
            if (email.length > 0 && !emailRegExp.test(email)) {
                this._email = email;
            }
            else {
                throw new Error('Invalid email!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map