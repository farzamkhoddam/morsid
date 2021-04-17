pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        nodejs('Node') {
          sh '''yarn build
yarn install'''
        }

      }
    }

  }
}