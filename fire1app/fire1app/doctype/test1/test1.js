// Copyright (c) 2024, Atheetha and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Test1", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on("Test1", {
	refresh(frm) {
        frm.call({
            method: 'get_hello_message',
            args: {
                name: 'John Doe'
            },
            callback: function(response) {
                // Handle the response
                if (response.message) {
                    console.log(response.message);  // Output: Hello, John Doe!
                }
            }
        });

	},
});


