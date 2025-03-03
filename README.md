# Personal Portfolio Website

This repository contains the source code and assets for my personal portfolio website. Developed using HTML, CSS, and JavaScript, the site is hosted on AWS utilizing Amazon S3 and CloudFront and Route 53 for seamless scalability and reliability.

## Deploying the Website on Amazon S3

### 1. Domain Registration and S3 Setup

- Register a custom domain through Route 53.
- Create an S3 bucket with a name matching the domain.

### 2. Configuring the S3 Bucket

- Disable "Block all public access."
- Upload website files (HTML, CSS, JavaScript).
- Enable static website hosting.
- Set `index.html` as the default entry point.

### 3. Setting Up a Public Access Policy

To grant public read access, apply the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadAccess",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::yourdomain.com/*"
  }]
}
```

### 4. Configuring Route 53 for Domain Routing

- Create a new record in the hosted zone.
- Enable Alias routing.
- Point the record to the S3 website endpoint (US East N. Virginia).
- Use a Simple routing policy for efficient domain resolution.



## Technologies Used

- **Amazon S3**: Secure, scalable object storage for static website hosting.
- **CloudFront**: Content delivery network (CDN) that securely delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds.
- **Route 53**: A robust DNS service ensuring efficient domain name management.
- **HTML**: Defines the website’s structure and content.
- **CSS**: Enhances styling and layout.
- **JavaScript**: Implements interactive and dynamic functionalities.
- **AWS Lambda**: Serverless compute service that runs code in response to events without requiring server management, automatically scaling based on demand.
- **Amazon API Gateway**: Fully managed service that enables developers to create, publish, and manage APIs at any scale, acting as the "front door" for applications to access data or functionality.
- **Amazon SES (Simple Email Service)**: Cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails.
- **Amazon DynamoDB**: Fully managed NoSQL database service that provides fast and predictable performance with seamless scalability, offering built-in security and backup recovery.
- **OIDC (OpenID Connect)**: Identity layer built on top of the OAuth 2.0 protocol that allows clients to verify the identity of end-users based on the authentication performed by an authorization server.
- **CI/CD (Continuous Integration/Continuous Deployment)**: Software development practice where code changes are automatically built, tested, and deployed to production, ensuring reliable and rapid delivery of applications.


## Continuous Improvement

### Set up a CI/CD pipeline to automatically deploy your GitHub repository to an AWS S3 bucket

- Set Up OIDC Authentication for GitHub Actions
    - Create an IAM Role for GitHub Actions
    - Attach an S3 Access Policy
    - Add a Trust Policy for GitHub
- Use IAM Role in GitHub Actions Workflow

#### Benefits of Using OIDC for GitHub Actions

✔ **No long-term AWS access keys** stored in GitHub.  
✔ **More secure** than hardcoded credentials.  
✔ **GitHub Actions dynamically assumes the IAM role** when needed.  
✔ **Follows AWS security best practices** (least privilege principle).

### Add a Contact Form with AWS Lambda & API Gateway

A contact form aws implemented using AWS services to process and store form submissions. The form allows users to submit messages, which are then processed by an AWS Lambda function via API Gateway. Messages can be stored in Amazon DynamoDB or sent via Amazon Simple Email Service (SES).

### Features
- **API Gateway + Lambda**: Handles and processes form submissions.
- **DynamoDB or SES**: Messages can be stored in DynamoDB or forwarded as emails using SES.
- **Serverless Architecture**: No need to manage servers, ensuring scalability and cost-efficiency.

### Services Used
- **AWS Lambda**: Processes form submissions.
- **API Gateway**: Exposes a RESTful endpoint for the form.
- **Amazon DynamoDB**: Optionally stores form messages.
- **Amazon Simple Email Service (SES)**: Sends form submissions as emails.

### Setup Instructions

#### 1. Deploy API Gateway & Lambda
1. Create a Lambda function to process form submissions.
2. Configure API Gateway to trigger the Lambda function via an HTTP endpoint.

#### 2. Configure SES (Optional)
1. Verify an email address in SES.
2. Set up SES to send emails from the contact form.

#### 3. Configure DynamoDB (Optional)
1. Create a DynamoDB table to store messages.
2. Update the Lambda function to save messages in the table.

### Usage
- Users submit a message through the contact form.
- The API Gateway triggers the Lambda function.
- The Lambda function processes and stores the message in DynamoDB or sends an email via SES.

### 🔧 Future Enhancements
- Implement reCAPTCHA for spam protection.
- Add authentication for API requests.
- Improve error handling and logging.

---
This project provides a scalable, serverless way to handle contact form submissions using AWS services.




