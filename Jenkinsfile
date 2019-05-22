pipeline {

    //agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
    /*
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }*/
    }
}