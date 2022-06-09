app.setExternal("console_log", (args, conv) => {
	console.log(args);
});

const output = await sandbox.execute({
		phone: sandbox.endpoint,
		name: "Neel"
	});
		
console.log(output);
