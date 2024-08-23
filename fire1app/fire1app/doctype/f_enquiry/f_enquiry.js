// Copyright (c) 2024, Atheetha and contributors
// For license information, please see license.txt

// frappe.ui.form.on("F Enquiry", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('F Enquiry', {
    refresh: function (frm) {
        // Check if the form has been saved
        if (!frm.doc.__islocal) {
            // Add the custom button only if the form is not new (i.e., saved)
            frm.add_custom_button(__('Convert to Customer'), function () {
                let e_name1 = frm.doc.name_e
                let phone_number = frm.doc.phone_number
                let email = frm.doc.email
                let company = frm.doc.company
                let enquiry_for = frm.doc.enquiry_for
                let new_doc = frappe.new_doc('F Customer', {
                customer_name: e_name1,
                phone_number: phone_number,
                email: email,
                company: company,
                enquiry_for: enquiry_for,
                });
           
            });
    }
},
});
