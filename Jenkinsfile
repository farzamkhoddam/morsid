pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        ws(dir: '/var/lib/jenkins/workspace/morsid-front-${BRANCH_NAME}') {
          nodejs('Node') {
            sh '''yarn install

yarn build
'''
          }

        }

      }
    }

  }
}