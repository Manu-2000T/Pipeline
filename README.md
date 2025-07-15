## 🚀 CI/CD Pipeline with Jenkins

This project uses a Jenkins pipeline for continuous integration and deployment.  
The pipeline is defined using a `Jenkinsfile` in the root directory.

### 🛠️ Stages

1. **Checkout SCM** – Pulls the latest code from GitHub
2. **Build** – Compiles the project and prepares artifacts
3. **Test** – Runs automated tests
4. **Release** – Creates a release version (optional)
5. **Deploy** – Deploys the application to the target environment

### 📂 Jenkinsfile Location

The pipeline script is located at the root of the repo:  
```text
/Jenkinsfile
