pipeline {
  agent any
  stages {
    stage('Workspace') {
      steps {
        ws(dir: '/var/lib/jenkins/workspace/morsid-front-${GIT_BRANCH}')
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