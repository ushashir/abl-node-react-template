const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Invoice = require('../models/Invoice')

// GET api/invoices  - Get all users details - Private access
router.get('/', auth, async (req, res) => { 
    try {
        const invoices = await Invoice.find( {invoices: req.invoices}).sort( { date: -1 });
        res.json(invoices);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// POST api/invoices - Add new invoice -  Private access
router.post(
    '/', 
    [ auth, 
        [
        check('name', 'Name is required').not().isEmpty(),
        check('amount', 'Amount is required').not().isEmpty()
    ] 
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const  { name, amount, paidFor } = req.body;

    try {
        const newInvoice = new Invoice ({
            name, 
            amount, 
            paidFor,
            user: req.user.id
        });

        const invoice = await newInvoice.save();

        res.json(invoice);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});

// @route   PUT api/invoices/:id - Update invoice - Private access
router.put('/:id', auth, async (req, res) => {
    const { name, amount, paidFor } = req.body;

    // Build a invoice object
    const invoiceFields = {};
    if(name) invoiceFields.name = name;
    if(amount) invoiceFields.amount = amount;
    if(paidFor) invoiceFields.paidFor = paidFor;
    
    try {
        let invoice = await Invoice.findById(req.params.id);
        
        if (!invoice) return res.status(404).json( { msg: 'Invoice not Found' });

        // Make sure user own the invoice
        if (invoice.user.toString() !== req.user.id ) {
            return res.status(401).json( {msg: 'Not authorized' });
        }

        invoice = await Invoice.findByIdAndUpdate(req.params.id,
            { $set: receiptFields },
            { new: true });

            res.json(invoice);
    } catch (err) {
        console.error.error(err.message);
        res.status(500).send('Server Error')
    }

});

// @route   DELETE api/recipts/:id - Delete invoices - Private access
router.delete('/:id', auth, async (req, res) => {
    res.send('Delete Invoice');

    try {
        let invoice = await Invoice.findById(req.params.id);
        
        if (!invoice) return res.status(404).json( { msg: 'Invoice not Found' });

        // Make sure user own the invoice
        if (invoice.user.toString() !== req.user.id ) {
            return res.status(401).json( {msg: 'Not authorized' });
        }

        await Invoice.findByIdAndRemove(req.params.id);

            res.json({ msg: 'Invoice removed' });
    } catch (err) {
        console.error.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;