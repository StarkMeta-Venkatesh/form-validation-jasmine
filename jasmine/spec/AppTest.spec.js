const jsdom = require("jsdom");
const validateForm = require('../public/src/app.js');
const { JSDOM } = jsdom;

// Create a new DOM environment
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
describe("validateForm", function() {
  let nameInput, emailInput, passwordInput;

  beforeEach(function() {
    // Create form elements and add them to the DOM
    nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    document.body.appendChild(nameInput);

    emailInput = document.createElement("input");
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("id", "email");
    document.body.appendChild(emailInput);

    passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    document.body.appendChild(passwordInput);
  });

  afterEach(function() {
    // Remove form elements from the DOM
    document.body.removeChild(nameInput);
    document.body.removeChild(emailInput);
    document.body.removeChild(passwordInput);
  });

  it("returns false if name is empty", function() {
    nameInput.value = "";
    emailInput.value = "test@example.com";
    passwordInput.value = "password123";
    expect(validateForm()).toBe(false);
  });

  it("returns false if email is empty", function() {
    nameInput.value = "John Doe";
    emailInput.value = "";
    passwordInput.value = "password123";
    expect(validateForm()).toBe(false);
  });

  it("returns false if email is invalid", function() {
    nameInput.value = "John Doe";
    emailInput.value = "not_an_email";
    passwordInput.value = "password123";
    expect(validateForm()).toBe(false);
  });

  it("returns false if password is too short", function() {
    nameInput.value = "John Doe";
    emailInput.value = "test@example.com";
    passwordInput.value = "1234567";
    expect(validateForm()).toBe(false);
  });

  it("returns true if all fields are valid", function() {
    nameInput.value = "John Doe";
    emailInput.value = "test@example.com";
    passwordInput.value = "password123";
    expect(validateForm()).toBe(true);
  });
});
