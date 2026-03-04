# FormSubmit Integration Guide

This document provides a complete guide for configuring FormSubmit to work with your Dairy Guru Ji website forms.

## Forms Integrated

### 1. Contact Form (`/contact`)
- **Form Action**: `https://formsubmit.co/dairyguruji@gmail.com`
- **Form Name**: `contact-form`
- **Fields**: name, phone, email, business_type, message
- **Auto-response**: "Thank you for your enquiry! We will get back to you shortly."
- **Redirect**: `https://www.dairyguruji.com/contact?success=true`

### 2. Dealer Application Form (`/dealer`)
- **Form Action**: `https://formsubmit.co/dairyguruji@gmail.com`
- **Form Name**: `dealer-application`
- **Fields**: name, phone, email, business_type, territory, experience, message
- **Auto-response**: "Thank you for your dealer application! We will review your details and contact you within 24-48 hours."
- **Redirect**: `https://www.dairyguruji.com/dealer?success=true`

### 3. Careers Application Form (`/careers`)
- **Form Action**: `https://formsubmit.co/dairyguruji@gmail.com`
- **Form Name**: `career-application`
- **Fields**: name, email, role, ctc, resume (file upload)
- **Auto-response**: "Thank you for your application! We will review your resume and contact you if there's a match."
- **Redirect**: `https://www.dairyguruji.com/careers?success=true`

## FormSubmit Configuration Required

To complete the integration, you need to configure FormSubmit with the following settings:

### 1. Create Forms in FormSubmit Dashboard

For each form, create a new form in your FormSubmit dashboard:

#### Contact Form Configuration
- **Form Name**: Contact Form
- **Email**: dairyguruji@gmail.com
- **Form ID**: contact-form
- **Settings**:
  - Disable CAPTCHA
  - Enable auto-response
  - Set redirect URL to your contact page with success parameter

#### Dealer Application Form Configuration
- **Form Name**: Dealer Application
- **Email**: dairyguruji@gmail.com
- **Form ID**: dealer-application
- **Settings**:
  - Disable CAPTCHA
  - Enable auto-response
  - Set redirect URL to your dealer page with success parameter

#### Careers Form Configuration
- **Form Name**: Career Application
- **Email**: dairyguruji@gmail.com
- **Form ID**: career-application
- **Settings**:
  - Disable CAPTCHA
  - Enable file uploads (PDF, DOC, DOCX)
  - Enable auto-response
  - Set redirect URL to your careers page with success parameter

### 2. Email Templates

#### Contact Form Auto-response
```
Subject: Thank you for your enquiry!

Body:
Dear [name],

Thank you for your enquiry! We will get back to you shortly.

Best regards,
Dairy Guru Ji Team
```

#### Dealer Application Auto-response
```
Subject: Dealer Application Received

Body:
Dear [name],

Thank you for your dealer application! We will review your details and contact you within 24-48 hours.

Best regards,
Dairy Guru Ji Team
```

#### Careers Form Auto-response
```
Subject: Application Received

Body:
Dear [name],

Thank you for your application! We will review your resume and contact you if there's a match.

Best regards,
Dairy Guru Ji Team
```

### 3. Advanced Settings

#### Spam Protection
- Keep CAPTCHA disabled as configured in forms
- Consider enabling FormSubmit's built-in spam filtering
- Set up email notifications for form submissions

#### File Upload Settings (Careers Form)
- Maximum file size: 5MB
- Allowed file types: PDF, DOC, DOCX
- File naming: Original filename with timestamp

#### Email Notifications
- Primary email: dairyguruji@gmail.com
- Consider adding backup email addresses
- Set up notification preferences (immediate, daily digest)

## Testing Your Forms

### 1. Test Contact Form
1. Visit `/contact` page
2. Fill out the form with test information
3. Submit the form
4. Verify:
   - You receive the auto-response email
   - You receive the form submission email
   - The page redirects correctly
   - All form fields are captured properly

### 2. Test Dealer Application Form
1. Visit `/dealer` page
2. Fill out the dealer application form
3. Submit the form
4. Verify:
   - Auto-response email is sent
   - Form submission email is received
   - All business-related fields are captured
   - Redirect works correctly

### 3. Test Careers Form
1. Visit `/careers` page
2. Upload a test resume file
3. Fill out the application form
4. Submit the form
5. Verify:
   - Auto-response email is sent
   - Form submission email is received with attachment
   - File upload works correctly
   - All fields are captured properly

## Troubleshooting

### Common Issues

#### Forms Not Submitting
- Check FormSubmit account is active
- Verify form IDs match between code and dashboard
- Ensure email address is correct

#### Missing Auto-responses
- Check FormSubmit auto-response settings
- Verify email templates are configured
- Check spam folders

#### File Upload Issues
- Verify file size limits in FormSubmit settings
- Check allowed file types
- Ensure `encType="multipart/form-data"` is set (already configured)

#### Redirect Issues
- Verify redirect URLs in FormSubmit dashboard
- Check for typos in URL parameters

### Contact FormSubmit Support

If you encounter issues:
1. Check FormSubmit documentation: https://formsubmit.co/
2. Contact FormSubmit support through their website
3. Verify your account status and plan limits

## Next Steps

1. **Configure FormSubmit Dashboard**: Set up the three forms with the configurations above
2. **Test All Forms**: Complete the testing checklist for each form
3. **Monitor Submissions**: Check your email regularly for form submissions
4. **Review Analytics**: Use FormSubmit's analytics to track form performance
5. **Optimize**: Make adjustments based on submission patterns and user feedback

## Form Field Mapping

### Contact Form Fields
- `name` → Contact name
- `phone` → Phone number
- `email` → Email address
- `business_type` → Business type dropdown
- `message` → Message textarea

### Dealer Application Fields
- `name` → Full name
- `phone` → Phone number
- `email` → Email address
- `business_type` → Business type
- `territory` → Territory/district
- `experience` → Experience years
- `message` → Additional message

### Careers Form Fields
- `name` → Full name
- `email` → Email address
- `role` → Job role selection
- `ctc` → Expected CTC
- `resume` → Resume file upload

All forms are now ready to use with FormSubmit! 🎉