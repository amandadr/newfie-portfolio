import images from "data/Images";
const { butters_1, dingus_1, butters_2, flower_4, trees_2 } = images;

export const connectLinks = [
  {
    imageUrl:
      `${butters_1}` ||
      "https://images.pexels.com/photos/25000745/pexels-photo-25000745/free-photo-of-a-small-boat-docked-on-a-dock-near-a-small-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "LinkedIn",
    target: "_blank",
    url: "https://www.linkedin.com/in/amandadroy/",
  },
  {
    imageUrl:
      `${dingus_1}` ||
      "https://images.pexels.com/photos/7575543/pexels-photo-7575543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "GitHub",
    target: "_blank",
    url: "https://github.com/amandadr",
  },
  {
    imageUrl:
      `${butters_2}` ||
      "https://images.pexels.com/photos/11542270/pexels-photo-11542270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Discord",
    target: "_blank",
    url: "https://discordapp.com/users/amandadr",
  },
];

export const workLinks = [
  {
    imageUrl:
      `${flower_4}` ||
      "https://images.pexels.com/photos/9011357/pexels-photo-9011357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Resume",
    target: "_blank",
    url: "https://resume.amandadroy.com/",
  },
  {
    imageUrl:
      `${trees_2}` ||
      "https://images.pexels.com/photos/11542288/pexels-photo-11542288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Email",
    target: "_blank",
    url: "mailto:amandadroy@gmail.com",
  }
];