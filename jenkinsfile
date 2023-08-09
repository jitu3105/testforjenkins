pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 5173:5173'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}