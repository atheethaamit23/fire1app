// Copyright (c) 2024, Atheetha and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Test2", {
// 	refresh(frm) {

// 	},
// });
// frappe.ui.form.on('Test2', {
//     on_save: function (frm) {
//         // Access the name_c field from Test2 document
//         var test1_name_c = frm.doc.name_c; // Replace 'name_c' with the actual field name that holds the Test1 reference

//         if (test1_name_c) {
//             // Fetch the Test1 document based on the name_c value from Test2
//             frappe.get_doc('Test1', test1_name_c).then(function(test1_doc) {
//                 // Access a specific field in Test1
//                 var test1_value = test1_doc.name_e; // Replace 'some_field' with the actual field name in Test1
                
//                 // Log or use Test1 data
//                test1_doc.set_value('s',"ok")
                
//                 // Optionally update a field in Test2 with Test1 data
//                 frm.set_value('testdata', test1_value); // Replace 'field_in_test2' with the actual field name in Test2
//                 frm.refresh_field('testdata'); // Refresh the field to show updated value
//             }).catch(function(error) {
//                 console.error('Error fetching Test1:', error);
//             });
//         }
//     }
// });
