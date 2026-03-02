pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/mapawar007/devops-app.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f devops-container || true'
                sh 'docker run -d -p 3000:3000 --name devops-container devops-app'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    docker login -u $DOCKER_USER -p $DOCKER_PASS
                    docker tag devops-app $DOCKER_USER/devops-app:latest
                    docker push $DOCKER_USER/devops-app:latest
                    '''
                }
            }
        }

    }
}
