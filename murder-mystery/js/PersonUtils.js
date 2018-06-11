function generateForename(gender){

	var name = Math.floor((Math.random() * 3) + 1);

	if (gender == "female"){
		switch (name) {
			case 1:
				return "Mary";
			case 2:
				return "Alice";
			case 3:
				return "Brenda";
		}
	} else {
		switch (name) {
			case 1:
				return "Bob";
			case 2:
				return "Charlie";
			case 3:
				return "Mike";
		}
	}


}

function generateSurname(){

	var name = Math.floor((Math.random() * 12) + 1);


	switch (name) {
		case 1:
			return "Jones";
		case 2:
			return "Evans";
		case 3:
			return "Morgon";
		case 4:
			return "Griffiths";
		case 5:
			return "Wulkan";
		case 6:
			return "Entwistle";
		case 7:
			return "Stokell";
		case 8:
			return "Sutton";
		case 9: 
			return "Barcis";
		case 10:
			return "Lambert";
		case 11: 
			return "Mercer";
		case 12:
			return "Koehorst";
	}

}