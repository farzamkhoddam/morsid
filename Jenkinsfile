pipeline {
  agent any
  stages {
    stage('Workspace') {
      steps {
        ws(dir: '/var/lib/jenkins/workspace/morsid-front')
      }
    }

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
