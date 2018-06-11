function Person(age, mother, father) {


	//Default values
	if (age) this.age = age;
	else this.age = 0;

	if (mother) this.mother = mother;

	if (father) { 
		this.father = father; 
		this.surname = this.father.surname;
	}

	this.children = [];


	this.init = function () {
		if(!this.gender){
			var g = Math.floor((Math.random() * 2) + 1);
			if (g == 1){
				this.gender = "female";
			} else {
				this.gender = "male";
			}
		}

		this.forename = generateForename(this.gender);
		if (!this.father || !this.surname) {
			this.surname = generateSurname();
		}

	}

	this.tryBaby = function (other) {

		if (this.partner && this.gender == "female") {

			var b = Math.floor((Math.random() * 10) + 1);

			if (b == 1) {
				var baby;
				if (this.gender == "female"){
					baby = new Person(0,this,other);
					baby.init();
				} else {
					baby = new Person(0,other,this);
					baby.init();
				}
				this.children.push(baby);
				community.push(baby);

			}


		}

	}

}