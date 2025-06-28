/**
 * Get the roles of the developer.
 * @returns An array of strings representing the roles of the developer.
 */
function GetPersonalRoles() {
  return [
    {
      text: "> Frontend",
    },
    {
      text: "> Backend",
    },
    {
      text: "> Fullstack",
    },
    {
      text: "> DevOps",
    },
  ];
}

/**
 * Get the tech stack of the developer.
 * @returns An array of strings representing the tech stack.
 */
function GetPersonalStack() {
  return [
    {
      text: "> Java / Spring / JPA / Hibernate / Maven",
    },
    {
      text: "> JavaScript / TypeScript / NestJS",
    },
    {
      text: "> Angular / React",
    },
    {
      text: "> Docker / Kubernetes / Terraform",
    },
    {
      text: "> AWS / Azure",
    },
  ];
}

/**
 * Get the links for the developer's social media and GitHub.
 * @returns An array of objects containing the label and link.
 */
function GetPersonalLinks() {
  return [
    {
      text: "> GitHub",
      link: "https://github.com/raphaeltx",
    },
    {
      text: "> LinkedIn",
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

/**
 * Get the personal information of the developer.
 * @returns An array of objects containing the label and value.
 */
function GetPersonalInfo() {
  return [
    {
      label: "Name:",
      value: "Raphael Teixeira",
    },
    {
      label: "Location:",
      value: "Brasília, Brazil",
    },
    {
      label: "Age:",
      value: GetAge(),
    },
  ];
}

/**
 * Get additional information about the developer.
 * @returns An object containing the status and construction information.
 */
function GetAdditionalInfo() {
  return {
    status: {
      label: "Status:",
      value: "Still debugging life...",
    },
    construction: {
      label: "Construction:",
      value:
        "Oops! You've stumbled upon my ego. It's still under construction.",
    },
  };
}

export {
  GetPersonalRoles,
  GetPersonalStack,
  GetPersonalLinks,
  GetAge,
  GetPersonalInfo,
  GetAdditionalInfo,
};
