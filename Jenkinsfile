pipeline {
  agent any
  stages {
    stage('Go To WorkSpace') {
      steps {
        ws(dir: '/var/lib/jenkins/workspace/morsid-front')
      }
    }

    stage('Select Node Version') {
      steps {
        nodejs 'Node'
      }
    }

    stage('Build') {
      steps {
        sh '''yarn install
yarn build'''
      }
    }

  }
}