export default async function getPosts(url) {
	const getArr = await fetch(url, {method: "GET"});
	const resp = await getArr.json();
	return resp;
};
