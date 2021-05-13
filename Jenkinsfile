pipeline {
  agent any
  stages {
    stage('Docker build ') {
      parallel {
        stage('Development') {
          when {
            branch 'development'
          }
          steps {
            sh '''cp /home/ec2-user/projects/envfiles/morsid-front/dev .env
docker build -t morsid-front-dev:${BUILD_NUMBER} . 
docker tag morsid-front-dev:${BUILD_NUMBER} morsid-front-dev:latest '''
          }
        }

        stage('Master') {
          when {
            branch 'master'
          }
          steps {
            sh '''cp /home/ec2-user/projects/envfiles/morsid-front/prod .env
docker build -t morsid-front:${BUILD_NUMBER} . 
docker tag morsid-front:${BUILD_NUMBER} morsid-front:latest '''
          }
        }

      }
    }

    stage('Docker restart ') {
      parallel {
        stage('Development') {
          when {
            branch 'development'
          }
          steps {
            sh '''docker stop morsid-f-dev || true
docker run -p 3002:3000/tcp --name=morsid-f-dev -d --rm morsid-front-dev:latest
'''
          }
        }

        stage('Master') {
          when {
            branch 'master'
          }
          steps {
            sh '''docker stop morsid-f || true
docker run -p 3001:3000/tcp --name=morsid-f -d --rm morsid-front:latest
docker system prune --volumes -f'''
          }
        }

      }
    }

  }
}