// ============================================================================
// MExt Academy — Comprehensive Course Curriculum Data
// ============================================================================

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'multi-select' | 'true-false';
  question: string;
  options: string[];
  correctAnswer: number | number[];
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'quiz';
  duration: number;
  youtubeId?: string;
  content?: string;
  questions?: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface CourseData {
  slug: string;
  title: string;
  modules: Module[];
  finalAssessment: QuizQuestion[];
}

// ============================================================================
// Course 1: MExt 101 — GTM Automation (Intermediate, 12h)
// ============================================================================

const gtmAutomation: CourseData = {
  slug: 'mext-101-gtm-automation',
  title: 'MExt 101: GTM Automation',
  modules: [
    // ── Module 1: Introduction to Go-To-Market Strategy ──
    {
      id: 'gtm-m1',
      title: 'Introduction to Go-To-Market Strategy',
      description:
        'Learn the fundamentals of go-to-market strategy, how to identify your target market, position your product, and build a launch plan that aligns marketing, sales, and product teams.',
      lessons: [
        {
          id: 'gtm-m1-l1',
          title: 'What is a Go-To-Market Strategy?',
          type: 'video',
          duration: 18,
          youtubeId: 'M3qlOGFJxnk',
        },
        {
          id: 'gtm-m1-l2',
          title: 'Market Segmentation & ICP Definition',
          type: 'video',
          duration: 22,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m1-l3',
          title: 'Positioning & Messaging Frameworks',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m1-quiz',
          title: 'Module 1 Quiz: GTM Fundamentals',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'gtm-m1-q1',
              type: 'multiple-choice',
              question:
                'What is the primary goal of a Go-To-Market strategy?',
              options: [
                'To create a company logo and brand identity',
                'To define how a company will reach and sell to its target customers',
                'To build a product roadmap for engineering',
                'To calculate annual revenue projections',
              ],
              correctAnswer: 1,
              explanation:
                'A GTM strategy defines the plan for reaching target customers, including positioning, channels, pricing, and sales motions. While it may inform other areas, its core purpose is aligning the path from product to customer.',
            },
            {
              id: 'gtm-m1-q2',
              type: 'multiple-choice',
              question:
                'What does ICP stand for in the context of B2B marketing?',
              options: [
                'Internal Communication Plan',
                'Ideal Customer Profile',
                'Integrated Channel Platform',
                'Initial Contact Protocol',
              ],
              correctAnswer: 1,
              explanation:
                'ICP stands for Ideal Customer Profile. It describes the firmographic, behavioral, and environmental attributes of the accounts most likely to become your best customers.',
            },
            {
              id: 'gtm-m1-q3',
              type: 'multi-select',
              question:
                'Which of the following are key components of a Go-To-Market strategy? (Select all that apply)',
              options: [
                'Target market definition',
                'Office interior design',
                'Pricing strategy',
                'Distribution channels',
                'Employee dress code',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'Target market definition, pricing strategy, and distribution channels are all core GTM components. Office design and dress code are operational matters unrelated to market strategy.',
            },
            {
              id: 'gtm-m1-q4',
              type: 'true-false',
              question:
                'A Go-To-Market strategy is only needed when launching a brand-new product.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'GTM strategies are valuable for new product launches, market expansions, repositioning, entering new segments, and even relaunching existing products with updated positioning.',
            },
            {
              id: 'gtm-m1-q5',
              type: 'multiple-choice',
              question:
                'Which framework is most commonly used for product positioning?',
              options: [
                'SWOT Analysis',
                'April Dunford\'s Obviously Awesome framework',
                'Maslow\'s Hierarchy of Needs',
                'The Eisenhower Matrix',
              ],
              correctAnswer: 1,
              explanation:
                'April Dunford\'s positioning framework from "Obviously Awesome" is widely adopted in B2B for defining competitive alternatives, unique attributes, value, and target customer segments.',
            },
          ],
        },
      ],
    },
    // ── Module 2: Marketing Automation Fundamentals ──
    {
      id: 'gtm-m2',
      title: 'Marketing Automation Fundamentals',
      description:
        'Understand the principles behind marketing automation, learn how to map customer journeys to automated workflows, and discover the key platforms that power modern marketing operations.',
      lessons: [
        {
          id: 'gtm-m2-l1',
          title: 'What is Marketing Automation?',
          type: 'video',
          duration: 15,
          youtubeId: 'Mus_vwhTCq0',
        },
        {
          id: 'gtm-m2-l2',
          title: 'Customer Journey Mapping for Automation',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m2-l3',
          title: 'Choosing the Right Automation Platform',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m2-reading',
          title: 'The Marketing Automation Maturity Model',
          type: 'reading',
          duration: 12,
          content:
            'Marketing automation maturity typically progresses through four stages. At Stage 1 (Basic), teams use simple email autoresponders and basic form captures. There is little segmentation, and most communication is batch-and-blast. The focus is on replacing manual email sends with scheduled sequences.\n\nAt Stage 2 (Intermediate), organizations implement lead scoring, behavioral triggers, and multi-step nurture campaigns. Segmentation becomes more sophisticated, using demographic and firmographic data. CRM integration begins, allowing sales and marketing to share a single view of the prospect.\n\nStage 3 (Advanced) introduces multi-channel orchestration across email, SMS, ads, and in-app messaging. Dynamic content personalization becomes standard, with different experiences served based on lifecycle stage, industry, or engagement history. Attribution modeling starts to connect marketing activities to revenue.\n\nStage 4 (Optimized) represents full-funnel automation with AI-driven send-time optimization, predictive lead scoring, and real-time personalization. Marketing and sales automation merge into a unified revenue operations engine. Continuous experimentation and data-driven iteration become embedded in the culture.\n\nMost B2B organizations sit between Stage 1 and Stage 2. The goal is not to rush to Stage 4, but to build a solid foundation at each level before advancing. Skipping stages leads to technical debt, poor data quality, and workflows that break under scale.',
        },
        {
          id: 'gtm-m2-quiz',
          title: 'Module 2 Quiz: Automation Fundamentals',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'gtm-m2-q1',
              type: 'multiple-choice',
              question:
                'What is the primary benefit of marketing automation?',
              options: [
                'Eliminating the need for a marketing team',
                'Scaling personalized communication across the customer lifecycle',
                'Automatically generating creative content',
                'Replacing CRM software entirely',
              ],
              correctAnswer: 1,
              explanation:
                'Marketing automation scales personalized, timely communication that would be impossible to deliver manually. It augments teams rather than replacing them, and works alongside (not instead of) CRM systems.',
            },
            {
              id: 'gtm-m2-q2',
              type: 'multi-select',
              question:
                'Which of the following are common marketing automation capabilities? (Select all that apply)',
              options: [
                'Lead scoring',
                'Email nurture sequences',
                'Product development sprints',
                'Behavioral trigger workflows',
                'Inventory management',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Lead scoring, email nurture sequences, and behavioral triggers are core automation capabilities. Product sprints and inventory management belong to engineering and operations respectively.',
            },
            {
              id: 'gtm-m2-q3',
              type: 'true-false',
              question:
                'Marketing automation works best when you have a clearly defined customer journey.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Automation is only as effective as the journey it supports. Without a mapped customer journey, workflows become arbitrary and disconnected from actual buyer behavior.',
            },
            {
              id: 'gtm-m2-q4',
              type: 'multiple-choice',
              question:
                'At which maturity stage does multi-channel orchestration typically begin?',
              options: [
                'Stage 1 (Basic)',
                'Stage 2 (Intermediate)',
                'Stage 3 (Advanced)',
                'Stage 4 (Optimized)',
              ],
              correctAnswer: 2,
              explanation:
                'Multi-channel orchestration across email, SMS, ads, and in-app messaging is characteristic of Stage 3 (Advanced) in the marketing automation maturity model.',
            },
          ],
        },
      ],
    },
    // ── Module 3: HubSpot Workflows & CRM ──
    {
      id: 'gtm-m3',
      title: 'HubSpot Workflows & CRM',
      description:
        'Master HubSpot as a marketing automation and CRM platform. Build workflows, manage contacts, set up lead scoring, and create reporting dashboards that connect marketing to revenue.',
      lessons: [
        {
          id: 'gtm-m3-l1',
          title: 'HubSpot CRM Overview & Setup',
          type: 'video',
          duration: 22,
          youtubeId: 'ZTnIak2G0BQ',
        },
        {
          id: 'gtm-m3-l2',
          title: 'Building Your First HubSpot Workflow',
          type: 'video',
          duration: 25,
          youtubeId: 'Mus_vwhTCq0',
        },
        {
          id: 'gtm-m3-l3',
          title: 'Lead Scoring & Lifecycle Stages',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m3-reading',
          title: 'HubSpot Workflow Best Practices',
          type: 'reading',
          duration: 10,
          content:
            'Effective HubSpot workflows follow a set of best practices that keep your automation reliable and maintainable. First, always name your workflows descriptively using a consistent naming convention such as "[Lifecycle Stage] - [Action] - [Segment]". This makes it easy to audit your automation library as it grows.\n\nSecond, use enrollment triggers carefully. Avoid overly broad triggers that enroll large contact lists unexpectedly. Start with narrow criteria, test with a small segment, and expand once you have confirmed the workflow behaves correctly. Always set re-enrollment criteria intentionally.\n\nThird, build in suppression lists. Every nurture workflow should exclude contacts who have already converted, unsubscribed, or are currently being worked by sales. This prevents embarrassing double-touches and respects the buyer experience.\n\nFourth, leverage branching logic (if/then branches) to personalize the path within a single workflow rather than duplicating entire workflows for minor variations. This reduces maintenance overhead and keeps your automation centralized.\n\nFinally, set up internal notification actions for key conversion events. When a lead hits a scoring threshold or completes a high-intent action, notify the assigned sales rep immediately. Speed-to-lead is one of the highest-impact factors in conversion rates.',
        },
        {
          id: 'gtm-m3-quiz',
          title: 'Module 3 Quiz: HubSpot Workflows',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'gtm-m3-q1',
              type: 'multiple-choice',
              question:
                'What is the purpose of lead scoring in HubSpot?',
              options: [
                'To rank your website pages by traffic',
                'To assign numerical values to leads based on their likelihood to convert',
                'To calculate the cost of each marketing campaign',
                'To score your email subject lines for deliverability',
              ],
              correctAnswer: 1,
              explanation:
                'Lead scoring assigns points based on demographic fit and behavioral signals to help sales teams prioritize the leads most likely to convert.',
            },
            {
              id: 'gtm-m3-q2',
              type: 'true-false',
              question:
                'In HubSpot, a workflow can only be triggered by form submissions.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'HubSpot workflows can be triggered by many events including form submissions, page views, email interactions, deal stage changes, contact property changes, and more.',
            },
            {
              id: 'gtm-m3-q3',
              type: 'multi-select',
              question:
                'Which of the following are valid HubSpot lifecycle stages? (Select all that apply)',
              options: [
                'Subscriber',
                'Marketing Qualified Lead',
                'Opportunity',
                'Champion',
                'Customer',
              ],
              correctAnswer: [0, 1, 2, 4],
              explanation:
                'Subscriber, Marketing Qualified Lead, Opportunity, and Customer are standard HubSpot lifecycle stages. Champion is not a default lifecycle stage in HubSpot.',
            },
            {
              id: 'gtm-m3-q4',
              type: 'multiple-choice',
              question:
                'Why should you include suppression lists in nurture workflows?',
              options: [
                'To increase the total number of enrolled contacts',
                'To prevent converted or unsubscribed contacts from receiving irrelevant messages',
                'To make the workflow run faster',
                'To bypass HubSpot sending limits',
              ],
              correctAnswer: 1,
              explanation:
                'Suppression lists exclude contacts who should not receive the workflow communications, such as existing customers, unsubscribed contacts, or leads already in active sales conversations.',
            },
            {
              id: 'gtm-m3-q5',
              type: 'multiple-choice',
              question:
                'What is the recommended approach when you need slight variations of a workflow for different segments?',
              options: [
                'Duplicate the entire workflow for each segment',
                'Use if/then branching logic within a single workflow',
                'Create separate HubSpot portals for each segment',
                'Send all segments through the same path',
              ],
              correctAnswer: 1,
              explanation:
                'Branching logic within a single workflow reduces maintenance overhead and keeps your automation centralized, rather than managing multiple duplicate workflows.',
            },
          ],
        },
      ],
    },
    // ── Module 4: Zapier & Integration Mastery ──
    {
      id: 'gtm-m4',
      title: 'Zapier & Integration Mastery',
      description:
        'Learn how to connect your marketing stack using Zapier and native integrations. Build multi-step automations that sync data across tools and eliminate manual busywork.',
      lessons: [
        {
          id: 'gtm-m4-l1',
          title: 'Introduction to Zapier & No-Code Integration',
          type: 'video',
          duration: 18,
          youtubeId: 'SIGMi-dFu0Y',
        },
        {
          id: 'gtm-m4-l2',
          title: 'Building Multi-Step Zaps',
          type: 'video',
          duration: 22,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m4-l3',
          title: 'Advanced Integrations: Webhooks & APIs',
          type: 'video',
          duration: 25,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m4-quiz',
          title: 'Module 4 Quiz: Zapier & Integrations',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'gtm-m4-q1',
              type: 'multiple-choice',
              question: 'What is a "Zap" in Zapier?',
              options: [
                'A single data field in a record',
                'An automated workflow that connects two or more apps',
                'A type of API authentication',
                'A data backup tool',
              ],
              correctAnswer: 1,
              explanation:
                'A Zap is an automated workflow in Zapier consisting of a trigger and one or more actions that connect different applications together.',
            },
            {
              id: 'gtm-m4-q2',
              type: 'multi-select',
              question:
                'Which of the following are common Zapier use cases for marketing teams? (Select all that apply)',
              options: [
                'Syncing new leads from forms to CRM',
                'Posting new blog articles to social media',
                'Compiling source code',
                'Sending Slack alerts when high-value leads convert',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Lead syncing, social media posting, and Slack notifications are extremely common marketing automations in Zapier. Compiling source code is a development task, not a marketing automation.',
            },
            {
              id: 'gtm-m4-q3',
              type: 'true-false',
              question:
                'Webhooks allow Zapier to receive real-time data from apps that do not have a native Zapier integration.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Webhooks enable Zapier to catch real-time data from virtually any app that can send HTTP requests, extending Zapier far beyond its native app directory.',
            },
            {
              id: 'gtm-m4-q4',
              type: 'multiple-choice',
              question:
                'What is the difference between a trigger and an action in Zapier?',
              options: [
                'Triggers send data, actions receive data',
                'A trigger is the event that starts the workflow; an action is what happens as a result',
                'Triggers are free, actions cost money',
                'There is no difference; the terms are interchangeable',
              ],
              correctAnswer: 1,
              explanation:
                'In Zapier, a trigger is the event that initiates the Zap (e.g., new form submission), and an action is the task performed in response (e.g., create CRM contact).',
            },
          ],
        },
      ],
    },
    // ── Module 5: Data Hygiene & Reporting ──
    {
      id: 'gtm-m5',
      title: 'Data Hygiene & Reporting',
      description:
        'Clean data powers effective automation. Learn how to maintain data quality, build meaningful reports, and create dashboards that help stakeholders make informed decisions.',
      lessons: [
        {
          id: 'gtm-m5-l1',
          title: 'Why Data Hygiene Matters',
          type: 'video',
          duration: 15,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m5-l2',
          title: 'Data Cleaning & Deduplication Strategies',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'gtm-m5-reading',
          title: 'Building a Data Governance Framework',
          type: 'reading',
          duration: 12,
          content:
            'Data governance is the set of policies, processes, and standards that ensure your marketing data remains accurate, consistent, and usable over time. Without governance, even the best automation tools will degrade as data quality erodes.\n\nStart by defining data ownership. For each major object in your CRM (contacts, companies, deals), designate a team or individual responsible for data quality. Marketing operations typically owns contact and campaign data, while sales operations owns deal and pipeline data.\n\nEstablish standardized field formats and enforce them through validation rules. For example, phone numbers should follow a consistent format, job titles should map to a controlled vocabulary, and industry classifications should use a standard taxonomy. Prevent free-text entry wherever a dropdown or picklist can be used.\n\nImplement regular data audits on a monthly or quarterly cadence. Check for duplicate records, missing required fields, stale contacts (no engagement in 90+ days), and invalid email addresses. Automate as much of this as possible using workflow-based cleanup rules.\n\nFinally, document your data model. Maintain a living data dictionary that describes every custom property, its purpose, acceptable values, and which team owns it. This becomes invaluable during onboarding, platform migrations, and troubleshooting automation issues.',
        },
        {
          id: 'gtm-m5-quiz',
          title: 'Module 5 Quiz: Data Hygiene & Reporting',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'gtm-m5-q1',
              type: 'multiple-choice',
              question:
                'What is the most common consequence of poor data hygiene?',
              options: [
                'Faster loading times for dashboards',
                'Inaccurate reporting and misguided business decisions',
                'Increased storage costs only',
                'Better email deliverability',
              ],
              correctAnswer: 1,
              explanation:
                'Poor data hygiene leads to inaccurate reports, unreliable lead scoring, broken automations, and ultimately bad business decisions based on flawed information.',
            },
            {
              id: 'gtm-m5-q2',
              type: 'multi-select',
              question:
                'Which of the following are data hygiene best practices? (Select all that apply)',
              options: [
                'Regular deduplication',
                'Storing all data in a single spreadsheet',
                'Standardized field formats',
                'Monthly data audits',
                'Never deleting any records',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'Regular deduplication, standardized formats, and scheduled audits are data hygiene pillars. Storing data in a single spreadsheet lacks governance, and never deleting records leads to bloated, unreliable datasets.',
            },
            {
              id: 'gtm-m5-q3',
              type: 'true-false',
              question:
                'A data dictionary is a document that describes every custom property, its purpose, and acceptable values.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'A data dictionary serves as a living reference for your data model, documenting properties, their definitions, valid values, and ownership. It is essential for data governance.',
            },
            {
              id: 'gtm-m5-q4',
              type: 'multiple-choice',
              question:
                'How often should you typically run a data quality audit?',
              options: [
                'Once when the CRM is first set up',
                'Monthly or quarterly',
                'Only when problems are reported',
                'Every five years',
              ],
              correctAnswer: 1,
              explanation:
                'Regular audits on a monthly or quarterly cadence catch data quality issues before they compound. Reactive auditing allows problems to grow unchecked.',
            },
          ],
        },
      ],
    },
  ],
  // ── Final Assessment ──
  finalAssessment: [
    {
      id: 'gtm-final-q1',
      type: 'multiple-choice',
      question: 'What is the primary goal of a Go-To-Market strategy?',
      options: [
        'To build the product roadmap',
        'To define how a company will reach and sell to its target customers',
        'To hire a sales team',
        'To create brand awareness on social media',
      ],
      correctAnswer: 1,
      explanation:
        'A GTM strategy defines the full plan for bringing a product to market and reaching target customers through the right channels, messaging, and sales motions.',
    },
    {
      id: 'gtm-final-q2',
      type: 'multiple-choice',
      question: 'What does ICP stand for?',
      options: [
        'Internal Communication Plan',
        'Ideal Customer Profile',
        'Integrated Channel Platform',
        'Initial Conversion Point',
      ],
      correctAnswer: 1,
      explanation:
        'ICP stands for Ideal Customer Profile, describing the attributes of accounts most likely to become high-value customers.',
    },
    {
      id: 'gtm-final-q3',
      type: 'true-false',
      question:
        'Marketing automation eliminates the need for a human marketing team.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation:
        'Automation augments marketing teams by handling repetitive tasks at scale, but strategy, creativity, and relationship-building still require human expertise.',
    },
    {
      id: 'gtm-final-q4',
      type: 'multi-select',
      question:
        'Which are standard HubSpot lifecycle stages? (Select all that apply)',
      options: [
        'Subscriber',
        'Marketing Qualified Lead',
        'Champion',
        'Customer',
        'Evangelist',
      ],
      correctAnswer: [0, 1, 3, 4],
      explanation:
        'Subscriber, MQL, Customer, and Evangelist are default HubSpot lifecycle stages. Champion is not a standard lifecycle stage.',
    },
    {
      id: 'gtm-final-q5',
      type: 'multiple-choice',
      question: 'What is a "Zap" in Zapier?',
      options: [
        'A single database record',
        'An automated workflow connecting two or more apps',
        'A JavaScript function',
        'A type of webhook',
      ],
      correctAnswer: 1,
      explanation:
        'A Zap is Zapier\'s term for an automated workflow consisting of a trigger event and one or more resulting actions across connected applications.',
    },
    {
      id: 'gtm-final-q6',
      type: 'multiple-choice',
      question:
        'Why are suppression lists important in nurture workflows?',
      options: [
        'They increase email volume',
        'They prevent irrelevant messages to converted or unsubscribed contacts',
        'They improve loading speed',
        'They are required by HubSpot to publish workflows',
      ],
      correctAnswer: 1,
      explanation:
        'Suppression lists protect the buyer experience by excluding contacts who should not receive specific workflow communications.',
    },
    {
      id: 'gtm-final-q7',
      type: 'true-false',
      question:
        'Webhooks allow Zapier to receive real-time data from apps without native integrations.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation:
        'Webhooks enable Zapier to catch data from any app that can send HTTP POST requests, vastly extending integration possibilities.',
    },
    {
      id: 'gtm-final-q8',
      type: 'multiple-choice',
      question: 'What is lead scoring used for?',
      options: [
        'Ranking website pages by SEO performance',
        'Assigning numerical values to leads based on conversion likelihood',
        'Scoring email subject lines',
        'Calculating campaign ROI',
      ],
      correctAnswer: 1,
      explanation:
        'Lead scoring uses demographic fit and behavioral signals to prioritize leads, helping sales focus on the most promising prospects.',
    },
    {
      id: 'gtm-final-q9',
      type: 'multi-select',
      question:
        'Which of the following are data hygiene best practices? (Select all that apply)',
      options: [
        'Regular deduplication',
        'Standardized field formats',
        'Never deleting records',
        'Monthly audits',
      ],
      correctAnswer: [0, 1, 3],
      explanation:
        'Deduplication, standardized formats, and regular audits form the foundation of data hygiene. Keeping all records forever without cleanup degrades data quality.',
    },
    {
      id: 'gtm-final-q10',
      type: 'multiple-choice',
      question:
        'At which automation maturity stage does AI-driven optimization typically appear?',
      options: [
        'Stage 1 (Basic)',
        'Stage 2 (Intermediate)',
        'Stage 3 (Advanced)',
        'Stage 4 (Optimized)',
      ],
      correctAnswer: 3,
      explanation:
        'Stage 4 (Optimized) is characterized by AI-driven send-time optimization, predictive scoring, and real-time personalization.',
    },
    {
      id: 'gtm-final-q11',
      type: 'multiple-choice',
      question:
        'What is the recommended naming convention for HubSpot workflows?',
      options: [
        'Random numbers for easy sorting',
        '[Lifecycle Stage] - [Action] - [Segment]',
        'Date created followed by creator initials',
        'Single-word names for brevity',
      ],
      correctAnswer: 1,
      explanation:
        'A descriptive convention like [Lifecycle Stage] - [Action] - [Segment] makes it easy to audit and manage workflows as your automation library grows.',
    },
    {
      id: 'gtm-final-q12',
      type: 'true-false',
      question:
        'A data dictionary should be created once and never updated.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation:
        'A data dictionary is a living document that should be updated as your data model evolves, new properties are added, and ownership changes.',
    },
    {
      id: 'gtm-final-q13',
      type: 'multiple-choice',
      question:
        'What is the main advantage of using if/then branching in a single workflow?',
      options: [
        'It makes the workflow run faster',
        'It reduces maintenance by centralizing logic instead of duplicating workflows',
        'It bypasses enrollment limits',
        'It automatically translates content',
      ],
      correctAnswer: 1,
      explanation:
        'Branching logic within one workflow reduces duplication and maintenance overhead compared to managing separate workflows for each segment variation.',
    },
    {
      id: 'gtm-final-q14',
      type: 'multi-select',
      question:
        'Which events can trigger a HubSpot workflow? (Select all that apply)',
      options: [
        'Form submission',
        'Page view',
        'Contact property change',
        'Weather forecast',
        'Deal stage change',
      ],
      correctAnswer: [0, 1, 2, 4],
      explanation:
        'Form submissions, page views, contact property changes, and deal stage changes are all valid HubSpot workflow triggers. Weather data is not a native trigger.',
    },
    {
      id: 'gtm-final-q15',
      type: 'multiple-choice',
      question:
        'Why is speed-to-lead important in B2B sales?',
      options: [
        'It reduces server response times',
        'Faster follow-up dramatically increases conversion rates',
        'It improves SEO rankings',
        'It decreases email bounce rates',
      ],
      correctAnswer: 1,
      explanation:
        'Research shows that responding to leads within minutes versus hours can increase conversion rates by several multiples. Automation-powered notifications enable this speed.',
    },
  ],
};

