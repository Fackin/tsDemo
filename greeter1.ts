function greeter(person: string) {
	return "Hello," + person;
}

// let user = "Jane User";
let user = ["Jane User", "111"];

document.body.innerHTML = greeter(user);