# Personal Portfolio Website

This repository contains the source code and assets for my personal portfolio website. Developed using HTML, CSS, and JavaScript, the site is hosted on AWS utilizing Amazon S3 and Route 53 for seamless scalability and reliability.

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

### 5. Setting up a CI/CD pipeline to automatically deploy your GitHub repository to an AWS S3 bucket

- Set Up OIDC Authentication for GitHub Actions
    - Create an IAM Role for GitHub Actions
    - Attach an S3 Access Policy
    - Add a Trust Policy for GitHub
- Use IAM Role in GitHub Actions Workflow

#### ✅ Benefits of Using OIDC for GitHub Actions

✔ **No long-term AWS access keys** stored in GitHub.  
✔ **More secure** than hardcoded credentials.  
✔ **GitHub Actions dynamically assumes the IAM role** when needed.  
✔ **Follows AWS security best practices** (least privilege principle).


## Technologies Used

- **Amazon S3**: Secure, scalable object storage for static website hosting.
- **Route 53**: A robust DNS service ensuring efficient domain name management.
- **HTML**: Defines the website’s structure and content.
- **CSS**: Enhances styling and layout.
- **JavaScript**: Implements interactive and dynamic functionalities.


## Continuous Improvement

I am committed to continuously improving and enhancing my website by adding new features, optimizing performance, and refining the user experience. Feedback and suggestions are always welcome!