// ============================================================================
// Course 2: Research for Marketers (All Levels, 8h)
// ============================================================================

const researchForMarketers: CourseData = {
  slug: 'research-for-marketers',
  title: 'Research for Marketers',
  modules: [
    // ── Module 1: Why Research Matters ──
    {
      id: 'research-m1',
      title: 'Why Research Matters',
      description:
        'Discover why research is the foundation of effective marketing. Learn how data-driven insights reduce guesswork and lead to campaigns that resonate with real audiences.',
      lessons: [
        {
          id: 'research-m1-l1',
          title: 'The Role of Research in Modern Marketing',
          type: 'video',
          duration: 16,
          youtubeId: 'GlGYMXLVCTo',
        },
        {
          id: 'research-m1-l2',
          title: 'Primary vs. Secondary Research',
          type: 'video',
          duration: 14,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'research-m1-reading',
          title: 'Building a Research-First Culture',
          type: 'reading',
          duration: 10,
          content:
            'A research-first culture means that every major marketing decision is informed by data rather than assumptions. This does not mean every decision requires a full-scale study. It means the team habitually asks "what do we know?" before "what do we think?" and recognizes the difference between the two.\n\nBuilding this culture starts with leadership. When executives ask for evidence behind campaign strategies and resource allocation decisions, teams learn to prioritize research. When anecdotes and opinions carry the same weight as data, research gets deprioritized in favor of speed.\n\nPractically, embed lightweight research into your existing workflows. Before launching a campaign, spend 30 minutes reviewing existing customer data, support tickets, and recent survey results. Before redesigning a landing page, run five quick usability tests. Before entering a new market, conduct ten customer discovery interviews.\n\nThe key is making research a habit rather than a project. Small, consistent research efforts compound over time into a deep understanding of your market that competitors who rely on intuition cannot match.',
        },
        {
          id: 'research-m1-quiz',
          title: 'Module 1 Quiz: Research Foundations',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'research-m1-q1',
              type: 'multiple-choice',
              question:
                'What is the key difference between primary and secondary research?',
              options: [
                'Primary research is more expensive',
                'Primary research collects original data; secondary research analyzes existing data',
                'Secondary research is always more reliable',
                'Primary research only uses surveys',
              ],
              correctAnswer: 1,
              explanation:
                'Primary research involves collecting new, original data directly (surveys, interviews, experiments), while secondary research analyzes data that already exists (reports, databases, published studies).',
            },
            {
              id: 'research-m1-q2',
              type: 'true-false',
              question:
                'A research-first culture requires a dedicated research team to function.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'While a dedicated team helps, a research-first culture can be built by embedding lightweight research habits into existing workflows. Any team member can conduct customer interviews, review data, or run quick tests.',
            },
            {
              id: 'research-m1-q3',
              type: 'multi-select',
              question:
                'Which of the following are examples of secondary research? (Select all that apply)',
              options: [
                'Industry analyst reports',
                'Customer interviews',
                'Government census data',
                'Focus groups',
                'Published academic studies',
              ],
              correctAnswer: [0, 2, 4],
              explanation:
                'Industry reports, census data, and academic studies are pre-existing data sources (secondary research). Customer interviews and focus groups involve collecting original data (primary research).',
            },
            {
              id: 'research-m1-q4',
              type: 'multiple-choice',
              question:
                'How many usability tests are recommended as a minimum before redesigning a landing page?',
              options: [
                'One',
                'Five',
                'Fifty',
                'Usability tests are not necessary',
              ],
              correctAnswer: 1,
              explanation:
                'Research by Jakob Nielsen shows that five usability tests typically uncover about 85% of usability issues, making it an efficient minimum for quick insight.',
            },
          ],
        },
      ],
    },
    // ── Module 2: Qualitative Research Methods ──
    {
      id: 'research-m2',
      title: 'Qualitative Research Methods',
      description:
        'Master the art of qualitative research including customer interviews, focus groups, and ethnographic observation. Learn how to uncover deep motivations that numbers alone cannot reveal.',
      lessons: [
        {
          id: 'research-m2-l1',
          title: 'Customer Interview Techniques',
          type: 'video',
          duration: 20,
          youtubeId: 'GlGYMXLVCTo',
        },
        {
          id: 'research-m2-l2',
          title: 'Running Effective Focus Groups',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'research-m2-l3',
          title: 'Ethnographic & Contextual Inquiry',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'research-m2-quiz',
          title: 'Module 2 Quiz: Qualitative Methods',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'research-m2-q1',
              type: 'multiple-choice',
              question:
                'What is the primary advantage of qualitative research over quantitative research?',
              options: [
                'Larger sample sizes',
                'Statistical significance',
                'Deep understanding of motivations and context',
                'Faster to conduct',
              ],
              correctAnswer: 2,
              explanation:
                'Qualitative research excels at uncovering the "why" behind behaviors, providing deep contextual understanding that quantitative data alone cannot deliver.',
            },
            {
              id: 'research-m2-q2',
              type: 'true-false',
              question:
                'Leading questions are acceptable in customer interviews as long as you get the answer you need.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Leading questions bias responses and produce unreliable data. Good interview technique uses open-ended, neutral questions that let participants share their genuine experiences.',
            },
            {
              id: 'research-m2-q3',
              type: 'multi-select',
              question:
                'Which of the following are qualitative research methods? (Select all that apply)',
              options: [
                'In-depth interviews',
                'A/B testing',
                'Focus groups',
                'Net Promoter Score surveys',
                'Contextual inquiry',
              ],
              correctAnswer: [0, 2, 4],
              explanation:
                'In-depth interviews, focus groups, and contextual inquiry are qualitative methods. A/B testing and NPS surveys are quantitative approaches.',
            },
            {
              id: 'research-m2-q4',
              type: 'multiple-choice',
              question:
                'What is a contextual inquiry?',
              options: [
                'A phone survey about product preferences',
                'Observing users in their natural environment while they perform tasks',
                'An online questionnaire',
                'A competitive analysis framework',
              ],
              correctAnswer: 1,
              explanation:
                'Contextual inquiry involves observing and interviewing users in their actual work or life environment, providing rich insight into real-world behavior and challenges.',
            },
          ],
        },
      ],
    },
    // ── Module 3: Survey Design & Quantitative Basics ──
    {
      id: 'research-m3',
      title: 'Survey Design & Quantitative Basics',
      description:
        'Learn how to design surveys that produce reliable, actionable data. Understand sampling, question types, bias mitigation, and basic statistical concepts every marketer should know.',
      lessons: [
        {
          id: 'research-m3-l1',
          title: 'Principles of Good Survey Design',
          type: 'video',
          duration: 20,
          youtubeId: 'Ww1BeIo3PBk',
        },
        {
          id: 'research-m3-l2',
          title: 'Question Types & Response Scales',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'research-m3-l3',
          title: 'Sampling & Statistical Significance',
          type: 'video',
          duration: 22,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'research-m3-reading',
          title: 'Avoiding Common Survey Pitfalls',
          type: 'reading',
          duration: 10,
          content:
            'Survey design is deceptively difficult. A poorly designed survey not only wastes time and money, but produces misleading data that can drive bad decisions. Here are the most common pitfalls and how to avoid them.\n\nDouble-barreled questions ask about two things at once, such as "How satisfied are you with our product quality and customer service?" If a respondent loves the product but hates the service, they cannot answer accurately. Always ask about one concept per question.\n\nLeading questions subtly push respondents toward a particular answer. "Don\'t you agree that our new feature is useful?" is a leading question. Instead, ask "How would you rate the usefulness of the new feature?" with a balanced scale.\n\nSurvey fatigue is real. Keep surveys under 10 minutes (approximately 15-20 questions). Put the most important questions first, as completion rates drop significantly after the midpoint. Use progress indicators so respondents know how much remains.\n\nResponse scale inconsistency confuses respondents. If you use a 5-point scale, use it throughout. Do not switch between 5-point, 7-point, and 10-point scales in the same survey. Ensure scale anchors are clear and balanced (e.g., "Strongly Disagree" to "Strongly Agree").\n\nFinally, always pilot your survey with 5-10 people before launch. Watch them take it and note where they hesitate, misinterpret questions, or express confusion. A 30-minute pilot can save weeks of collecting unusable data.',
        },
        {
          id: 'research-m3-quiz',
          title: 'Module 3 Quiz: Surveys & Quantitative Research',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'research-m3-q1',
              type: 'multiple-choice',
              question: 'What is a double-barreled question?',
              options: [
                'A question with two possible correct answers',
                'A question that asks about two different things at once',
                'A question repeated twice in a survey',
                'A question with a very long response option',
              ],
              correctAnswer: 1,
              explanation:
                'A double-barreled question combines two distinct topics, making it impossible for respondents to provide an accurate single answer. Always separate them into individual questions.',
            },
            {
              id: 'research-m3-q2',
              type: 'true-false',
              question:
                'A survey should ideally take no more than 10 minutes to complete.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Research shows that completion rates drop significantly after 10 minutes. Keeping surveys concise (15-20 questions) yields better quality data and higher response rates.',
            },
            {
              id: 'research-m3-q3',
              type: 'multiple-choice',
              question:
                'Why should you pilot a survey before launching it?',
              options: [
                'To increase the sample size',
                'To identify confusing questions, misinterpretations, and technical issues',
                'To collect preliminary data for the final report',
                'Piloting is only necessary for surveys over 50 questions',
              ],
              correctAnswer: 1,
              explanation:
                'Piloting with a small group reveals usability issues, confusing wording, and technical problems before you invest resources in a full launch.',
            },
            {
              id: 'research-m3-q4',
              type: 'multi-select',
              question:
                'Which of the following are best practices in survey design? (Select all that apply)',
              options: [
                'Use consistent response scales throughout',
                'Ask the most important questions first',
                'Include as many questions as possible for comprehensive data',
                'Avoid leading questions',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Consistent scales, prioritizing important questions, and neutral wording are best practices. Excessive questions cause survey fatigue and lower data quality.',
            },
          ],
        },
      ],
    },
    // ── Module 4: Insight Synthesis & Personas ──
    {
      id: 'research-m4',
      title: 'Insight Synthesis & Personas',
      description:
        'Transform raw research data into actionable marketing insights. Learn to synthesize findings, build evidence-based personas, and present research to stakeholders in a compelling way.',
      lessons: [
        {
          id: 'research-m4-l1',
          title: 'From Data to Insights: Synthesis Frameworks',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'research-m4-l2',
          title: 'Building Evidence-Based Buyer Personas',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'research-m4-reading',
          title: 'The Persona Anti-Patterns to Avoid',
          type: 'reading',
          duration: 10,
          content:
            'Buyer personas are one of the most powerful tools in marketing, but they are also one of the most frequently misused. Here are common anti-patterns that render personas ineffective.\n\nThe Fictional Character persona is created in a conference room without any actual customer data. The team invents a name, stock photo, and backstory based on assumptions. These personas feel real but are essentially marketing fan fiction. Always ground personas in real interview data, behavioral analytics, and survey results.\n\nThe Demographic-Only persona focuses exclusively on age, income, and job title while ignoring psychographics, goals, pain points, and buying behaviors. Knowing that your buyer is a 35-year-old marketing manager tells you almost nothing about what messaging will resonate with them.\n\nThe Too-Many-Personas trap occurs when teams create a persona for every conceivable segment. More than three to five primary personas typically leads to diluted messaging and unfocused campaigns. Prioritize the personas that represent your highest-value, most addressable segments.\n\nThe Static Persona is created once and never updated. Markets evolve, customer needs change, and new competitors emerge. Review and refresh personas at least annually, incorporating new research, win/loss data, and customer feedback.\n\nEffective personas are living documents built on real data, focused on behaviors and motivations, limited in number, and updated regularly. They should be used actively in campaign planning, content creation, and sales enablement rather than filed away after creation.',
        },
        {
          id: 'research-m4-quiz',
          title: 'Module 4 Quiz: Insights & Personas',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'research-m4-q1',
              type: 'multiple-choice',
              question:
                'What is the most important foundation for an effective buyer persona?',
              options: [
                'A creative backstory and stock photo',
                'Real customer data from interviews, analytics, and surveys',
                'Demographic information only',
                'Competitive analysis',
              ],
              correctAnswer: 1,
              explanation:
                'Effective personas must be grounded in actual customer data. Without real research, personas become assumptions that can mislead strategy.',
            },
            {
              id: 'research-m4-q2',
              type: 'true-false',
              question:
                'You should create as many buyer personas as possible to cover every potential customer segment.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Too many personas dilute focus. Three to five primary personas typically provide sufficient coverage while keeping messaging and strategy focused.',
            },
            {
              id: 'research-m4-q3',
              type: 'multiple-choice',
              question: 'How often should buyer personas be reviewed and updated?',
              options: [
                'Never, once created they are permanent',
                'Every week',
                'At least annually',
                'Only when a product launches',
              ],
              correctAnswer: 2,
              explanation:
                'Markets and customer needs evolve, so personas should be refreshed at least annually using new research, win/loss data, and customer feedback.',
            },
            {
              id: 'research-m4-q4',
              type: 'multi-select',
              question:
                'Which of the following should be included in a well-built persona? (Select all that apply)',
              options: [
                'Goals and motivations',
                'Pain points and challenges',
                'Favorite color',
                'Buying behavior patterns',
                'Preferred information sources',
              ],
              correctAnswer: [0, 1, 3, 4],
              explanation:
                'Goals, pain points, buying behaviors, and information preferences directly inform marketing strategy. Favorite color is irrelevant to B2B marketing decisions.',
            },
          ],
        },
      ],
    },
  ],
  finalAssessment: [
    {
      id: 'research-final-q1',
      type: 'multiple-choice',
      question: 'What is the key difference between primary and secondary research?',
      options: [
        'Primary is cheaper; secondary is more expensive',
        'Primary collects original data; secondary analyzes existing data',
        'Primary is qualitative; secondary is quantitative',
        'There is no meaningful difference',
      ],
      correctAnswer: 1,
      explanation:
        'Primary research gathers new data directly from sources, while secondary research leverages data that has already been collected and published.',
    },
    {
      id: 'research-final-q2',
      type: 'true-false',
      question: 'Qualitative research can provide statistically significant results.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation:
        'Qualitative research provides depth and context but uses small samples that are not designed for statistical significance. That is the domain of quantitative methods.',
    },
    {
      id: 'research-final-q3',
      type: 'multiple-choice',
      question: 'What is a leading question?',
      options: [
        'The first question in a survey',
        'A question that subtly pushes respondents toward a particular answer',
        'An open-ended question',
        'A question about leadership',
      ],
      correctAnswer: 1,
      explanation:
        'Leading questions bias responses by suggesting a preferred answer, producing unreliable data. Neutral wording is essential for valid results.',
    },
    {
      id: 'research-final-q4',
      type: 'multi-select',
      question: 'Which are qualitative research methods? (Select all that apply)',
      options: [
        'In-depth interviews',
        'NPS surveys',
        'Focus groups',
        'Contextual inquiry',
        'A/B testing',
      ],
      correctAnswer: [0, 2, 3],
      explanation:
        'Interviews, focus groups, and contextual inquiry explore qualitative depth. NPS surveys and A/B tests are quantitative methods.',
    },
    {
      id: 'research-final-q5',
      type: 'multiple-choice',
      question: 'How many usability tests are recommended as a minimum?',
      options: ['One', 'Five', 'Twenty', 'One hundred'],
      correctAnswer: 1,
      explanation:
        'Five usability tests typically reveal about 85% of usability issues, making it a highly efficient minimum sample size.',
    },
    {
      id: 'research-final-q6',
      type: 'true-false',
      question: 'Double-barreled questions should be avoided in surveys.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation:
        'Double-barreled questions ask about two things at once, making it impossible for respondents to answer accurately. Each question should address a single concept.',
    },
    {
      id: 'research-final-q7',
      type: 'multiple-choice',
      question: 'What is the recommended maximum number of primary buyer personas?',
      options: ['One', 'Three to five', 'Ten to fifteen', 'Unlimited'],
      correctAnswer: 1,
      explanation:
        'Three to five primary personas provide sufficient coverage without diluting focus. More personas lead to unfocused messaging and strategy.',
    },
    {
      id: 'research-final-q8',
      type: 'multiple-choice',
      question: 'What is a contextual inquiry?',
      options: [
        'A competitive analysis tool',
        'A phone interview technique',
        'Observing users in their natural environment during real tasks',
        'A type of online survey',
      ],
      correctAnswer: 2,
      explanation:
        'Contextual inquiry involves watching and interviewing users in situ as they perform real tasks, providing rich behavioral insight.',
    },
    {
      id: 'research-final-q9',
      type: 'multi-select',
      question:
        'Which persona anti-patterns should be avoided? (Select all that apply)',
      options: [
        'Data-driven personas',
        'Fictional character personas with no data',
        'Demographic-only personas',
        'Static personas never updated',
        'Focused personas limited to 3-5',
      ],
      correctAnswer: [1, 2, 3],
      explanation:
        'Fictional, demographic-only, and static personas are anti-patterns. Data-driven and focused personas are best practices.',
    },
    {
      id: 'research-final-q10',
      type: 'true-false',
      question: 'Surveys should use consistent response scales throughout.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation:
        'Mixing different scale types within the same survey confuses respondents and reduces data quality. Consistency is key.',
    },
    {
      id: 'research-final-q11',
      type: 'multiple-choice',
      question: 'What should you always do before launching a survey?',
      options: [
        'Publish it immediately to capture early responses',
        'Pilot it with 5-10 people to catch issues',
        'Share it on social media for maximum reach',
        'Translate it into five languages',
      ],
      correctAnswer: 1,
      explanation:
        'Piloting with a small group identifies confusing questions, technical issues, and flow problems before investing in a full launch.',
    },
    {
      id: 'research-final-q12',
      type: 'multiple-choice',
      question: 'How often should buyer personas be reviewed?',
      options: [
        'Never',
        'At least annually',
        'Only during a rebrand',
        'Every day',
      ],
      correctAnswer: 1,
      explanation:
        'Annual reviews incorporate new data, market changes, and evolving customer needs to keep personas accurate and useful.',
    },
    {
      id: 'research-final-q13',
      type: 'multi-select',
      question:
        'What should an effective persona include? (Select all that apply)',
      options: [
        'Goals and motivations',
        'Pain points',
        'Buying behavior patterns',
        'Blood type',
        'Preferred information sources',
      ],
      correctAnswer: [0, 1, 2, 4],
      explanation:
        'Goals, pain points, buying behaviors, and information preferences are actionable persona components. Irrelevant personal details add noise.',
    },
    {
      id: 'research-final-q14',
      type: 'true-false',
      question:
        'A research-first culture requires conducting a full study before every marketing decision.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation:
        'A research-first culture means habitually checking existing data and doing lightweight research, not conducting full studies for every decision.',
    },
    {
      id: 'research-final-q15',
      type: 'multiple-choice',
      question:
        'What is the primary limitation of quantitative research?',
      options: [
        'It uses small sample sizes',
        'It cannot provide statistical significance',
        'It reveals what is happening but not why',
        'It is always more expensive than qualitative research',
      ],
      correctAnswer: 2,
      explanation:
        'Quantitative research shows patterns and magnitudes but lacks the depth to explain underlying motivations. Qualitative research fills that gap.',
    },
  ],
};

