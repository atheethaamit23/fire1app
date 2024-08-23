# Copyright (c) 2024, Atheetha and contributors
# For license information, please see license.txt

# # import frappe
# from frappe.model.document import Document


# class Test1(Document):
import frappe

@frappe.whitelist()
def get_hello_message(name):
    print(f"Received request for {name}")
    return f"Hello, {name}!"