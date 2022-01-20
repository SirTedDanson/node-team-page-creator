// Global array, fills with selected team members generated html
var myTeamHTML = [];

// generate role icon based on team member role
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
// generate role dependent html for each of the team member cards
const roleDepHTML = newTeamMember => {
  switch (newTeamMember.getRole()) {
    case "Manager":
      return `Office Number: ${newTeamMember.officeNumber}`
    case "Engineer":
      return `Github: <a href = "${newTeamMember.getGithub()}">${newTeamMember.getGithub()}</a>`
    case "Intern":
      return `${newTeamMember.getSchool()}`
  }
};
// function for generating a team member card 
// interpolates properties of the newTeamMember object
const generateTeammate = newTeamMember => {
  return ` <!-- Team Member Card -->
    <div class="column is-one-third">
      <div class="card team-member">
        <header class="card-header has-background-info">
          <p class="card-header-title has-text-white is-size-1">
            ${newTeamMember.getName()}
          </p>
        </header>
        <header class="card-header has-background-info">
          <div class="card-header-title pt-0">
            <span class="icon icon is-large has-text-white">
              <i class="${roleIcon(newTeamMember)} fa-2x"></i>
            </span>
            <p class="has-text-white is-size-3 pl-2">
            ${newTeamMember.getRole()}
            </p>
          </div>
        </header>
        <div class="card-content">
          <div class="content pb-5">
            <p class="box py-2 px-4">ID: 1</p>
            <p class="py-2 px-4">Email: <a href = "mailto: ${newTeamMember.getEmail()}">${newTeamMember.getEmail()}</a></p>
            <p class="py-2 px-4">${roleDepHTML(newTeamMember)}</p>
          </div>
        </div>
      </div>
    </div> \n`
}
// generates html from the newTeamMember object (Manager, Engineer, Intern)
// adds generated html to an array
// will be drawn from to populate the primary page HTML in generatePage
const addToMyTeam = newTeamMember => {
  myTeamHTML.push(generateTeammate(newTeamMember));
}
// creates the template literal for writing to the index.html file
// interpolates the html generated from the team member objects
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
// export the ability to create team member html and the entire pages html
module.exports = { addToMyTeam, generatePage } 