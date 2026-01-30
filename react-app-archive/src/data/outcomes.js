export const outcomes = [
  {
    id: 'employee-engagement',
    slug: 'employee-engagement',
    p2aOutcome: 'Employee Engagement',
    p2aDefinition: 'Employees are more satisfied in their work, willing to go the extra mile, passionate about the purpose of their jobs, and committed to the organization.',
    title: 'Build Teams That Give a Damn',
    highlight: 'Give a Damn',
    icon: 'fa-users',
    description: 'Engaged employees don\'t just show up. They show up with energy, ideas, and commitment. We help you create an environment where people actually want to do their best work.',
    bullets: [
      'Increase employee satisfaction and commitment',
      'Create passion and purpose in daily work',
      'Build teams willing to go the extra mile'
    ],
    lead: 'The difference between a team that clocks in and a team that cares is everything. Engaged employees solve problems before you know they exist, mentor without being asked, and treat your company\'s success as their own.',

    problemStats: [
      {
        num: '67',
        unit: '%',
        label: 'of employees are disengaged, showing up but not invested',
        source: 'Gallup State of the Workplace',
        context: 'Two-thirds of your workforce is going through the motions. They\'re present but not passionate, doing the minimum required. That\'s an enormous amount of untapped potential sitting in your org chart.'
      },
      {
        num: '21',
        unit: '%',
        label: 'higher profitability at companies with engaged teams',
        source: 'Gallup Research',
        context: 'Companies with highly engaged employees are 21% more profitable than those without. Engagement isn\'t a soft metric. It directly impacts the bottom line. Engaged teams outperform on every business measure.'
      },
      {
        num: '41',
        unit: '%',
        label: 'fewer sick days taken by engaged employees',
        source: 'Gallup Workplace Study',
        context: 'Engaged employees take 41% fewer sick days than disengaged ones. When people care about their work and their team, they show up. Engagement reduces absenteeism, turnover, and quiet quitting.'
      }
    ],

    problem: [
      "You can tell the difference between a team that's engaged and one that isn't. Engaged teams bring energy to standups, volunteer for hard problems, and push back when they see something wrong. Disengaged teams do the minimum, avoid conflict, and watch the clock.",
      "The causes are systemic: unclear purpose, bureaucratic friction, lack of autonomy, feeling unheard. You can't fix engagement with pizza parties or motivational posters. You fix it by removing the things that kill passion and replacing them with meaningful work, clear impact, and genuine ownership."
    ],

    signs: [
      { icon: 'fa-clock', text: 'People do exactly what\'s asked and nothing more. No initiative, no suggestions, no extra effort.' },
      { icon: 'fa-door-open', text: 'Your best people are leaving, and exit interviews mention "culture" or "growth"' },
      { icon: 'fa-volume-xmark', text: 'Meetings are silent. Nobody challenges ideas or offers alternatives' },
      { icon: 'fa-battery-quarter', text: 'Energy is low. Standups feel like status reports, not collaboration.' },
      { icon: 'fa-user-slash', text: 'People don\'t understand how their work connects to company goals' },
      { icon: 'fa-comments-dollar', text: 'You\'re competing on salary alone because there\'s nothing else to offer' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Engagement isn\'t about perks. It\'s about purpose, autonomy, and impact. We create the conditions where people naturally want to give their best.',
      steps: [
        {
          num: '01',
          title: 'Connect Work to Purpose',
          text: 'We help teams see how their daily work connects to customer outcomes and company mission. When people understand why their work matters, they care about doing it well. We make impact visible.',
          deliverable: 'Clear line of sight from daily tasks to meaningful outcomes'
        },
        {
          num: '02',
          title: 'Create Real Autonomy',
          text: 'Engaged employees feel ownership. We restructure work so teams make real decisions about how to solve problems, how to organize their work, how to improve. Autonomy creates investment.',
          deliverable: 'Teams empowered to make decisions and own results'
        },
        {
          num: '03',
          title: 'Build Feedback Loops',
          text: 'People disengage when they feel unheard. We create mechanisms for ideas to flow upward and for feedback to actually result in change. When people see their input matters, they engage.',
          deliverable: 'Systems where employee voice leads to real change'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When people genuinely care about their work:',
      items: [
        {
          title: 'Discretionary effort appears',
          text: 'Engaged employees go beyond the job description. They mentor others, catch problems early, and bring ideas without being asked.',
          proof: '"Once we got out of the bottom of the change curve, the energy fundamentally changed. They were able to take ownership in a way they never had the context to do well before."   Nicole Tanzillo, Ceresa'
        },
        {
          title: 'Retention improves',
          text: 'People don\'t leave jobs they love. When engagement is high, turnover drops and recruiting becomes easier. Great people want to work with engaged teams.',
          proof: '"Our culture has changed significantly. Within IT, we were very siloed. Teams didn\'t interact with each other. But now what you see is that buzz and energy. Everybody is really focused on collaboration and tackling things together."   Amy Green-Hinojosa, VP Enterprise Program Management, Texas Mutual'
        },
        {
          title: 'Quality goes up',
          text: 'People who care about their work produce better work. Engagement and quality are deeply connected.'
        },
        {
          title: 'Innovation emerges',
          text: 'Engaged employees don\'t just execute. They improve. They spot opportunities, suggest changes, and drive continuous improvement from within.'
        }
      ]
    },

    cta: {
      title: 'Ready to Build Teams That Care?',
      text: 'Let\'s talk about what\'s killing engagement on your teams and how to fix it. 30 minutes, no pitch.'
    },
    related: ['productivity', 'continuous-improvement', 'innovation']
  },

  {
    id: 'customer-satisfaction',
    slug: 'customer-satisfaction',
    p2aOutcome: 'Customer Satisfaction',
    p2aDefinition: 'Customers are satisfied with the experience, benefits, and outcomes when using your product or service.',
    title: 'Make Customers Love Using Your Product',
    highlight: 'Love Using',
    icon: 'fa-heart',
    description: 'Customer satisfaction isn\'t just about features. It\'s about the complete experience. We help you understand what customers actually need and deliver it in a way that delights them.',
    bullets: [
      'Improve NPS and customer satisfaction scores',
      'Create experiences customers recommend',
      'Deliver real outcomes, not just features'
    ],
    lead: 'There\'s a difference between customers who tolerate your product and customers who love it. Satisfied customers renew, expand, and refer. They become advocates. We help you create experiences worth recommending.',

    problemStats: [
      {
        num: '80',
        unit: '%',
        label: 'of companies believe they deliver superior experience',
        source: 'Bain & Company',
        context: 'But only 8% of their customers agree. There\'s a massive gap between what companies think they deliver and what customers actually experience.'
      },
      {
        num: '5x',
        unit: '',
        label: 'cost to acquire a new customer vs. keeping one',
        source: 'Harvard Business Review',
        context: 'Acquiring a new customer costs 5 times more than retaining an existing one. Satisfied customers stay, buy more, and refer others. Dissatisfied customers leave and tell everyone about it.'
      },
      {
        num: '32',
        unit: '%',
        label: 'of customers leave after just one bad experience',
        source: 'PwC Customer Experience Survey',
        context: 'Nearly one-third of customers will abandon a brand after a single negative interaction. Customer loyalty is fragile. One poor experience can undo years of relationship building.'
      }
    ],

    problem: [
      "Most companies measure outputs, not outcomes. You shipped the feature, but did it actually help the customer? You hit the deadline, but was the experience good? Customer satisfaction requires thinking beyond the backlog to the actual experience of using your product.",
      "The disconnect usually starts internally. Teams don't talk to customers directly. Decisions are based on assumptions. Feedback loops are slow or nonexistent. By the time you learn something isn't working, customers have already formed opinions."
    ],

    signs: [
      { icon: 'fa-chart-line-down', text: 'NPS is flat or declining despite shipping new features' },
      { icon: 'fa-headset', text: 'Support tickets are high customers struggle to get value from your product' },
      { icon: 'fa-users-slash', text: 'Engineering and product teams never talk directly to customers' },
      { icon: 'fa-ghost', text: 'Features launch but usage data shows nobody uses them' },
      { icon: 'fa-arrow-right-from-bracket', text: 'Churn is high even though the product technically works' },
      { icon: 'fa-comment-slash', text: 'Customer feedback takes months to reach development teams' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Customer satisfaction requires continuous connection between your teams and your customers\' real experiences.',
      steps: [
        {
          num: '01',
          title: 'Connect Teams to Customer Reality',
          text: 'We create mechanisms for development teams to hear directly from customers not filtered through layers of product management. When engineers understand customer problems firsthand, they build better solutions.',
          deliverable: 'Regular, direct customer touchpoints for development teams'
        },
        {
          num: '02',
          title: 'Measure Outcomes, Not Outputs',
          text: 'We shift focus from "did we ship it" to "did it help." Implementing metrics that track whether customers actually achieve their goals with your product, not just whether features exist.',
          deliverable: 'Outcome-based metrics tied to customer success'
        },
        {
          num: '03',
          title: 'Shorten Feedback Cycles',
          text: 'We help you get customer feedback in days, not months. Rapid learning loops let you course-correct before small issues become satisfaction killers.',
          deliverable: 'Fast feedback loops from customer to development'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When you truly understand and serve customer needs:',
      items: [
        {
          title: 'Satisfaction scores rise',
          text: 'NPS moves when the experience improves. Customers notice when you actually solve their problems instead of just adding features.'
        },
        {
          title: 'Retention improves',
          text: 'Satisfied customers stay longer and expand their usage. Lower churn means more predictable revenue.'
        },
        {
          title: 'Referrals increase',
          text: 'Happy customers tell others. Word-of-mouth becomes a growth channel instead of a liability.'
        },
        {
          title: 'Support burden decreases',
          text: 'When the product actually works well for customers, they need less help using it. Better experience means fewer tickets.'
        }
      ]
    },

    cta: {
      title: 'Ready to Delight Your Customers?',
      text: 'Let\'s talk about the gap between what you deliver and what customers experience. 30 minutes, no pitch.'
    },
    related: ['quality', 'speed', 'innovation']
  },

  {
    id: 'quality',
    slug: 'quality',
    p2aOutcome: 'Quality',
    p2aDefinition: 'The product or service meets the expectations of the market for usability, reliability, etc.',
    title: 'Build Products People Trust',
    highlight: 'Trust',
    icon: 'fa-shield-check',
    description: 'Quality isn\'t just about bugs it\'s about meeting market expectations for usability, reliability, and polish. We help you build products that work the way customers expect.',
    bullets: [
      'Meet market expectations for reliability',
      'Improve usability and user experience',
      'Build confidence in every release'
    ],
    lead: 'Quality is what customers experience when they use your product. Does it work reliably? Is it easy to use? Does it meet their expectations? Quality builds trust, and trust builds loyalty.',

    problemStats: [
      {
        num: '31',
        unit: '%',
        label: 'of developer time goes to fixing bugs',
        source: 'Stripe Developer Coefficient Report',
        context: 'Nearly a third of engineering capacity is spent fixing problems instead of building new features. That\'s expensive, and it frustrates both developers and customers.'
      },
      {
        num: '88',
        unit: '%',
        label: 'of users won\'t return after a frustrating experience',
        source: 'Amazon/Google UX Research',
        context: 'Nearly 9 in 10 users abandon products that are hard to use. Usability matters as much as features a product that works but frustrates will lose to competitors.'
      },
      {
        num: '10x',
        unit: '',
        label: 'cost to fix a bug in production vs. during development',
        source: 'IBM Systems Sciences Institute',
        context: 'A bug that costs $100 to fix during development costs $1,000+ to fix after release. Every quality issue that escapes to production costs dramatically more in money, reputation, and customer trust.'
      }
    ],

    problem: [
      "Quality problems rarely stem from lazy developers. They come from systemic issues: pressure to hit dates at any cost, testing as an afterthought, unclear requirements, technical debt that makes every change risky. The team is cutting corners because the system forces them to.",
      "Market expectations for quality keep rising. Users have experienced well-designed apps and expect yours to work the same way. 'It technically works' isn't good enough anymore usability, reliability, and polish all factor into perceived quality."
    ],

    signs: [
      { icon: 'fa-fire', text: 'Hotfixes are regular you\'re always patching production issues' },
      { icon: 'fa-face-frown', text: 'User feedback mentions frustration, confusion, or difficulty' },
      { icon: 'fa-clock-rotate-left', text: 'Testing happens at the end of development, not throughout' },
      { icon: 'fa-hand', text: 'Developers are afraid to refactor because they might break something' },
      { icon: 'fa-layer-group', text: 'Technical debt makes every change slow and risky' },
      { icon: 'fa-face-grimace', text: 'Release day is stressful everyone holds their breath' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Quality is built in, not tested in. We shift quality left and create systems where good work is the natural output.',
      steps: [
        {
          num: '01',
          title: 'Build Quality In From the Start',
          text: 'We implement practices like test-driven development, pair programming, and clear definitions of done that prevent problems instead of catching them later. The cheapest defect is the one you never create.',
          deliverable: 'Quality practices embedded in your development process'
        },
        {
          num: '02',
          title: 'Automate the Safety Net',
          text: 'We help build automated testing and deployment pipelines that catch regressions instantly. Every commit gets validated. Confidence replaces anxiety.',
          deliverable: 'Automated quality gates that catch issues before release'
        },
        {
          num: '03',
          title: 'Address Technical Debt',
          text: 'We create strategies for systematically reducing technical debt so that quality becomes sustainable. Stop accumulating risk and start building on a solid foundation.',
          deliverable: 'A plan to reduce debt and prevent new accumulation'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When quality is built into how you work:',
      items: [
        {
          title: 'Customer trust increases',
          text: 'Reliable products build loyal customers. When your product consistently works as expected, customers trust it. And you.'
        },
        {
          title: 'Releases become routine',
          text: 'When quality is built in, releases stop being scary. You can ship with confidence, not crossed fingers.'
        },
        {
          title: 'Developer confidence grows',
          text: 'Teams that trust their codebase take smart risks and move faster. Fear of breaking things fades.'
        },
        {
          title: 'Costs go down',
          text: 'Less time fixing bugs means more time building value. Quality is ultimately cheaper than the alternative.'
        }
      ]
    },

    cta: {
      title: 'Ready to Build Products People Trust?',
      text: 'Let\'s talk about your quality challenges and how to address them systematically. 30 minutes, no pitch.'
    },
    related: ['customer-satisfaction', 'speed', 'predictability']
  },

  {
    id: 'speed',
    slug: 'speed',
    p2aOutcome: 'Speed',
    p2aDefinition: 'The time it takes to deliver an idea into the market.',
    title: 'Get Ideas to Market Faster',
    highlight: 'Faster',
    icon: 'fa-rocket',
    description: 'Speed is how long it takes to go from idea to customer value. We compress your time-to-market by removing bottlenecks and friction from your delivery process.',
    bullets: [
      'Reduce time from idea to production',
      'Remove bottlenecks that slow delivery',
      'Capture market opportunities quickly'
    ],
    lead: 'The company that ships first often wins. While competitors are still planning, you should be learning from customers. Speed isn\'t about rushing it\'s about removing the friction that slows you down.',

    problemStats: [
      {
        num: '70',
        unit: '%',
        label: 'of a feature\'s life is spent waiting, not being worked on',
        source: 'Value Stream Mapping Studies',
        context: 'Work spends most of its life in queues waiting for code reviews, approvals, testing, or other teams. The actual development time is just 30% of the total cycle time.'
      },
      {
        num: '12-18',
        unit: 'mo',
        label: 'time to deliver a single feature in large enterprises',
        source: 'Gartner Research',
        context: 'From initial idea to production deployment takes over a year in many large organizations. Markets move faster than that by the time you ship, competitors may have already won.'
      },
      {
        num: '3-10x',
        unit: '',
        label: 'speed gap between elite teams and average teams',
        source: 'DORA State of DevOps Report',
        context: 'Elite teams deliver features 3 to 10 times faster than average performers. They deploy multiple times per day while others deploy monthly or quarterly. This speed gap is a massive competitive advantage.'
      }
    ],

    problem: [
      "You're not slow because your people are slow. You're slow because your process is broken. Work sits in queues, waiting. Dependencies block progress. Handoffs lose information. Big batches create big delays. The bottleneck is the system, not the people.",
      "Speed matters because markets move fast. By the time a slow organization ships, conditions have changed. Competitors have moved. Customer needs have evolved. The feature that took 18 months to build might already be obsolete."
    ],

    signs: [
      { icon: 'fa-turtle', text: 'Release cycles are measured in quarters, not weeks and getting longer' },
      { icon: 'fa-users-viewfinder', text: 'Competitors consistently beat you to market with similar features' },
      { icon: 'fa-calendar-days', text: 'Planning and approval processes take longer than development' },
      { icon: 'fa-code-branch', text: 'Work sits in code review or testing queues for weeks' },
      { icon: 'fa-diagram-project', text: 'Everything depends on something else nothing can start' },
      { icon: 'fa-window-restore', text: 'Market opportunities pass because you couldn\'t respond in time' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Speed comes from flow, not from working faster. We find where work gets stuck and systematically remove the bottlenecks.',
      steps: [
        {
          num: '01',
          title: 'Map the Value Stream',
          text: 'We trace how work actually flows from idea to production. Where does it wait? Where does it get stuck? We find the hidden queues and bottlenecks, often in places you\'d never suspect.',
          deliverable: 'Clear visibility into where time actually goes'
        },
        {
          num: '02',
          title: 'Reduce Batch Sizes',
          text: 'Big batches create big delays. We help you break work into smaller increments that flow faster. Ship smaller things more often instead of big things rarely.',
          deliverable: 'Faster flow through smaller, more frequent releases'
        },
        {
          num: '03',
          title: 'Eliminate Handoffs',
          text: 'Every handoff adds delay and risk. We restructure teams so work flows continuously without waiting. Cross-functional teams that can finish what they start.',
          deliverable: 'Teams structured for speed, not silos'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When bottlenecks are removed and work flows freely:',
      items: [
        {
          title: 'Cycle times compress dramatically',
          text: 'What took quarters now takes weeks. Clients often see 50%+ reduction in time from idea to production.',
          proof: '"We were able to develop an application that handled large scale schedule changes and the solution was built and deployed into production in 3 weeks. Prior to the transformation, this effort would have taken months. We saved the company over $5 million in the first two months."   Marty Garza, VP Air Operations Technology, Southwest Airlines'
        },
        {
          title: 'Market opportunities get captured',
          text: 'When you can respond quickly, opportunities stop passing you by. Being first matters.'
        },
        {
          title: 'Learning accelerates',
          text: 'Faster delivery means faster feedback. You learn what works and what doesn\'t while there\'s still time to adjust.'
        },
        {
          title: 'Focus improves',
          text: 'Less work in progress means more work getting done. Teams finish instead of juggle.'
        }
      ]
    },

    cta: {
      title: 'Ready to Move Faster?',
      text: 'Let\'s talk about what\'s slowing you down and how to fix it. 30 minutes, no pitch.'
    },
    related: ['predictability', 'quality', 'market-responsiveness']
  },

  {
    id: 'predictability',
    slug: 'predictability',
    p2aOutcome: 'Predictability',
    p2aDefinition: 'Teams maintain a predictable cadence of delivery enabling the organization to make informed business decisions.',
    title: 'Deliver When You Say You Will',
    highlight: 'Say You Will',
    icon: 'fa-calendar-check',
    description: 'Predictability isn\'t just about hitting deadlines it\'s about maintaining a reliable cadence that enables confident business planning. We help you become a team the business can count on.',
    bullets: [
      'Maintain reliable delivery cadence',
      'Enable confident business planning',
      'Build trust through consistency'
    ],
    lead: 'The business needs to make commitments to customers, to investors, to partners. They can only do that if they can count on engineering to deliver predictably. Predictability enables planning; unpredictability creates chaos.',

    problemStats: [
      {
        num: '66',
        unit: '%',
        label: 'of software projects miss their deadline or budget',
        source: 'PMI Pulse of the Profession',
        context: 'Two-thirds of software projects fail to deliver on time or on budget. That\'s not bad luck it\'s a systemic problem with how organizations plan and execute work.'
      },
      {
        num: '3x',
        unit: '',
        label: 'longer than estimated how long projects actually take',
        source: 'Project management research',
        context: 'A project estimated at 3 months typically takes 9 months. Teams routinely take 2-3x longer than planned because estimates are systematically optimistic making business planning nearly impossible.'
      },
      {
        num: '45',
        unit: '%',
        label: 'budget overrun on large IT projects (average)',
        source: 'McKinsey Study',
        context: 'Large IT projects run 45% over budget on average. A $10M project typically costs $14.5M. The bigger the project, the worse the prediction large initiatives are especially prone to missing targets.'
      }
    ],

    problem: [
      "Unpredictability destroys trust. When engineering consistently misses dates, leadership stops believing any timeline. They either pad everything with buffers or make commitments without consulting engineering at all. Neither approach works.",
      "The root causes are usually: unclear scope that keeps expanding, no measurement of actual velocity, optimistic estimates based on hope rather than data, and dependencies that create unexpected delays. Predictability requires addressing all of these."
    ],

    signs: [
      { icon: 'fa-calendar-xmark', text: 'Major releases routinely slip and no one is surprised anymore' },
      { icon: 'fa-scale-unbalanced', text: 'Scope creep is constant "just one more thing" every sprint' },
      { icon: 'fa-dice', text: 'Estimates are based on gut feel, not historical data' },
      { icon: 'fa-user-secret', text: 'Teams pad estimates because they know scope will change' },
      { icon: 'fa-ban', text: 'Leadership has stopped trusting engineering timelines' },
      { icon: 'fa-person-running', text: 'Hitting dates requires heroics late nights, weekends, burnout' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Predictability comes from measuring reality, managing scope, and delivering in consistent increments.',
      steps: [
        {
          num: '01',
          title: 'Establish Real Baselines',
          text: 'We measure how work actually flows through your system. Not how fast you wish you were how fast you actually are. You can\'t predict what you don\'t measure. Data replaces hope.',
          deliverable: 'Metrics that show actual team velocity and cycle time'
        },
        {
          num: '02',
          title: 'Create Delivery Cadence',
          text: 'We help establish a regular rhythm of delivery. Consistent sprints with consistent output. The business learns they can count on this cadence for planning.',
          deliverable: 'Reliable delivery rhythm the business can depend on'
        },
        {
          num: '03',
          title: 'Manage Scope Explicitly',
          text: 'Scope changes are fine but they must be visible and have consequences. We implement practices that make tradeoffs explicit. When scope grows, either dates move or something gets cut.',
          deliverable: 'Clear scope management with explicit tradeoffs'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When delivery becomes predictable:',
      items: [
        {
          title: 'Business planning becomes possible',
          text: 'Leadership can make commitments to customers, investors, and partners because they know engineering will deliver. Confidence enables strategy.',
          proof: '"We are now completing sprints consistently."   Mitratech'
        },
        {
          title: 'Trust rebuilds',
          text: 'When you hit your commitments consistently, credibility returns. Engineering becomes a trusted partner, not a source of uncertainty.'
        },
        {
          title: 'Heroics disappear',
          text: 'Sustainable pace replaces last-minute crunches. Predictable delivery without burnout.'
        },
        {
          title: 'Planning improves',
          text: 'With historical data, forecasting becomes more accurate. You know what you can commit to and what you can\'t.'
        }
      ]
    },

    cta: {
      title: 'Ready to Become Predictable?',
      text: 'Let\'s talk about building a delivery cadence the business can count on. 30 minutes, no pitch.'
    },
    related: ['speed', 'quality', 'productivity']
  },

  {
    id: 'innovation',
    slug: 'innovation',
    p2aOutcome: 'Innovation',
    p2aDefinition: 'New ideas, creative thoughts, or novel imaginations provide better solutions to meet new requirements, unarticulated needs, or known market needs.',
    title: 'Turn Ideas Into Reality',
    highlight: 'Reality',
    icon: 'fa-lightbulb',
    description: 'Innovation isn\'t just about having ideas it\'s about turning them into solutions that meet real needs. We create space for experimentation and build paths from concept to customer.',
    bullets: [
      'Create space for experimentation',
      'Turn ideas into shipped solutions',
      'Address needs customers can\'t articulate'
    ],
    lead: 'Your organization has more good ideas than it can execute. The problem isn\'t creativity. It\'s the path from idea to reality. Great innovations die in approval queues, budget cycles, and "we\'ve always done it this way."',

    problemStats: [
      {
        num: '94',
        unit: '%',
        label: 'of executives call innovation a top priority',
        source: 'McKinsey Innovation Survey',
        context: 'Yet only 6% are satisfied with their company\'s innovation performance. Everyone wants innovation; almost no one is executing it well. The gap isn\'t ideas. It\'s the ability to turn ideas into reality.'
      },
      {
        num: '72',
        unit: '%',
        label: 'of corporate innovation labs fail to produce scaled products',
        source: 'Capgemini Research',
        context: 'Nearly three-quarters of "innovation labs" produce prototypes that never reach customers. Separate labs rarely work innovation has to happen inside the business, connected to real delivery capability.'
      },
      {
        num: '18',
        unit: 'mo',
        label: 'to run a single pilot test of a new idea (enterprise avg.)',
        source: 'Industry research',
        context: 'Large companies take 18 months on average just to test whether an idea works. By the time they learn if it\'s viable, the market opportunity has often passed.'
      }
    ],

    problem: [
      "Innovation requires two things most organizations struggle with: space to experiment and a path to scale what works. Teams are too busy with roadmap commitments to explore new ideas. When someone does have an idea, the approval process kills momentum.",
      "The best innovations often address needs customers can't articulate. But that requires experimentation, learning, and iteration which requires capacity and permission to try things that might not work. Most organizations punish failure instead of learning from it."
    ],

    signs: [
      { icon: 'fa-lightbulb-slash', text: 'People have stopped suggesting ideas because nothing gets approved' },
      { icon: 'fa-stamp', text: 'New initiatives require months of business cases and committee reviews' },
      { icon: 'fa-building', text: 'You have an "innovation lab" disconnected from real product development' },
      { icon: 'fa-gauge-simple-low', text: 'Teams have no capacity for exploration roadmap consumes everything' },
      { icon: 'fa-skull', text: 'Failed experiments are career-limiting, not learning opportunities' },
      { icon: 'fa-copy', text: 'Competitors ship innovations you discussed years ago' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Innovation requires both space to explore and a path to production. We create both.',
      steps: [
        {
          num: '01',
          title: 'Create Experimentation Capacity',
          text: 'We carve out dedicated time for exploration not a separate lab, but embedded capacity within teams. Innovation becomes part of the work, not a side project that never gets priority.',
          deliverable: 'Protected time for experimentation built into team capacity'
        },
        {
          num: '02',
          title: 'Build Fast Experiment Infrastructure',
          text: 'We create lightweight ways to test ideas quickly with limited investment. Fail fast and cheap instead of slow and expensive. Make it safe to try things that might not work.',
          deliverable: 'Low-risk, fast feedback loops for new ideas'
        },
        {
          num: '03',
          title: 'Connect Ideas to Delivery',
          text: 'We ensure successful experiments have a clear path to production. Innovation isn\'t complete until customers have it. Bridge the gap between exploration and execution.',
          deliverable: 'Clear path from successful experiment to scaled delivery'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When innovation is enabled instead of obstructed:',
      items: [
        {
          title: 'Ideas actually ship',
          text: 'Get innovations from concept to customer in weeks, not years. Test quickly, learn quickly, scale what works.',
          proof: '"There\'s something about having things on the wall, having standups, and operating differently that they were able to take ownership in a way they never had the context to do well before."   Nicole Tanzillo, Ceresa'
        },
        {
          title: 'Unmet needs get discovered',
          text: 'Experimentation reveals opportunities customers couldn\'t articulate. You find needs before competitors do.'
        },
        {
          title: 'Engagement increases',
          text: 'When people see their ideas implemented, energy and ownership transform.'
        },
        {
          title: 'Learning becomes normal',
          text: 'Failed experiments become data, not disasters. The organization learns faster.'
        }
      ]
    },

    cta: {
      title: 'Ready to Turn Ideas Into Reality?',
      text: 'Let\'s talk about creating space for innovation that actually ships. 30 minutes, no pitch.'
    },
    related: ['speed', 'market-responsiveness', 'employee-engagement']
  },

  {
    id: 'market-responsiveness',
    slug: 'market-responsiveness',
    p2aOutcome: 'Market Responsiveness',
    p2aDefinition: 'The ability of the organization to pivot quickly to respond to ever-changing market demands.',
    title: 'Pivot When Markets Move',
    highlight: 'Markets Move',
    icon: 'fa-sync-alt',
    description: 'Markets don\'t wait for your planning cycle. We help organizations respond to change quickly pivoting in days or weeks instead of quarters, without derailing everything in progress.',
    bullets: [
      'Respond to market changes quickly',
      'Pivot without creating chaos',
      'Turn change into competitive advantage'
    ],
    lead: 'The market shifted. A competitor launched. Customer needs evolved. If it takes you quarters to respond, you\'ve already lost. Responsiveness isn\'t about predicting the future. It\'s about adapting to it faster than competitors.',

    problemStats: [
      {
        num: '90',
        unit: '%',
        label: 'of executives say organizational agility is critical to success',
        source: 'Forbes/PMI Research',
        context: 'Yet only 27% consider their organization highly agile. 9 in 10 leaders know they need to respond faster to market changes but only 3 in 10 believe they actually can.'
      },
      {
        num: '52',
        unit: '%',
        label: 'of strategic initiatives fail to deliver expected value',
        source: 'Harvard Business Review',
        context: 'More than half of major initiatives miss their goals often because market conditions changed while execution plodded along. By the time the project finished, the original goal was obsolete.'
      },
      {
        num: '12+',
        unit: 'mo',
        label: 'between major planning cycles at large organizations',
        source: 'Industry observation',
        context: 'Most large companies only re-prioritize once a year during annual planning. That locks you into priorities that become obsolete. Markets don\'t wait for your fiscal calendar.'
      }
    ],

    problem: [
      "Change isn't the problem your inability to respond is. When priorities shift, organizations grind to a halt. Teams are stuck on obsolete commitments. Work in progress gets abandoned. Re-planning takes forever. By the time you're ready, the window has closed.",
      "The root causes: too much work in progress, too many dependencies between teams, and planning cycles that assume stability instead of change. Responsiveness requires designing for change, not treating it as an exception."
    ],

    signs: [
      { icon: 'fa-anchor', text: 'Annual plans lock you into priorities that are obsolete by Q2' },
      { icon: 'fa-explosion', text: 'Every priority change creates chaos abandoned work, team whiplash' },
      { icon: 'fa-timeline', text: 'Re-planning exercises take weeks and multiple executive sessions' },
      { icon: 'fa-link-slash', text: 'Dependencies mean changing one thing breaks five others' },
      { icon: 'fa-battery-empty', text: 'Teams are exhausted from constant context switching' },
      { icon: 'fa-hourglass-end', text: 'Opportunities pass because you couldn\'t respond in time' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Responsiveness comes from expecting change, not fighting it. We design organizations that adapt smoothly.',
      steps: [
        {
          num: '01',
          title: 'Shorten Planning Horizons',
          text: 'We replace rigid annual planning with continuous planning cycles. Short horizons with regular adjustment points. Always know where you\'re going, but never be locked into an obsolete path.',
          deliverable: 'Planning cycles that match your rate of change'
        },
        {
          num: '02',
          title: 'Reduce Dependencies',
          text: 'Dependencies kill agility. We restructure teams around value streams so they can pivot independently. Change one thing without breaking everything else.',
          deliverable: 'Autonomous teams that can change direction independently'
        },
        {
          num: '03',
          title: 'Limit Work in Progress',
          text: 'The more you\'re doing at once, the more you lose when priorities change. We help you finish before starting. Smaller batches mean less waste when direction shifts.',
          deliverable: 'Less in-flight work to abandon when priorities shift'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When change becomes expected instead of exceptional:',
      items: [
        {
          title: 'Response time compresses',
          text: 'Pivot in days or weeks, not quarters. Respond to change while the opportunity is still there.',
          proof: '"Their coaching enabled our teams to pivot and re-prioritize work in a quick and organized manner."   Katie Morris, Southwest Airlines'
        },
        {
          title: 'Waste drops',
          text: 'Small batches and short cycles mean minimal work gets abandoned when priorities shift. Less sunk cost.'
        },
        {
          title: 'Teams stay calm',
          text: 'When change is expected and planned for, it stops being a crisis. Teams stay focused, not frantic.'
        },
        {
          title: 'Competitive advantage emerges',
          text: 'While others are still planning their response, you\'ve already shipped yours.'
        }
      ]
    },

    cta: {
      title: 'Ready to Embrace Change?',
      text: 'Let\'s talk about building an organization that responds to change smoothly. 30 minutes, no pitch.'
    },
    related: ['speed', 'innovation', 'predictability']
  },

  {
    id: 'productivity',
    slug: 'productivity',
    p2aOutcome: 'Productivity',
    p2aDefinition: 'Increase the business value realized while maintaining or reducing costs.',
    title: 'Get More Value From Every Dollar',
    highlight: 'Every Dollar',
    icon: 'fa-chart-line',
    description: 'Productivity isn\'t about working harder it\'s about generating more business value with the same or fewer resources. We help you eliminate waste and focus effort on what actually matters.',
    bullets: [
      'Increase business value delivered',
      'Reduce waste and inefficiency',
      'Do more with current resources'
    ],
    lead: 'True productivity isn\'t output volume it\'s value per dollar spent. You can ship a lot of features and still waste resources if those features don\'t matter. We help you focus effort on the work that creates real business value.',

    problemStats: [
      {
        num: '80',
        unit: '%',
        label: 'of software features are rarely or never used by customers',
        source: 'Standish Group Research',
        context: 'Four out of five features you build don\'t matter to users. If you ship 10 features, 8 of them were a waste of time and money effort that could have gone to things customers actually want.'
      },
      {
        num: '25',
        unit: '%',
        label: 'of a developer\'s day is spent actually writing code',
        source: 'Developer productivity studies',
        context: 'Developers spend only one-quarter of their time coding. The other 75% goes to meetings, context-switching, waiting for others, searching for information, and dealing with interruptions.'
      },
      {
        num: '60',
        unit: '%',
        label: 'of engineering effort goes to maintaining existing code, not building new features',
        source: 'Stripe Developer Coefficient',
        context: 'Technical debt consumes 60% of developer time maintaining, debugging, and working around legacy code. That\'s capacity you\'re paying for but not getting value from.'
      }
    ],

    problem: [
      "Most productivity problems aren't about effort they're about focus and waste. Teams work hard on features that don't matter. Work sits in queues instead of flowing. Context switching fragments attention. Adding people doesn't help because the bottleneck is the system, not capacity.",
      "True productivity requires asking: is this work creating business value? If not, why are we doing it? We often find that stopping low-value work increases productivity more than optimizing high-value work."
    ],

    signs: [
      { icon: 'fa-ghost', text: 'You ship features, but metrics don\'t move value isn\'t landing' },
      { icon: 'fa-people-carry-box', text: 'Teams are busy but delivery is slow effort isn\'t converting to output' },
      { icon: 'fa-clock', text: 'Work sits in queues longer than it takes to actually do' },
      { icon: 'fa-user-plus', text: 'You keep hiring but velocity doesn\'t increase proportionally' },
      { icon: 'fa-arrows-spin', text: 'Context switching is constant people juggle too many things' },
      { icon: 'fa-comments', text: 'More time in meetings and coordination than doing actual work' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'Productivity improves when you focus on value and eliminate waste. We help you do fewer things that matter more.',
      steps: [
        {
          num: '01',
          title: 'Focus on Value',
          text: 'Not all work is equal. We help you identify which work actually drives business outcomes and ruthlessly prioritize. Saying no to low-value work is a productivity multiplier.',
          deliverable: 'Prioritization framework based on business value'
        },
        {
          num: '02',
          title: 'Eliminate Waste',
          text: 'We map where time actually goes and systematically remove waste: unnecessary meetings, waiting in queues, rework, context switching. Stop doing things that don\'t add value.',
          deliverable: 'Visible waste reduction with measurable time savings'
        },
        {
          num: '03',
          title: 'Improve Flow',
          text: 'We restructure work to flow continuously. Limit work in progress, eliminate handoffs, break down batch sizes. When work flows, productivity naturally increases.',
          deliverable: 'Smoother work flow with less waiting and friction'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When you focus on value and eliminate waste:',
      items: [
        {
          title: 'Value per dollar increases',
          text: 'Same budget, more impact. You\'re not doing more work you\'re doing more valuable work.',
          proof: '"We saved the company over $5 million in the first two months."   Marty Garza, VP Air Operations Technology, Southwest Airlines'
        },
        {
          title: 'Capacity unlocks',
          text: 'Eliminating waste frees up time without adding headcount. You discover capacity you didn\'t know you had.',
          proof: '"Before working with Agile Velocity we never finished a sprint. We are now completing sprints consistently and pulling in additional work."   Mitratech'
        },
        {
          title: 'Focus improves',
          text: 'Less multitasking means less stress, fewer mistakes, and better work. Focus is a productivity multiplier.'
        },
        {
          title: 'Outcomes improve',
          text: 'When you work on the right things, business metrics move. Value lands with customers.'
        }
      ]
    },

    cta: {
      title: 'Ready to Get More Value?',
      text: 'Let\'s talk about where your productivity is leaking and how to fix it. 30 minutes, no pitch.'
    },
    related: ['speed', 'predictability', 'employee-engagement']
  },

  {
    id: 'continuous-improvement',
    slug: 'continuous-improvement',
    p2aOutcome: 'Continuous Improvement',
    p2aDefinition: 'The ability of the organization to relentlessly pursue optimizations in all aspects of business functions.',
    title: 'Get Better Every Quarter',
    highlight: 'Every Quarter',
    icon: 'fa-arrow-trend-up',
    description: 'The best organizations never stop improving. We build the internal capability and habits that drive relentless optimization quarter after quarter, without needing external help.',
    bullets: [
      'Build a culture of continuous improvement',
      'Develop internal improvement capability',
      'Create self-sustaining excellence'
    ],
    lead: 'Hiring consultants for every problem is expensive and doesn\'t scale. The goal is building your internal capability to identify problems, experiment with solutions, and improve continuously on your own.',

    problemStats: [
      {
        num: '70',
        unit: '%',
        label: 'of transformation improvements fade within 2 years',
        source: 'McKinsey Research',
        context: 'Seven out of ten organizations that improve with outside help slide back to old habits once consultants leave. The gains weren\'t embedded into the culture they were rented temporarily.'
      },
      {
        num: '84',
        unit: '%',
        label: 'of organizations struggle to maintain improvement momentum',
        source: 'BCG Transformation Study',
        context: 'Starting a transformation is easy. Sustaining it is hard. More than 8 in 10 organizations lose momentum because they don\'t build the internal skills to keep improving on their own.'
      },
      {
        num: '5x',
        unit: '',
        label: 'more likely to stick: changes owned by teams vs. imposed by consultants',
        source: 'Change management research',
        context: 'Changes that teams create and own are 5 times more likely to last than changes imposed from outside. Imposed solutions get abandoned the moment external attention shifts.'
      }
    ],

    problem: [
      "Most organizations don't know how to improve themselves. They hire consultants who identify problems and recommend solutions. Things get a little better. Then the consultants leave and everything slides back or worse. The improvements weren't owned internally.",
      "Continuous improvement requires habits, skills, and systems. Teams need to know how to identify problems, design experiments, measure results, and iterate. They need time and permission to improve. Most organizations have none of these."
    ],

    signs: [
      { icon: 'fa-rotate-left', text: 'Previous improvements have faded you\'re back to old habits' },
      { icon: 'fa-graduation-cap', text: 'Retrospectives happen but nothing actually changes afterward' },
      { icon: 'fa-hand-holding-dollar', text: 'You keep hiring consultants for the same problems' },
      { icon: 'fa-gears', text: 'Improvements are imposed from above, not driven by teams' },
      { icon: 'fa-chart-simple', text: 'No one measures whether improvements actually worked' },
      { icon: 'fa-circle-pause', text: 'Teams are too busy fighting fires to invest in getting better' }
    ],

    approach: {
      title: 'How We Fix It',
      intro: 'We work ourselves out of a job by building your internal capability to drive continuous improvement.',
      steps: [
        {
          num: '01',
          title: 'Build Internal Coaches',
          text: 'We identify and develop internal change agents your people who can carry improvement forward. We train them in facilitation, problem-solving, and coaching so they can develop others.',
          deliverable: 'Trained internal champions who own improvement'
        },
        {
          num: '02',
          title: 'Create Improvement Habits',
          text: 'We embed improvement into daily work. Regular reflection, rapid experimentation, measurable outcomes. Make getting better a habit, not a one-time initiative.',
          deliverable: 'Improvement practices built into team rhythms'
        },
        {
          num: '03',
          title: 'Build Feedback Systems',
          text: 'We create mechanisms that make progress visible. When teams see improvements in data, they\'re motivated to keep improving. Success breeds success.',
          deliverable: 'Metrics that show improvement over time'
        }
      ]
    },

    outcomes: {
      title: 'What Changes',
      intro: 'When improvement becomes self-sustaining:',
      items: [
        {
          title: 'Improvement continues without us',
          text: 'Teams get better on their own, quarter after quarter. The capability stays when we leave.',
          proof: '"The Path to Agility was crucial to our journey because it focused on outcomes, strengthened our capabilities, and became an integral part of our improvement mindset."   Jeanette Ward, Texas Mutual Insurance'
        },
        {
          title: 'Internal expertise grows',
          text: 'Trained internal coaches who can facilitate change and develop others. Your capability multiplies.'
        },
        {
          title: 'Gains compound',
          text: 'Steady improvement compounds into transformational change over time. Small wins add up to big results.'
        },
        {
          title: 'Independence replaces dependency',
          text: 'Stop relying on consultants. Build the capability to solve your own problems. That\'s the real goal.'
        }
      ]
    },

    cta: {
      title: 'Ready to Build Lasting Improvement?',
      text: 'Let\'s talk about building internal capability that sustains itself. 30 minutes, no pitch.'
    },
    related: ['employee-engagement', 'productivity', 'quality']
  }
];

export const getOutcomeBySlug = (slug) => outcomes.find(o => o.slug === slug);
export const getRelatedOutcomes = (slugs) => slugs.map(slug => outcomes.find(o => o.slug === slug)).filter(Boolean);
