
import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Ecommerce from '../images/ecomm.png'
import Tick from '../images/tic.png'
const projectsData = [
    {
      title: "Responsive ECommerce App ",
      description:
        "A responsive (SPA) Ecommerce app created using React JS which displays carted items.",
      imageUrl:Ecommerce,
      imageAlt: "Project 1 Image",
      tags: ["Reactjs", "Material-UI", "Redux","Firebase"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://github.com/aryalechu98/e-commerce",
        },
        {
          icon: OpenInNewIcon,
          href: "https://my-e-commerce-shopping.web.app/",
        },
      ],
    },
    {
      title: "TicTacToe Game",
      description:
        "A responsive TickTacToe Game which supports both desktop and mobile view, styled using styled-components and deployed of surge.sh ",
      imageAlt: "quiz ",
      imageUrl:Tick,
      tags: ["ReactJS","Styled-components","Surge.sh"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://github.com/aryalechu98/ticktacktoe",
        },
        {
          icon: OpenInNewIcon,
          href: "https://gametic.surge.sh/",
        },
      ],
    },
   
    
  ];
  
  
export default projectsData