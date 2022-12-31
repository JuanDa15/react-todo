export class TODO {
  _description;
  _completed;
  _id;

  constructor(
    description,
    completed
  ){
    this._id = Math.floor(Math.random() * 5000);
    this._description = description;
    this._completed = completed;
  }

  get description() { 
    return this._description; 
  }

  set description(value) {
    this._description = value;
  }

  get completed() { 
    return this._completed; 
  }

  set completed(value) {
    this._completed = value;
  }

  get id() {
    return this._id;
  }
}