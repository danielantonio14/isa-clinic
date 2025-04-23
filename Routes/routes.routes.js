const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");

const index = "index";
const index_without_nav = "index-without-nav";
const index_error = "index-error";

route.use(function (req, res, next) {
  let url_replace_options = req.url.replace("?", "").replace("/", "");
  options = req.url.replace("?", "").replace("/", "");
  let routes = {};
  for (var key in public_routes) {
    routes[key] = public_routes[key].replace("/", "");
  }
  res.locals.routes = routes;
  res.locals.active_path = url_replace_options;
  next();
});

// ----------- ( Main ) -----------------

route.get(public_routes.admin, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "dashboard/admin",
  });
});

route.get(public_routes.doctor_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "dashboard/doctor-dashboard",
  });
});

route.get(public_routes.patient_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",

    page_path: "dashboard/patient-dashboard",
  });
});

// ---------------- Doctor -------------------- //

route.get(public_routes.doctors, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctors/doctors",
  });
});

route.get(public_routes.add_doctor, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctors/adddoctor",
  });
});

route.get(public_routes.edit_doctor, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctors/editdoctor",
  });
});

route.get(public_routes.doctor_profile, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctors/doctorprofile",
  });
});
route.get(public_routes.doctor_setting, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctors/doctorsetting",
  });
});

// ---------------- Staff -------------------- //

route.get(public_routes.add_staff, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/addstaff",
  });
});

route.get(public_routes.edit_staff, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/editstaff",
  });
});

route.get(public_routes.staff_attendance, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/staffattendance",
  });
});

route.get(public_routes.staff_holidays, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/staffholidays",
  });
});

route.get(public_routes.staff_leave, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/staffleave",
  });
});

route.get(public_routes.add_leave, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/addleave",
  });
});

route.get(public_routes.edit_leave, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/editleave",
  });
});

route.get(public_routes.staff_list, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/stafflist",
  });
});

route.get(public_routes.staff_profile, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/staffprofile",
  });
});

route.get(public_routes.staff_setting, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "staff/staffsetting",
  });
});

// ---------------- Doctor Schedule -------------------- //

route.get(public_routes.schedule, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctorschedule/schedule",
  });
});

route.get(public_routes.add_schedule, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctorschedule/addschedule",
  });
});

route.get(public_routes.edit_schedule, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "doctorschedule/editschedule",
  });
});

// ---------------- Accounts -------------------- //

route.get(public_routes.invoices, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/invoices",
  });
});

route.get(public_routes.expenses, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/expenses",
  });
});

route.get(public_routes.payments, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/payments",
  });
});

route.get(public_routes.provident_fund, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/providentfund",
  });
});

route.get(public_routes.taxes, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/taxes",
  });
});

route.get(public_routes.add_expense, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/addexpense",
  });
});

route.get(public_routes.edit_expense, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/editexpense",
  });
});

route.get(public_routes.invoices_view, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/invoicesview",
  });
});

route.get(public_routes.create_invoice, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/createinvoice",
  });
});

route.get(public_routes.edit_invoice, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/editinvoice",
  });
});

route.get(public_routes.add_payment, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/addpayment",
  });
});

route.get(public_routes.edit_payment, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/editpayment",
  });
});

route.get(public_routes.add_tax, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/addtax",
  });
});

route.get(public_routes.edit_tax, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/edittax",
  });
});

route.get(public_routes.add_provident_fund, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/addprovidentfund",
  });
});

route.get(public_routes.edit_provident_fund, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "accounts/editprovidentfund",
  });
});

// ---------------- Blog -------------------- //

route.get(public_routes.blog, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "blog/blog",
  });
});

route.get(public_routes.add_blog, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "blog/addblog",
  });
});

route.get(public_routes.blog_details, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "blog/blogdetails",
  });
});

route.get(public_routes.edit_blog, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "blog/editblog",
  });
});

// ---------------- Invoice -------------------- //

route.get(public_routes.invoices_list, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoiceslist",
  });
});

route.get(public_routes.invoices_grid, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoicesgrid",
  });
});

route.get(public_routes.add_invoice, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/addinvoice",
  });
});

route.get(public_routes.edit_invoices, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/editinvoices",
  });
});

route.get(public_routes.view_invoice, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/viewinvoice",
  });
});

route.get(public_routes.invoices_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoicessettings",
  });
});

route.get(public_routes.bank_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/banksettings",
  });
});

route.get(public_routes.tax_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/taxsettings",
  });
});

route.get(public_routes.invoices_paid, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoicespaid",
  });
});

route.get(public_routes.invoices_overdue, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoicesoverdue",
  });
});

route.get(public_routes.invoices_draft, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoicesdraft",
  });
});

route.get(public_routes.invoices_recurring, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoicesrecurring",
  });
});

route.get(public_routes.invoices_cancelled, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "invoice/invoicescancelled",
  });
});

route.get(public_routes.patients, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "patients/patients",
  });
});

route.get(public_routes.add_patient, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "patients/add-patient",
  });
});

route.get(public_routes.edit_patient, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "patients/edit-patient",
  });
});

