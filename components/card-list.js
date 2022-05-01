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
                  key={data[idx].id}
                  imgSrc={data[idx].imgSrc}
                  title={data[idx].title}
                  short={data[idx].short}
                  tech={data[idx].tech}
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
