pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        ws(dir: '/var/lib/jenkins/workspace/morsid-front')
        nodejs 'Node'
        sh '''yarn install
yarn build'''
      }
    }

  }
}