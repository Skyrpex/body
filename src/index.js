import waitFor from "@skyrpex/waitfor";

let promise = waitFor("body");

export default function body(callback) {
	return promise.then(callback);
};

body.append = function append(el) {
	promise.then(body => body.append(el));
};
