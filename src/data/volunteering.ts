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
];

