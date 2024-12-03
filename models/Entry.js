// models/Entry.js
// const mongoose = require('mongoose');

// const entrySchema = new mongoose.Schema({
//     city: { type: String, required: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String, required: true },
//     passes: { type: Number, default: 1 },
//     referredBy: { type: String },
//     termsAccepted: { type: Boolean, required: true },
//     date: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Entry', entrySchema);

// models/Entry.js
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    city: String,
    name: String,
    email: String,
    phone: String,
    referredBy: String,
    termsAccepted: Boolean,
    passes: [
        {
            passType: String,
            quantity: Number
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Entry', entrySchema);
