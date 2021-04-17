pipeline {
  agent any
  stages {
    stage('Node') {
      steps {
        nodejs 'Node'
      }
    }

    stage('Build') {
      steps {
        sh '''yarn install
yarn build
'''
      }
    }

  }
}