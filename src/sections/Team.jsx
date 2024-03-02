import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import jameEvans from '../assets/team-images/jame-evans.jpg';
import kateHowston from '../assets/team-images/kate-howston.jpg';
import albertDupontel from '../assets/team-images/albert-dupontel.jpg';
import michaelBrown from '../assets/team-images/michael-brown.jpg';
import SectionHead from '../components/SectionHead';
import TeamMember from '../components/teamComponents/TeamMember';

const sectionTitle = 'Meet Our Team';
const sectionDescription = 'Sed arcu. Cras consequat.';

const teamSlide1 = [
    {
        memberName: "JAMES EVANS",
        role: "Cook",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: jameEvans
    },
    {
        memberName: "KATE HOWSTON",
        role: "Chef",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: kateHowston
    },
    {
        memberName: "ALBERT DUPONTEL",
        role: "Chef",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: albertDupontel
    },
    {
        memberName: "MICHAEL BROWN",
        role: "Cook",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: michaelBrown
    }
]
const teamSlide2 = [
    {
        memberName: "KATE HOWSTON",
        role: "Chef",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: kateHowston
    },
    {
        memberName: "ALBERT DUPONTEL",
        role: "Chef",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: albertDupontel
    },
    {
        memberName: "MICHAEL BROWN",
        role: "Cook",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: michaelBrown
    },
    {
        memberName: "JAMES EVANS",
        role: "Creative director",
        description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
        memberImg: jameEvans
    },
]
const teamSlider = [teamSlide1, teamSlide2];
function Team() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <SectionHead sectionTitle={sectionTitle} sectionDescription={sectionDescription} titleTextClr={'black'} />

                <Carousel data-bs-theme="dark">
                    {
                        teamSlider.map(
                            (teamSlide, slideIndex) => <Carousel.Item key={slideIndex}>
                                <div className="flex flex-wrap -m-4">
                                    {
                                        teamSlide.map(
                                            (teamMember, memberIndex) => <TeamMember key={memberIndex} teamMember={teamMember} />
                                        )
                                    }
                                </div>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Team
