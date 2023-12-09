const { model, Schema} = require('mongoose');

const elementSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Effective: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Element' }],
  },
  Weak: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Element' }],
  },
  Resistant: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Element' }],
  }
});

module.exports = model('Element', elementSchema);