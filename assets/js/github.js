const cards = document.querySelectorAll('#github-repo');

async function getRepoDetails(repo) {
	  const response = await fetch(`https://api.github.com/repos/${repo}`);
	  const data = await response.json();
	  return data;
}

cards.forEach(element => {
	repo = element.getElementsByTagName('h3')[0].innerText;
	getRepoDetails(`akashrchandran/${repo}`).then(data => {
		element.querySelector('#github-star').innerHTML = `<i class="far fa-star"> ${data.stargazers_count}</i>`;
		element.querySelector('#github-fork').innerHTML = `<i class="fas fa-code-branch"> ${data.forks}</i>`;
	});
});