// ============================================================================
// Course 3: Landing Pages that Convert (Beginner, 6h)
// ============================================================================

const landingPages: CourseData = {
  slug: 'landing-pages',
  title: 'Landing Pages that Convert',
  modules: [
    // ── Module 1: Anatomy of a High-Converting Page ──
    {
      id: 'lp-m1',
      title: 'Anatomy of a High-Converting Page',
      description:
        'Understand the essential elements every high-converting landing page needs, from hero sections to trust signals. Learn what makes visitors stay, engage, and convert.',
      lessons: [
        {
          id: 'lp-m1-l1',
          title: 'The Core Elements of a Landing Page',
          type: 'video',
          duration: 18,
          youtubeId: 'VGo_FHXS3fI',
        },
        {
          id: 'lp-m1-l2',
          title: 'Above the Fold: Hero Sections That Hook',
          type: 'video',
          duration: 15,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'lp-m1-reading',
          title: 'Trust Signals & Social Proof That Work',
          type: 'reading',
          duration: 10,
          content:
            'Trust signals are elements on a landing page that reduce visitor anxiety and build confidence in your offer. Without them, even the best copy and design will underperform because people buy from companies they trust.\n\nThe most powerful trust signals include customer logos (especially recognizable brands), testimonials with real names and photos, case study metrics (e.g., "increased conversion by 47%"), security badges and compliance certifications, and media mentions or "as seen in" logos.\n\nPlacement matters as much as content. Customer logos should appear near the hero section to establish credibility immediately. Testimonials work best adjacent to your call-to-action, where they can overcome last-moment objections. Security badges belong near form fields and payment areas where visitors feel most vulnerable.\n\nThe specificity principle applies to all trust signals. "Trusted by 500+ companies" is good, but "Trusted by 537 companies including Shopify, HubSpot, and Stripe" is more credible. Specific numbers feel real; round numbers feel estimated.\n\nFinally, match your trust signals to your audience. Enterprise buyers care about security certifications and large-logo credibility. Startup buyers respond to growth metrics and peer recommendations. B2C audiences value star ratings and review counts. Choose the trust signals that address the specific anxieties of your target persona.',
        },
        {
          id: 'lp-m1-quiz',
          title: 'Module 1 Quiz: Landing Page Anatomy',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'lp-m1-q1',
              type: 'multi-select',
              question:
                'Which of the following are essential elements of a high-converting landing page? (Select all that apply)',
              options: [
                'A clear, compelling headline',
                'A navigation menu with 10+ links',
                'A strong call-to-action',
                'Social proof or trust signals',
                'An auto-playing background video',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'A compelling headline, strong CTA, and trust signals are essential. Excessive navigation links create exit paths, and auto-playing videos often annoy visitors and slow page load.',
            },
            {
              id: 'lp-m1-q2',
              type: 'true-false',
              question:
                'A landing page should always have a full website navigation menu.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Landing pages should minimize navigation to keep visitors focused on the conversion goal. Full navigation creates exit opportunities that dilute conversion rates.',
            },
            {
              id: 'lp-m1-q3',
              type: 'multiple-choice',
              question:
                'Where should customer logos ideally be placed on a landing page?',
              options: [
                'In the footer only',
                'Near the hero section for immediate credibility',
                'On a separate testimonials page',
                'Customer logos should not be on landing pages',
              ],
              correctAnswer: 1,
              explanation:
                'Customer logos near the hero section establish credibility immediately as visitors form their first impression of your page.',
            },
            {
              id: 'lp-m1-q4',
              type: 'multiple-choice',
              question:
                'Why are specific numbers more effective in trust signals than round numbers?',
              options: [
                'They are easier to read',
                'They feel more real and credible than estimated round numbers',
                'Search engines prefer specific numbers',
                'They load faster on mobile devices',
              ],
              correctAnswer: 1,
              explanation:
                'Specific numbers like "537 companies" feel researched and authentic, while round numbers like "500+" feel like approximations, reducing perceived credibility.',
            },
          ],
        },
      ],
    },
    // ── Module 2: Copywriting for Conversion ──
    {
      id: 'lp-m2',
      title: 'Copywriting for Conversion',
      description:
        'Learn how to write landing page copy that speaks to your audience\'s needs, overcomes objections, and drives action. From headlines to CTAs, master the art of persuasive writing.',
      lessons: [
        {
          id: 'lp-m2-l1',
          title: 'Headline Formulas That Convert',
          type: 'video',
          duration: 18,
          youtubeId: 'zGEAoDaEZPg',
        },
        {
          id: 'lp-m2-l2',
          title: 'Writing Benefit-Driven Body Copy',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'lp-m2-l3',
          title: 'Call-to-Action Copy That Drives Clicks',
          type: 'video',
          duration: 15,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'lp-m2-quiz',
          title: 'Module 2 Quiz: Conversion Copywriting',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'lp-m2-q1',
              type: 'multiple-choice',
              question:
                'What is the most important principle of conversion copywriting?',
              options: [
                'Using the longest words possible to sound professional',
                'Focusing on benefits to the reader rather than product features',
                'Including as much text as possible on the page',
                'Using all capital letters for emphasis',
              ],
              correctAnswer: 1,
              explanation:
                'Conversion copywriting focuses on what the reader gains (benefits) rather than what the product does (features). People buy outcomes, not tools.',
            },
            {
              id: 'lp-m2-q2',
              type: 'true-false',
              question:
                'A CTA button that says "Submit" is as effective as "Get My Free Report".',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Specific, benefit-oriented CTA copy like "Get My Free Report" consistently outperforms generic text like "Submit" because it reinforces the value of clicking.',
            },
            {
              id: 'lp-m2-q3',
              type: 'multi-select',
              question:
                'Which headline approaches are effective for landing pages? (Select all that apply)',
              options: [
                'Addressing a specific pain point',
                'Stating a clear benefit or outcome',
                'Using vague, clever wordplay',
                'Including a relevant number or statistic',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Pain points, clear benefits, and specific statistics create compelling headlines. Vague wordplay often confuses visitors and reduces clarity.',
            },
            {
              id: 'lp-m2-q4',
              type: 'multiple-choice',
              question:
                'What is the "So What?" test in copywriting?',
              options: [
                'A grammar checking tool',
                'A method to ensure every statement answers why the reader should care',
                'A way to measure page load speed',
                'A competitive analysis framework',
              ],
              correctAnswer: 1,
              explanation:
                'The "So What?" test means reading every line of copy and asking whether the reader would care. If a statement does not answer "so what does this mean for me?", it needs to be rewritten or removed.',
            },
          ],
        },
      ],
    },
    // ── Module 3: Design & UX Principles ──
    {
      id: 'lp-m3',
      title: 'Design & UX Principles',
      description:
        'Explore the visual and interaction design principles that guide visitors toward conversion. Learn about visual hierarchy, white space, mobile responsiveness, and form design.',
      lessons: [
        {
          id: 'lp-m3-l1',
          title: 'Visual Hierarchy & Layout for Conversion',
          type: 'video',
          duration: 18,
          youtubeId: 'VGo_FHXS3fI',
        },
        {
          id: 'lp-m3-l2',
          title: 'Mobile-First Landing Page Design',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'lp-m3-reading',
          title: 'Form Design Best Practices',
          type: 'reading',
          duration: 8,
          content:
            'Forms are where conversions happen, and every unnecessary field is a barrier. The science of form design is clear: fewer fields generally mean higher conversion rates. But this must be balanced with lead quality, as very short forms can generate unqualified leads.\n\nThe sweet spot for most B2B landing pages is three to five fields. Name and email are almost always required. Adding company name and job title can improve lead quality without significantly hurting conversion rates. Each additional field beyond five typically reduces conversion by 5-10%.\n\nField labels should be placed above the input field, not inside it as placeholder text. Placeholder text disappears when users start typing, forcing them to delete their input to remember what the field asks for. Persistent labels prevent this friction.\n\nUse smart defaults and progressive disclosure. If you can detect the visitor\'s country from their IP address, pre-fill it. If you need detailed information, collect basic details first and follow up with a progressive profiling form that asks for additional data on subsequent visits.\n\nFinally, the submit button deserves special attention. Replace generic "Submit" text with action-oriented copy that reinforces value: "Get My Free Audit" or "Start My Trial" outperforms "Submit" by 20-30% in most tests.',
        },
        {
          id: 'lp-m3-quiz',
          title: 'Module 3 Quiz: Design & UX',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'lp-m3-q1',
              type: 'multiple-choice',
              question:
                'What is visual hierarchy on a landing page?',
              options: [
                'The order in which elements load on the page',
                'The arrangement of elements to guide visitors\' attention in order of importance',
                'A folder structure for design files',
                'The number of images versus text on a page',
              ],
              correctAnswer: 1,
              explanation:
                'Visual hierarchy uses size, color, contrast, and placement to guide the viewer\'s eye through the page in the order you want them to consume information.',
            },
            {
              id: 'lp-m3-q2',
              type: 'true-false',
              question:
                'Using placeholder text inside form fields is a good substitute for field labels.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Placeholder text disappears when users type, creating confusion. Persistent labels above fields are more usable and accessible.',
            },
            {
              id: 'lp-m3-q3',
              type: 'multiple-choice',
              question:
                'What is the recommended number of form fields for a B2B landing page?',
              options: [
                'One (email only)',
                'Three to five',
                'Ten to fifteen',
                'As many as possible',
              ],
              correctAnswer: 1,
              explanation:
                'Three to five fields balance conversion rate with lead quality. Fewer fields get more submissions but less qualified leads; more fields create friction.',
            },
            {
              id: 'lp-m3-q4',
              type: 'multi-select',
              question:
                'Which design practices improve landing page conversion? (Select all that apply)',
              options: [
                'Generous white space around the CTA',
                'High contrast between CTA button and background',
                'Small, subtle CTA buttons',
                'Mobile-responsive layout',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'White space, high contrast CTAs, and mobile responsiveness improve conversions. Small, subtle CTAs get overlooked and reduce click-through rates.',
            },
          ],
        },
      ],
    },
    // ── Module 4: A/B Testing & Optimization ──
    {
      id: 'lp-m4',
      title: 'A/B Testing & Optimization',
      description:
        'Learn the scientific approach to landing page improvement. Design valid experiments, interpret results correctly, and build a culture of continuous optimization.',
      lessons: [
        {
          id: 'lp-m4-l1',
          title: 'A/B Testing Fundamentals',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'lp-m4-l2',
          title: 'What to Test & Prioritization Frameworks',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'lp-m4-reading',
          title: 'Common A/B Testing Mistakes',
          type: 'reading',
          duration: 10,
          content:
            'A/B testing is deceptively simple in concept but easy to execute poorly. Understanding common mistakes helps you run valid experiments that produce reliable insights.\n\nThe most frequent mistake is ending tests too early. When you see one variant pulling ahead after a few hundred visitors, it is tempting to declare a winner. But early results are unreliable due to small sample sizes. Always determine your required sample size before starting the test and commit to running it to completion.\n\nAnother common error is testing too many variables at once. If you change the headline, image, CTA text, and button color simultaneously, you cannot determine which change drove the result. Test one element at a time unless you are running a properly designed multivariate test with sufficient traffic.\n\nSelection bias occurs when you route different quality traffic to different variants. Ensure your testing tool randomly assigns visitors and that both variants receive traffic from the same sources during the same time period. Avoid running variant A on Monday and variant B on Tuesday.\n\nThe "winner takes all" mentality is another trap. A test that increases click-through rate by 2% but decreases downstream conversion by 5% is not a win. Always measure the impact on your ultimate business goal, not just the metric closest to the change.\n\nFinally, document everything. Record your hypothesis, the change made, sample size, duration, statistical significance level, and result. This testing library becomes invaluable institutional knowledge over time.',
        },
        {
          id: 'lp-m4-quiz',
          title: 'Module 4 Quiz: A/B Testing',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'lp-m4-q1',
              type: 'multiple-choice',
              question:
                'What is the biggest risk of ending an A/B test too early?',
              options: [
                'The page will crash',
                'You may declare a winner based on statistically insignificant results',
                'The testing tool will malfunction',
                'It will cost too much money',
              ],
              correctAnswer: 1,
              explanation:
                'Early results with small sample sizes are unreliable. Declaring a winner before reaching statistical significance can lead to implementing changes that do not actually improve performance.',
            },
            {
              id: 'lp-m4-q2',
              type: 'true-false',
              question:
                'In a valid A/B test, you should change only one element at a time.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Testing one variable at a time isolates the impact of each change. Changing multiple elements simultaneously makes it impossible to determine what drove the result.',
            },
            {
              id: 'lp-m4-q3',
              type: 'multi-select',
              question:
                'Which of the following are valid A/B test metrics? (Select all that apply)',
              options: [
                'Conversion rate',
                'Click-through rate',
                'Number of page elements',
                'Bounce rate',
                'Revenue per visitor',
              ],
              correctAnswer: [0, 1, 3, 4],
              explanation:
                'Conversion rate, CTR, bounce rate, and revenue per visitor are all valid metrics to measure in A/B tests. The number of page elements is a design choice, not a performance metric.',
            },
            {
              id: 'lp-m4-q4',
              type: 'multiple-choice',
              question:
                'What should you always do before starting an A/B test?',
              options: [
                'Ask your CEO which version they prefer',
                'Determine the required sample size and document your hypothesis',
                'Run the test for exactly one day',
                'Copy a competitor\'s landing page',
              ],
              correctAnswer: 1,
              explanation:
                'Pre-determining sample size and documenting your hypothesis ensures the test is structured for valid, actionable results rather than running on guesswork.',
            },
          ],
        },
      ],
    },
  ],
  finalAssessment: [
    {
      id: 'lp-final-q1',
      type: 'true-false',
      question: 'A landing page should always have a full website navigation menu.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation:
        'Landing pages should minimize navigation to keep visitors focused on the single conversion goal.',
    },
    {
      id: 'lp-final-q2',
      type: 'multiple-choice',
      question: 'What is the most important principle of conversion copywriting?',
      options: [
        'Using sophisticated vocabulary',
        'Focusing on benefits rather than features',
        'Writing as much text as possible',
        'Using industry jargon to sound authoritative',
      ],
      correctAnswer: 1,
      explanation:
        'People buy outcomes, not products. Benefit-driven copy connects the product to the reader\'s desired result.',
    },
    {
      id: 'lp-final-q3',
      type: 'multiple-choice',
      question: 'What is visual hierarchy on a landing page?',
      options: [
        'The page loading order',
        'Guiding attention through size, color, and placement',
        'The file structure of design assets',
        'The number of images used',
      ],
      correctAnswer: 1,
      explanation:
        'Visual hierarchy uses design principles to direct the viewer\'s eye to the most important elements first.',
    },
    {
      id: 'lp-final-q4',
      type: 'multi-select',
      question: 'Which are effective trust signals? (Select all that apply)',
      options: [
        'Customer logos',
        'Specific case study metrics',
        'Generic stock photos',
        'Security badges near forms',
        'Testimonials with real names',
      ],
      correctAnswer: [0, 1, 3, 4],
      explanation:
        'Customer logos, specific metrics, security badges, and named testimonials build credibility. Generic stock photos do not convey trust.',
    },
    {
      id: 'lp-final-q5',
      type: 'true-false',
      question: 'Placeholder text inside form fields is a good substitute for labels.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation:
        'Placeholder text disappears on input, creating usability issues. Persistent labels above fields are better practice.',
    },
    {
      id: 'lp-final-q6',
      type: 'multiple-choice',
      question: 'How many form fields are recommended for B2B landing pages?',
      options: ['One', 'Three to five', 'Ten to fifteen', 'Twenty or more'],
      correctAnswer: 1,
      explanation:
        'Three to five fields balance conversion rates with lead quality for most B2B use cases.',
    },
    {
      id: 'lp-final-q7',
      type: 'multiple-choice',
      question: 'What is the biggest risk of ending an A/B test too early?',
      options: [
        'Higher costs',
        'Declaring a winner based on statistically insignificant results',
        'Server downtime',
        'Losing design files',
      ],
      correctAnswer: 1,
      explanation:
        'Small samples produce unreliable results. Always reach the pre-determined sample size before drawing conclusions.',
    },
    {
      id: 'lp-final-q8',
      type: 'true-false',
      question: 'In an A/B test, you should change only one element at a time.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation:
        'Isolating one variable ensures you can attribute any performance change to that specific element.',
    },
    {
      id: 'lp-final-q9',
      type: 'multi-select',
      question: 'Which CTA button copy approaches are effective? (Select all that apply)',
      options: [
        '"Get My Free Report"',
        '"Submit"',
        '"Start My Free Trial"',
        '"Click Here"',
        '"Download the Guide"',
      ],
      correctAnswer: [0, 2, 4],
      explanation:
        'Benefit-oriented, action-specific CTA copy outperforms generic text like "Submit" or "Click Here" because it reinforces the value.',
    },
    {
      id: 'lp-final-q10',
      type: 'multiple-choice',
      question: 'What is the "So What?" test in copywriting?',
      options: [
        'A grammar check',
        'Ensuring every statement answers why the reader should care',
        'A page speed test',
        'A competitive benchmarking tool',
      ],
      correctAnswer: 1,
      explanation:
        'The "So What?" test filters out self-serving copy by demanding every line address the reader\'s perspective.',
    },
    {
      id: 'lp-final-q11',
      type: 'multiple-choice',
      question: 'Why should specific numbers be used in trust signals instead of round numbers?',
      options: [
        'They load faster',
        'They feel more credible and researched',
        'They are required by advertising regulations',
        'They improve SEO rankings',
      ],
      correctAnswer: 1,
      explanation:
        'Specific numbers like "537 companies" signal authenticity, while round numbers like "500+" feel like estimates.',
    },
    {
      id: 'lp-final-q12',
      type: 'true-false',
      question: 'White space around a CTA button can improve click-through rates.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation:
        'White space draws attention to the CTA by removing visual clutter, making it easier for visitors to find and click.',
    },
    {
      id: 'lp-final-q13',
      type: 'multiple-choice',
      question: 'What is progressive profiling?',
      options: [
        'Asking for all information upfront in one long form',
        'Collecting basic details first and asking for more on subsequent visits',
        'Profiling competitors\' landing pages',
        'A type of A/B test',
      ],
      correctAnswer: 1,
      explanation:
        'Progressive profiling reduces initial form friction by gathering essential information first and requesting additional details over time.',
    },
    {
      id: 'lp-final-q14',
      type: 'multi-select',
      question: 'Which are valid A/B test metrics? (Select all that apply)',
      options: [
        'Conversion rate',
        'Revenue per visitor',
        'Number of page elements',
        'Bounce rate',
      ],
      correctAnswer: [0, 1, 3],
      explanation:
        'Conversion rate, revenue per visitor, and bounce rate measure performance. The number of page elements is a design attribute, not a metric.',
    },
    {
      id: 'lp-final-q15',
      type: 'multiple-choice',
      question: 'Where should security badges be placed on a landing page?',
      options: [
        'In the page header',
        'Near form fields and payment areas',
        'In the footer only',
        'They should not be on landing pages',
      ],
      correctAnswer: 1,
      explanation:
        'Security badges near forms and payment areas address visitor anxiety at the moment of highest vulnerability, increasing trust and conversions.',
    },
  ],
};

