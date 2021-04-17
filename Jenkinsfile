pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        dir(path: '/var/lib/jenkins/workspace/morsid') {
          ws(dir: '/var/lib/jenkins/workspace/morsid') {
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
}