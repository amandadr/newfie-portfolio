import butters_2 from "/images/butters_2.jpeg";
import rock from "/images/rock.jpeg";
import flower_2 from "/images/flower_2.jpeg";
import flower_4 from "/images/flower_4.jpeg";
import dingus_1 from "/images/dingus_1.jpeg";
import butters_1 from "/images/butters_1.jpeg";

export const homeLinks = [
  {
    imageUrl:
      `${butters_2}` ||
      "https://images.pexels.com/photos/25000745/pexels-photo-25000745/free-photo-of-a-small-boat-docked-on-a-dock-near-a-small-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "About",
    target: "_self",
    url: "/about",
  },
  {
    imageUrl:
      `${rock}` ||
      "https://images.pexels.com/photos/7575543/pexels-photo-7575543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Projects",
    target: "_self",
    url: "/projects",
  },
  {
    imageUrl:
      `${flower_2}` ||
      "https://images.pexels.com/photos/11542270/pexels-photo-11542270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Contact",
    target: "_self",
    url: "/contact",
  },
  {
    imageUrl:
      `${flower_4}` ||
      "https://images.pexels.com/photos/9011357/pexels-photo-9011357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "LinkedIn",
    target: "_blank",
    url: "https://www.linkedin.com/in/amandadroy/",
  },
  {
    imageUrl:
      `${dingus_1}` ||
      "https://images.pexels.com/photos/11542288/pexels-photo-11542288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "GitHub",
    target: "_blank",
    url: "https://github.com/amandadr",
  },
  {
    imageUrl:
      `${butters_1}` ||
      "https://images.pexels.com/photos/11493011/pexels-photo-11493011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Blog\n(In Progress)",
    target: "_self",
    url: "/blog",
  },
];
