# Copyright (c) 2024, Atheetha and contributors
# For license information, please see license.txt
# import frappe
# from frappe.model.document import Document


# class FEstimation(Document):
    
# 	@frappe.whitelist()
# 	def transfer_data(estimation_name):
# 		# Fetch the F Estimation document
# 		estimation_doc = frappe.get_doc('F Estimation', estimation_name)
		
# 		# Create a new F Customer document
# 		customer_doc = frappe.new_doc('F Quotation')
# 		customer_doc.customer_name = estimation_doc.customer_name
# 		# Copy other necessary fields from F Estimation to F Customer
		
# 		# Save the F Customer document
# 		customer_doc.insert()
		
# 		# Copy data from the child table
# 		for item in estimation_doc.items:
# 			customer_item = customer_doc.append('items', {})
# 			customer_item.quantity = item.quantity
# 			customer_item.sp = item.sp
# 			customer_item.cst_total = item.cst_total
			
# 		customer_doc.save()
# 		return customer_doc.name



import frappe
from frappe.model.document import Document
class FEstimation(Document):
    pass
