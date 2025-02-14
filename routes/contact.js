const express = require("express");
const { Op } = require("sequelize");
const { Contact } = require("../models");
const router = express.Router();

router.post("/identify", async (req, res) => {
    const { email, phoneNumber } = req.body;
    if (!email && !phoneNumber) return res.status(400).json({ error: "Email or Phone Number required" });

    try {
        let contacts = await Contact.findAll({
            where: {
                [Op.or]: [{ email }, { phoneNumber }],
            },
        });

        if (contacts.length === 0) {
            const newContact = await Contact.create({ email, phoneNumber, linkPrecedence: "primary" });
            return res.json(formatResponse(newContact, []));
        }

        let primary = contacts.find(c => c.linkPrecedence === "primary") || contacts[0];
        let secondaryContacts = contacts.filter(c => c.id !== primary.id);

        if (!contacts.some(c => c.email === email && c.phoneNumber === phoneNumber)) {
            const newSecondary = await Contact.create({
                email,
                phoneNumber,
                linkedId: primary.id,
                linkPrecedence: "secondary",
            });
            secondaryContacts.push(newSecondary);
        }

        return res.json(formatResponse(primary, secondaryContacts));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

function formatResponse(primary, secondaries) {
    return {
        contact: {
            primaryContactId: primary.id,
            emails: [primary.email, ...new Set(secondaries.map(c => c.email))].filter(Boolean),
            phoneNumbers: [primary.phoneNumber, ...new Set(secondaries.map(c => c.phoneNumber))].filter(Boolean),
            secondaryContactIds: secondaries.map(c => c.id),
        },
    };
}

module.exports = router;