// ============================================================================
// Course 4: B2B Content Engine (Advanced, 15h)
// ============================================================================

const b2bContentEngine: CourseData = {
  slug: 'b2b-content-engine',
  title: 'B2B Content Engine',
  modules: [
    // ── Module 1: B2B Content Strategy Foundations ──
    {
      id: 'content-m1',
      title: 'B2B Content Strategy Foundations',
      description:
        'Build a content strategy rooted in business objectives. Learn how to align content with the buyer journey, set measurable goals, and create a content charter that guides your team.',
      lessons: [
        {
          id: 'content-m1-l1',
          title: 'Content Strategy vs. Content Marketing',
          type: 'video',
          duration: 18,
          youtubeId: 'glLPiQga9Lg',
        },
        {
          id: 'content-m1-l2',
          title: 'Mapping Content to the Buyer Journey',
          type: 'video',
          duration: 22,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m1-l3',
          title: 'Setting Content Goals & KPIs',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m1-reading',
          title: 'Creating a Content Charter',
          type: 'reading',
          duration: 12,
          content:
            'A content charter is a foundational document that defines why your content program exists, who it serves, and how success is measured. It aligns stakeholders, prevents scope creep, and provides a decision-making framework for every piece of content you create.\n\nThe charter should include your content mission statement, typically one to two sentences explaining who your audience is, what you will provide them, and what outcome they will achieve. For example: "We create actionable marketing operations content that helps mid-market B2B teams implement automation systems that accelerate pipeline growth."\n\nDefine your core content pillars, typically three to five topic areas where your brand has genuine expertise and your audience has active demand. These pillars guide editorial planning and ensure topical consistency.\n\nDocument your audience segments, matching each to specific content types and channels. A technical buyer may prefer in-depth guides and webinars, while a C-suite executive may prefer concise reports and case studies.\n\nFinally, establish governance rules: content approval workflows, brand voice guidelines, quality standards, and performance review cadences. A charter without governance becomes a document people reference once and then ignore. Schedule quarterly reviews to keep the charter aligned with evolving business priorities.',
        },
        {
          id: 'content-m1-quiz',
          title: 'Module 1 Quiz: Content Strategy Foundations',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'content-m1-q1',
              type: 'multiple-choice',
              question:
                'What is the difference between content strategy and content marketing?',
              options: [
                'They are the same thing',
                'Content strategy defines the plan; content marketing executes it',
                'Content marketing is only about social media',
                'Content strategy only applies to written content',
              ],
              correctAnswer: 1,
              explanation:
                'Content strategy is the overarching plan (why, who, what, where), while content marketing is the tactical execution of creating and distributing content.',
            },
            {
              id: 'content-m1-q2',
              type: 'multi-select',
              question:
                'Which should be included in a content charter? (Select all that apply)',
              options: [
                'Content mission statement',
                'Core content pillars',
                'Employee salary information',
                'Audience segments',
                'Governance rules',
              ],
              correctAnswer: [0, 1, 3, 4],
              explanation:
                'A content charter includes the mission, pillars, audience definitions, and governance. Salary information is an HR matter, not a content strategy element.',
            },
            {
              id: 'content-m1-q3',
              type: 'true-false',
              question:
                'Content pillars are the three to five topic areas where your brand has expertise and your audience has demand.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Content pillars sit at the intersection of brand expertise and audience demand, providing a focused framework for editorial planning.',
            },
            {
              id: 'content-m1-q4',
              type: 'multiple-choice',
              question:
                'At which buyer journey stage is a product comparison guide most effective?',
              options: [
                'Awareness',
                'Consideration',
                'Decision',
                'Advocacy',
              ],
              correctAnswer: 2,
              explanation:
                'Product comparison guides are decision-stage content because buyers are actively evaluating options and need help choosing between solutions.',
            },
          ],
        },
      ],
    },
    // ── Module 2: Content Types & Formats ──
    {
      id: 'content-m2',
      title: 'Content Types & Formats',
      description:
        'Explore the full spectrum of B2B content formats, from blog posts and whitepapers to webinars, podcasts, and interactive tools. Learn when to use each format for maximum impact.',
      lessons: [
        {
          id: 'content-m2-l1',
          title: 'Blog Posts, Guides & Long-Form Content',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m2-l2',
          title: 'Whitepapers, Case Studies & Research Reports',
          type: 'video',
          duration: 22,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m2-l3',
          title: 'Video, Webinars & Interactive Content',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m2-reading',
          title: 'Choosing the Right Format for Your Goal',
          type: 'reading',
          duration: 10,
          content:
            'Choosing the right content format is as important as the content itself. The wrong format can bury great insights, while the right format can amplify even modest ideas.\n\nFor awareness, use formats that are easy to consume and share: blog posts, social media content, short videos, and infographics. The goal is reach and engagement, so low-friction formats win.\n\nFor consideration, use formats that demonstrate depth and credibility: webinars, detailed guides, comparison posts, and expert interviews. Buyers at this stage want to understand the landscape and evaluate approaches.\n\nFor decision, use formats that build confidence and reduce risk: case studies, ROI calculators, product demos, and free trials. Buyers need proof that your solution works for companies like theirs.\n\nConsider your audience\'s content consumption habits. Technical audiences often prefer written guides they can reference. Executive audiences may prefer concise video or slide formats. Practitioners might engage most with interactive tools and templates they can use immediately.\n\nFinally, think about content efficiency. A single research report can be repurposed into a blog series, infographic, webinar, social media thread, and email sequence. Start with a high-value "pillar" piece and atomize it into multiple derivative formats.',
        },
        {
          id: 'content-m2-quiz',
          title: 'Module 2 Quiz: Content Formats',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'content-m2-q1',
              type: 'multiple-choice',
              question:
                'Which content format is most effective at the decision stage?',
              options: [
                'Blog posts',
                'Infographics',
                'Case studies with ROI data',
                'Social media posts',
              ],
              correctAnswer: 2,
              explanation:
                'Decision-stage buyers need proof that your solution works. Case studies with concrete ROI data provide the evidence needed to justify the purchase.',
            },
            {
              id: 'content-m2-q2',
              type: 'multi-select',
              question:
                'Which formats are effective for the awareness stage? (Select all that apply)',
              options: [
                'Blog posts',
                'Product demos',
                'Short social videos',
                'Infographics',
                'Contract templates',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'Awareness content should be easy to consume and share. Blog posts, short videos, and infographics meet this criteria. Product demos and contracts are decision-stage assets.',
            },
            {
              id: 'content-m2-q3',
              type: 'true-false',
              question:
                'A single pillar content piece can be repurposed into multiple derivative formats.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Content atomization is a core efficiency strategy. One research report can become blog posts, infographics, webinars, social threads, and email sequences.',
            },
            {
              id: 'content-m2-q4',
              type: 'multiple-choice',
              question:
                'What type of content do executive audiences typically prefer?',
              options: [
                'Long technical documentation',
                'Concise video or slide formats',
                'Code tutorials',
                'Community forum posts',
              ],
              correctAnswer: 1,
              explanation:
                'Executives are time-constrained and typically prefer concise, insight-dense formats like short videos, executive summaries, and slide decks.',
            },
          ],
        },
      ],
    },
    // ── Module 3: SEO for B2B ──
    {
      id: 'content-m3',
      title: 'SEO for B2B',
      description:
        'Master search engine optimization strategies specifically for B2B companies. Learn keyword research, on-page optimization, technical SEO fundamentals, and link building tactics.',
      lessons: [
        {
          id: 'content-m3-l1',
          title: 'B2B Keyword Research & Search Intent',
          type: 'video',
          duration: 22,
          youtubeId: 'DvwS7cV9GmQ',
        },
        {
          id: 'content-m3-l2',
          title: 'On-Page SEO & Content Optimization',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m3-l3',
          title: 'Technical SEO & Link Building for B2B',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m3-quiz',
          title: 'Module 3 Quiz: B2B SEO',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'content-m3-q1',
              type: 'multiple-choice',
              question:
                'What is search intent and why does it matter for SEO?',
              options: [
                'It is the number of times a keyword is searched monthly',
                'It is the reason behind a search query, which determines the type of content Google ranks',
                'It is the speed at which search results load',
                'It is the location of the person searching',
              ],
              correctAnswer: 1,
              explanation:
                'Search intent is what the searcher is trying to accomplish. Google ranks content that matches intent, so understanding whether intent is informational, navigational, commercial, or transactional is critical.',
            },
            {
              id: 'content-m3-q2',
              type: 'true-false',
              question:
                'In B2B SEO, high-volume keywords are always more valuable than low-volume keywords.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Low-volume keywords in B2B often have higher commercial intent and less competition. A keyword searched 50 times per month by enterprise buyers can be more valuable than one searched 10,000 times by general consumers.',
            },
            {
              id: 'content-m3-q3',
              type: 'multi-select',
              question:
                'Which are on-page SEO best practices? (Select all that apply)',
              options: [
                'Optimizing title tags and meta descriptions',
                'Using header tags (H1, H2, H3) hierarchically',
                'Stuffing keywords into every sentence',
                'Including internal links to related content',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Optimized titles, proper header hierarchy, and internal linking are on-page fundamentals. Keyword stuffing harms readability and can trigger search engine penalties.',
            },
            {
              id: 'content-m3-q4',
              type: 'multiple-choice',
              question:
                'What is a topic cluster in content SEO?',
              options: [
                'A group of social media posts about the same topic',
                'A pillar page linked to multiple related sub-topic pages that signal topical authority',
                'A cluster of keywords with the same search volume',
                'A collection of backlinks from the same domain',
              ],
              correctAnswer: 1,
              explanation:
                'Topic clusters use a pillar page as a comprehensive hub, linked to detailed sub-topic pages. This structure signals topical authority to search engines and improves rankings.',
            },
          ],
        },
      ],
    },
    // ── Module 4: Distribution & Amplification ──
    {
      id: 'content-m4',
      title: 'Distribution & Amplification',
      description:
        'Creating content is only half the battle. Learn how to distribute content through owned, earned, and paid channels to maximize reach, engagement, and lead generation.',
      lessons: [
        {
          id: 'content-m4-l1',
          title: 'Owned, Earned & Paid Distribution Channels',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m4-l2',
          title: 'Email Newsletter & Content Syndication',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m4-l3',
          title: 'Paid Amplification & Content Promotion',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m4-quiz',
          title: 'Module 4 Quiz: Distribution & Amplification',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'content-m4-q1',
              type: 'multiple-choice',
              question:
                'Which channel type does a company email newsletter belong to?',
              options: [
                'Paid media',
                'Earned media',
                'Owned media',
                'Shared media',
              ],
              correctAnswer: 2,
              explanation:
                'An email newsletter is owned media because the company controls the subscriber list, content, and distribution without paying for placement.',
            },
            {
              id: 'content-m4-q2',
              type: 'multi-select',
              question:
                'Which are examples of earned media? (Select all that apply)',
              options: [
                'Press coverage of your content',
                'LinkedIn sponsored posts',
                'Industry podcast guest appearances',
                'Organic social media shares',
                'Google Ads',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'Press coverage, podcast appearances, and organic social shares are earned through merit, not payment. LinkedIn sponsored posts and Google Ads are paid media.',
            },
            {
              id: 'content-m4-q3',
              type: 'true-false',
              question:
                'You should spend more time distributing content than creating it.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Many experts recommend a 20/80 split: 20% creation, 80% distribution. Even great content fails without adequate distribution effort.',
            },
            {
              id: 'content-m4-q4',
              type: 'multiple-choice',
              question:
                'What is content syndication?',
              options: [
                'Translating content into multiple languages',
                'Publishing content on third-party platforms to reach new audiences',
                'Automating social media posting',
                'Creating a podcast from blog content',
              ],
              correctAnswer: 1,
              explanation:
                'Content syndication involves republishing or distributing content through third-party platforms and networks to extend reach beyond your own audience.',
            },
          ],
        },
      ],
    },
    // ── Module 5: Content Operations & Measurement ──
    {
      id: 'content-m5',
      title: 'Content Operations & Measurement',
      description:
        'Scale your content engine with operational excellence. Learn to build editorial workflows, measure content performance, and prove ROI to stakeholders.',
      lessons: [
        {
          id: 'content-m5-l1',
          title: 'Building an Editorial Workflow',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m5-l2',
          title: 'Content Performance Metrics & Attribution',
          type: 'video',
          duration: 22,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'content-m5-reading',
          title: 'Proving Content ROI to Leadership',
          type: 'reading',
          duration: 12,
          content:
            'Proving content ROI is the number one challenge cited by content marketers. The difficulty arises because content often influences revenue indirectly and across long time horizons, making direct attribution complex.\n\nStart by establishing a measurement framework before you create content, not after. Define leading indicators (traffic, engagement, email subscribers) and lagging indicators (MQLs generated, pipeline influenced, deals closed) for each content pillar.\n\nUse UTM parameters consistently on every link to track which content pieces drive traffic, form fills, and conversions. Integrate your CMS analytics with your CRM to connect content engagement to actual revenue. This closed-loop reporting is the foundation of content ROI measurement.\n\nPresent results to leadership in their language: revenue, pipeline, and cost metrics. Instead of saying "our blog got 50,000 visits," say "content-sourced leads generated $2.3M in pipeline this quarter, at a cost-per-lead 40% lower than paid channels." Executives respond to business impact, not vanity metrics.\n\nFinally, benchmark content performance against alternative marketing investments. If a whitepaper costs $5,000 to produce and generates 200 MQLs over its lifetime, its cost-per-MQL of $25 likely outperforms paid advertising by a significant margin. These comparisons make the case for continued content investment.',
        },
        {
          id: 'content-m5-quiz',
          title: 'Module 5 Quiz: Content Operations',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'content-m5-q1',
              type: 'multiple-choice',
              question:
                'What is the most effective way to present content ROI to executives?',
              options: [
                'Pageview counts and social media follower numbers',
                'Revenue, pipeline, and cost-per-lead comparisons',
                'The number of blog posts published per month',
                'Design awards won by content pieces',
              ],
              correctAnswer: 1,
              explanation:
                'Executives evaluate investments through revenue impact. Framing content performance in terms of pipeline contribution and cost efficiency speaks their language.',
            },
            {
              id: 'content-m5-q2',
              type: 'true-false',
              question:
                'UTM parameters help track which content pieces drive conversions.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'UTM parameters tag URLs with source, medium, and campaign data, enabling analytics tools to attribute traffic and conversions to specific content.',
            },
            {
              id: 'content-m5-q3',
              type: 'multi-select',
              question:
                'Which are leading indicators of content performance? (Select all that apply)',
              options: [
                'Website traffic from content',
                'Closed-won deals',
                'Email subscriber growth',
                'Content engagement rates',
                'Annual revenue',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'Traffic, subscriber growth, and engagement are leading indicators that predict future results. Closed deals and annual revenue are lagging indicators that reflect past performance.',
            },
            {
              id: 'content-m5-q4',
              type: 'multiple-choice',
              question:
                'What is closed-loop reporting in content marketing?',
              options: [
                'Reporting only to the content team',
                'Connecting content analytics with CRM data to track content influence on revenue',
                'Closing reports at the end of each quarter',
                'Reporting on content that has been archived',
              ],
              correctAnswer: 1,
              explanation:
                'Closed-loop reporting integrates content engagement data with CRM pipeline and revenue data, enabling true ROI measurement from first touch to closed deal.',
            },
          ],
        },
      ],
    },
  ],
  finalAssessment: [
    {
      id: 'content-final-q1',
      type: 'multiple-choice',
      question: 'What is the difference between content strategy and content marketing?',
      options: [
        'They are interchangeable terms',
        'Strategy defines the plan; marketing executes it',
        'Marketing is strategy for social media only',
        'Strategy only applies to written content',
      ],
      correctAnswer: 1,
      explanation: 'Content strategy is the planning layer; content marketing is the execution layer.',
    },
    {
      id: 'content-final-q2',
      type: 'true-false',
      question: 'Content pillars should be based on brand expertise and audience demand.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'Effective content pillars sit at the intersection of what you know well and what your audience actively seeks.',
    },
    {
      id: 'content-final-q3',
      type: 'multiple-choice',
      question: 'Which content format is best for the decision stage?',
      options: ['Blog posts', 'Infographics', 'Case studies with ROI data', 'Social media posts'],
      correctAnswer: 2,
      explanation: 'Decision-stage buyers need concrete proof. Case studies with measurable outcomes provide that evidence.',
    },
    {
      id: 'content-final-q4',
      type: 'multi-select',
      question: 'Which are on-page SEO fundamentals? (Select all that apply)',
      options: [
        'Optimizing title tags',
        'Keyword stuffing',
        'Proper header hierarchy',
        'Internal linking',
      ],
      correctAnswer: [0, 2, 3],
      explanation: 'Title optimization, header structure, and internal links are fundamentals. Keyword stuffing is a harmful practice.',
    },
    {
      id: 'content-final-q5',
      type: 'multiple-choice',
      question: 'What is search intent?',
      options: [
        'Monthly search volume for a keyword',
        'The reason behind a search query',
        'The geographic location of the searcher',
        'The device used for searching',
      ],
      correctAnswer: 1,
      explanation: 'Search intent is the underlying goal behind a query, which determines what type of content Google will rank.',
    },
    {
      id: 'content-final-q6',
      type: 'true-false',
      question: 'In B2B, low-volume keywords can be more valuable than high-volume keywords.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'Low-volume B2B keywords often have higher commercial intent and less competition, making them more valuable per search.',
    },
    {
      id: 'content-final-q7',
      type: 'multiple-choice',
      question: 'What is a topic cluster?',
      options: [
        'A group of social posts',
        'A pillar page linked to related sub-topic pages signaling topical authority',
        'Keywords with the same volume',
        'Backlinks from one domain',
      ],
      correctAnswer: 1,
      explanation: 'Topic clusters use pillar and sub-topic page relationships to signal comprehensive topical authority to search engines.',
    },
    {
      id: 'content-final-q8',
      type: 'multiple-choice',
      question: 'Which channel type is an email newsletter?',
      options: ['Paid media', 'Earned media', 'Owned media', 'Shared media'],
      correctAnswer: 2,
      explanation: 'Email newsletters are owned media because you control the audience, content, and distribution.',
    },
    {
      id: 'content-final-q9',
      type: 'multi-select',
      question: 'Which are earned media? (Select all that apply)',
      options: ['Press coverage', 'Sponsored posts', 'Podcast guest spots', 'Organic shares'],
      correctAnswer: [0, 2, 3],
      explanation: 'Press coverage, podcast appearances, and organic shares are earned through merit. Sponsored posts are paid.',
    },
    {
      id: 'content-final-q10',
      type: 'true-false',
      question: 'You should spend more time distributing content than creating it.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'A common guideline is 20% creation, 80% distribution. Great content without distribution is invisible.',
    },
    {
      id: 'content-final-q11',
      type: 'multiple-choice',
      question: 'What is the best way to present content ROI to leadership?',
      options: [
        'Pageview reports',
        'Revenue, pipeline, and cost-per-lead data',
        'Number of posts published',
        'Social media follower counts',
      ],
      correctAnswer: 1,
      explanation: 'Executives evaluate marketing through business impact metrics like pipeline and cost efficiency.',
    },
    {
      id: 'content-final-q12',
      type: 'multiple-choice',
      question: 'What is content syndication?',
      options: [
        'Translating content to other languages',
        'Publishing on third-party platforms for wider reach',
        'Scheduling social media posts',
        'Converting blog posts to podcasts',
      ],
      correctAnswer: 1,
      explanation: 'Syndication extends content reach by republishing through third-party platforms and networks.',
    },
    {
      id: 'content-final-q13',
      type: 'true-false',
      question: 'UTM parameters help attribute conversions to specific content pieces.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'UTM tags enable precise tracking of which content drives traffic and conversions through analytics platforms.',
    },
    {
      id: 'content-final-q14',
      type: 'multi-select',
      question: 'Which are leading indicators of content performance? (Select all that apply)',
      options: ['Traffic', 'Email subscribers', 'Closed deals', 'Engagement rates'],
      correctAnswer: [0, 1, 3],
      explanation: 'Traffic, subscribers, and engagement predict future outcomes. Closed deals are lagging indicators.',
    },
    {
      id: 'content-final-q15',
      type: 'multiple-choice',
      question: 'What is closed-loop reporting?',
      options: [
        'Reporting only within the marketing team',
        'Connecting content analytics to CRM revenue data',
        'Monthly reporting cadence',
        'Archiving old content reports',
      ],
      correctAnswer: 1,
      explanation: 'Closed-loop reporting integrates content engagement with CRM data to measure true revenue impact.',
    },
  ],
};

