angular.module('profile',[])

.controller('profileController', function ($scope , $window , $location ,Profile) {
	var email=$window.localStorage.getItem("job.finder.email");
	Profile.getProfile({email:email})
	.then(function(i){
		$scope.info=i;
		console.log(i)
	})
	$scope.phoneNumber=function() {
		var person = prompt("Please enter your number:", $scope.info.phone);
		if (person == null || person == "") {
		} 
		else 
		{
			Profile.setPhoneNumber({email:email,phone:person})
			.then(function(i){
				$scope.info.phone=person;
			})
		}
	}

	$scope.address=function() {
		var person = prompt("Please enter your address:", $scope.info.address);
		if (person == null || person == "") {
		} 
		else 
		{
			Profile.setAddress({email:email,address:person})
			.then(function(i){
				$scope.info.address=person;
			})
		}
	}

	$scope.work_at=function() {
		var person = prompt("Please enter name of your company that you work in:", $scope.info.work_at);
		if (person == null || person == "") {
		} 
		else 
		{
			Profile.setWorkAt({email:email,work_at:person})
			.then(function(i){
				$scope.info.work_at=person;
			})
		}
	}



	$scope.imageUpload = function(event){
         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
         	var file = files[i];
         	var reader = new FileReader();
         	reader.onload = $scope.imageIsLoaded; 
         	reader.readAsDataURL(file);
         }
     }

     $scope.imageIsLoaded = function(e){
     	$scope.$apply(function() {
     		
     		$scope.info.image_profile=e.target.result;
     		Profile.setImageProfile({email:email,image_profile:$scope.info.image_profile})
     		.then(function(i){});
     	});
     	
     }
     $scope.education=function(university,university_major,university_description){
     	var record={university:university,
     		major:university_major,
     		description:university_description};
     		$scope.info.education.push(record);	
     		Profile.addEducation({email:email,record:record})
     		.then(function(i){
     			$scope.university="";
     			$scope.university_major="";
     			$scope.university_description="";
     		})
     	}

     	$scope.skills=function(skill,skill_description){
     		var record={skill:skill,
     			description:skill_description};
     			$scope.info.skills.push(record);	
     			Profile.addSkills({email:email,record:record})
     			.then(function(i){
     				$scope.skill="";
     				$scope.skill_description="";
     				
     			})
     		}

     		$scope.technical_skills=function(technical_skill,Technical_skill_description){
     			var record={technical_skill:technical_skill,
     				description:Technical_skill_description};
     				$scope.info.technical_skills.push(record);	
     				Profile.addTechnicalSkills({email:email,record:record})
     				.then(function(i){
     					$scope.technical_skill="";
     					$scope.Technical_skill_description="";
     				})
     			}
     			$scope.certificates=function(certificate,certificate_description){
     				var record={certificate:certificate,
     					description:certificate_description};
     					$scope.info.certificates.push(record);	
     					Profile.addCertificates({email:email,record:record})
     					.then(function(i){
     						$scope.certificate="";
     						$scope.certificate_description="";
     					})
     				}
     				$scope.personal_projects=function(project,project_description){

     					var record={project:project,
     						description:project_description};
     						$scope.info.personal_projects.push(record);	
     						Profile.addPersonalProjects({email:email,record:record})
     						.then(function(i){
     							$scope.project="";
     							$scope.project_description="";
     						})
     					}
     					$scope.experiences=function(experience,experience_duration,experience_description){
     						var record={experience:experience,
     							duration:experience_duration,
     							description:experience_description};
     							$scope.info.experiences.push(record);	
     							Profile.addExperiences({email:email,record:record})
     							.then(function(i){
     								$scope.experience="";
     								$scope.experience_duration="";
     								$scope.experience_description="";
     							})
     						}


     						$scope.interests=function(interest){
     							var record={interest:interest};
     							$scope.info.interests.push(record);	
     							Profile.addInterests({email:email,record:record})
     							.then(function(i){
     								$scope.interest="";
     							})
     						}
     						$scope.work_before=function(company,work_duration){
     							var record={company:company,
     								duration:work_duration};
     								$scope.info.work_before.push(record);	
     								Profile.addWorkBefore({email:email,record:record})
     								.then(function(i){
     									$scope.work="";
     									$scope.work_duration="";
     								})

     							}

     						});

