window.onload = function () {

	let notes = [];

	document.getElementById('add').onclick = function () {
		let textNote = document.getElementById('list-text').value,
			numNote = document.getElementById('list-number').value;
		let temp = {};
		temp.num = numNote;
		temp.text = textNote;
		let i = notes.length;
		notes[i] = temp;
		function byField(field) {
			return (a, b) => Number(a[field]) - Number(b[field]);
		};
		notes.sort(byField('num'));
		console.log(notes);
		out();
	}

	function out() {
		let out = '';
		for (let key in notes) {
			out += notes[key].num + ') ' + notes[key].text + '<br>';
		};

		document.getElementById('out').innerHTML = out;
	};
};