// ============================================================================
// Course 5: Metrics & Dashboards (Advanced, 10h)
// ============================================================================

const metricsDashboards: CourseData = {
  slug: 'metrics-dashboards',
  title: 'Metrics & Dashboards',
  modules: [
    // ── Module 1: Marketing Metrics That Matter ──
    {
      id: 'metrics-m1',
      title: 'Marketing Metrics That Matter',
      description:
        'Cut through vanity metrics to focus on the numbers that actually drive business decisions. Learn the difference between leading and lagging indicators, and how to build a metrics hierarchy.',
      lessons: [
        {
          id: 'metrics-m1-l1',
          title: 'Vanity Metrics vs. Actionable Metrics',
          type: 'video',
          duration: 18,
          youtubeId: 'KxBSFGBfIhU',
        },
        {
          id: 'metrics-m1-l2',
          title: 'The Marketing Metrics Hierarchy',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m1-l3',
          title: 'Leading vs. Lagging Indicators',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m1-reading',
          title: 'Building Your Metrics Framework',
          type: 'reading',
          duration: 12,
          content:
            'A metrics framework organizes your key performance indicators into a hierarchy that connects day-to-day activities to business outcomes. Without this structure, teams drown in data without insight.\n\nAt the top of the hierarchy sit business outcomes: revenue, customer acquisition cost (CAC), customer lifetime value (CLV), and return on marketing investment. These are the metrics the C-suite cares about, but they are lagging indicators that change slowly.\n\nThe middle layer contains pipeline and conversion metrics: marketing qualified leads (MQLs), sales qualified leads (SQLs), pipeline generated, win rate, and average deal size. These connect marketing activity to revenue and are the primary operating metrics for marketing leadership.\n\nThe bottom layer holds activity and engagement metrics: website traffic, content engagement, email open rates, social media reach, and event attendance. These are leading indicators that predict future pipeline and revenue performance.\n\nThe key principle is that every bottom-layer metric should have a clear causal path to the top-layer outcomes. If you cannot explain how improving a metric will eventually impact revenue, it may be a vanity metric. Review your framework quarterly, removing metrics that do not inform decisions and adding new ones as your strategy evolves.',
        },
        {
          id: 'metrics-m1-quiz',
          title: 'Module 1 Quiz: Marketing Metrics',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'metrics-m1-q1',
              type: 'multiple-choice',
              question: 'What is a vanity metric?',
              options: [
                'Any metric that increases over time',
                'A metric that looks impressive but does not inform business decisions',
                'A metric only used by marketing teams',
                'A metric measured in percentages',
              ],
              correctAnswer: 1,
              explanation:
                'Vanity metrics may look good in reports but do not provide actionable insight or correlate to business outcomes. Examples include raw page views without context or social media followers without engagement.',
            },
            {
              id: 'metrics-m1-q2',
              type: 'multi-select',
              question:
                'Which are lagging indicators? (Select all that apply)',
              options: [
                'Revenue',
                'Website traffic this week',
                'Customer acquisition cost',
                'Email open rate',
                'Customer lifetime value',
              ],
              correctAnswer: [0, 2, 4],
              explanation:
                'Revenue, CAC, and CLV are lagging indicators that reflect past performance. Website traffic and email open rates are leading indicators of future results.',
            },
            {
              id: 'metrics-m1-q3',
              type: 'true-false',
              question:
                'Every metric in your framework should have a clear causal path to revenue.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'If you cannot explain how improving a metric will eventually impact revenue, it is likely a vanity metric that should be removed from your framework.',
            },
            {
              id: 'metrics-m1-q4',
              type: 'multiple-choice',
              question: 'What does CAC stand for?',
              options: [
                'Content Analytics Calculator',
                'Customer Acquisition Cost',
                'Campaign Attribution Channel',
                'Conversion Action Counter',
              ],
              correctAnswer: 1,
              explanation:
                'Customer Acquisition Cost measures the total cost of acquiring a new customer, including all marketing and sales expenses divided by the number of new customers.',
            },
          ],
        },
      ],
    },
    // ── Module 2: Building Your Analytics Stack ──
    {
      id: 'metrics-m2',
      title: 'Building Your Analytics Stack',
      description:
        'Choose and configure the right analytics tools for your organization. Learn about Google Analytics, marketing automation analytics, CRM reporting, and data warehousing basics.',
      lessons: [
        {
          id: 'metrics-m2-l1',
          title: 'Google Analytics 4 for Marketers',
          type: 'video',
          duration: 22,
          youtubeId: 'j-ER5MDgLds',
        },
        {
          id: 'metrics-m2-l2',
          title: 'CRM & Marketing Automation Analytics',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m2-l3',
          title: 'Data Warehousing & BI Tools for Marketing',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m2-quiz',
          title: 'Module 2 Quiz: Analytics Stack',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'metrics-m2-q1',
              type: 'multiple-choice',
              question:
                'What is the primary change in Google Analytics 4 compared to Universal Analytics?',
              options: [
                'It now costs money to use',
                'It uses an event-based model instead of session-based',
                'It only works with Google Ads',
                'It no longer tracks website traffic',
              ],
              correctAnswer: 1,
              explanation:
                'GA4 uses an event-based data model where every interaction is tracked as an event, replacing the session and pageview-based model of Universal Analytics.',
            },
            {
              id: 'metrics-m2-q2',
              type: 'true-false',
              question:
                'A data warehouse combines data from multiple sources into a single analytical environment.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Data warehouses aggregate data from CRM, marketing automation, web analytics, and other sources, enabling cross-platform analysis and reporting.',
            },
            {
              id: 'metrics-m2-q3',
              type: 'multi-select',
              question:
                'Which tools belong in a marketing analytics stack? (Select all that apply)',
              options: [
                'Google Analytics',
                'CRM platform',
                'Graphic design software',
                'BI dashboard tool',
                'Project management tool',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Web analytics, CRM, and BI tools form the core analytics stack. Design and project management tools serve other functions.',
            },
            {
              id: 'metrics-m2-q4',
              type: 'multiple-choice',
              question: 'What is a BI tool used for in marketing?',
              options: [
                'Creating marketing content',
                'Visualizing data from multiple sources in dashboards and reports',
                'Managing social media accounts',
                'Building website landing pages',
              ],
              correctAnswer: 1,
              explanation:
                'Business Intelligence tools like Looker, Tableau, or Power BI connect to data sources and create visual dashboards that enable data-driven decision-making.',
            },
          ],
        },
      ],
    },
    // ── Module 3: Dashboard Design & Storytelling ──
    {
      id: 'metrics-m3',
      title: 'Dashboard Design & Storytelling',
      description:
        'Design dashboards that inform rather than overwhelm. Learn data visualization best practices, dashboard layout principles, and how to tell compelling stories with data.',
      lessons: [
        {
          id: 'metrics-m3-l1',
          title: 'Dashboard Design Principles',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m3-l2',
          title: 'Data Storytelling for Marketers',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m3-reading',
          title: 'Chart Selection Guide',
          type: 'reading',
          duration: 10,
          content:
            'Choosing the right chart type is fundamental to effective data communication. The wrong chart can obscure insights or mislead your audience, while the right chart makes complex data immediately understandable.\n\nUse line charts for trends over time. They are ideal for showing how metrics change across days, weeks, months, or quarters. Use them for traffic trends, lead generation over time, or revenue growth.\n\nUse bar charts for comparisons between categories. They work well for comparing performance across channels, campaigns, or time periods. Horizontal bar charts are better when category labels are long.\n\nUse pie charts sparingly and only when showing parts of a whole with five or fewer segments. Pie charts are poor for precise comparisons because humans are bad at comparing angles and areas. A horizontal bar chart almost always communicates the same information more clearly.\n\nUse scatter plots to show relationships between two variables, such as ad spend versus leads generated or content length versus engagement rate. They reveal correlations and outliers.\n\nUse tables for exact values when precision matters, such as showing specific campaign metrics or financial data. But limit tables to 10-15 rows; more than that should be filtered or paginated.\n\nThe golden rule: every chart should answer one clear question. If you cannot state the question the chart answers in one sentence, the chart needs to be simplified or split.',
        },
        {
          id: 'metrics-m3-quiz',
          title: 'Module 3 Quiz: Dashboard Design',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'metrics-m3-q1',
              type: 'multiple-choice',
              question: 'When should you use a pie chart?',
              options: [
                'To show trends over time',
                'To show parts of a whole with five or fewer segments',
                'To compare exact values',
                'Pie charts should be used for every metric',
              ],
              correctAnswer: 1,
              explanation:
                'Pie charts work only for showing composition with few categories. For most other purposes, bar charts or line charts communicate more clearly.',
            },
            {
              id: 'metrics-m3-q2',
              type: 'true-false',
              question:
                'Every chart on a dashboard should answer one clear question.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'A focused chart with a single clear purpose communicates effectively. Charts that try to answer multiple questions become cluttered and confusing.',
            },
            {
              id: 'metrics-m3-q3',
              type: 'multiple-choice',
              question: 'Which chart type is best for showing trends over time?',
              options: [
                'Pie chart',
                'Line chart',
                'Scatter plot',
                'Tree map',
              ],
              correctAnswer: 1,
              explanation:
                'Line charts excel at showing how metrics change across time periods, making trends, patterns, and anomalies immediately visible.',
            },
            {
              id: 'metrics-m3-q4',
              type: 'multi-select',
              question:
                'Which are good dashboard design practices? (Select all that apply)',
              options: [
                'Putting the most important metrics at the top',
                'Using consistent color coding across charts',
                'Including as many charts as possible per page',
                'Providing context with benchmarks or targets',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Prioritizing key metrics, consistent colors, and contextual benchmarks improve dashboard usability. Overcrowding with charts reduces comprehension.',
            },
          ],
        },
      ],
    },
    // ── Module 4: Attribution & ROI Modeling ──
    {
      id: 'metrics-m4',
      title: 'Attribution & ROI Modeling',
      description:
        'Understand how to credit marketing touchpoints for conversions. Learn attribution models, multi-touch attribution, and how to calculate marketing ROI accurately.',
      lessons: [
        {
          id: 'metrics-m4-l1',
          title: 'Attribution Models Explained',
          type: 'video',
          duration: 22,
          youtubeId: 'KxBSFGBfIhU',
        },
        {
          id: 'metrics-m4-l2',
          title: 'Multi-Touch Attribution in Practice',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m4-l3',
          title: 'Calculating Marketing ROI',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m4-quiz',
          title: 'Module 4 Quiz: Attribution & ROI',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'metrics-m4-q1',
              type: 'multiple-choice',
              question: 'What is first-touch attribution?',
              options: [
                'Crediting the last interaction before conversion',
                'Crediting the first interaction a prospect has with your brand',
                'Splitting credit equally across all touchpoints',
                'Giving no credit to any touchpoint',
              ],
              correctAnswer: 1,
              explanation:
                'First-touch attribution gives 100% credit to the first marketing interaction that introduced the prospect to your brand.',
            },
            {
              id: 'metrics-m4-q2',
              type: 'true-false',
              question:
                'Multi-touch attribution distributes credit across multiple marketing interactions.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Multi-touch attribution recognizes that buyers interact with multiple marketing touchpoints and distributes conversion credit accordingly.',
            },
            {
              id: 'metrics-m4-q3',
              type: 'multiple-choice',
              question: 'What is the formula for marketing ROI?',
              options: [
                '(Revenue - Cost) / Cost x 100',
                'Revenue / Number of campaigns',
                'Total leads / Total spend',
                'Website traffic / Ad spend',
              ],
              correctAnswer: 0,
              explanation:
                'Marketing ROI is calculated as (Revenue Attributed to Marketing - Marketing Cost) / Marketing Cost x 100, expressed as a percentage.',
            },
            {
              id: 'metrics-m4-q4',
              type: 'multi-select',
              question:
                'Which are common attribution models? (Select all that apply)',
              options: [
                'First-touch',
                'Last-touch',
                'Linear (equal credit)',
                'Random attribution',
                'Time-decay',
              ],
              correctAnswer: [0, 1, 2, 4],
              explanation:
                'First-touch, last-touch, linear, and time-decay are standard attribution models. Random attribution is not a recognized model.',
            },
          ],
        },
      ],
    },
    // ── Module 5: Reporting for Stakeholders ──
    {
      id: 'metrics-m5',
      title: 'Reporting for Stakeholders',
      description:
        'Create reports that resonate with different audiences. Learn to tailor data presentations for executives, cross-functional teams, and operational reviews.',
      lessons: [
        {
          id: 'metrics-m5-l1',
          title: 'Executive Reporting Best Practices',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m5-l2',
          title: 'Operational Reviews & Team Dashboards',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'metrics-m5-reading',
          title: 'The One-Page Marketing Report',
          type: 'reading',
          duration: 10,
          content:
            'The one-page marketing report is a powerful communication tool that forces clarity and prioritization. When you can only use one page, every element must earn its place.\n\nThe top section should contain three to five headline metrics with arrows or colors indicating direction versus target. These should be the metrics your executive stakeholders care about most: pipeline generated, MQLs, CAC, and marketing-sourced revenue.\n\nThe middle section provides brief context for any metric that is significantly above or below target. Use two to three sentences maximum per metric. Focus on what changed, why, and what action is being taken. Avoid detailed analysis here; that belongs in appendix materials.\n\nThe bottom section looks forward with two to three bullet points on planned initiatives, tests, or strategic shifts for the coming period. This demonstrates proactive thinking and gives stakeholders a preview of what to expect.\n\nDesign principles matter. Use consistent formatting, limit colors to three or four, align numbers in columns, and use bold sparingly for emphasis. The report should be scannable in under 60 seconds.\n\nDistribute the report on a regular cadence, the same day each week or month, so stakeholders develop the habit of checking it. Consistency builds trust and reduces the number of ad-hoc data requests your team receives.',
        },
        {
          id: 'metrics-m5-quiz',
          title: 'Module 5 Quiz: Stakeholder Reporting',
          type: 'quiz',
          duration: 10,
          questions: [
            {
              id: 'metrics-m5-q1',
              type: 'multiple-choice',
              question:
                'What should the top section of a one-page marketing report contain?',
              options: [
                'A detailed narrative of all marketing activities',
                'Three to five headline metrics with directional indicators',
                'A list of every campaign launched',
                'Team member names and roles',
              ],
              correctAnswer: 1,
              explanation:
                'The top section provides at-a-glance performance through headline metrics with clear indicators of whether they are on track.',
            },
            {
              id: 'metrics-m5-q2',
              type: 'true-false',
              question:
                'Executive reports should include detailed analysis of every metric.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Executives need high-level summaries, not detailed analysis. Detailed breakdowns belong in appendix materials for those who want to dig deeper.',
            },
            {
              id: 'metrics-m5-q3',
              type: 'multiple-choice',
              question:
                'Why should marketing reports be distributed on a consistent schedule?',
              options: [
                'To fill stakeholders\' inboxes',
                'To build trust and reduce ad-hoc data requests',
                'Because the data only changes on specific days',
                'To comply with regulatory requirements',
              ],
              correctAnswer: 1,
              explanation:
                'Regular cadence builds stakeholder expectations, trust in the data, and reduces the volume of one-off data requests that disrupt the team.',
            },
            {
              id: 'metrics-m5-q4',
              type: 'multi-select',
              question:
                'Which elements belong in a one-page marketing report? (Select all that apply)',
              options: [
                'Headline metrics with directional indicators',
                'Brief context for off-track metrics',
                'Complete campaign creative assets',
                'Forward-looking planned initiatives',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Headlines, context, and forward-looking plans fit a one-page format. Creative assets are reference materials, not report content.',
            },
          ],
        },
      ],
    },
  ],
  finalAssessment: [
    {
      id: 'metrics-final-q1',
      type: 'multiple-choice',
      question: 'What is a vanity metric?',
      options: [
        'Any increasing metric',
        'A metric that looks impressive but does not inform decisions',
        'A percentage-based metric',
        'A metric from social media',
      ],
      correctAnswer: 1,
      explanation: 'Vanity metrics lack actionable insight or correlation to business outcomes.',
    },
    {
      id: 'metrics-final-q2',
      type: 'true-false',
      question: 'CAC stands for Customer Acquisition Cost.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'CAC measures the total cost of acquiring a new customer, including marketing and sales expenses.',
    },
    {
      id: 'metrics-final-q3',
      type: 'multiple-choice',
      question: 'What changed in GA4 compared to Universal Analytics?',
      options: [
        'It became paid',
        'It uses an event-based model',
        'It only tracks Google Ads',
        'It stopped tracking traffic',
      ],
      correctAnswer: 1,
      explanation: 'GA4 moved to an event-based data model where every interaction is an event.',
    },
    {
      id: 'metrics-final-q4',
      type: 'multi-select',
      question: 'Which are lagging indicators? (Select all that apply)',
      options: ['Revenue', 'Weekly traffic', 'CLV', 'Email open rate'],
      correctAnswer: [0, 2],
      explanation: 'Revenue and CLV reflect past performance. Traffic and open rates predict future results.',
    },
    {
      id: 'metrics-final-q5',
      type: 'multiple-choice',
      question: 'When should you use a pie chart?',
      options: [
        'For trends over time',
        'For parts of a whole with 5 or fewer segments',
        'For exact comparisons',
        'For every metric',
      ],
      correctAnswer: 1,
      explanation: 'Pie charts only work well for composition with few categories.',
    },
    {
      id: 'metrics-final-q6',
      type: 'true-false',
      question: 'Every dashboard chart should answer one clear question.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'Focused charts communicate effectively. Multi-purpose charts become confusing.',
    },
    {
      id: 'metrics-final-q7',
      type: 'multiple-choice',
      question: 'What is first-touch attribution?',
      options: [
        'Crediting the last interaction',
        'Crediting the first brand interaction',
        'Equal credit across touchpoints',
        'No credit to any touchpoint',
      ],
      correctAnswer: 1,
      explanation: 'First-touch gives 100% credit to the initial marketing interaction.',
    },
    {
      id: 'metrics-final-q8',
      type: 'multiple-choice',
      question: 'What is the formula for marketing ROI?',
      options: [
        '(Revenue - Cost) / Cost x 100',
        'Revenue / Campaigns',
        'Leads / Spend',
        'Traffic / Ads',
      ],
      correctAnswer: 0,
      explanation: 'Marketing ROI = (Revenue - Cost) / Cost x 100, expressed as a percentage.',
    },
    {
      id: 'metrics-final-q9',
      type: 'multi-select',
      question: 'Which are standard attribution models? (Select all that apply)',
      options: ['First-touch', 'Last-touch', 'Linear', 'Random', 'Time-decay'],
      correctAnswer: [0, 1, 2, 4],
      explanation: 'First-touch, last-touch, linear, and time-decay are standard models. Random is not.',
    },
    {
      id: 'metrics-final-q10',
      type: 'true-false',
      question: 'Multi-touch attribution distributes credit across multiple interactions.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'Multi-touch recognizes that buyers engage with multiple touchpoints before converting.',
    },
    {
      id: 'metrics-final-q11',
      type: 'multiple-choice',
      question: 'What should the top section of a one-page report contain?',
      options: [
        'Detailed narrative',
        '3-5 headline metrics with directional indicators',
        'All campaign names',
        'Team roster',
      ],
      correctAnswer: 1,
      explanation: 'The top section provides at-a-glance performance through concise headline metrics.',
    },
    {
      id: 'metrics-final-q12',
      type: 'multiple-choice',
      question: 'Which chart type is best for trends over time?',
      options: ['Pie chart', 'Line chart', 'Scatter plot', 'Table'],
      correctAnswer: 1,
      explanation: 'Line charts excel at visualizing changes over time periods.',
    },
    {
      id: 'metrics-final-q13',
      type: 'true-false',
      question: 'A data warehouse combines data from multiple sources for unified analysis.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'Data warehouses aggregate CRM, analytics, automation, and other data for cross-platform reporting.',
    },
    {
      id: 'metrics-final-q14',
      type: 'multiple-choice',
      question: 'Why distribute reports on a consistent schedule?',
      options: [
        'To fill inboxes',
        'To build trust and reduce ad-hoc data requests',
        'Data only changes on specific days',
        'Regulatory compliance',
      ],
      correctAnswer: 1,
      explanation: 'Consistent cadence builds stakeholder trust and reduces disruptive one-off requests.',
    },
    {
      id: 'metrics-final-q15',
      type: 'multi-select',
      question: 'Which belong in a one-page marketing report? (Select all that apply)',
      options: [
        'Headline metrics',
        'Context for off-track metrics',
        'Full creative assets',
        'Forward-looking initiatives',
      ],
      correctAnswer: [0, 1, 3],
      explanation: 'Headlines, context, and plans fit one page. Creative assets are separate reference materials.',
    },
  ],
};

