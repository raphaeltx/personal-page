/**
 * Get the roles of the developer.
 * @returns An array of strings representing the roles of the developer.
 */
function GetRoles() {
  return ["> Frontend", "> Backend", "> Fullstack", "> DevOps"];
}

/**
 * Get the tech stack of the developer.
 * @returns An array of strings representing the tech stack.
 */
function GetTechStack() {
  return [
    "> Java / Spring / JPA / Hibernate / Maven",
    "> JavaScript / TypeScript / NestJS",
    "> Angular / React",
    "> Docker / Kubernetes / Terraform",
    "> AWS / Azure",
  ];
}

/**
 * Get the links for the developer's social media and GitHub.
 * @returns An array of objects containing the label and link.
 */
function GetLinks() {
  return [
    {
      text: "GitHub",
      link: "https://github.com/raphaeltx",
    },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/raphael-teixeira-2a1012188/",
    },
  ];
}

/**
 * Get the age of the developer based on the birth date.
 * @returns The age of the developer.
 */
function GetAge() {
  const birthDate = new Date("1992-02-15");
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }
  return age;
}

export { GetRoles, GetTechStack, GetLinks, GetAge };
