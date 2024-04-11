import "./About.css";
import me from "../../images/meSmall.jpg";
import qbPaBadge from "../../images/proAdvisorSilver.jpg";

const About = () => {
  return (
    <div className="about__body">
      <img className="about__image" src={me}>

      </img>
      <p className="about__text-one">
      Hi y`all, my name is George and I`m a Full-stack software engineer with a proven track record in Sales and Management experience in Commercial/Industrial construction and the Military. I am able to not only develop customized applications I also bring leadership, and excellent time management skills to the table to help contribute to a team environment and push to meet or beat the schedule. 
</p>
<p className="about__text-two">
I’m a farm boy with a background in the US Army, and construction so I have spent years completing projects as simple as a barn or a fence and as complex as the largest dormitory in Texas. Despite the setbacks or the circumstances, I come in on time, under budget and collaborate with teammates and stakeholders alike while making the margins necessary to make a profit.
</p>
<p className="about__text-three">
I enjoy building apps and websites because it’s building– just virtually instead of in person. Coding allows me the ability to use my creative side, with apps like Figma, to build fully functional, flexible App that works across all platforms. 
</p>
<p className="about__text-four">
When I am not coding, I enjoy, hunting, fishing, dancing, and spending time with my family.
</p>
<p className="about__text-five">
I also help small businesses increase their profit by optimizing their bookkeeping and providing actionable data they can use to grow their business.
</p>
<img src={qbPaBadge} className="about__badge"></img>
<p className="about__skills">
Tech Skills:
HTML,
CSS,
JavaScript,
React.js,
Node.js,
Express.js,
MongoDB.
      </p>
    </div>
  );
};

export default About;
