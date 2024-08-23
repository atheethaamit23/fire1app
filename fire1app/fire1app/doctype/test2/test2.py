# Copyright (c) 2024, Atheetha and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Test2(Document):
	pass
def update_f_enquiry(doc, method):
    try:
        # SQL query to update the 's' field in 'F Enquiry'
        sql_query = """
            UPDATE `tabF Enquiry`
            SET s = 'ok'
            WHERE name_e = %s
        """

        # Execute the query with parameters
        frappe.db.sql(sql_query, (doc.name_c,))

        # Commit the transaction
        frappe.db.commit()

        # Optional: Log success message
        frappe.msgprint(f"Updated related F Enquiries for customer {doc.name_c} to set 's' to 'ok'.")

    except Exception as e:
        # Log any errors that occur
        frappe.log_error(message=str(e), title="Error Updating F Enquiry")