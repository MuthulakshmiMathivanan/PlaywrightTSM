pipeline 
{ 
	agent {label 'WinNode'}
	stages 
	{
	    
		stage('Delete workspace')
		{
			steps
			{
		    	cleanWs()
			}
		}
		
		stage('Fetch From Github')
		{
			steps 
			{

			// Checkout the repository from GitHub
			git branch: 'main',
			//credentialsId: '',
			url: 'https://github.com/testerintelligent/PWwithTS.git'
			}
		} 			

			
		stage('Install Dependencies'){
			steps {
			bat 'npm install'
			bat 'npx playwright install'
			}
		}
		
		
		stage('Execution') {
			steps {
				bat 'npm run test --silent'
			}
		}

	}
		post
		{
			always
			{
			junit allowEmptyResults: true, skipMarkingBuildUnstable: true, skipPublishingChecks: true, testResults: 'test-results/report.xml'
			sleep(time:7,unit:"SECONDS")
			cucumber buildStatus: 'UNCHANGED', customCssFiles: '', customJsFiles: '', fileIncludePattern: '/*.json', jsonReportDirectory:'test-results/', reportTitle: 'Playwright_TS', sortingMethod: 'ALPHABETICAL', trendsLimit: 5
			}
	}	  
}
