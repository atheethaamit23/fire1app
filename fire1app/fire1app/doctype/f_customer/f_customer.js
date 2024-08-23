// Copyright (c) 2024, Atheetha and contributors
// For license information, please see license.txt

// frappe.ui.form.on("F Customer", {
// 	refresh(frm) {

// 	},
// });

// frappe.ui.form.on('F Customer', {
//     on_save: function (frm) {
//         // Check if the `f_enquiry` field is set
//         if (frm.doc.customer_name) {
//             // Fetch the F Enquiry document based on its name
//             frappe.get_doc('F Enquiry', frm.doc.customer_name).then(function (enquiry_doc) {
//                 // Update the specific field with a new value
//                 enquiry_doc.status = 'Customer'; // Example: setting status to 'Customer'

//                 // Save the updated document
//                 return enquiry_doc.save();
//             }).then(function () {
//                 frappe.msgprint(__('F Enquiry document updated successfully.'));
//             }).catch(function (err) {
//                 frappe.msgprint(__('Failed to update F Enquiry document.'));
//                 console.error(err);
//             });
//         }
//     }
// });