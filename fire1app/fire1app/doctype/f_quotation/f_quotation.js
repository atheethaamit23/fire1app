// Copyright (c) 2024, Atheetha and contributors
// For license information, please see license.txt

// frappe.ui.form.on("F Quotation", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('F Quotation', {
    payment_terms_template_id: function (frm) {
        // Triggered when the "Payment Terms Template" field changes
        if (frm.doc.payment_terms_template_id) {
            frappe.call({
                method: 'frappe.client.get',
                args: {
                    doctype: "Payment Terms Template",
                    filters: {
                        name: frm.doc.payment_terms_template_id
                    }
                },
                callback: function (r) {
                    if (r.message) {
                        console.log("------------", r.message);
                        
                        // Use r.message to access the fields
                        //frm.set_value('template_name', r.message.template_name);
                        
                        // Clear existing rows in the child table
                        frm.clear_table('payment_terms_template_details');
                        
                        // Add new rows to the child table
                        r.message.terms.forEach(function (item) {
                            var child = frm.add_child('payment_terms_template_details');
                            child.payment_term = item.payment_term;
                            child.invoice_portion = item.invoice_portion;
                            child.payment_amount = frm.doc.subtotal * (item.invoice_portion / 100); // Fixed reference to item
                        });
                        
                        // Refresh the child table field
                        frm.refresh_field('payment_terms_template_details');
                    }
                }
            });
        }
    },
	estimation_id: function(frm) {
		// your code here
		// frappe.db.get_value("F Estimation", {'name':frm.doc.estimation_id}, ['customer_name'], function(value){
		//     frm.set_value("customer_name", value.customer_name);
		// });

		if (frm.doc.estimation_id) {
            frappe.call({
                method: 'frappe.client.get',
                args: {
                    doctype: "F Estimation",
                    filters: {
                        name: frm.doc.estimation_id
                    }
                },
                callback: function(r) {
                    if (r.message) {
                        console.log("------------", r.message);
                        frm.set_value('customer_name', r.message.cus_name);
                        frm.set_value('phone_number', r.message.phone);
						frm.set_value('email', r.message.email);
                        frm.set_value('company', r.message.company);
                        frm.set_value('address', r.message.address);
						frm.set_value('enquiry_for', r.message.enquiry_for);
						frm.set_value('trade_license', r.message.trade_license);
                        frm.set_value('subtotal', r.message.subtotal);
                        
                        frm.clear_table('items_child');
                        
                        r.message.items.forEach(function(item) {
                            var child = frm.add_child('items_child');
                            child.item_name = item.item_name;
                            child.quantity = item.quantity;
                            child.unit_price = item.unit_price;
                            child.total = item.total;
                            child.cst = item.cst;
							child.cst_value = item.cst_value;
							child.sp = item.sp;
							child.cst_total = item.cst_total;
                        });
                        frm.refresh_field('items_child');
                    }
                }
            });
        }
	},
    
});