route.get(public_routes.patient_profile, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "patients/patient-profile",
  });
});

route.get(public_routes.patient_setting, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "patients/patient-setting",
  });
});

route.get(public_routes.appointments, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "appointments/appointments",
  });
});

route.get(public_routes.add_appointment, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "appointments/add-appointment",
  });
});

route.get(public_routes.edit_appointment, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "appointments/edit-appointment",
  });
});

route.get(public_routes.departments, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "departments/departments",
  });
});

route.get(public_routes.add_department, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "departments/add-department",
  });
});

route.get(public_routes.edit_department, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "departments/edit-department",
  });
});

route.get(public_routes.salary, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "payroll/salary",
  });
});

route.get(public_routes.salary_view, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "payroll/salary-view",
  });
});

route.get(public_routes.edit_salary, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "payroll/edit-salary",
  });
});

route.get(public_routes.add_salary, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "payroll/add-salary",
  });
});

route.get(public_routes.chat, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "chat/chat",
  });
});

route.get(public_routes.voice_call, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "calls/voice-call",
  });
});

route.get(public_routes.video_call, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "calls/video-call",
  });
});

route.get(public_routes.incoming_call, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "calls/incoming-call",
  });
});

route.get(public_routes.compose, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "email/compose",
  });
});

route.get(public_routes.inbox, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "email/inbox",
  });
});

route.get(public_routes.mail_view, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "email/mail-view",
  });
});

route.get(public_routes.assets, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "assets/assets",
  });
});

route.get(public_routes.add_asset, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "assets/add-asset",
  });
});

route.get(public_routes.edit_asset, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "assets/edit-asset",
  });
});

route.get(public_routes.activities, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "activities/activities",
  });
});

route.get(public_routes.expense_reports, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "reports/expense-reports",
  });
});

route.get(public_routes.invoice_reports, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "reports/invoice-reports",
  });
});

route.get(public_routes.settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/settings",
  });
});

route.get(public_routes.localization_details, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/localization-details",
  });
});

route.get(public_routes.payment_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/payment-settings",
  });
});

route.get(public_routes.email_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/email-settings",
  });
});

route.get(public_routes.social_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/social-settings",
  });
});

route.get(public_routes.social_links, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/social-links",
  });
});

route.get(public_routes.seo_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/seo-settings",
  });
});

route.get(public_routes.theme_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/theme-settings",
  });
});

route.get(public_routes.change_password, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/change-password",
  });
});

route.get(public_routes.others_settings, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "settings/others-settings",
  });
});

// ---------- ( UI Elements ) -----------

// ---------------- Tables -------------------- //

route.get(public_routes.basic_table, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "tables/basictable",
  });
});

route.get(public_routes.data_table, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "tables/datatable",
  });
});

// ---------------- Calendar -------------------- //

route.get(public_routes.calendar, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "calendar/calendar",
  });
});

// ---------------- Page -------------------- //

route.get(public_routes.profile, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "page/profile",
  });
});

route.get(public_routes.edit_profile, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "page/editprofile",
  });
});

route.get(public_routes.chats, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "page/chats",
  });
});

route.get(public_routes.gallery, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "page/gallery",
  });
});

route.get(public_routes.blank_page, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template ",
    page_path: "page/blankpage",
  });
});

// =============== ERROR Pages ===================== //

route.get(public_routes.pageNotFound, (req, res, next) => {
  res.render(index_error, {
    title: "Error404",
    page_path: "error-404",
    layout: index_error,
  });
});

route.get(public_routes.serverError, (req, res, next) => {
  res.render(index_error, {
    title: "Error 500",
    page_path: "error-500",
    layout: index_error,
  });
});

route.get(public_routes.uikit, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "components/uikit",
  });
});

route.get(public_routes.typography, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "components/typography",
  });
});

route.get(public_routes.tabs, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "components/tabs",
  });
});

route.get(public_routes.form_basic_inputs, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "forms/form-basic-inputs",
  });
});

route.get(public_routes.form_input_groups, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "forms/form-input-groups",
  });
});

route.get(public_routes.form_horizontal, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "forms/form-horizontal",
  });
});

route.get(public_routes.form_vertical, (req, res, next) => {
  res.render(index, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    page_path: "forms/form-vertical",
  });
});

// ---------- ( Extras ) ------------

route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    layout: index_without_nav,
    page_path: "login",
  });
});

route.get(public_routes.confirm_mail, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    layout: index_without_nav,
    page_path: "confirm-mail",
  });
});

route.get(public_routes.register, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    layout: index_without_nav,
    page_path: "register",
  });
});

route.get(public_routes.forgot_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    layout: index_without_nav,
    page_path: "forgot-password",
  });
});

route.get(public_routes.change_password2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    layout: index_without_nav,
    page_path: "change-password2",
  });
});

route.get(public_routes.lock_screen, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Preclinic - Medical & Hospital - Bootstrap 5 Admin Template",
    layout: index_without_nav,
    page_path: "lock-screen",
  });
});

route.get("/", function (req, res) {
  res.redirect(public_routes.login);
});
route.get("*", function (req, res) {
  res.redirect(public_routes.pageNotFound);
});

module.exports = route;
