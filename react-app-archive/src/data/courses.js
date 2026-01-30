// Course Categories
export const courseCategories = [
  { id: 'scrum', label: 'Scrum', icon: 'fas fa-sync-alt', description: 'Scrum Alliance certifications' },
  { id: 'safe', label: 'SAFe®', icon: 'fas fa-sitemap', description: 'Scaled Agile Framework' },
  { id: 'leadership', label: 'Leadership', icon: 'fas fa-user-tie', description: 'Agile leadership development' },
  { id: 'kanban', label: 'Kanban', icon: 'fas fa-columns', description: 'Flow-based methodologies' },
  { id: 'specialized', label: 'Specialized', icon: 'fas fa-certificate', description: 'Advanced & specialized training' },
];

// All Courses
export const courses = [
  // ==========================================
  // SCRUM COURSES
  // ==========================================
  {
    id: 'csm',
    slug: 'certified-scrummaster',
    title: 'Certified ScrumMaster®',
    shortTitle: 'CSM®',
    category: 'scrum',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scrum Alliance',
      credential: 'CSM®',
      includes: [
        'Two-year Scrum Alliance membership',
        '16 SEUs/PDUs',
        'Digital certificate and badge',
        '10% discount on future classes'
      ],
      examDetails: '50 questions, 60 minutes, 74% to pass, open-book'
    },
    overview: 'The Certified ScrumMaster® course provides a foundational understanding of the Scrum framework and prepares you to serve as a ScrumMaster. Learn to facilitate Scrum events, remove impediments, and coach your team toward high performance.',
    learningOutcomes: [
      'Understand Agile values and the empirical process model',
      'Facilitate all Scrum events effectively (Planning, Daily Scrum, Review, Retrospective)',
      'Coach teams on Scrum roles, artifacts, and practices',
      'Remove impediments and protect the team',
      'Track progress using burndown charts and velocity',
      'Apply servant leadership principles'
    ],
    targetAudience: [
      'Project managers transitioning to Agile',
      'Team leads and aspiring ScrumMasters',
      'Anyone seeking foundational Scrum knowledge',
      'Professionals pursuing Scrum Alliance certification'
    ],
    prerequisites: [],
    relatedCourses: ['cspo', 'a-csm', 'scrum-teams'],
    featured: true,
    popular: true,
  },
  {
    id: 'cspo',
    slug: 'certified-scrum-product-owner',
    title: 'Certified Scrum Product Owner®',
    shortTitle: 'CSPO®',
    category: 'scrum',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scrum Alliance',
      credential: 'CSPO®',
      includes: [
        'Two-year Scrum Alliance membership',
        '16 SEUs/PDUs',
        'Digital certificate and badge'
      ],
      examDetails: 'No exam required for initial certification'
    },
    overview: 'The Certified Scrum Product Owner® course teaches you to maximize product value through effective backlog management, stakeholder collaboration, and strategic product decisions.',
    learningOutcomes: [
      'Define and communicate product vision',
      'Create and prioritize the product backlog',
      'Write effective user stories and acceptance criteria',
      'Collaborate with stakeholders to maximize value',
      'Make strategic product decisions based on data',
      'Work effectively with the Scrum team'
    ],
    targetAudience: [
      'Product managers and product owners',
      'Business analysts',
      'Entrepreneurs and startup founders',
      'Anyone responsible for product decisions'
    ],
    prerequisites: [],
    relatedCourses: ['csm', 'a-cspo', 'apo'],
    featured: true,
    popular: true,
  },
  {
    id: 'a-csm',
    slug: 'advanced-certified-scrummaster',
    title: 'Advanced Certified ScrumMaster®',
    shortTitle: 'A-CSM®',
    category: 'scrum',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scrum Alliance',
      credential: 'A-CSM®',
      includes: [
        'Scrum Alliance membership renewal',
        '16 SEUs/PDUs',
        'Digital certificate and badge'
      ],
      examDetails: 'Online validation after course completion'
    },
    overview: 'Take your ScrumMaster skills to the next level. This advanced course deepens your facilitation expertise, coaching abilities, and understanding of scaling Scrum.',
    learningOutcomes: [
      'Facilitate advanced problem-solving techniques',
      'Coach individuals and teams through change',
      'Navigate organizational impediments',
      'Scale Scrum across multiple teams',
      'Apply systems thinking to complex challenges',
      'Develop a personal improvement plan'
    ],
    targetAudience: [
      'Certified ScrumMasters seeking advancement',
      'Experienced ScrumMasters (12+ months)',
      'Agile coaches developing their practice'
    ],
    prerequisites: ['Current CSM® certification', '12+ months ScrumMaster experience'],
    relatedCourses: ['csm', 'cal', 'safe-sm'],
  },
  {
    id: 'a-cspo',
    slug: 'advanced-certified-scrum-product-owner',
    title: 'Advanced Certified Scrum Product Owner®',
    shortTitle: 'A-CSPO®',
    category: 'scrum',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scrum Alliance',
      credential: 'A-CSPO®',
      includes: [
        'Scrum Alliance membership renewal',
        '16 SEUs/PDUs',
        'Digital certificate and badge'
      ],
      examDetails: 'Online validation after course completion'
    },
    overview: 'Elevate your product ownership skills with advanced techniques for vision setting, stakeholder management, and product strategy.',
    learningOutcomes: [
      'Develop compelling product strategies',
      'Lead stakeholder alignment sessions',
      'Apply advanced prioritization techniques',
      'Measure and communicate product success',
      'Navigate complex organizational dynamics',
      'Build high-performing product teams'
    ],
    targetAudience: [
      'Certified Product Owners seeking advancement',
      'Experienced Product Owners (12+ months)',
      'Senior product managers'
    ],
    prerequisites: ['Current CSPO® certification', '12+ months Product Owner experience'],
    relatedCourses: ['cspo', 'apo', 'safe-popm'],
  },
  {
    id: 'scrum-teams',
    slug: 'agile-scrum-for-teams',
    title: 'Agile and Scrum for Teams',
    shortTitle: 'Scrum for Teams',
    category: 'scrum',
    duration: '1 day',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '8 PDUs'],
      examDetails: null
    },
    overview: 'A foundational course for entire teams transitioning to Agile. Learn Scrum fundamentals together and start practicing immediately.',
    learningOutcomes: [
      'Understand Agile values and principles',
      'Learn Scrum roles, events, and artifacts',
      'Practice estimation and sprint planning',
      'Conduct effective daily standups',
      'Run productive retrospectives',
      'Start delivering value in sprints'
    ],
    targetAudience: [
      'Development teams new to Agile',
      'Cross-functional teams adopting Scrum',
      'Organizations launching Agile transformations'
    ],
    prerequisites: [],
    relatedCourses: ['csm', 'cspo', 'agile-refresher'],
  },
  {
    id: 'agile-refresher',
    slug: 'agile-refresher-rebaseline',
    title: 'Agile Refresher & Rebaseline Workshop',
    shortTitle: 'Agile Refresher',
    category: 'scrum',
    duration: '1 day',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '8 PDUs/SEUs'],
      examDetails: null
    },
    overview: 'Reset and reinvigorate your Agile practice. This workshop helps teams that have drifted from Scrum fundamentals get back on track.',
    learningOutcomes: [
      'Identify gaps in current Agile practices',
      'Reestablish Scrum fundamentals',
      'Address common anti-patterns',
      'Improve team collaboration',
      'Create an actionable improvement plan'
    ],
    targetAudience: [
      'Teams experiencing Agile fatigue',
      'Organizations with inconsistent practices',
      'Teams ready to recommit to Agile'
    ],
    prerequisites: ['Prior Agile/Scrum experience'],
    relatedCourses: ['scrum-teams', 'csm', 'agile-leadership'],
  },

  // ==========================================
  // SAFe COURSES
  // ==========================================
  {
    id: 'leading-safe',
    slug: 'leading-safe',
    title: 'Leading SAFe®',
    shortTitle: 'Leading SAFe®',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Agilist (SA)',
      includes: [
        'One-year SAFe® membership',
        'SAFe® Agilist certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Leading SAFe® provides the principles and practices of the Scaled Agile Framework® for leaders driving enterprise Agile transformations.',
    learningOutcomes: [
      'Apply SAFe® to scale Lean and Agile in your enterprise',
      'Understand the Agile Release Train (ART)',
      'Plan and execute Program Increments',
      'Apply Lean-Agile budgeting principles',
      'Support organizational change',
      'Lead a Lean-Agile transformation'
    ],
    targetAudience: [
      'Executives and leaders',
      'Managers and directors',
      'Agile coaches and consultants',
      'Change agents'
    ],
    prerequisites: ['5+ years experience in software development or business'],
    relatedCourses: ['implementing-safe', 'safe-teams', 'safe-rte'],
    featured: true,
    popular: true,
  },
  {
    id: 'safe-teams',
    slug: 'safe-for-teams',
    title: 'SAFe® for Teams',
    shortTitle: 'SAFe® Teams',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Practitioner (SP)',
      includes: [
        'One-year SAFe® membership',
        'SAFe® Practitioner certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'SAFe® for Teams prepares team members to work effectively within an Agile Release Train, planning and executing iterations as part of a value stream.',
    learningOutcomes: [
      'Apply SAFe® to scale Agile development',
      'Understand your role within the ART',
      'Plan and execute iterations effectively',
      'Integrate with other teams on the train',
      'Demonstrate value through Program Increments',
      'Continuously improve team performance'
    ],
    targetAudience: [
      'Development team members',
      'Testers and QA professionals',
      'Product owners and managers',
      'Anyone joining an ART'
    ],
    prerequisites: [],
    relatedCourses: ['leading-safe', 'safe-sm', 'safe-popm'],
    popular: true,
  },
  {
    id: 'safe-sm',
    slug: 'safe-scrum-master',
    title: 'SAFe® Scrum Master',
    shortTitle: 'SAFe® SM',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Scrum Master (SSM)',
      includes: [
        'One-year SAFe® membership',
        'SAFe® Scrum Master certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Learn the role of the Scrum Master in a SAFe® enterprise. This course covers facilitating team events, coaching Agile practices, and supporting the ART.',
    learningOutcomes: [
      'Facilitate Scrum events in a SAFe® context',
      'Coach teams on SAFe® practices',
      'Support PI Planning and execution',
      'Improve team flow and delivery',
      'Coordinate with other SMs on the ART',
      'Foster relentless improvement'
    ],
    targetAudience: [
      'ScrumMasters in SAFe® environments',
      'Team coaches and facilitators',
      'Aspiring Release Train Engineers'
    ],
    prerequisites: ['Scrum or SAFe® experience recommended'],
    relatedCourses: ['safe-teams', 'safe-asm', 'safe-rte'],
  },
  {
    id: 'safe-popm',
    slug: 'safe-product-owner-product-manager',
    title: 'SAFe® Product Owner/Product Manager',
    shortTitle: 'SAFe® PO/PM',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® PO/PM',
      includes: [
        'One-year SAFe® membership',
        'SAFe® PO/PM certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Learn to drive value delivery in a SAFe® enterprise as a Product Owner or Product Manager. Master backlog management, PI planning, and customer-centric product development.',
    learningOutcomes: [
      'Define and prioritize features and stories',
      'Prepare for and participate in PI Planning',
      'Collaborate across teams and ARTs',
      'Connect strategy to execution',
      'Apply Lean UX and design thinking',
      'Measure and communicate value'
    ],
    targetAudience: [
      'Product Owners in SAFe® environments',
      'Product Managers',
      'Business analysts',
      'Solution managers'
    ],
    prerequisites: ['Product ownership or management experience'],
    relatedCourses: ['safe-teams', 'cspo', 'apsm'],
  },
  {
    id: 'safe-asm',
    slug: 'safe-advanced-scrum-master',
    title: 'SAFe® Advanced Scrum Master',
    shortTitle: 'SAFe® ASM',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Advanced Scrum Master (SASM)',
      includes: [
        'One-year SAFe® membership',
        'SASM certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Develop advanced facilitation and coaching skills for SAFe® environments. Learn to address enterprise-level challenges and drive continuous improvement.',
    learningOutcomes: [
      'Apply advanced facilitation techniques',
      'Coach teams through challenges',
      'Support DevOps and release on demand',
      'Build high-performing ARTs',
      'Scale Scrum practices effectively',
      'Drive organizational improvement'
    ],
    targetAudience: [
      'SAFe® Scrum Masters seeking advancement',
      'Aspiring Release Train Engineers',
      'Agile coaches in scaled environments'
    ],
    prerequisites: ['SAFe® Scrum Master certification', '1+ year experience'],
    relatedCourses: ['safe-sm', 'safe-rte', 'a-csm'],
  },
  {
    id: 'safe-rte',
    slug: 'safe-release-train-engineer',
    title: 'SAFe® Release Train Engineer',
    shortTitle: 'SAFe® RTE',
    category: 'safe',
    duration: '3 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Release Train Engineer (RTE)',
      includes: [
        'One-year SAFe® membership',
        'RTE certification',
        '24 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Prepare to lead an Agile Release Train as a Release Train Engineer. Learn to facilitate ART events, coach leaders, and drive program execution.',
    learningOutcomes: [
      'Lead PI Planning events',
      'Coach ART stakeholders',
      'Drive continuous improvement',
      'Manage ART-level risks and dependencies',
      'Foster collaboration across teams',
      'Apply Lean-Agile leadership'
    ],
    targetAudience: [
      'Aspiring Release Train Engineers',
      'Program managers',
      'Senior Scrum Masters',
      'Agile coaches'
    ],
    prerequisites: ['SAFe® certification recommended', 'Program management experience'],
    relatedCourses: ['safe-asm', 'implementing-safe', 'leading-safe'],
  },
  {
    id: 'implementing-safe',
    slug: 'implementing-safe',
    title: 'Implementing SAFe®',
    shortTitle: 'SPC',
    category: 'safe',
    duration: '4 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Practice Consultant (SPC)',
      includes: [
        'One-year SAFe® membership',
        'SPC certification',
        '32 PDUs',
        'License to teach SAFe® courses'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'The most comprehensive SAFe® course. Learn to lead enterprise transformations, train teams, and implement SAFe® across the organization.',
    learningOutcomes: [
      'Lead SAFe® transformations',
      'Launch Agile Release Trains',
      'Coach leaders and teams',
      'Train SAFe® courses (with certification)',
      'Implement Lean Portfolio Management',
      'Drive organizational agility'
    ],
    targetAudience: [
      'Transformation leaders',
      'Agile coaches and consultants',
      'Enterprise architects',
      'Change agents'
    ],
    prerequisites: ['SAFe® Agilist certification', 'Transformation experience'],
    relatedCourses: ['leading-safe', 'lpm', 'safe-rte'],
    featured: true,
  },
  {
    id: 'safe-devops',
    slug: 'safe-devops',
    title: 'SAFe® DevOps',
    shortTitle: 'SAFe® DevOps',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® DevOps Practitioner (SDP)',
      includes: [
        'One-year SAFe® membership',
        'SDP certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Learn to implement DevOps within a SAFe® enterprise. Master continuous delivery pipeline, automation, and release on demand.',
    learningOutcomes: [
      'Map the continuous delivery pipeline',
      'Implement continuous integration',
      'Automate testing and deployment',
      'Enable release on demand',
      'Apply DevOps security practices',
      'Measure and improve flow'
    ],
    targetAudience: [
      'DevOps engineers',
      'Release managers',
      'Development leads',
      'Operations teams'
    ],
    prerequisites: ['Development or operations experience'],
    relatedCourses: ['safe-ase', 'safe-teams', 'safe-architects'],
  },
  {
    id: 'safe-ase',
    slug: 'safe-agile-software-engineering',
    title: 'SAFe® Agile Software Engineering',
    shortTitle: 'SAFe® ASE',
    category: 'safe',
    duration: '3 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Agile Software Engineer',
      includes: [
        'One-year SAFe® membership',
        'Certification',
        '24 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Master technical Agile practices including TDD, BDD, refactoring, and continuous integration in a SAFe® context.',
    learningOutcomes: [
      'Apply Test-Driven Development (TDD)',
      'Practice Behavior-Driven Development (BDD)',
      'Refactor code safely and effectively',
      'Implement continuous integration',
      'Write clean, maintainable code',
      'Pair and mob program effectively'
    ],
    targetAudience: [
      'Software developers',
      'Technical leads',
      'Architects',
      'QA engineers'
    ],
    prerequisites: ['Software development experience'],
    relatedCourses: ['safe-devops', 'safe-architects', 'safe-teams'],
  },
  {
    id: 'safe-architects',
    slug: 'safe-for-architects',
    title: 'SAFe® for Architects',
    shortTitle: 'SAFe® ARCH',
    category: 'safe',
    duration: '3 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Architect',
      includes: [
        'One-year SAFe® membership',
        'Certification',
        '24 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Learn to align architecture with business value in a SAFe® enterprise. Master Agile architecture practices and the Architectural Runway.',
    learningOutcomes: [
      'Develop Agile architecture practices',
      'Build the Architectural Runway',
      'Support continuous delivery',
      'Balance emergent and intentional design',
      'Lead architecture in scaled environments',
      'Enable business agility through architecture'
    ],
    targetAudience: [
      'Enterprise architects',
      'Solution architects',
      'Technical leads',
      'System engineers'
    ],
    prerequisites: ['Architecture experience', 'SAFe® knowledge recommended'],
    relatedCourses: ['safe-ase', 'implementing-safe', 'leading-safe'],
  },
  {
    id: 'safe-hardware',
    slug: 'safe-for-hardware',
    title: 'SAFe® for Hardware',
    shortTitle: 'SAFe® Hardware',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Practitioner',
      includes: [
        'One-year SAFe® membership',
        'Certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Apply SAFe® principles to hardware and embedded systems development. Learn to integrate hardware teams into Agile Release Trains.',
    learningOutcomes: [
      'Apply Agile to hardware development',
      'Integrate hardware into ARTs',
      'Manage hardware-software dependencies',
      'Plan and iterate with physical constraints',
      'Apply set-based design principles',
      'Reduce hardware development cycles'
    ],
    targetAudience: [
      'Hardware engineers',
      'Embedded systems developers',
      'Hardware program managers',
      'Cross-functional leads'
    ],
    prerequisites: ['Hardware development experience'],
    relatedCourses: ['safe-teams', 'leading-safe', 'safe-architects'],
  },
  {
    id: 'safe-lean-enterprise',
    slug: 'safe-for-lean-enterprises',
    title: 'SAFe® for Lean Enterprises',
    shortTitle: 'SAFe® SLE',
    category: 'safe',
    duration: '2 days',
    format: ['in-person', 'virtual'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® Lean Enterprise',
      includes: [
        'One-year SAFe® membership',
        'Certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Learn to extend SAFe® beyond IT to the entire enterprise. Apply Lean-Agile principles to business agility.',
    learningOutcomes: [
      'Apply Lean-Agile to the enterprise',
      'Lead organizational change',
      'Implement Lean Portfolio Management',
      'Build a continuous learning culture',
      'Measure business outcomes',
      'Create business agility'
    ],
    targetAudience: [
      'Enterprise leaders',
      'Transformation executives',
      'Business unit leaders',
      'Strategy officers'
    ],
    prerequisites: ['Leadership experience', 'SAFe® knowledge recommended'],
    relatedCourses: ['leading-safe', 'lpm', 'implementing-safe'],
  },

  // ==========================================
  // LEADERSHIP COURSES
  // ==========================================
  {
    id: 'agile-leadership',
    slug: 'agile-leadership-workshop',
    title: 'Agile Leadership Workshop',
    shortTitle: 'Agile Leadership',
    category: 'leadership',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '16 PDUs'],
      examDetails: null
    },
    overview: 'Develop the leadership skills needed to lead Agile teams and organizations. Learn to create environments where Agile thrives.',
    learningOutcomes: [
      'Understand Agile fundamentals from a leadership perspective',
      'Apply systems thinking to organizational challenges',
      'Lead teams through change and uncertainty',
      'Create psychological safety and trust',
      'Support scaling across multiple teams',
      'Develop your personal leadership agility'
    ],
    targetAudience: [
      'Managers and directors',
      'VPs and executives',
      'Transformation leaders',
      'Anyone leading Agile teams'
    ],
    prerequisites: [],
    relatedCourses: ['cal', 'executive-workshop', 'leading-safe'],
    featured: true,
  },
  {
    id: 'cal',
    slug: 'certified-agile-leadership',
    title: 'Certified Agile Leadership (CAL 1 & 2)',
    shortTitle: 'CAL',
    category: 'leadership',
    duration: '2 days each',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scrum Alliance',
      credential: 'CAL 1 / CAL 2',
      includes: [
        'Scrum Alliance membership',
        'CAL certification',
        '16 SEUs per level'
      ],
      examDetails: 'No exam required'
    },
    overview: 'The Certified Agile Leadership program develops leaders who can create and sustain Agile organizations. CAL 1 focuses on self-awareness; CAL 2 on team and organizational leadership.',
    learningOutcomes: [
      'Develop personal leadership awareness (CAL 1)',
      'Understand your leadership style and blind spots',
      'Lead organizational change (CAL 2)',
      'Create Agile-friendly structures and policies',
      'Coach and develop Agile teams',
      'Build a learning organization'
    ],
    targetAudience: [
      'Senior leaders and executives',
      'Directors and VPs',
      'Transformation leaders',
      'HR and organizational development leaders'
    ],
    prerequisites: ['Leadership experience'],
    relatedCourses: ['agile-leadership', 'executive-workshop', 'leading-safe'],
    popular: true,
  },
  {
    id: 'executive-workshop',
    slug: 'executive-transformation-workshop',
    title: 'Executive Transformation Workshop',
    shortTitle: 'Executive Workshop',
    category: 'leadership',
    duration: '1 day',
    format: ['in-person', 'virtual'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '8 PDUs'],
      examDetails: null
    },
    overview: 'A focused workshop for executives leading Agile transformations. Understand your role, remove organizational barriers, and accelerate your transformation.',
    learningOutcomes: [
      'Understand executive responsibilities in Agile',
      'Identify and remove organizational impediments',
      'Align strategy with Agile execution',
      'Measure transformation success',
      'Lead by example',
      'Create a transformation roadmap'
    ],
    targetAudience: [
      'C-suite executives',
      'VPs and SVPs',
      'Business unit leaders',
      'Transformation sponsors'
    ],
    prerequisites: ['Executive leadership role'],
    relatedCourses: ['agile-leadership', 'cal', 'leading-safe'],
  },
  {
    id: 'lpm',
    slug: 'lean-portfolio-management',
    title: 'Lean Portfolio Management',
    shortTitle: 'LPM',
    category: 'leadership',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® LPM',
      includes: [
        'One-year SAFe® membership',
        'LPM certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Learn to apply Lean and Agile principles at the portfolio level. Master strategy alignment, funding models, and portfolio flow.',
    learningOutcomes: [
      'Connect strategy to execution',
      'Implement Lean budgeting',
      'Manage portfolio flow',
      'Apply portfolio Kanban',
      'Establish guardrails for execution',
      'Measure portfolio performance'
    ],
    targetAudience: [
      'Portfolio managers',
      'PMO leaders',
      'Finance leaders',
      'Strategy executives'
    ],
    prerequisites: ['SAFe® or portfolio management experience'],
    relatedCourses: ['leading-safe', 'implementing-safe', 'cal'],
  },

  // ==========================================
  // KANBAN COURSES
  // ==========================================
  {
    id: 'kanban',
    slug: 'kanban-training',
    title: 'Kanban Training',
    shortTitle: 'Kanban',
    category: 'kanban',
    duration: '1-2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '7-14 PDUs/SEUs'],
      examDetails: null
    },
    overview: 'Master Kanban for flow-based work management. Learn to visualize work, limit WIP, manage flow, and continuously improve.',
    learningOutcomes: [
      'Understand Kanban principles and practices',
      'Apply Lean concepts (Flow, Waste, WIP)',
      'Design and configure Kanban boards',
      'Use metrics to manage and improve flow',
      'Limit work in progress effectively',
      'Increase visibility and collaboration'
    ],
    targetAudience: [
      'Teams seeking flow-based methods',
      'Operations and support teams',
      'Anyone managing knowledge work',
      'Teams complementing Scrum with Kanban'
    ],
    prerequisites: [],
    relatedCourses: ['flow-metrics', 'scrum-teams', 'agile-refresher'],
    featured: true,
  },
  {
    id: 'flow-metrics',
    slug: 'applying-flow-metrics-for-scrum',
    title: 'Applying Flow Metrics for Scrum',
    shortTitle: 'Flow Metrics',
    category: 'kanban',
    duration: '1 day',
    format: ['in-person', 'virtual'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '8 PDUs/SEUs'],
      examDetails: null
    },
    overview: 'Combine the best of Kanban metrics with Scrum. Learn to measure flow, predict delivery, and continuously improve using data.',
    learningOutcomes: [
      'Understand key flow metrics',
      'Measure cycle time and throughput',
      'Use flow metrics to improve Scrum',
      'Predict delivery with confidence',
      'Identify and address bottlenecks',
      'Create data-driven improvement plans'
    ],
    targetAudience: [
      'Scrum Masters seeking data-driven methods',
      'Teams wanting to improve predictability',
      'Agile coaches',
      'Delivery managers'
    ],
    prerequisites: ['Scrum experience'],
    relatedCourses: ['kanban', 'csm', 'a-csm'],
  },

  // ==========================================
  // SPECIALIZED COURSES
  // ==========================================
  {
    id: 'p2a-practitioner',
    slug: 'path-to-agility-practitioner',
    title: 'Path to Agility Practitioner®',
    shortTitle: 'P2A Practitioner',
    category: 'specialized',
    duration: '4 half-days',
    format: ['virtual', 'hybrid'],
    certification: {
      provider: 'Agile Velocity',
      credential: 'Path to Agility Practitioner®',
      includes: [
        'P2A certification',
        'Navigator access',
        'Ongoing community support'
      ],
      examDetails: 'Assessment included'
    },
    overview: 'Become certified in the Path to Agility® framework. Learn to assess teams, identify gaps, and guide transformations using outcome-driven methods.',
    learningOutcomes: [
      'Understand the Path to Agility® framework',
      'Assess teams against 100 capabilities',
      'Identify transformation gaps',
      'Guide outcome-driven improvements',
      'Use Navigator for assessments',
      'Coach teams toward business outcomes'
    ],
    targetAudience: [
      'Agile coaches',
      'Transformation leads',
      'ScrumMasters expanding their toolkit',
      'Consultants and partners'
    ],
    prerequisites: ['Agile coaching experience'],
    relatedCourses: ['agile-coaching', 'cal', 'implementing-safe'],
    featured: true,
  },
  {
    id: 'agile-coaching',
    slug: 'path-to-agile-coaching',
    title: 'Path to Agile Coaching',
    shortTitle: 'Agile Coaching',
    category: 'specialized',
    duration: '3 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '24 PDUs/SEUs'],
      examDetails: null
    },
    overview: 'Develop professional coaching skills for Agile environments. Learn coaching stances, powerful questioning, and how to facilitate change.',
    learningOutcomes: [
      'Understand the coaching mindset',
      'Apply professional coaching techniques',
      'Navigate between coaching and mentoring',
      'Facilitate powerful conversations',
      'Coach individuals and teams',
      'Handle resistance and conflict'
    ],
    targetAudience: [
      'Aspiring Agile coaches',
      'ScrumMasters developing coaching skills',
      'Leaders seeking coaching capabilities',
      'Anyone facilitating Agile adoptions'
    ],
    prerequisites: ['Agile experience'],
    relatedCourses: ['p2a-practitioner', 'a-csm', 'cal'],
  },
  {
    id: 'apo',
    slug: 'agile-product-owner',
    title: 'Agile Product Owner',
    shortTitle: 'APO',
    category: 'specialized',
    duration: '2 days',
    format: ['in-person', 'virtual', 'hybrid'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '16 PDUs'],
      examDetails: null
    },
    overview: 'Go beyond certification with deep product ownership skills. Learn vision, strategy, stakeholder management, and value optimization.',
    learningOutcomes: [
      'Define compelling product visions',
      'Develop product strategies',
      'Master stakeholder management',
      'Optimize value delivery',
      'Make data-driven product decisions',
      'Build high-performing product teams'
    ],
    targetAudience: [
      'Product owners seeking depth',
      'Product managers',
      'Business analysts',
      'Anyone responsible for product success'
    ],
    prerequisites: ['Product experience or CSPO®'],
    relatedCourses: ['cspo', 'a-cspo', 'safe-popm'],
  },
  {
    id: 'apsm',
    slug: 'agile-product-solution-management',
    title: 'Agile Product and Solution Management',
    shortTitle: 'APSM',
    category: 'specialized',
    duration: '2 days',
    format: ['in-person', 'virtual'],
    certification: {
      provider: 'Scaled Agile, Inc.',
      credential: 'SAFe® APSM',
      includes: [
        'One-year SAFe® membership',
        'APSM certification',
        '16 PDUs'
      ],
      examDetails: 'Online exam after course completion'
    },
    overview: 'Learn to define and deliver complex solutions in a SAFe® environment. Master product management at scale, from vision to release.',
    learningOutcomes: [
      'Define solution vision and roadmap',
      'Manage large solution backlogs',
      'Coordinate across multiple ARTs',
      'Apply design thinking at scale',
      'Deliver end-to-end solutions',
      'Measure solution success'
    ],
    targetAudience: [
      'Product managers in SAFe®',
      'Solution managers',
      'Portfolio managers',
      'Senior product owners'
    ],
    prerequisites: ['Product management experience', 'SAFe® knowledge'],
    relatedCourses: ['safe-popm', 'lpm', 'leading-safe'],
  },
  {
    id: 'lean-ux',
    slug: 'lean-ux-ui-operating-model',
    title: 'Lean UX and UI Operating Model Training',
    shortTitle: 'Lean UX',
    category: 'specialized',
    duration: '2 days',
    format: ['in-person', 'virtual'],
    certification: {
      provider: null,
      credential: null,
      includes: ['Certificate of completion', '16 PDUs'],
      examDetails: null
    },
    overview: 'Integrate UX into Agile workflows. Learn to run experiments, validate assumptions, and deliver great user experiences in sprints.',
    learningOutcomes: [
      'Apply Lean UX principles',
      'Integrate UX into Agile teams',
      'Run effective experiments',
      'Validate assumptions quickly',
      'Create minimum viable designs',
      'Build a UX operating model'
    ],
    targetAudience: [
      'UX designers and researchers',
      'Product owners and managers',
      'Development teams',
      'Anyone integrating UX and Agile'
    ],
    prerequisites: [],
    relatedCourses: ['cspo', 'apo', 'safe-popm'],
  },
];

// Public Workshop Schedule (manually managed)
// Update these dates and Eventbrite URLs as new workshops are scheduled
// Each date has its own Eventbrite URL for direct registration
export const publicWorkshops = [
  {
    courseId: 'csm',
    dates: [
      { start: '2026-01-21', end: '2026-01-22', time: '9:00 AM - 5:00 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/1978629482044?aff=oddtdtcreator' },
      { start: '2026-02-11', end: '2026-02-12', time: '9:00 AM - 5:00 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/1978629912331?aff=oddtdtcreator' },
    ],
    price: 1295,
  },
  {
    courseId: 'cspo',
    dates: [
      { start: '2026-02-25', end: '2026-02-26', time: '9:00 AM - 5:00 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/1978630180132?aff=oddtdtcreator' },
    ],
    price: 1295,
  },
  {
    courseId: 'cal',
    dates: [
      { start: '2026-02-04', end: '2026-02-05', time: '10:00 AM - 6:00 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/1978629657569?aff=oddtdtcreator' },
    ],
    price: 1495,
  },
  {
    courseId: 'p2a-practitioner',
    dates: [
      { start: '2026-01-21', end: '2026-01-21', time: '8:30 AM - 3:30 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/certified-path-to-agility-practitioner-workshop-tickets-1963603576155?aff=oddtdtcreator' },
      { start: '2026-04-22', end: '2026-04-22', time: '8:30 AM - 3:30 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/1978346117493?aff=oddtdtcreator' },
      { start: '2026-07-22', end: '2026-07-22', time: '8:30 AM - 3:30 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/1978627860193?aff=oddtdtcreator' },
      { start: '2026-10-21', end: '2026-10-21', time: '8:30 AM - 3:30 PM CT', format: 'virtual', eventbriteUrl: 'https://www.eventbrite.com/e/1978628252366?aff=oddtdtcreator' },
    ],
    price: 995,
  },
];

// Helper functions
export const getCourseBySlug = (slug) => courses.find(c => c.slug === slug);
export const getCourseById = (id) => courses.find(c => c.id === id);
export const getCoursesByCategory = (category) => courses.filter(c => c.category === category);
export const getFeaturedCourses = () => courses.filter(c => c.featured);
export const getPopularCourses = () => courses.filter(c => c.popular);
export const getRelatedCourses = (courseId) => {
  const course = getCourseById(courseId);
  if (!course?.relatedCourses) return [];
  return course.relatedCourses.map(id => getCourseById(id)).filter(Boolean);
};
export const getUpcomingWorkshops = () => {
  const today = new Date().toISOString().split('T')[0];
  return publicWorkshops
    .map(workshop => ({
      ...workshop,
      course: getCourseById(workshop.courseId),
      dates: workshop.dates.filter(d => d.start >= today)
    }))
    .filter(w => w.dates.length > 0);
};
