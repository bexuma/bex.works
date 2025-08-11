import { Card, Video, SectionHeading } from '@/components'

export const UniversityCard = () => (
  <Card heading="University project">
    <div className="space-y-2">
      <p>
        In January 2019, after transferring to Karaganda University of
        Kazpotrebsoyuz, I was asked to develop a website for the university’s
        Student Service Center (SSC). The goal was to expand on their recently
        launched live queueing system by allowing students to apply for services
        online. Although I was working on a personal project at the time, I
        prioritized this initiative, seeing it as a unique opportunity to
        observe the effects of my work on the daily operations at the
        university.
      </p>
      <p>
        While juggling my studies, I built a functional prototype in 40 days.
        The first version of the website launched 40 days later becoming my
        first project with active users.
      </p>
    </div>
    {/* <div className=""> */}
    {/* <SectionHeading isMedium heading="v1" /> */}
    {/* </div> */}
    <div>
      <SectionHeading isMedium heading="v1" />
      <div>
        <Video fileName="demo-v1" />
      </div>
    </div>
  </Card>
)
