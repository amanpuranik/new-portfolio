import React from 'react';
import '../styles/experience.css'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Ibm from '../icons/Ibm'


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
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work card"
      date="2010 - 2011"
    >
      <h3 className="vertical-timeline-element-title">Full Stack Engineer - Pixlee Turnto</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
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
