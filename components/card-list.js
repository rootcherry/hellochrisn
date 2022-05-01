import Card from './card';

import utilStyles from "../styles/utils.module.css";

const CardList = ({ data }) => {
  return (
    <div>
      <section>
        <h2>Projects</h2>
        <div className={utilStyles.grid3Cols}>
          {
            data.map((project, idx) => {
              return (
                <Card
                  imgSrc={data[idx].imgSrc}
                  title={data[idx].title}
                  tech={data[idx].tech}
                  short={data[idx].short}
                  git={data[idx].git}
                  url={data[idx].url}
                />
              );
            })
          }
        </div>
      </section>
    </div>
  );
};

export default CardList;
