var myTeamHTML = [];

const roleIcon = newTeamMember => {
  switch (newTeamMember.getRole()) {
    case "Manager":
      return `fas fa-mug-hot`
    case "Engineer":
      return `fas fa-glasses`
    case "Intern":
      return `fas fa-user-graduate`
  }
}

const roleDepHTML = newTeamMember => {
  switch (newTeamMember.getRole()) {
    case "Manager":
      return `<p>Office Number: ${newTeamMember.officeNumber}</p>`
    case "Engineer":
      return `<p>Github: <a href = "${newTeamMember.getGithub()}">${newTeamMember.getGithub()}</a></p>`
    case "Intern":
      return `<p>${newTeamMember.getSchool()}</p>`
  }
};

const generateTeammate = newTeamMember => {
  return `<div class="column is-one-third">
            <div class="card team-member">
              <header class="card-header has-background-info">
                <p class="card-header-title has-text-white is-size-1 pb-0">
                  ${newTeamMember.getName()}
                </p>
              </header>
              <header class="card-header has-background-info">
                <div class="card-header-title pt-0">
                  <span class="icon icon is-large">
                    <i class="${roleIcon(newTeamMember)} fa-2x"></i>
                  </span>
                  <p class="has-text-white is-size-3 pl-2">
                  ${newTeamMember.getRole()}
                  </p>
                </div>
              </header>
              <div class="card-content">
                <div class="content pb-5">
                  <p class="box-shadow">ID: 1</p>
                  <p>Email: <a href = "mailto: ${newTeamMember.getEmail()}">${newTeamMember.getEmail()}</a></p>
                  ${roleDepHTML(newTeamMember)}
                </div>
              </div>
            </div>
          </div>
          `
}

const addToMyTeam = newTeamMember => {
  myTeamHTML.push(generateTeammate(newTeamMember));
}

const generatePage = () => {
  return`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
  <script src="https://kit.fontawesome.com/3a4289a5d2.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../src/style.css">
  <title>Team Profile Generator</title>
</head>

<body>
  <!-- Hero Section -->
  <section class="hero is-danger">
    <div class="hero-body">
      <p class="title is-1 has-text-centered">
        My Team
      </p>
    </div>
  </section>
<!-- Team Member Container -->
  <section class="container pt-5">
    <div class="columns is-multiline is-centered">
    ${myTeamHTML.join('')}
    </div>
  </section>

  <script src="../src/page-template.js"></script>
</body>

</html>`
}

module.exports = { addToMyTeam, generatePage } 