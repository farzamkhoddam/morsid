pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        ws(dir: '/var/lib/jenkins/workspace/morsid')
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