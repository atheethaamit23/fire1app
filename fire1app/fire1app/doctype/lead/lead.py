# Copyright (c) 2024, Atheetha and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Lead(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from erpnext.crm.doctype.crm_note.crm_note import CRMNote
		from frappe.types import DF

		annual_revenue: DF.Currency
		blog_subscriber: DF.Check
		campaign_name: DF.Link | None
		city: DF.Data | None
		company: DF.Link | None
		company_name: DF.Data | None
		country: DF.Link | None
		customer: DF.Link | None
		disabled: DF.Check
		email_id: DF.Data | None
		fax: DF.Data | None
		first_name: DF.Data | None
		gender: DF.Link | None
		image: DF.AttachImage | None
		industry: DF.Link | None
		job_title: DF.Data | None
		language: DF.Link | None
		last_name: DF.Data | None
		lead_name: DF.Data | None
		lead_owner: DF.Link | None
		market_segment: DF.Link | None
		middle_name: DF.Data | None
		mobile_no: DF.Data | None
		naming_series: DF.Literal["CRM-LEAD-.YYYY.-"]
		no_of_employees: DF.Literal["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]
		notes: DF.Table[CRMNote]
		phone: DF.Data | None
		phone_ext: DF.Data | None
		qualification_status: DF.Literal["Unqualified", "In Process", "Qualified"]
		qualified_by: DF.Link | None
		qualified_on: DF.Date | None
		request_type: DF.Literal["", "Product Enquiry", "Request for Information", "Suggestions", "Other"]
		salutation: DF.Link | None
		source: DF.Link | None
		state: DF.Data | None
		status: DF.Literal["Lead", "Open", "Replied", "Opportunity", "Quotation", "Lost Quotation", "Interested", "Converted", "Do Not Contact"]
		territory: DF.Link | None
		title: DF.Data | None
		type: DF.Literal["", "Client", "Channel Partner", "Consultant"]
		unsubscribed: DF.Check
		website: DF.Data | None
		whatsapp_no: DF.Data | None
	# end: auto-generated types
	pass
