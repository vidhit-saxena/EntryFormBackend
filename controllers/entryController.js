// controllers/entryController.js
const Entry = require('../models/Entry');

// Add a new entry
exports.createEntry = async (req, res) => {
    try {
        const entry = new Entry(req.body);
        await entry.save();
        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting form. Please try again.' });
    }
};
// exports.createEntry = async (req, res) => {
//     try {
//         const newEntry = new Entry(req.body);
//         await newEntry.save();
//         res.status(201).json({ message: 'Entry created successfully', data: newEntry });
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating entry', error: error.message });
//     }
// };

// Get all entries (optional, for future use)
exports.getEntries = async (req, res) => {
    try {
        const entries = await Entry.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving entries', error: error.message });
    }
};
