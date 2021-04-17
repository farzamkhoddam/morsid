pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        nodejs('Node') {
          sh '''yarn install

yarn build
'''
        }

      }
    }

  }
}