// ============================================================================
// Course 6: Social Media Strategy (Beginner, 8h)
// ============================================================================

const socialMediaStrategy: CourseData = {
  slug: 'social-media-strategy',
  title: 'Social Media Strategy',
  modules: [
    // ── Module 1: Social Media Landscape ──
    {
      id: 'social-m1',
      title: 'Social Media Landscape',
      description:
        'Survey the current social media landscape and understand how each platform fits into a B2B or B2C marketing strategy. Learn platform demographics, content formats, and algorithmic basics.',
      lessons: [
        {
          id: 'social-m1-l1',
          title: 'The Social Media Landscape in 2025',
          type: 'video',
          duration: 18,
          youtubeId: '0zuoI_DtVNs',
        },
        {
          id: 'social-m1-l2',
          title: 'Platform Demographics & Audience Fit',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'social-m1-reading',
          title: 'How Social Media Algorithms Work',
          type: 'reading',
          duration: 10,
          content:
            'Social media algorithms determine which content users see in their feeds. Understanding how they work is essential for maximizing organic reach and engagement.\n\nAll major platform algorithms share common ranking signals. Engagement velocity (how quickly a post receives likes, comments, and shares after publishing) is the strongest signal across platforms. Content that generates rapid early engagement gets amplified to a wider audience.\n\nRelevance scoring matches content to user interests based on past behavior. If a user frequently engages with marketing content, the algorithm will surface more marketing content in their feed. This means your content must be genuinely relevant to your target audience, not just broadly interesting.\n\nRecency matters but differently across platforms. Twitter/X prioritizes the newest content, while LinkedIn and Facebook use a blend of recency and relevance. Instagram and TikTok can surface older content if it matches user interests strongly enough.\n\nContent type preferences vary by platform and over time. Video content is currently prioritized on most platforms, but this can shift. Platforms actively promote their newest features (e.g., Reels, Stories, Threads) and give algorithmic boosts to content using those formats.\n\nThe most reliable long-term strategy is creating content that generates genuine engagement from your target audience. Algorithm changes are frequent, but content that people genuinely want to interact with will always perform well.',
        },
        {
          id: 'social-m1-quiz',
          title: 'Module 1 Quiz: Social Media Landscape',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'social-m1-q1',
              type: 'multiple-choice',
              question:
                'What is the strongest algorithmic signal across most social media platforms?',
              options: [
                'The number of hashtags used',
                'Engagement velocity (early likes, comments, and shares)',
                'The length of the post',
                'The time of day it was posted',
              ],
              correctAnswer: 1,
              explanation:
                'Early engagement signals to algorithms that content is valuable, triggering amplification to a wider audience. This is consistent across major platforms.',
            },
            {
              id: 'social-m1-q2',
              type: 'true-false',
              question:
                'LinkedIn is primarily a B2C marketing platform.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'LinkedIn is the dominant B2B social media platform, focused on professional networking, industry content, and business relationships.',
            },
            {
              id: 'social-m1-q3',
              type: 'multi-select',
              question:
                'Which factors influence social media algorithm rankings? (Select all that apply)',
              options: [
                'Engagement velocity',
                'Content relevance to user interests',
                'The number of exclamation marks in the post',
                'Content recency',
                'Use of platform-native features',
              ],
              correctAnswer: [0, 1, 3, 4],
              explanation:
                'Engagement speed, relevance, recency, and native feature usage all influence rankings. Punctuation style does not affect algorithm scoring.',
            },
            {
              id: 'social-m1-q4',
              type: 'multiple-choice',
              question:
                'Why do platforms often boost content that uses their newest features?',
              options: [
                'New features are technically superior',
                'To encourage adoption and increase usage of those features',
                'Older features do not work with algorithms',
                'New features are always better for engagement',
              ],
              correctAnswer: 1,
              explanation:
                'Platforms incentivize adoption of new features (like Reels or Stories) through algorithmic boosts to increase usage and engagement with the platform.',
            },
          ],
        },
      ],
    },
    // ── Module 2: Platform-Specific Strategies ──
    {
      id: 'social-m2',
      title: 'Platform-Specific Strategies',
      description:
        'Develop tailored strategies for LinkedIn, Instagram, Twitter/X, and TikTok. Learn the unique best practices, content formats, and growth tactics for each major platform.',
      lessons: [
        {
          id: 'social-m2-l1',
          title: 'LinkedIn Strategy for B2B',
          type: 'video',
          duration: 20,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'social-m2-l2',
          title: 'Instagram & Visual Content Strategy',
          type: 'video',
          duration: 18,
          youtubeId: 'MOwEzwfKbEY',
        },
        {
          id: 'social-m2-l3',
          title: 'Twitter/X & TikTok for Brand Building',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'social-m2-quiz',
          title: 'Module 2 Quiz: Platform Strategies',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'social-m2-q1',
              type: 'multiple-choice',
              question:
                'Which platform is most effective for B2B thought leadership?',
              options: [
                'TikTok',
                'Pinterest',
                'LinkedIn',
                'Snapchat',
              ],
              correctAnswer: 2,
              explanation:
                'LinkedIn is the primary platform for B2B thought leadership, with a professional audience actively seeking industry insights and expert perspectives.',
            },
            {
              id: 'social-m2-q2',
              type: 'multi-select',
              question:
                'Which content types perform well on Instagram? (Select all that apply)',
              options: [
                'Reels (short-form video)',
                'Long-form text articles',
                'Carousel posts',
                'Stories',
                'Spreadsheet screenshots',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'Instagram is a visual platform where Reels, carousels, and Stories drive engagement. Long text and spreadsheets do not suit the visual format.',
            },
            {
              id: 'social-m2-q3',
              type: 'true-false',
              question:
                'The same content should be posted identically across all platforms.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'Each platform has unique audience expectations, content formats, and algorithmic preferences. Content should be adapted for each platform while maintaining consistent brand messaging.',
            },
            {
              id: 'social-m2-q4',
              type: 'multiple-choice',
              question:
                'What is the ideal LinkedIn post format for maximum engagement?',
              options: [
                'A single link with no text',
                'A text-only post with a personal story or insight, using line breaks for readability',
                'A long paragraph with no formatting',
                'Only hashtags',
              ],
              correctAnswer: 1,
              explanation:
                'LinkedIn rewards native text posts with personal stories and insights. Short paragraphs with line breaks improve readability and engagement. External links reduce reach.',
            },
          ],
        },
      ],
    },
    // ── Module 3: Content Creation & Scheduling ──
    {
      id: 'social-m3',
      title: 'Content Creation & Scheduling',
      description:
        'Build an efficient social media content production system. Learn content batching, scheduling tools, brand voice consistency, and how to maintain quality at scale.',
      lessons: [
        {
          id: 'social-m3-l1',
          title: 'Content Batching & Production Workflows',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'social-m3-l2',
          title: 'Social Media Scheduling Tools & Best Practices',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'social-m3-l3',
          title: 'Brand Voice & Visual Consistency',
          type: 'video',
          duration: 14,
          youtubeId: '0zuoI_DtVNs',
        },
        {
          id: 'social-m3-reading',
          title: 'The Content Calendar Framework',
          type: 'reading',
          duration: 10,
          content:
            'A content calendar transforms social media from a daily scramble into a strategic, manageable system. It provides visibility, accountability, and the ability to plan content around business events and campaigns.\n\nStart with a monthly planning session where you map out key themes, product launches, events, holidays, and campaign milestones. This top-level view ensures your social content aligns with broader marketing goals.\n\nBreak monthly themes into weekly content plans. A proven framework is the content mix ratio: roughly 40% educational or value-driven content, 30% engagement-focused content (questions, polls, behind-the-scenes), 20% promotional content, and 10% curated or user-generated content.\n\nFor each post, document the platform, date and time, copy, visual asset, hashtags, and any links. Use a shared tool (spreadsheet, project management tool, or dedicated social media platform) so team members can collaborate on drafts and approvals.\n\nBuild in flexibility. While 80% of your content can be planned in advance, reserve 20% for timely content that responds to trending topics, news, or real-time engagement opportunities. The calendar should guide, not constrain.\n\nReview performance weekly. Identify which posts over-performed and under-performed, and use those insights to refine the next week\'s plan. Over time, this iterative process builds a deep understanding of what resonates with your audience.',
        },
        {
          id: 'social-m3-quiz',
          title: 'Module 3 Quiz: Content Creation & Scheduling',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'social-m3-q1',
              type: 'multiple-choice',
              question: 'What is content batching?',
              options: [
                'Posting all content at once',
                'Creating multiple pieces of content in a dedicated session rather than one at a time',
                'Deleting old content in batches',
                'Copying competitor content',
              ],
              correctAnswer: 1,
              explanation:
                'Content batching involves dedicating focused time blocks to creating multiple content pieces at once, which is more efficient than creating one piece at a time.',
            },
            {
              id: 'social-m3-q2',
              type: 'true-false',
              question:
                'A content calendar should be 100% planned with no room for spontaneous content.',
              options: ['True', 'False'],
              correctAnswer: 1,
              explanation:
                'An effective calendar plans about 80% in advance and reserves 20% for timely, responsive content that capitalizes on trends and real-time opportunities.',
            },
            {
              id: 'social-m3-q3',
              type: 'multi-select',
              question:
                'Which should be documented in a content calendar for each post? (Select all that apply)',
              options: [
                'Platform and publish date',
                'Copy and visual asset',
                'The personal opinions of team members',
                'Hashtags and links',
              ],
              correctAnswer: [0, 1, 3],
              explanation:
                'Platform, date, copy, visuals, hashtags, and links are essential calendar fields. Personal opinions do not belong in content planning documentation.',
            },
            {
              id: 'social-m3-q4',
              type: 'multiple-choice',
              question:
                'What is the recommended content mix for social media?',
              options: [
                '100% promotional content',
                '40% educational, 30% engagement, 20% promotional, 10% curated',
                '50% promotional, 50% educational',
                '90% curated content, 10% original',
              ],
              correctAnswer: 1,
              explanation:
                'A balanced mix ensures you provide value (educational), build community (engagement), drive business (promotional), and amplify others (curated) without overwhelming followers with sales messages.',
            },
          ],
        },
      ],
    },
    // ── Module 4: Community Management & Analytics ──
    {
      id: 'social-m4',
      title: 'Community Management & Analytics',
      description:
        'Build and nurture an engaged online community. Learn response strategies, crisis management, social listening, and how to measure social media performance effectively.',
      lessons: [
        {
          id: 'social-m4-l1',
          title: 'Community Building & Engagement Tactics',
          type: 'video',
          duration: 18,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'social-m4-l2',
          title: 'Social Listening & Crisis Management',
          type: 'video',
          duration: 16,
          youtubeId: 'dQw4w9WgXcQ',
        },
        {
          id: 'social-m4-reading',
          title: 'Social Media KPIs & Reporting',
          type: 'reading',
          duration: 10,
          content:
            'Social media analytics must go beyond vanity metrics like follower count to measure real business impact. Here is a framework for meaningful social media measurement.\n\nAwareness metrics include reach, impressions, and follower growth rate. These indicate how many people your content is reaching and whether your audience is growing. Growth rate is more meaningful than absolute follower count because it shows momentum.\n\nEngagement metrics include engagement rate (interactions divided by reach), comments, shares, and saves. Engagement rate is the single most important social media metric because it indicates whether your content resonates. Benchmark against industry averages, not arbitrary targets.\n\nConversion metrics track how social media drives business results: link clicks, landing page visits from social, leads generated, and revenue attributed to social channels. These connect social activity to the marketing funnel and prove ROI.\n\nSentiment and share of voice metrics measure qualitative aspects: how people feel about your brand and how your brand visibility compares to competitors in social conversations.\n\nReport social media performance monthly with quarterly deep-dives. Monthly reports should focus on key metrics versus targets and highlight top-performing content. Quarterly reports should analyze trends, compare to industry benchmarks, and inform strategy adjustments for the next quarter.',
        },
        {
          id: 'social-m4-quiz',
          title: 'Module 4 Quiz: Community & Analytics',
          type: 'quiz',
          duration: 8,
          questions: [
            {
              id: 'social-m4-q1',
              type: 'multiple-choice',
              question:
                'What is the most important social media engagement metric?',
              options: [
                'Total follower count',
                'Engagement rate (interactions divided by reach)',
                'Number of posts published',
                'Profile visits',
              ],
              correctAnswer: 1,
              explanation:
                'Engagement rate measures how well content resonates relative to reach. It is more meaningful than raw follower counts or post frequency.',
            },
            {
              id: 'social-m4-q2',
              type: 'multi-select',
              question:
                'Which are social media conversion metrics? (Select all that apply)',
              options: [
                'Link clicks from social posts',
                'Follower growth rate',
                'Leads generated from social',
                'Revenue attributed to social',
                'Post impressions',
              ],
              correctAnswer: [0, 2, 3],
              explanation:
                'Link clicks, leads, and revenue measure conversion impact. Follower growth and impressions are awareness metrics.',
            },
            {
              id: 'social-m4-q3',
              type: 'true-false',
              question:
                'Social listening involves monitoring brand mentions and industry conversations across social platforms.',
              options: ['True', 'False'],
              correctAnswer: 0,
              explanation:
                'Social listening tracks brand mentions, competitor activity, and industry conversations to inform strategy and identify opportunities or threats.',
            },
            {
              id: 'social-m4-q4',
              type: 'multiple-choice',
              question:
                'What is "share of voice" in social media?',
              options: [
                'How loud your video content is',
                'Your brand\'s visibility compared to competitors in social conversations',
                'The percentage of posts that use audio',
                'The number of podcasts mentioning your brand',
              ],
              correctAnswer: 1,
              explanation:
                'Share of voice measures your brand\'s proportion of the total social conversation within your industry, relative to competitors.',
            },
          ],
        },
      ],
    },
  ],
  finalAssessment: [
    {
      id: 'social-final-q1',
      type: 'multiple-choice',
      question: 'What is the strongest algorithmic signal on most social platforms?',
      options: [
        'Hashtag count',
        'Engagement velocity',
        'Post length',
        'Posting time',
      ],
      correctAnswer: 1,
      explanation: 'Early engagement signals value to algorithms, triggering wider distribution.',
    },
    {
      id: 'social-final-q2',
      type: 'true-false',
      question: 'LinkedIn is primarily a B2B marketing platform.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'LinkedIn focuses on professional networking and B2B content.',
    },
    {
      id: 'social-final-q3',
      type: 'multiple-choice',
      question: 'What is content batching?',
      options: [
        'Posting everything at once',
        'Creating multiple pieces in dedicated sessions',
        'Deleting old content',
        'Copying competitors',
      ],
      correctAnswer: 1,
      explanation: 'Batching creates content in focused sessions for efficiency.',
    },
    {
      id: 'social-final-q4',
      type: 'multi-select',
      question: 'Which content types perform well on Instagram? (Select all that apply)',
      options: ['Reels', 'Long text articles', 'Carousel posts', 'Stories'],
      correctAnswer: [0, 2, 3],
      explanation: 'Instagram favors visual formats: Reels, carousels, and Stories.',
    },
    {
      id: 'social-final-q5',
      type: 'true-false',
      question: 'The same content should be posted identically on all platforms.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'Each platform has unique audiences and formats. Content should be adapted.',
    },
    {
      id: 'social-final-q6',
      type: 'multiple-choice',
      question: 'What is the recommended content mix ratio?',
      options: [
        '100% promotional',
        '40% educational, 30% engagement, 20% promotional, 10% curated',
        '50/50 promotional and educational',
        '90% curated',
      ],
      correctAnswer: 1,
      explanation: 'A balanced mix provides value, builds community, drives business, and amplifies others.',
    },
    {
      id: 'social-final-q7',
      type: 'multiple-choice',
      question: 'What is the most important social media engagement metric?',
      options: [
        'Follower count',
        'Engagement rate',
        'Posts published',
        'Profile visits',
      ],
      correctAnswer: 1,
      explanation: 'Engagement rate measures content resonance relative to audience size.',
    },
    {
      id: 'social-final-q8',
      type: 'true-false',
      question: 'A content calendar should reserve 20% for timely, spontaneous content.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'Reserving space for responsive content capitalizes on trends and real-time opportunities.',
    },
    {
      id: 'social-final-q9',
      type: 'multi-select',
      question: 'Which are social media conversion metrics? (Select all that apply)',
      options: ['Link clicks', 'Follower growth', 'Leads from social', 'Revenue from social'],
      correctAnswer: [0, 2, 3],
      explanation: 'Clicks, leads, and revenue measure conversion. Follower growth is an awareness metric.',
    },
    {
      id: 'social-final-q10',
      type: 'multiple-choice',
      question: 'What is social listening?',
      options: [
        'Playing audio on social media',
        'Monitoring brand mentions and industry conversations',
        'Listening to podcasts about marketing',
        'Recording social media webinars',
      ],
      correctAnswer: 1,
      explanation: 'Social listening tracks conversations about your brand, competitors, and industry.',
    },
    {
      id: 'social-final-q11',
      type: 'multiple-choice',
      question: 'What is "share of voice" on social media?',
      options: [
        'Audio volume of videos',
        'Brand visibility relative to competitors in social conversations',
        'Percentage of posts with audio',
        'Number of podcast mentions',
      ],
      correctAnswer: 1,
      explanation: 'Share of voice measures your brand\'s proportion of industry social conversation.',
    },
    {
      id: 'social-final-q12',
      type: 'true-false',
      question: 'Platforms give algorithmic boosts to content using their newest features.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'Platforms incentivize feature adoption through algorithmic amplification.',
    },
    {
      id: 'social-final-q13',
      type: 'multiple-choice',
      question: 'Which platform is best for B2B thought leadership?',
      options: ['TikTok', 'Pinterest', 'LinkedIn', 'Snapchat'],
      correctAnswer: 2,
      explanation: 'LinkedIn\'s professional audience makes it the primary B2B thought leadership platform.',
    },
    {
      id: 'social-final-q14',
      type: 'multi-select',
      question: 'Which should be in a content calendar for each post? (Select all that apply)',
      options: ['Platform and date', 'Copy and visual', 'Team opinions', 'Hashtags and links'],
      correctAnswer: [0, 1, 3],
      explanation: 'Platform, date, copy, visuals, hashtags, and links are essential calendar fields.',
    },
    {
      id: 'social-final-q15',
      type: 'multiple-choice',
      question: 'What is the ideal LinkedIn post format for engagement?',
      options: [
        'A link with no text',
        'Text with personal insight and line breaks',
        'Unformatted wall of text',
        'Only hashtags',
      ],
      correctAnswer: 1,
      explanation: 'LinkedIn rewards native text posts with readable formatting and personal insight.',
    },
  ],
};

// ============================================================================
// Aggregated Database Export
// ============================================================================

export const courseDatabase: CourseData[] = [
  gtmAutomation,
  researchForMarketers,
  landingPages,
  b2bContentEngine,
  metricsDashboards,
  socialMediaStrategy,
];

// ============================================================================
// Helper
// ============================================================================

export const getCourseBySlug = (slug: string): CourseData | undefined =>
  courseDatabase.find((c) => c.slug === slug);
