import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Student',
    Svg: require('@site/static/img/student.svg').default,
    description: (
      <>
        Pre-final year Computer Student at SRM IST, Ramapuram performing 
        an extraordinary academics with a CGPA of 9.81.
      </>
    ),
  },
  {
    title: 'Contributor',
    Svg: require('@site/static/img/open_source.svg').default,
    description: (
      <>
        Active open source contributor with 5+ merged pull 
        requests across diverse repositories, actively improving various projects.
      </>
    ),
  },
  {
    title: 'Developer',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
        Highly motivated Full-Stack Developer with a passion 
        for creating user-friendly web applications (MERN) and native Android experiences using Kotlin.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
