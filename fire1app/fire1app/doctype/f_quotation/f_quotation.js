// Copyright (c) 2024, Atheetha and contributors
// For license information, please see license.txt

// frappe.ui.form.on("F Quotation", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('F Quotation', {
	estimation_id: function(frm) {
		
		frappe.db.get_value("F Estimation", {'name':frm.doc.estimation_id}, ['customer_name'], function(value){
		    frm.set_value("customer_name", value.customer_name);
		});
	if(frm.doc.estimation_id){
	    frappe.call({
	        method: 'frappe.client.get',
	        args:{
	            doctype: 'F Estimation',
	            filter: {
	                name: frm.doc.estimation_id
	            }
	        },
	        callback: function(r)
	        {
	            if(r.message){
	                console.log("------------", r.message);
	                frm.set_value('customer_name', r.message.customer_name);
	                
	                 frm.clear_table('f_items');
                        
                        r.message.items.forEach(function(item) {
                            var child = frm.add_child('f_items');
                            child.item_name = item.item_name;
                            
                        });
                        frm.refresh_field('f_items');
	            }
	        }
	    });
	}
	
	}
	});