import type { VolunteeringExperience } from '../types';

export const volunteeringExperience: VolunteeringExperience[] = [
  {
    id: '1',
    organization: 'Seattle Chinatown Book Club',
    position: 'Founder',
    startDate: '2023-09',
    current: true,
    location: 'Seattle, Washington, United States',
    responsibilities: [
      "Founded and lead the Seattle Chinatown Book Club, a community-driven literary organization fostering cultural connection and dialogue within Seattle's Chinatown-International District.",
      'Manage a team of 8 volunteers across roles in communications, events, partnerships, and operations to coordinate monthly meetings and community initiatives.',
      'Grew membership to 80+ monthly attendees and organized large-scale partnered events reaching over 120 participants, including open mics, mahjong nights, and author discussions.',
      'Built partnerships with local organizations and businesses to co-host community events, fundraisers, and volunteer initiatives supporting neighborhood revitalization and engagement.',
      'Coordinated volunteer activities that strengthen cultural preservation and promote equitable access to literature and creative expression in the community.',
    ],
  },
  {
    id: '2',
    organization: 'Community For Youth',
    position: 'Mentor',
    startDate: '2025-09',
    current: true,
    location: 'Seattle, WA',
    responsibilities: [
      'Serve as a dedicated mentor to Seattle high school students, providing guidance, support, and encouragement to help them navigate academic and personal challenges.',
      'Organize and facilitate community workshop events focused on preparing high school youth for life after graduation, covering topics such as college preparation, career exploration, financial literacy, and life skills development.',
      'Provide one-on-one mentorship and advice to mentees on setting and achieving life goals, developing personal growth strategies, and building confidence for future success.',
    ],
  },
  {
    id: '3',
    organization: 'Texas 4000 Fighting Cancer',
    position: 'Rider & Fitness Coordinator',
    startDate: '2018-12',
    endDate: '2019-09',
    current: false,
    location: 'Austin, TX',
    responsibilities: [
      'Raised $5,000+ for cancer research and support services while participating in an 18-month leadership development program designed to cultivate the next generation of leaders in the fight against cancer.',
      'Completed 2,000+ training miles and engaged in extensive community volunteering, sharing life-saving information about cancer prevention and early detection with communities across the route.',
      'Played an active role in planning and executing the 4,000+ mile bike ride from Austin to Anchorage, rotating duties including driving support vehicles, setting up rest stops, securing food donations, and preparing meals for the team.',
    ],
  },
];

