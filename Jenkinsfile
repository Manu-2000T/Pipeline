pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build process successfully done...'

                build job: 'SimpleBulidjob'
            }
        }

        stage('Test') {
            steps {
                echo 'Test process successfully done...'
                build job: 'Sampletestjob'
            }
        }

        stage('Release') {
            steps {
                echo 'Release process successfully done...'
                build job: 'Samplerelesejob'  // <- fixed here
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy process successfully done...'
                build job: 'SampleDeployjob'
            }
        }
    }
}
