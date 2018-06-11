var community = [];


function generateCouple() {

	var age1 = Math.floor((Math.random() * 30) + 16);
	var age2 = Math.floor((Math.random() * 30) + 16);

	var p1 = new Person(age1);
	p1.gender = "male";
	p1.init();

	var p2 = new Person(age2);
	p2.gender = "female";
	p2.init();

	p2.surname = p1.surname;

	p1.partner = p2;
	p2.partner = p1;

	community.push(p1);
	community.push(p2);

}