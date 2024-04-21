import React from 'react';
import '../styles/experience.css'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Ibm from '../icons/Ibm'
import Bmo from '../icons/Bmo'
import Ptt from '../icons/Ptt'
import Digitaled from '../icons/Digitaled'






const Experience = () => (
  <VerticalTimeline className='timelineContainer'>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Aug 2023 - Present"
      iconStyle={{ background: 'white', color: '#fff' }}
      icon={<Ibm />}
    >
      <h3 className="vertical-timeline-element-title">Full Stack Developer - IBM</h3>
      <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
      <p>
        Currently working under WatsonX at IBM, helping build out tools and features that customers could use to leverage AI. <br></br>
        Overall Working at IBM so far has been very enjoyable, with the number one aspect about the work culture being freedom. I find myself 
        with a lot of freedom in how I could implement various features and fixes, which has allowed me to grow as a developer greatly and its something I appreciate much more now.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work card"
      date="Jan 2022 - Aug 2022"
      iconStyle={{ background: 'white', color: '#fff' }}

      icon={<Ptt />}

    >
      <h3 className="vertical-timeline-element-title">Full Stack Engineer - Pixlee Turnto</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Pixlee Turnto is a marketing company that allows brands to leverage user generated content for marketing purposes, pushing the field of digital marketing forward. <br></br>
        Pixlee Turnto was my final internship in undergrad and its here that I might some of the most talented develoeprs. But if theres one value that I would take away from Pixlee, it would be the willingness to help. <br></br>
        Although Pixlee had extremely intelligent individuals, every developer there was so eager to help out and teach. It was because of this that I was able to learn so much at such a fast rate at Pixlee.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="May 2021 - Aug 2022"
      icon={<Bmo />}
      iconStyle={{ background: 'white', color: '#fff' }}


    >
      <h3 className="vertical-timeline-element-title">Software Developer - Bank of Montreal</h3>
      <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
      <p>
        The Bank of Montreal is one of the biggest banks in Canada 
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work-last"
      date="Sept 2020 - Dec 2020"
      iconStyle={{ background: 'white', color: '#fff' }}
      icon={<Digitaled />}


    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>


  </VerticalTimeline>

)

export default Experience;
