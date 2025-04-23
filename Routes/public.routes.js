const public_routes = {};

// --------- ( Main ) --------

public_routes.admin = "/index";

public_routes.doctor_dashboard = "/doctor-dashboard";

public_routes.patient_dashboard = "/patient-dashboard";

//-------- doctors --------//

public_routes.doctors = "/doctors";

public_routes.add_doctor = "/add-doctor";

public_routes.edit_doctor = "/edit-doctor";

public_routes.doctor_profile = "/doctor-profile";

public_routes.doctor_setting = "/doctor-setting";

//-------- staff --------//

public_routes.add_staff = "/add-staff";

public_routes.edit_staff = "/edit-staff";

public_routes.staff_attendance = "/staff-attendance";

public_routes.staff_holidays = "/staff-holidays";

public_routes.staff_leave = "/staff-leave";

public_routes.staff_list = "/staff-list";

public_routes.staff_profile = "/staff-profile";

public_routes.staff_setting = "/staff-setting";

public_routes.add_leave = "/add-leave";

public_routes.edit_leave = "/edit-leave";

//-------- Doctor Schedule --------//

public_routes.schedule = "/schedule";

public_routes.add_schedule = "/add-schedule";

public_routes.edit_schedule = "/edit-schedule";

//-------- Accounts --------//

public_routes.invoices = "/invoices";

public_routes.create_invoice = "/create-invoice";

public_routes.edit_invoice = "/edit-invoice";

public_routes.invoices_view = "/invoice-view";

public_routes.payments = "/payments";

public_routes.add_payment = "/add-payment";

public_routes.edit_payment = "/edit-payment";

public_routes.expenses = "/expenses";

public_routes.add_expense = "/add-expense";

public_routes.edit_expense = "/edit-expense";

public_routes.provident_fund = "/provident-fund";

public_routes.add_provident_fund = "/add-provident-fund";

public_routes.edit_provident_fund = "/edit-provident-fund";

public_routes.taxes = "/taxes";

public_routes.add_tax = "/add-tax";

public_routes.edit_tax = "/edit-tax";

//-------- Blog --------//

public_routes.blog = "/blog";

public_routes.add_blog = "/add-blog";

public_routes.blog_details = "/blog-details";

public_routes.edit_blog = "/edit-blog";

//-------- Invoice --------//

public_routes.invoices_list = "/invoices-list";

public_routes.invoices_grid = "/invoices-grid";

public_routes.add_invoice = "/add-invoice";

public_routes.edit_invoices = "/edit-invoices";

public_routes.view_invoice = "/view-invoice";

public_routes.invoices_settings = "/invoices-settings";

public_routes.bank_settings = "/bank-settings";

public_routes.tax_settings = "/tax-settings";

public_routes.invoices_paid = "/invoices-paid";

public_routes.invoices_overdue = "/invoices-overdue";

public_routes.invoices_draft = "/invoices-draft";

public_routes.invoices_recurring = "/invoices-recurring";

public_routes.invoices_cancelled = "/invoices-cancelled";

// ---------- ( UI Elements ) -----------

//-------- Tables --------//

public_routes.basic_table = "/tables-basic";

public_routes.data_table = "/tables-datatables";

public_routes.calendar = "/calendar";

// ---------- ( Extras ) ------------

//-------- Pages --------//

public_routes.profile = "/profile";

public_routes.edit_profile = "/edit-profile";

public_routes.chats = "/chat";

public_routes.gallery = "/gallery";

public_routes.blank_page = "/blank-page";

//-------- Error --------//

public_routes.pageNotFound = "/error-400";

public_routes.serverError = "/error-500";

public_routes.patients = "/patients";

public_routes.add_patient = "/add-patient";

public_routes.edit_patient = "/edit-patient";

public_routes.patient_profile = "/patient-profile";

public_routes.patient_setting = "/patient-setting";

public_routes.appointments = "/appointments";

public_routes.add_appointment = "/add-appointment";

public_routes.edit_appointment = "/edit-appointment";

public_routes.departments = "/departments";

public_routes.add_department = "/add-department";

public_routes.edit_department = "/edit-department";

public_routes.salary = "/salary";

public_routes.salary_view = "/salary-view";

public_routes.edit_salary = "/edit-salary";

public_routes.add_salary = "/add-salary";

public_routes.chat = "/chat";

public_routes.voice_call = "/voice-call";

public_routes.video_call = "/video-call";

public_routes.incoming_call = "/incoming-call";

public_routes.compose = "/compose";

public_routes.inbox = "/inbox";

public_routes.mail_view = "/mail-view";

public_routes.assets = "/asset";

public_routes.add_asset = "/add-asset";

public_routes.edit_asset = "/edit-asset";

public_routes.activities = "/activities";

public_routes.expense_reports = "/expense-reports";

public_routes.invoice_reports = "/invoice-reports";

public_routes.settings = "/settings";

public_routes.localization_details = "/localization-details";

public_routes.payment_settings = "/payment-settings";

public_routes.email_settings = "/email-settings";

public_routes.social_settings = "/social-settings";

public_routes.social_links = "/social-links";

public_routes.seo_settings = "/seo-settings";

public_routes.theme_settings = "/theme-settings";

public_routes.change_password = "/change-password";

public_routes.others_settings = "/others-settings";

// ---------- ( UI Elements ) -----------

public_routes.uikit = "/uikit";

public_routes.typography = "/typography";

public_routes.tabs = "/tabs";

public_routes.form_basic_inputs = "/form-basic-inputs";

public_routes.form_input_groups = "/form-input-groups";

public_routes.form_horizontal = "/form-horizontal";

public_routes.form_vertical = "/form-vertical";

// ---------- ( Extras ) ------------

public_routes.login = "/login";

public_routes.confirm_mail = "/confirm-mail";

public_routes.register = "/register";

public_routes.forgot_password = "/forgot-password";

public_routes.change_password2 = "/change-password2";

public_routes.lock_screen = "/lock-screen";

module.exports = public_routes;
