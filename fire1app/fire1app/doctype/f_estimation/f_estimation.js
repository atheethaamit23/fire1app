// Copyright (c) 2024, Atheetha and contributors
// For license information, please see license.txt

// frappe.ui.form.on("F Estimation", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('F Estimation', {
    refresh: function (frm) {
        // Add custom button to trigger the transfer
        frm.add_custom_button(__('Transfer to F Quotation'), function () {
            // Call the server-side method using frm.call
            frm.call({
                method: 'fire1app.fire1app.doctype.f_estimation.f_estimation.transfer_data',
                args: {
                    'estimation_name': frm.doc.name
                },
                freeze: true,  // Optional: freeze the form while processing
                freeze_message: __('Transferring data...'),  // Optional: show a message while processing
                callback: function (response) {
                    if (response.message) {
                        frappe.msgprint(__('Data transferred successfully to F Quotation. Document: ' + response.message));
                    }
                }
            });
        });
    }
});