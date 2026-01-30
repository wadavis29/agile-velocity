export const problems = [
  {
    id: 'stalled-transformation',
    slug: 'stalled-or-superficial-transformation',
    title: 'Stalled Transformation',
    tagline: 'Your Agile Transformation Hit a Wall',
    icon: 'fa-pause',
    shortDesc: 'Started strong, lost momentum',

    // The benefit they get - lead with this
    benefit: {
      headline: 'Get Your Transformation Moving Again',
      subhead: 'Restart stalled initiatives and turn going-through-the-motions into real organizational change.',
      points: [
        'Teams actually adopt new ways of working (not just new terminology)',
        'Measurable improvements in delivery speed and quality',
        'Leadership alignment that removes blockers instead of creating them',
        'Self-sustaining change that continues without constant external pressure'
      ]
    },

    // The pain they're feeling right now
    problem: {
      headline: 'You\'ve Done Agile Training. Nothing Changed.',
      description: 'You invested in an agile transformation. People went to training. You renamed roles and scheduled standups. But six months later, you\'re getting the same results. Or worse. The transformation stalled, and now there\'s widespread skepticism that any of this will ever work.',
      symptoms: [
        { icon: 'fa-masks-theater', text: 'Teams do the ceremonies but skip the substance. Standups are status reports, retros produce no action' },
        { icon: 'fa-person-walking-arrow-loop-left', text: 'Old habits returned after the initial push. Waterfall with new names' },
        { icon: 'fa-face-rolling-eyes', text: 'Eye rolls when anyone mentions "agile." Credibility is shot' },
        { icon: 'fa-user-tie', text: 'Leadership says the right words but decisions still flow top-down' },
        { icon: 'fa-chart-simple', text: 'No measurable improvement in the metrics that actually matter' },
        { icon: 'fa-hand-holding-dollar', text: 'Consultants left, and so did the momentum' }
      ]
    },

    // Why this happens
    rootCause: {
      headline: 'Why Transformations Stall',
      paragraphs: [
        'Most transformations fail because they focus on practices instead of outcomes. You can adopt every Scrum ceremony and still operate like a waterfall organization if the underlying culture, structure, and incentives don\'t change.',
        'The second killer: leadership lip service. Executives say they support the transformation but continue rewarding the old behaviors. Teams see the gap between words and actions, and they stop trying.',
        'The third: no internal ownership. When consultants drive the change, it leaves when they leave. Sustainable transformation requires building internal capability to continue improving.'
      ]
    },

    // Stats that validate the pain
    stats: [
      { num: '70', unit: '%', label: 'of agile transformations fail to deliver expected results', source: 'McKinsey' },
      { num: '84', unit: '%', label: 'of organizations struggle to maintain transformation momentum', source: 'BCG' },
      { num: '2', unit: 'yrs', label: 'average time for transformation benefits to fade without sustained effort', source: 'Industry research' }
    ],

    // How we fix it - specific, not vague
    approach: {
      headline: 'How We Restart Stalled Transformations',
      intro: 'We don\'t do another training. We diagnose why change isn\'t sticking and address the real blockers.',
      steps: [
        {
          num: '01',
          title: 'Find the Real Blockers',
          description: 'We assess where the transformation actually stalled. Is it team behaviors, leadership alignment, organizational structure, or incentive systems? Usually it\'s all four. We identify what\'s actually preventing change.',
          outcome: 'Clear diagnosis of what\'s blocking progress'
        },
        {
          num: '02',
          title: 'Align Leadership for Real',
          description: 'We work with your leadership to align actions with words. This means changing how decisions are made, what gets rewarded, and how success is measured. Leaders model the change or it doesn\'t happen.',
          outcome: 'Leadership behaviors that reinforce the transformation'
        },
        {
          num: '03',
          title: 'Build Internal Ownership',
          description: 'We develop your internal coaches and change agents: people who own the transformation after we leave. They learn to facilitate, coach, and drive continuous improvement themselves.',
          outcome: 'Internal capability that sustains change'
        },
        {
          num: '04',
          title: 'Measure What Matters',
          description: 'We implement outcome-based metrics using Path to Agility. Not "are we doing Scrum?" but "are we delivering faster, with better quality, and happier teams?" Track progress on what actually matters.',
          outcome: 'Visible, measurable improvement in business outcomes'
        }
      ]
    },

    // Proof it works
    results: {
      headline: 'What Happens When Transformations Restart',
      items: [
        {
          title: 'Teams stop faking it',
          description: 'People actually use the new practices instead of just checking boxes. Standups become real collaboration. Retros produce actual changes.'
        },
        {
          title: 'Business metrics improve',
          description: 'Delivery speed increases. Quality improves. Customer satisfaction rises. The transformation starts producing the ROI you expected.',
          quote: '"We accelerated through our transition with Agile Velocity\'s help. The Path to Agility was crucial to our journey because it focused on outcomes." — Jeanette Ward, CEO, Texas Mutual Insurance'
        },
        {
          title: 'The cynics come around',
          description: 'When people see real improvement, they stop rolling their eyes. Results convince the skeptics better than any training ever could.'
        },
        {
          title: 'You don\'t need us forever',
          description: 'Your internal coaches carry it forward. Improvement becomes a habit. You stop paying for consultants to tell you things you already know.'
        }
      ]
    },

    cta: {
      headline: 'Ready to Restart?',
      text: 'Tell us where you\'re stuck. We\'ll help you figure out what\'s blocking progress and how to fix it. 30 minutes, no pitch.',
      buttonText: 'Get Unstuck'
    },

    related: ['leadership-misalignment-and-governance-drag', 'burnout-low-trust-and-change-fatigue', 'no-real-visibility-and-vanity-metrics']
  },

  {
    id: 'prioritization-chaos',
    slug: 'portfolio-and-prioritization-chaos',
    title: 'Prioritization Chaos',
    tagline: 'Everything Is Priority One',
    icon: 'fa-shuffle',
    shortDesc: 'Too much WIP, nothing ships',

    benefit: {
      headline: 'Ship What Actually Matters',
      subhead: 'Replace the chaos of competing priorities with clear focus that gets the right things done.',
      points: [
        'Teams finish work instead of juggling 10 things at once',
        'Strategic initiatives actually get completed',
        'Leaders agree on what matters most (and what doesn\'t)',
        'Less stress, more throughput (counterintuitive but true)'
      ]
    },

    problem: {
      headline: 'When Everything Is Urgent, Nothing Gets Done.',
      description: 'Your teams are overwhelmed. Every stakeholder claims their project is the top priority. Work keeps starting but nothing finishes. The backlog grows while delivery shrinks. People are busy all the time but strategic initiatives sit incomplete for months.',
      symptoms: [
        { icon: 'fa-layer-group', text: '10+ initiatives in flight per team, nothing getting full attention' },
        { icon: 'fa-ban', text: 'Strategic projects stuck at 80% complete for months' },
        { icon: 'fa-arrows-spin', text: 'Constant context switching. People juggle 5 projects daily' },
        { icon: 'fa-explosion', text: 'Every new request is "urgent" and displaces current work' },
        { icon: 'fa-people-group', text: 'Stakeholders fight for resources instead of aligning on priorities' },
        { icon: 'fa-face-tired', text: 'Teams exhausted from thrashing between competing demands' }
      ]
    },

    rootCause: {
      headline: 'Why Organizations Can\'t Prioritize',
      paragraphs: [
        'Prioritization fails when leaders avoid making hard choices. It\'s politically easier to say "yes" to everyone than to tell a stakeholder their project won\'t happen this quarter. So everything becomes priority one.',
        'The math is unforgiving: if you have 10 priorities and 5 teams, you get 2 priorities per team. If you have 50 priorities, you get 10 per team. That means constant context switching, nothing finishing, and everyone frustrated.',
        'The solution isn\'t working harder. It\'s working on fewer things. Counterintuitively, doing less means delivering more.'
      ]
    },

    stats: [
      { num: '80', unit: '%', label: 'of features are rarely or never used. You\'re building the wrong things', source: 'Standish Group' },
      { num: '40', unit: '%', label: 'productivity loss from context switching between tasks', source: 'American Psychological Association' },
      { num: '3x', unit: '', label: 'faster delivery when teams focus on one thing at a time', source: 'Flow research' }
    ],

    approach: {
      headline: 'How We End Prioritization Chaos',
      intro: 'We create systems that force prioritization decisions and make tradeoffs visible.',
      steps: [
        {
          num: '01',
          title: 'Make the Chaos Visible',
          description: 'We map everything currently in flight. When leaders see 47 active initiatives competing for 5 teams, the impossibility becomes obvious. Visibility forces honesty.',
          outcome: 'Clear picture of current work that exposes the problem'
        },
        {
          num: '02',
          title: 'Create Prioritization Criteria',
          description: 'We establish objective criteria for ranking work: strategic alignment, customer impact, revenue potential, cost of delay. Decisions become defensible, not political.',
          outcome: 'Objective framework for saying yes, and saying no'
        },
        {
          num: '03',
          title: 'Implement WIP Limits',
          description: 'We cap how much can be in progress at once. When something new comes in, something else has to wait. This forces prioritization decisions that were being avoided.',
          outcome: 'Built-in constraints that prevent overload'
        },
        {
          num: '04',
          title: 'Establish Regular Re-prioritization',
          description: 'Priorities change, and that\'s fine. We create regular cadences to reassess and adjust, so changes happen in an orderly way instead of constant disruption.',
          outcome: 'Predictable process for handling changing priorities'
        }
      ]
    },

    results: {
      headline: 'What Happens When Focus Returns',
      items: [
        {
          title: 'Things actually finish',
          description: 'Work that sat at 80% for months gets completed. Teams ship instead of shuffle.',
          quote: '"Before working with Agile Velocity we never finished a sprint. We are now completing sprints consistently and pulling in additional work." — Mitratech'
        },
        {
          title: 'Strategic initiatives get done',
          description: 'The important work that kept getting displaced finally gets the focus it deserves. Strategy becomes reality.'
        },
        {
          title: 'Stress decreases',
          description: 'Teams stop drowning. Knowing what\'s actually expected (and what\'s not) reduces anxiety and increases satisfaction.'
        },
        {
          title: 'You deliver more by doing less',
          description: 'Sounds backwards, but it works. Teams focused on 2 things finish both. Teams juggling 10 things finish none.'
        }
      ]
    },

    cta: {
      headline: 'Ready for Focus?',
      text: 'Tell us about the chaos. We\'ll help you figure out what actually matters and how to protect it. 30 minutes, no pitch.',
      buttonText: 'Find Focus'
    },

    related: ['messy-scaling-and-dependency-hell', 'no-real-visibility-and-vanity-metrics', 'burnout-low-trust-and-change-fatigue']
  },

  {
    id: 'dependency-hell',
    slug: 'messy-scaling-and-dependency-hell',
    title: 'Scaling & Dependencies',
    tagline: 'Everything Blocks Everything Else',
    icon: 'fa-diagram-project',
    shortDesc: 'Teams blocked everywhere',

    benefit: {
      headline: 'Teams That Can Actually Ship',
      subhead: 'Break the dependency chains so teams can deliver independently instead of waiting on each other.',
      points: [
        'Teams complete work without waiting weeks for other teams',
        'Planning becomes simpler with fewer coordination meetings',
        'Changes don\'t break everything. One team can ship without affecting others',
        'Scaling works because teams aren\'t tangled together'
      ]
    },

    problem: {
      headline: 'Every Team Is Waiting on Every Other Team.',
      description: 'Nothing moves independently. Every feature requires coordination across 5 teams. Planning sessions are dependency mapping exercises. Teams spend more time in meetings than building. The organization is technically "scaled" but slower than when it was small.',
      symptoms: [
        { icon: 'fa-link', text: 'Every story requires work from 3+ teams to complete' },
        { icon: 'fa-hourglass-half', text: 'Teams blocked waiting for other teams, weeks of delay' },
        { icon: 'fa-calendar-days', text: 'PI planning takes a full week and produces a dependency board from hell' },
        { icon: 'fa-users-rectangle', text: 'More coordination meetings than working time' },
        { icon: 'fa-snail', text: 'Adding teams made delivery slower, not faster' },
        { icon: 'fa-code-merge', text: 'Integration is painful because everyone\'s code conflicts' }
      ]
    },

    rootCause: {
      headline: 'Why Dependencies Multiply',
      paragraphs: [
        'Dependencies are usually an architecture problem wearing an org chart disguise. When systems are tightly coupled, teams are tightly coupled. You can\'t have independent teams if the code won\'t let them work independently.',
        'The second cause: teams organized by function instead of value. When frontend, backend, and database are separate teams, every feature requires all three. You\'ve built dependency into the structure.',
        'Scaling frameworks can make this worse if applied mechanically. SAFe trains, for example, can institutionalize dependencies instead of eliminating them.'
      ]
    },

    stats: [
      { num: '70', unit: '%', label: 'of a feature\'s time is spent waiting, not being worked on', source: 'Value stream studies' },
      { num: '50', unit: '%', label: 'of PI planning time spent mapping dependencies', source: 'SAFe implementations' },
      { num: '3x', unit: '', label: 'longer to deliver when work crosses team boundaries', source: 'Accelerate research' }
    ],

    approach: {
      headline: 'How We Break Dependency Chains',
      intro: 'We restructure teams and systems so work can flow without waiting.',
      steps: [
        {
          num: '01',
          title: 'Map the Dependencies',
          description: 'We visualize how work actually flows and where it gets stuck. Which dependencies are structural? Which are habitual? You can\'t fix what you can\'t see.',
          outcome: 'Clear picture of what\'s blocking flow'
        },
        {
          num: '02',
          title: 'Restructure Teams Around Products',
          description: 'We reorganize teams so each one can build and ship a complete feature: frontend, backend, testing, all in one team. No more handing work between teams.',
          outcome: 'Teams structured to ship independently'
        },
        {
          num: '03',
          title: 'Untangle the Code',
          description: 'We work with your architects to separate systems so teams can change their code without breaking everyone else\'s. Clear boundaries between systems.',
          outcome: 'Code structure that lets teams ship independently'
        },
        {
          num: '04',
          title: 'Keep Coordination Simple',
          description: 'Some dependencies can\'t be eliminated. For those, we create quick sync-ups that don\'t require week-long planning ceremonies.',
          outcome: 'Simple ways to handle the dependencies that remain'
        }
      ]
    },

    results: {
      headline: 'What Happens When Dependencies Break',
      items: [
        {
          title: 'Teams ship independently',
          description: 'Work flows without waiting. Teams complete features in days instead of coordinating for weeks.'
        },
        {
          title: 'Planning simplifies',
          description: 'PI planning goes from a week to a day, or disappears entirely for autonomous teams.',
          quote: '"Their coaching enabled our teams to pivot and re-prioritize work in a quick and organized manner." — Katie Morris, Southwest Airlines'
        },
        {
          title: 'Adding teams actually scales',
          description: 'More teams means more throughput instead of more coordination overhead.'
        },
        {
          title: 'Deployments stop being scary',
          description: 'When teams are independent, one team\'s changes don\'t break another team\'s work. Ship with confidence.'
        }
      ]
    },

    cta: {
      headline: 'Ready to Break Free?',
      text: 'Tell us about the dependencies. We\'ll help you identify which can be eliminated and how. 30 minutes, no pitch.',
      buttonText: 'Break Dependencies'
    },

    related: ['portfolio-and-prioritization-chaos', 'silos-handoffs-and-support-work-derailment', 'leadership-misalignment-and-governance-drag']
  },

  {
    id: 'governance-drag',
    slug: 'leadership-misalignment-and-governance-drag',
    title: 'Leadership Misalignment',
    tagline: 'Leaders Slow Everything Down',
    icon: 'fa-gavel',
    shortDesc: 'Slow decisions, misaligned leaders',

    benefit: {
      headline: 'Aligned Leaders, Fast Decisions',
      subhead: 'Get executives on the same page and cut approval times from months to days.',
      points: [
        'Decisions made in days, not months',
        'Executives agree on priorities (and stick to them)',
        'Fewer approval hoops so teams can actually move',
        'Clear authority so people know who decides what'
      ]
    },

    problem: {
      headline: 'Waiting for Approval Is Your Biggest Bottleneck.',
      description: 'Every initiative needs sign-off from five committees. Leaders publicly support agility but privately protect their fiefdoms. Decisions take months because no one has authority, or because everyone does. Your governance process exists to prevent bad things, but it\'s preventing all things.',
      symptoms: [
        { icon: 'fa-clock', text: 'Approvals take longer than the work itself' },
        { icon: 'fa-building-columns', text: 'Multiple committees review the same decision' },
        { icon: 'fa-masks-theater', text: 'Leaders say "yes" in meetings but block in practice' },
        { icon: 'fa-arrows-to-dot', text: 'Every decision escalates because no one has authority' },
        { icon: 'fa-shield', text: 'Governance designed to prevent risk prevents everything' },
        { icon: 'fa-circle-nodes', text: 'Political dynamics matter more than merit' }
      ]
    },

    rootCause: {
      headline: 'Why Governance Becomes a Drag',
      paragraphs: [
        'Governance processes accumulate over time. Each failure leads to a new approval step. Each scandal leads to a new committee. No one ever removes governance, they only add it. Eventually the overhead exceeds the risk it prevents.',
        'Leadership misalignment is harder to see. Executives may agree in meetings but compete privately for budget, headcount, and influence. This creates hidden blockers that teams can\'t identify or address.',
        'The deepest issue: many governance processes are designed for a world of annual releases and waterfall projects. They don\'t work for continuous delivery and rapid iteration.'
      ]
    },

    stats: [
      { num: '18', unit: 'mo', label: 'to run a single pilot in large enterprises (average)', source: 'Industry research' },
      { num: '42', unit: '%', label: 'of transformation failures blamed on leadership misalignment', source: 'BCG' },
      { num: '5x', unit: '', label: 'faster decisions at companies with streamlined governance', source: 'McKinsey' }
    ],

    approach: {
      headline: 'How We Accelerate Governance',
      intro: 'We align leaders and redesign governance for speed without sacrificing accountability.',
      steps: [
        {
          num: '01',
          title: 'Surface the Misalignment',
          description: 'We facilitate honest conversations about where leaders actually disagree. Hidden conflicts can\'t be resolved. We create safe spaces to surface and address the real tensions.',
          outcome: 'Visible alignment, or visible disagreement that can be resolved'
        },
        {
          num: '02',
          title: 'Clarify Decision Rights',
          description: 'Who can decide what? We establish clear authority so decisions don\'t escalate endlessly. Teams know what they can do without asking. Leaders know what requires their input.',
          outcome: 'Clear authority that enables fast decisions'
        },
        {
          num: '03',
          title: 'Redesign for Speed',
          description: 'We audit governance processes and eliminate the ones that don\'t add value. For necessary governance, we create lightweight alternatives that work with agile delivery.',
          outcome: 'Fewer approval steps, faster decisions'
        },
        {
          num: '04',
          title: 'Train Leaders to Clear the Path',
          description: 'Most leaders learned to control and approve. We train them to remove obstacles and let teams run. It\'s a different skill set.',
          outcome: 'Leaders who clear blockers instead of creating them'
        }
      ]
    },

    results: {
      headline: 'What Happens When Leaders Align',
      items: [
        {
          title: 'Decisions accelerate',
          description: 'What took months now takes days. Clear authority means decisions happen where the information is.',
          quote: '"I was impressed with Agile Velocity\'s ability to quickly come up to speed, gain trust from the Southwest Teams and begin to partner in driving our transformation." — Katie Morris, Director of IT Transformations, Southwest Airlines'
        },
        {
          title: 'Strategy actually happens',
          description: 'When leaders agree on priorities, strategic initiatives get resources and attention. No more strategy decks that sit on a shelf.'
        },
        {
          title: 'Teams move faster',
          description: 'Empowered teams don\'t wait for approval. They know what they can do and they do it.'
        },
        {
          title: 'Less time playing politics',
          description: 'When executives agree on what matters, people stop jockeying for position and start focusing on results.'
        }
      ]
    },

    cta: {
      headline: 'Ready to Align?',
      text: 'Tell us about the governance challenges. We\'ll help you identify what\'s slowing decisions and how to fix it. 30 minutes, no pitch.',
      buttonText: 'Accelerate Decisions'
    },

    related: ['stalled-or-superficial-transformation', 'portfolio-and-prioritization-chaos', 'no-real-visibility-and-vanity-metrics']
  },

  {
    id: 'silos-handoffs',
    slug: 'silos-handoffs-and-support-work-derailment',
    title: 'Silos & Handoffs',
    tagline: 'Work Disappears Into the Cracks',
    icon: 'fa-cubes',
    shortDesc: 'Endless handoffs, no ownership',

    benefit: {
      headline: 'One Team Owns It, Start to Finish',
      subhead: 'Stop passing work between teams. One team builds it, ships it, and owns the result.',
      points: [
        'Features get done in weeks, not months of handoffs',
        'When something breaks, one team fixes it (no finger-pointing)',
        'Support work stops derailing your roadmap',
        'Teams have everything they need to ship without waiting'
      ]
    },

    problem: {
      headline: 'Every Handoff Is a Place for Work to Die.',
      description: 'Work passes through seven teams before it reaches customers. Each handoff adds delay and loses information. When something goes wrong, everyone points at someone else. Support work constantly derails planned work because teams can\'t say no to their "internal customers."',
      symptoms: [
        { icon: 'fa-arrows-alt', text: 'Work touches 5+ teams before reaching customers' },
        { icon: 'fa-file-circle-question', text: 'Information lost at every handoff, rework required' },
        { icon: 'fa-hand-point-right', text: 'When things break, finger-pointing instead of fixing' },
        { icon: 'fa-traffic-light', text: 'Work sits in queues between teams for weeks' },
        { icon: 'fa-headset', text: 'Support tickets constantly interrupt planned work' },
        { icon: 'fa-user-slash', text: 'No one owns the whole. Everyone owns a piece' }
      ]
    },

    rootCause: {
      headline: 'Why Silos Form and Persist',
      paragraphs: [
        'Silos are usually accidents of history. Organizations grow by adding specialized functions. Frontend, backend, QA, DevOps, security: each becomes a team. Before long, every piece of work requires all of them, and nobody owns the outcome.',
        'Handoffs create queues. Each team has their own priorities and their own backlog. Your work competes with everyone else\'s work. Even if each team is fast, the total time is dominated by waiting.',
        'Support work exploits this structure. When you\'re organized by function, every team serves every other team. There\'s no way to say "that\'s not my problem." So interrupts flow freely and nobody can focus.'
      ]
    },

    stats: [
      { num: '70', unit: '%', label: 'of a feature\'s cycle time is waiting in queues between teams', source: 'Value stream mapping' },
      { num: '3x', unit: '', label: 'longer to deliver when work crosses team boundaries', source: 'Accelerate research' },
      { num: '50', unit: '%', label: 'of developer time lost to unplanned support work', source: 'Engineering surveys' }
    ],

    approach: {
      headline: 'How We Eliminate Silos and Handoffs',
      intro: 'We restructure teams so each one can complete work from start to finish, with one team owning the outcome.',
      steps: [
        {
          num: '01',
          title: 'Map How Work Actually Flows',
          description: 'We trace how work moves from idea to customer. Where does it wait? Where does information get lost? Where does ownership get confused? The map reveals where time is wasted.',
          outcome: 'Clear picture of where handoffs add delay'
        },
        {
          num: '02',
          title: 'Build Teams That Can Ship Alone',
          description: 'We reorganize so each team has all the skills needed to deliver: frontend, backend, testing, deployment. No handoffs because no gaps in the team.',
          outcome: 'Teams that can finish what they start'
        },
        {
          num: '03',
          title: 'Establish Clear Ownership',
          description: 'Each team owns an outcome, not a function. They\'re accountable for the result, not just their piece. Ownership eliminates finger-pointing.',
          outcome: 'Single point of accountability for outcomes'
        },
        {
          num: '04',
          title: 'Contain Support Work',
          description: 'We create explicit policies for handling support work: dedicated capacity, rotation schedules, or separate teams. Protect the focus of teams doing planned work.',
          outcome: 'Planned work that doesn\'t get derailed'
        }
      ]
    },

    results: {
      headline: 'What Happens When Silos Fall',
      items: [
        {
          title: 'Cycle time drops dramatically',
          description: 'Removing handoffs removes waiting. Work that took months now takes weeks.',
          quote: '"We were able to develop an application that handled large scale schedule changes and the solution was built and deployed into production in 3 weeks. Prior to the transformation, this effort would have taken months." — Marty Garza, VP Air Operations Technology, Southwest Airlines'
        },
        {
          title: 'Quality improves',
          description: 'Teams that own the outcome care about quality. No more throwing problems over the wall.'
        },
        {
          title: 'Problems get fixed faster',
          description: 'Clear ownership means accountability. When something breaks, one team owns fixing it.'
        },
        {
          title: 'Planned work stays on track',
          description: 'Protected capacity for support work means planned initiatives don\'t get derailed.'
        }
      ]
    },

    cta: {
      headline: 'Ready to Break Down Silos?',
      text: 'Tell us about the handoffs. We\'ll help you identify which can be eliminated and how to restructure. 30 minutes, no pitch.',
      buttonText: 'Eliminate Handoffs'
    },

    related: ['messy-scaling-and-dependency-hell', 'portfolio-and-prioritization-chaos', 'burnout-low-trust-and-change-fatigue']
  },

  {
    id: 'vanity-metrics',
    slug: 'no-real-visibility-and-vanity-metrics',
    title: 'Vanity Metrics',
    tagline: 'Dashboards That Don\'t Tell the Truth',
    icon: 'fa-chart-pie',
    shortDesc: 'No real visibility',

    benefit: {
      headline: 'Metrics That Actually Tell You Something',
      subhead: 'Replace misleading vanity metrics with actionable data that drives real decisions.',
      points: [
        'Know whether you\'re actually improving (not just feeling busy)',
        'Connect what teams do to business results',
        'Identify problems before they become crises',
        'Make decisions based on evidence, not opinion'
      ]
    },

    problem: {
      headline: 'Your Metrics Are Lying to You.',
      description: 'You have dashboards. They show velocity is up, story points are green, burndown looks good. But customers are still frustrated, releases still slip, and teams are still struggling. The metrics say success while reality says failure. Nobody trusts the numbers anymore.',
      symptoms: [
        { icon: 'fa-gauge-high', text: 'Velocity is up but delivery hasn\'t actually improved' },
        { icon: 'fa-calculator', text: 'Teams game metrics to hit targets that don\'t matter' },
        { icon: 'fa-question', text: 'Executives can\'t answer "are we getting better?"' },
        { icon: 'fa-link-slash', text: 'Team metrics and business results aren\'t connected' },
        { icon: 'fa-bullseye', text: 'Measuring outputs (features shipped) not outcomes (customer value)' },
        { icon: 'fa-face-meh', text: 'Teams stopped taking metrics seriously. Everyone knows they\'re theater' }
      ]
    },

    rootCause: {
      headline: 'Why Metrics Become Useless',
      paragraphs: [
        'Goodhart\'s Law: when a measure becomes a target, it ceases to be a good measure. The moment you incentivize velocity, teams inflate story points. The moment you measure features shipped, teams ship small features. The metric moves while the reality doesn\'t.',
        'Vanity metrics tell you what you want to hear, not what you need to know. Story points completed, burndown charts, feature counts: they\'re easy to make green and meaningless for decision-making.',
        'The deeper problem: most organizations measure activity instead of outcomes. You know how busy teams are but not whether that busyness creates business value.'
      ]
    },

    stats: [
      { num: '80', unit: '%', label: 'of features are rarely or never used, but they counted as delivered', source: 'Standish Group' },
      { num: '73', unit: '%', label: 'of executives don\'t trust their organization\'s data', source: 'KPMG' },
      { num: '90', unit: '%', label: 'of organizations measure outputs, not outcomes', source: 'Industry surveys' }
    ],

    approach: {
      headline: 'How We Build Metrics That Matter',
      intro: 'We implement outcome-based measurement that connects team activity to business results.',
      steps: [
        {
          num: '01',
          title: 'Define Real Outcomes',
          description: 'What does success actually look like? We identify the business outcomes that matter: customer satisfaction, time to market, quality, predictability. Real outcomes, not proxy measures.',
          outcome: 'Clear definition of what success means'
        },
        {
          num: '02',
          title: 'Connect Daily Work to Business Results',
          description: 'We show how what teams do every day connects to what the business cares about. Path to Agility provides the framework: practices lead to capabilities, capabilities drive outcomes.',
          outcome: 'Clear connection between team activity and business results'
        },
        {
          num: '03',
          title: 'Build Honest Dashboards',
          description: 'We implement metrics that can\'t be easily gamed and that provide actionable insights. Leading indicators that predict problems before they hit. Trailing indicators that confirm progress.',
          outcome: 'Dashboards executives and teams both trust'
        },
        {
          num: '04',
          title: 'Use Data to Get Better',
          description: 'Metrics aren\'t for judging, they\'re for learning. We build habits of looking at the numbers, spotting problems, trying fixes, and checking if they worked.',
          outcome: 'Teams that use data to improve, not just report'
        }
      ]
    },

    results: {
      headline: 'What Happens When Metrics Tell the Truth',
      items: [
        {
          title: 'Executives can finally answer "are we improving?"',
          description: 'Leaders get data they actually trust. No more gut feel or cherry-picked stats. Real answers to real questions.',
          quote: '"The Path to Agility was crucial to our journey because it focused on outcomes, strengthened our capabilities, and became an integral part of our improvement mindset." — Jeanette Ward, CEO, Texas Mutual Insurance'
        },
        {
          title: 'People stop inflating numbers',
          description: 'When you measure customer outcomes instead of story points, there\'s nothing to game. Teams focus on actual results.'
        },
        {
          title: 'You see problems before they blow up',
          description: 'Good metrics warn you when something\'s going wrong, before customers complain or deadlines slip. Time to fix, not scramble.'
        },
        {
          title: 'Progress becomes undeniable',
          description: 'When metrics are honest, improvement shows up in the numbers. Hard to argue with data that everyone trusts.'
        }
      ]
    },

    cta: {
      headline: 'Ready for Real Visibility?',
      text: 'Tell us what you\'re measuring today. We\'ll help you identify what you should be measuring. 30 minutes, no pitch.',
      buttonText: 'Get Real Metrics'
    },

    related: ['stalled-or-superficial-transformation', 'leadership-misalignment-and-governance-drag', 'portfolio-and-prioritization-chaos']
  },

  {
    id: 'burnout-fatigue',
    slug: 'burnout-low-trust-and-change-fatigue',
    title: 'Burnout & Change Fatigue',
    tagline: 'Your People Are Exhausted',
    icon: 'fa-battery-quarter',
    shortDesc: 'Exhausted, resistant teams',

    benefit: {
      headline: 'Teams With Energy, Not Exhaustion',
      subhead: 'Stop the burnout cycle so your people can do their best work without burning out.',
      points: [
        'No more late nights and weekend crunches to hit deadlines',
        'Your best people stop quitting',
        'Teams willing to try new things instead of resisting change',
        'Delivery that doesn\'t depend on heroics'
      ]
    },

    problem: {
      headline: 'Your Teams Are Running on Empty.',
      description: 'People are tired. Not normal tired, but bone-deep, considering-quitting tired. They\'ve been through three reorgs, four strategy pivots, and two failed transformations. Now you\'re asking for another change and getting dead stares. Trust is gone. Nobody goes above and beyond anymore. Your best people are updating their resumes.',
      symptoms: [
        { icon: 'fa-person-running-fast', text: 'Everything requires heroics: late nights, weekends, constant crunch' },
        { icon: 'fa-right-from-bracket', text: 'Best performers leaving. Exit interviews mention "burnout" and "culture"' },
        { icon: 'fa-hand', text: 'Teams resist any new initiative. "Here we go again"' },
        { icon: 'fa-moon', text: 'Sick days up, energy down. People are physically depleted' },
        { icon: 'fa-volume-off', text: 'Meetings are silent. No one speaks up or pushes back anymore' },
        { icon: 'fa-clock', text: 'Doing minimum required. Passion and initiative are dead' }
      ]
    },

    rootCause: {
      headline: 'Why Organizations Create Burnout',
      paragraphs: [
        'Burnout isn\'t about individual resilience. It\'s about systemic overload. Organizations that normalize 60-hour weeks, require heroics to hit deadlines, and punish failure create burnout by design. The system is unsustainable.',
        'Change fatigue compounds the problem. Every failed transformation, every abandoned initiative, every pivot without explanation depletes trust and energy. People protect themselves by disengaging.',
        'The irony: burned out teams are less productive, not more. The crunch that seemed necessary actually makes delivery worse. Sustainable pace isn\'t just humane, it\'s more effective.'
      ]
    },

    stats: [
      { num: '76', unit: '%', label: 'of employees experience burnout at least sometimes', source: 'Gallup' },
      { num: '3.5x', unit: '', label: 'more likely to leave: burned out employees vs. engaged ones', source: 'McKinsey' },
      { num: '125B', unit: '$', label: 'annual healthcare costs from workplace burnout (US)', source: 'Stanford/Harvard' }
    ],

    approach: {
      headline: 'How We Restore Sustainable Pace',
      intro: 'We fix the systems that create burnout and rebuild the trust that change fatigue destroyed.',
      steps: [
        {
          num: '01',
          title: 'Reduce the Load',
          description: 'We identify what\'s creating overload: too much WIP, unrealistic deadlines, understaffed teams. Then we reduce it. Not by working smarter, but by doing less. Sustainable pace starts with sustainable expectations.',
          outcome: 'Workload that matches capacity'
        },
        {
          num: '02',
          title: 'Eliminate Heroics',
          description: 'We make heroics unnecessary by fixing the underlying problems. If hitting deadlines requires late nights, the problem is the deadline or the scope, not the effort level.',
          outcome: 'Delivery that doesn\'t depend on unsustainable effort'
        },
        {
          num: '03',
          title: 'Rebuild Trust',
          description: 'We help leaders acknowledge past failures honestly. Then we demonstrate change through action, not promises. Small wins build credibility. Consistency rebuilds trust.',
          outcome: 'Teams willing to engage again'
        },
        {
          num: '04',
          title: 'Protect the Recovery',
          description: 'We build guardrails to prevent backsliding: WIP limits, explicit agreements on sustainable pace, metrics that flag overload early. Recovery requires ongoing protection.',
          outcome: 'Systems that prevent future burnout'
        }
      ]
    },

    results: {
      headline: 'What Happens When Energy Returns',
      items: [
        {
          title: 'People start caring again',
          description: 'When burnout lifts, people go beyond the minimum. Ideas flow. People volunteer for hard problems. Energy is contagious.',
          quote: '"Once we got out of the bottom of the change curve, the energy fundamentally changed. They were able to take ownership in a way they never had the context to do well before." — Nicole Tanzillo, Ceresa'
        },
        {
          title: 'Turnover drops',
          description: 'People don\'t leave jobs they love. Sustainable pace and genuine culture make your best people want to stay.'
        },
        {
          title: 'Productivity increases',
          description: 'Counterintuitively, working less produces more. Fresh teams outperform exhausted ones. Sustainable pace beats crunch.'
        },
        {
          title: 'People stop resisting new ideas',
          description: 'Exhausted teams say no to everything. Rested teams can handle change. When you rebuild trust and energy, the next improvement initiative doesn\'t get stonewalled.'
        }
      ]
    },

    cta: {
      headline: 'Ready to Recover?',
      text: 'Tell us what\'s exhausting your teams. We\'ll help you identify what\'s creating burnout and how to fix it. 30 minutes, no pitch.',
      buttonText: 'Restore Energy'
    },

    related: ['stalled-or-superficial-transformation', 'portfolio-and-prioritization-chaos', 'silos-handoffs-and-support-work-derailment']
  },

  {
    id: 'ai-without-strategy',
    slug: 'ai-and-modernization-without-a-strategy',
    title: 'AI Without Strategy',
    tagline: 'Tools Without a Plan',
    icon: 'fa-microchip',
    shortDesc: 'Tools without a plan',
    hot: true,

    benefit: {
      headline: 'AI Projects That Actually Ship',
      subhead: 'Stop experimenting forever. Get AI into production where it creates real business value.',
      points: [
        'AI projects that reach production (not just demos)',
        'Clear plan for which AI use cases to pursue first',
        'Teams that can build and run AI systems long-term',
        'Legal and ethical guardrails so you don\'t get burned'
      ]
    },

    problem: {
      headline: 'You\'re Experimenting with AI but Getting Nowhere.',
      description: 'Everyone\'s excited about AI. You\'ve run pilots, bought tools, maybe even hired a team. But months later, nothing\'s in production. Experiments don\'t scale. Nobody knows what to work on. The C-suite asks for an AI strategy and gets PowerPoints instead of results. Meanwhile, competitors are actually shipping.',
      symptoms: [
        { icon: 'fa-flask', text: 'Multiple AI pilots, none in production' },
        { icon: 'fa-map', text: 'No clear roadmap for which use cases to pursue' },
        { icon: 'fa-graduation-cap', text: 'Teams lack skills to build and maintain AI solutions' },
        { icon: 'fa-scale-unbalanced', text: 'Governance unclear. Legal, ethical, and risk questions unanswered' },
        { icon: 'fa-puzzle-piece', text: 'AI initiatives disconnected from core business strategy' },
        { icon: 'fa-gauge-low', text: 'Technical debt and legacy systems block AI integration' }
      ]
    },

    rootCause: {
      headline: 'Why AI Initiatives Stall',
      paragraphs: [
        'AI is a capability, not a strategy. Many organizations chase AI because competitors are doing it, without clarity on what problems AI should solve. Technology looking for a problem, rather than problems finding solutions.',
        'The skills gap is real. Building production AI systems requires skills most organizations don\'t have and can\'t easily hire. Data engineering, ML ops, responsible AI practices. Pilots don\'t need these; production does.',
        'Legacy systems weren\'t built for AI. Your data is scattered, dirty, and locked in silos. Your infrastructure can\'t support real-time inference. Modernization isn\'t glamorous, but it\'s prerequisite.'
      ]
    },

    stats: [
      { num: '87', unit: '%', label: 'of AI projects never make it to production', source: 'Gartner' },
      { num: '74', unit: '%', label: 'of companies struggle to move AI from pilot to scale', source: 'MIT Sloan' },
      { num: '2.5x', unit: '', label: 'higher failure rate for AI initiatives without clear strategy', source: 'McKinsey' }
    ],

    approach: {
      headline: 'How We Create AI Strategy That Works',
      intro: 'We connect AI capabilities to business outcomes and build the path from experiment to production.',
      steps: [
        {
          num: '01',
          title: 'Start with Business Problems',
          description: 'What problems actually need solving? We work backward from business outcomes to AI capabilities, not forward from cool technology to vague applications.',
          outcome: 'Clear use cases tied to business value'
        },
        {
          num: '02',
          title: 'Assess Readiness Honestly',
          description: 'We evaluate your data, infrastructure, skills, and governance. What\'s really needed to go from pilot to production? No sugarcoating, just clear-eyed assessment.',
          outcome: 'Honest picture of what needs to change'
        },
        {
          num: '03',
          title: 'Build the Foundation',
          description: 'We help address prerequisites: data quality, infrastructure readiness, team capabilities, governance frameworks. The unglamorous work that makes AI possible.',
          outcome: 'Infrastructure and capabilities for production AI'
        },
        {
          num: '04',
          title: 'Execute with Discipline',
          description: 'We apply agile principles to AI development: small experiments, fast feedback, incremental delivery. Ship value early, learn constantly, scale what works.',
          outcome: 'AI solutions that reach production and deliver value'
        }
      ]
    },

    results: {
      headline: 'What Happens When AI Has a Strategy',
      items: [
        {
          title: 'Pilots become products',
          description: 'AI initiatives move from experiment to production because the path was planned. Real value, not just demos.'
        },
        {
          title: 'Investment pays off',
          description: 'Clear ROI from AI initiatives because they\'re tied to measurable business outcomes. Value that executives can see.'
        },
        {
          title: 'Teams build capability',
          description: 'Internal skills develop alongside initiatives. You build lasting AI capability, not consultant dependency.'
        },
        {
          title: 'You don\'t get blindsided',
          description: 'Clear policies for data privacy, bias, and compliance. You know the risks upfront and have guardrails in place.'
        }
      ]
    },

    cta: {
      headline: 'Ready for AI That Works?',
      text: 'Tell us about your AI ambitions. We\'ll help you build a strategy that gets from pilot to production. 30 minutes, no pitch.',
      buttonText: 'Build AI Strategy'
    },

    related: ['stalled-or-superficial-transformation', 'leadership-misalignment-and-governance-drag', 'no-real-visibility-and-vanity-metrics']
  }
];

export const getProblemBySlug = (slug) => problems.find(p => p.slug === slug);
export const getRelatedProblems = (slugs) => slugs.map(slug => problems.find(p => p.slug === slug)).filter(Boolean);
