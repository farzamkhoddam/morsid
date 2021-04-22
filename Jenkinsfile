pipeline {
  agent any
  stages {
    stage('Install and build') {
      steps {
        nodejs('Node') {
          sh '''yarn install
yarn build'''
        }

      }
    }

  }
}