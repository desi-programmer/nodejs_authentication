# Node Passport Authentication

This repo contains code for Local email-passport authentication and Google Authentication.

## Blog (Local Auth) : [Here](https://desiprogrammer.com/blogs/node-express-passport-email-authentication)

## Blog (Google Auth) : [Here](https://desiprogrammer.com/blogs/nodejs-express-google-authentication)

## Tutorial (Local Auth) : [Here](https://www.youtube.com/watch?v=-ZxXS9gsWX4)

## Tutorial (Google Auth) : [Here](https://www.youtube.com/watch?v=d-IToO3gLrM)

## 1. USAGE

### Install All Packages

```bash
npm install express ejs mongoose bcryptjs connect-flash cookie-parser express-session csurf memorystore passport passport-local passport-google-oauth20 nodemailer
```

### Install Nodemon For Development

```bash
npm install -D nodemon
```

### Add mongoURI ,Google client ID and Secret, smtp config for sending emails 
### And Feel free to delete the screenshots directory

# Added Options

![Image1](screenshots/error_flash_on_accessing_unauthenticated_routes.png)
![Image2](screenshots/reset_password_added.png)
![Image3](screenshots/change_password_option.png)
![Image4](screenshots/alert_with_working_email_send.png)

# Todo ( ✔ -> Done )

✔ Add User Password rest
✔ Add Verify Account
✔ Add Email Sending Options
✔ Added Flash messages for errors


