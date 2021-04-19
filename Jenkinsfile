pipeline {
  agent any
  stages {
    stage('Docker build ') {
      parallel {
        stage('Development') {
          steps {
            sh '''docker build -t morsid-front-dev:${BUILD_NUMBER} . 

docker tag morsid-front-dev:${BUILD_NUMBER} morsid-front-dev:latest '''
          }
        }

        stage('Master') {
          steps {
            sh 'echo hi'
          }
        }

      }
    }

    stage('Docker restart ') {
      parallel {
        stage('Development') {
          steps {
            sh '''docker stop morsid-f-d || true
docker run -p 3001:3000/tcp --name=morsid-f-d -d --rm morsid-front-dev:latest

'''
          }
        }

        stage('Master') {
          steps {
            sh 'echo bye'
          }
        }

      }
    }

  }
}