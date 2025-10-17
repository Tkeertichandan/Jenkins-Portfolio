pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/Users/apple/TKC/Software's/apache-maven-3.9.11/bin:${env.PATH}"
        // Use symlink to avoid apostrophe issues
        TOMCAT_HOME = "/Users/apple/TKC/Software's/apache-tomcat-10.1.47"
    }

    stages {

        // ===== FRONTEND BUILD =====
        stage('Build Frontend') {
            steps {
                dir('portfe') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        // ===== FRONTEND DEPLOY =====
        stage('Deploy Frontend to Tomcat') {
            steps {
                sh '''
                FRONTEND_PATH="$TOMCAT_HOME/webapps"

                echo " Deploying frontend to: $FRONTEND_PATH"

                # Remove old frontend
                rm -rf "$FRONTEND_PATH/myportfolio"

                # Create new folder and copy built files
                mkdir -p "$FRONTEND_PATH/myportfolio"
                cp -R portfe/dist/* "$FRONTEND_PATH/myportfolio"

                echo "Frontend deployed successfully!"
                '''
            }
        }

        // ===== BACKEND BUILD =====
        stage('Build Backend') {
            steps {
                dir('PortfolioBackend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        // ===== BACKEND DEPLOY =====
        stage('Deploy Backend to Tomcat') {
            steps {
                sh '''
                WEBAPPS_PATH="$TOMCAT_HOME/webapps"

                echo " Deploying backend WAR to: $WEBAPPS_PATH"

                # Remove old WAR and exploded folder
                rm -f "$WEBAPPS_PATH/springbootportfolioapi.war"
                rm -rf "$WEBAPPS_PATH/springbootportfolioapi"

                # Copy new WAR
                cp PortfolioBackend/target/*.war "$WEBAPPS_PATH/springbootportfolioapi.war"

                echo " Backend deployed successfully!"
                '''
            }
        }
    }

    post {
        success {
            echo ' Deployment Successful!'
        }
        failure {
            echo ' Pipeline Failed.'
        }
    }
}
