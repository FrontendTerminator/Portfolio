import React from "react";
import style from "./Projects.module.scss";
import { WorkBlock } from "./work/WorkBlock";
import { Title } from "../common/components/title/Title";
import socialNetwork from "./../assets/images/socialNetwork.jpg";
// import todoImage from "./../assets/images/todolist.jpg"

const Fade = require("react-reveal/Fade");

export function Projects() {
  const social = {
    backgroundImage: `url(${socialNetwork})`,
  };

  // const todolist = {
  //     backgroundImage: `url(${todoImage})`
  // }

  return (
    <div id={"projects"} className={style.worksBlock}>
      <Fade>
        <Title text={"Projects"} />
      </Fade>
      <div className={style.worksContainer}>
        <div className={style.works}>
          {/* <WorkBlock
                        link={"https://FrontendTerminator.github.io/todolist"}
                        githubLink={"https://github.com/FrontendTerminator/todolist"}
                        style={todolist}
                        title={'Todolist'}
                        description={'Todolist - react applications for keeping a list of completed tasks'}/> */}
          <WorkBlock
            link={"https://FrontendTerminator.github.io/way_of_the_samurai"}
            githubLink={
              "https://github.com/FrontendTerminator/way_of_the_samurai"
            }
            style={social}
            title={"Social network"}
            description={"Social network - social application"}
          />
        </div>
      </div>
    </div>
  );
}
