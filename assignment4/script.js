let name=["Yaakov","John","Jen","jason","paul","frank","larry","paula","laura","jim"];
for (let i = 0; i < name.length; i++) {
	if(name[i].charAt(0)==='J'|| name[i].charAt(0)==='j'){
        console.log("Goodbye "+ name[i])
	}
	else{
		console.log("Hello "+ name[i])
	}
}