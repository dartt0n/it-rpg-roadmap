'use client';

import { NodeCardData } from '@/components/NodeCard/NodeCard';

export const NODES: Record<number, NodeCardData> = {
  999: {
    nodeIdx: 999,
    title: '',
    prefix: '',
    type: 'Branch',
    shortDesc: '',
    fullDesc: '',
    image: '',
    yearsRequired: 0,
    nextNodes: [7, 13],
  },

  7: {
    nodeIdx: 7,
    title: 'Value Creators',
    prefix: '',
    type: 'Branch',
    shortDesc:
     'Professionals focused on delivering measurable value through technology in organizations.',
    fullDesc:
     'Value Creators are experts who prioritize creating tangible business outcomes and ensuring that IT initiatives align with organizational goals. They analyze ROI, optimize processes, and implement strategies that enhance efficiency, productivity, and value delivery.',
    image: 'nodes/value-creators.jpg',
    yearsRequired: 0,
    nextNodes: [0, 1, 2, 3, 4, 5, 6],
  },

  13: {
    nodeIdx: 13,
    title: 'People and Regulations',
    prefix: '',
    type: 'Branch',
    shortDesc:
     'Specialists who navigate the intersection of human resources and legal compliance within IT.',
    fullDesc:
     'This role encompasses understanding labor laws, data protection regulations, and industry standards to help organizations navigate the complex landscape of compliance. They work closely with HR and legal teams to develop policies that protect both the company and its employees.',
    image: 'nodes/people-regulations.jpg',
    yearsRequired: 0,
    nextNodes: [8, 9, 10, 11, 12],
  },

  12: {
    nodeIdx: 12,
    title: 'Law',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Legal professionals specializing in the intersection of IT and law.',
    fullDesc:
     'Individuals in this field provide legal guidance on matters such as contracts, intellectual property, data privacy, and technology regulations. They ensure that organizations adhere to laws and mitigate legal risks associated with technological advancements.',
    image: 'nodes/law.jpg',
    yearsRequired: 0,
    nextNodes: [14, 15],
  },

  15: {
    nodeIdx: 15,
    title: 'Intellectual Property',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Experts who protect and manage intellectual assets in technology.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/intellectual-property.jpg',
    yearsRequired: 0,
    nextNodes: [16],
  },

  16: {
    nodeIdx: 16,
    title: 'Intellectual Property',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Experts who protect and manage intellectual assets in technology.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/intellectual-property.jpg',
    yearsRequired: 1,
    nextNodes: [17],
  },

  17: {
    nodeIdx: 17,
    title: 'Intellectual Property',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Experts who protect and manage intellectual assets in technology.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/intellectual-property.jpg',
    yearsRequired: 2,
    nextNodes: [18],
  },

  18: {
    nodeIdx: 18,
    title: 'Intellectual Property',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Experts who protect and manage intellectual assets in technology.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/intellectual-property.jpg',
    yearsRequired: 4,
    nextNodes: [19],
  },

  19: {
    nodeIdx: 19,
    title: 'Intellectual Property',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Experts who protect and manage intellectual assets in technology.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/intellectual-property.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  14: {
    nodeIdx: 14,
    title: 'Cyber Crime',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Professionals focused on preventing and responding to cybercrime incidents.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/cybercrime.jpg',
    yearsRequired: 0,
    nextNodes: [20],
  },

  20: {
    nodeIdx: 20,
    title: 'Cyber Crime',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Professionals focused on preventing and responding to cybercrime incidents.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/cybercrime.jpg',
    yearsRequired: 1,
    nextNodes: [21],
  },

  21: {
    nodeIdx: 21,
    title: 'Cyber Crime',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Professionals focused on preventing and responding to cybercrime incidents.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/cybercrime.jpg',
    yearsRequired: 2,
    nextNodes: [22],
  },

  22: {
    nodeIdx: 22,
    title: 'Cyber Crime',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Professionals focused on preventing and responding to cybercrime incidents.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/cybercrime.jpg',
    yearsRequired: 4,
    nextNodes: [23],
  },

  23: {
    nodeIdx: 23,
    title: 'Cyber Crime',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Professionals focused on preventing and responding to cybercrime incidents.',
    fullDesc:
     'Professionals specializing in intellectual property work to secure patents, trademarks, and copyrights for technological innovations. They navigate the complexities of IP law to protect the organization’s intellectual assets against infringement and ensure proper licensing.',
    image: 'nodes/cybercrime.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  11: {
    nodeIdx: 11,
    title: 'HR',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Human Resource professionals managing workforce-related issues in IT.',
    fullDesc:
     'HR in IT involves recruitment, training, performance management, and employee relations tailored to a tech environment. They focus on attracting, developing, and retaining talent while fostering a workplace culture conducive to innovation and collaboration.',
    image: 'nodes/hr.jpg',
    yearsRequired: 0,
    nextNodes: [24, 25],
  },

  25: {
    nodeIdx: 25,
    title: 'Recruiter',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Talent acquisition specialists focused on sourcing candidates for IT roles.',
    fullDesc:
     'Recruiters identify candidates for technical positions by utilizing various sourcing methodologies. They liaise between candidates and hiring managers, facilitate interview processes, and work to fill positions with the right talent in a competitive market.',
    image: 'nodes/hr.jpg',
    yearsRequired: 0,
    nextNodes: [26],
  },

  26: {
    nodeIdx: 26,
    title: 'Recruiter',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Talent acquisition specialists focused on sourcing candidates for IT roles.',
    fullDesc:
     'Recruiters identify candidates for technical positions by utilizing various sourcing methodologies. They liaise between candidates and hiring managers, facilitate interview processes, and work to fill positions with the right talent in a competitive market.',
    image: 'nodes/hr.jpg',
    yearsRequired: 1,
    nextNodes: [27],
  },

  27: {
    nodeIdx: 27,
    title: 'Recruiter',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Talent acquisition specialists focused on sourcing candidates for IT roles.',
    fullDesc:
     'Recruiters identify candidates for technical positions by utilizing various sourcing methodologies. They liaise between candidates and hiring managers, facilitate interview processes, and work to fill positions with the right talent in a competitive market.',
    image: 'nodes/hr.jpg',
    yearsRequired: 2,
    nextNodes: [28],
  },

  28: {
    nodeIdx: 28,
    title: 'Recruiter',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Talent acquisition specialists focused on sourcing candidates for IT roles.',
    fullDesc:
     'Recruiters identify candidates for technical positions by utilizing various sourcing methodologies. They liaise between candidates and hiring managers, facilitate interview processes, and work to fill positions with the right talent in a competitive market.',
    image: 'nodes/hr.jpg',
    yearsRequired: 4,
    nextNodes: [29],
  },

  29: {
    nodeIdx: 29,
    title: 'Recruiter',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Talent acquisition specialists focused on sourcing candidates for IT roles.',
    fullDesc:
     'Recruiters identify candidates for technical positions by utilizing various sourcing methodologies. They liaise between candidates and hiring managers, facilitate interview processes, and work to fill positions with the right talent in a competitive market.',
    image: 'nodes/hr.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  24: {
    nodeIdx: 24,
    title: 'dev-rel',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc:
     'Developer Relations professionals fostering community engagement and support in tech.',
    fullDesc:
     'dev-rel experts engage with the developer community, provide support, and promote products and services. They bridge the gap between the company’s technical offerings and developers by hosting events, creating content, and gathering feedback to improve products.',
    image: 'nodes/dev-rel.jpg',
    yearsRequired: 0,
    nextNodes: [30],
  },

  30: {
    nodeIdx: 30,
    title: 'dev-rel',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc:
     'Developer Relations professionals fostering community engagement and support in tech.',
    fullDesc:
     'dev-rel experts engage with the developer community, provide support, and promote products and services. They bridge the gap between the company’s technical offerings and developers by hosting events, creating content, and gathering feedback to improve products.',
    image: 'nodes/dev-rel.jpg',
    yearsRequired: 1,
    nextNodes: [31],
  },

  31: {
    nodeIdx: 31,
    title: 'dev-rel',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc:
     'Developer Relations professionals fostering community engagement and support in tech.',
    fullDesc:
     'dev-rel experts engage with the developer community, provide support, and promote products and services. They bridge the gap between the company’s technical offerings and developers by hosting events, creating content, and gathering feedback to improve products.',
    image: 'nodes/dev-rel.jpg',
    yearsRequired: 2,
    nextNodes: [32],
  },

  32: {
    nodeIdx: 32,
    title: 'dev-rel',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc:
     'Developer Relations professionals fostering community engagement and support in tech.',
    fullDesc:
     'dev-rel experts engage with the developer community, provide support, and promote products and services. They bridge the gap between the company’s technical offerings and developers by hosting events, creating content, and gathering feedback to improve products.',
    image: 'nodes/dev-rel.jpg',
    yearsRequired: 4,
    nextNodes: [33],
  },

  33: {
    nodeIdx: 33,
    title: 'dev-rel',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc:
     'Developer Relations professionals fostering community engagement and support in tech.',
    fullDesc:
     'dev-rel experts engage with the developer community, provide support, and promote products and services. They bridge the gap between the company’s technical offerings and developers by hosting events, creating content, and gathering feedback to improve products.',
    image: 'nodes/dev-rel.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  10: {
    nodeIdx: 10,
    title: 'Documentations',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Experts focusing on creating and managing technical documentation.',
    fullDesc:
     'Documentations specialists produce user manuals, system guides, and API documentation. They ensure that technical information is clear, comprehensive, and accessible, facilitating user understanding and enhancing product usability.',
    image: 'nodes/tech-writer.jpg',
    yearsRequired: 0,
    nextNodes: [34],
  },

  34: {
    nodeIdx: 34,
    title: 'Technical Writer',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Writers who produce technical documentation for IT products or services.',
    fullDesc:
     'Technical Writers specialize in transforming complex technical concepts into user-friendly content. They collaborate with engineers and product managers to create clear documentation that supports product use and understanding.',
    image: 'nodes/tech-writer.jpg',
    yearsRequired: 0,
    nextNodes: [35],
  },

  35: {
    nodeIdx: 35,
    title: 'Technical Writer',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Writers who produce technical documentation for IT products or services.',
    fullDesc:
     'Technical Writers specialize in transforming complex technical concepts into user-friendly content. They collaborate with engineers and product managers to create clear documentation that supports product use and understanding.',
    image: 'nodes/tech-writer.jpg',
    yearsRequired: 1,
    nextNodes: [36],
  },

  36: {
    nodeIdx: 36,
    title: 'Technical Writer',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Writers who produce technical documentation for IT products or services.',
    fullDesc:
     'Technical Writers specialize in transforming complex technical concepts into user-friendly content. They collaborate with engineers and product managers to create clear documentation that supports product use and understanding.',
    image: 'nodes/tech-writer.jpg',
    yearsRequired: 2,
    nextNodes: [37],
  },

  37: {
    nodeIdx: 37,
    title: 'Technical Writer',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Writers who produce technical documentation for IT products or services.',
    fullDesc:
     'Technical Writers specialize in transforming complex technical concepts into user-friendly content. They collaborate with engineers and product managers to create clear documentation that supports product use and understanding.',
    image: 'nodes/tech-writer.jpg',
    yearsRequired: 4,
    nextNodes: [38],
  },

  38: {
    nodeIdx: 38,
    title: 'Technical Writer',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Writers who produce technical documentation for IT products or services.',
    fullDesc:
     'Technical Writers specialize in transforming complex technical concepts into user-friendly content. They collaborate with engineers and product managers to create clear documentation that supports product use and understanding.',
    image: 'nodes/tech-writer.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  9: {
    nodeIdx: 9,
    title: 'Analytics',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Data specialists analyzing metrics to drive decision-making.',
    fullDesc:
     'Analytics experts utilize statistical tools and methodologies to interpret data. They provide insights into trends and performance metrics, helping organizations make data-driven decisions and optimize business processes.',
    image: 'nodes/analytics.jpg',
    yearsRequired: 0,
    nextNodes: [39, 40],
  },

  40: {
    nodeIdx: 40,
    title: 'System Analyst',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'IT professionals assessing and optimizing computer systems.',
    fullDesc:
     'System Analysts focus on analyzing system requirements, developing solutions, and improving IT infrastructure. They act as a liaison between stakeholders and technical teams to ensure systems meet business needs effectively.',
    image: 'nodes/system-analyst.jpg',
    yearsRequired: 0,
    nextNodes: [41],
  },

  41: {
    nodeIdx: 41,
    title: 'System Analyst',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'IT professionals assessing and optimizing computer systems.',
    fullDesc:
     'System Analysts focus on analyzing system requirements, developing solutions, and improving IT infrastructure. They act as a liaison between stakeholders and technical teams to ensure systems meet business needs effectively.',
    image: 'nodes/system-analyst.jpg',
    yearsRequired: 1,
    nextNodes: [42],
  },

  42: {
    nodeIdx: 42,
    title: 'System Analyst',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'IT professionals assessing and optimizing computer systems.',
    fullDesc:
     'System Analysts focus on analyzing system requirements, developing solutions, and improving IT infrastructure. They act as a liaison between stakeholders and technical teams to ensure systems meet business needs effectively.',
    image: 'nodes/system-analyst.jpg',
    yearsRequired: 2,
    nextNodes: [43],
  },

  43: {
    nodeIdx: 43,
    title: 'System Analyst',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'IT professionals assessing and optimizing computer systems.',
    fullDesc:
     'System Analysts focus on analyzing system requirements, developing solutions, and improving IT infrastructure. They act as a liaison between stakeholders and technical teams to ensure systems meet business needs effectively.',
    image: 'nodes/system-analyst.jpg',
    yearsRequired: 4,
    nextNodes: [44],
  },

  44: {
    nodeIdx: 44,
    title: 'System Analyst',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'IT professionals assessing and optimizing computer systems.',
    fullDesc:
     'System Analysts focus on analyzing system requirements, developing solutions, and improving IT infrastructure. They act as a liaison between stakeholders and technical teams to ensure systems meet business needs effectively.',
    image: 'nodes/system-analyst.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  39: {
    nodeIdx: 39,
    title: 'Business Analyst',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Analysts focused on identifying business needs and solutions.',
    fullDesc:
     'Business Analysts gather requirements, analyze processes, and propose improvements to enhance efficiency and profitability. They play a crucial role in bridging the gap between business objectives and IT solutions.',
    image: 'nodes/business-analyst.jpg',
    yearsRequired: 0,
    nextNodes: [45],
  },

  45: {
    nodeIdx: 45,
    title: 'Business Analyst',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Analysts focused on identifying business needs and solutions.',
    fullDesc:
     'Business Analysts gather requirements, analyze processes, and propose improvements to enhance efficiency and profitability. They play a crucial role in bridging the gap between business objectives and IT solutions.',
    image: 'nodes/business-analyst.jpg',
    yearsRequired: 1,
    nextNodes: [46],
  },

  46: {
    nodeIdx: 46,
    title: 'Business Analyst',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Analysts focused on identifying business needs and solutions.',
    fullDesc:
     'Business Analysts gather requirements, analyze processes, and propose improvements to enhance efficiency and profitability. They play a crucial role in bridging the gap between business objectives and IT solutions.',
    image: 'nodes/business-analyst.jpg',
    yearsRequired: 2,
    nextNodes: [47],
  },

  47: {
    nodeIdx: 47,
    title: 'Business Analyst',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Analysts focused on identifying business needs and solutions.',
    fullDesc:
     'Business Analysts gather requirements, analyze processes, and propose improvements to enhance efficiency and profitability. They play a crucial role in bridging the gap between business objectives and IT solutions.',
    image: 'nodes/business-analyst.jpg',
    yearsRequired: 4,
    nextNodes: [48],
  },

  48: {
    nodeIdx: 48,
    title: 'Business Analyst',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Analysts focused on identifying business needs and solutions.',
    fullDesc:
     'Business Analysts gather requirements, analyze processes, and propose improvements to enhance efficiency and profitability. They play a crucial role in bridging the gap between business objectives and IT solutions.',
    image: 'nodes/business-analyst.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  8: {
    nodeIdx: 8,
    title: 'Management',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Professionals overseeing teams and projects in IT.',
    fullDesc:
     'Management in IT involves strategic oversight of teams and projects to meet business goals. IT managers coordinate resources, assess performance, and ensure projects align with organizational objectives.',
    image: 'nodes/management.jpg',
    yearsRequired: 0,
    nextNodes: [49, 50],
  },

  49: {
    nodeIdx: 49,
    title: 'Project Manager',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Leaders responsible for overseeing IT projects from initiation to completion.',
    fullDesc:
     'Project Managers oversee project timelines, budgets, and resources. They ensure that projects are delivered on time, within scope, and to stakeholder satisfaction by applying project management methodologies.',
    image: 'nodes/project-manager.jpg',
    yearsRequired: 0,
    nextNodes: [51],
  },

  51: {
    nodeIdx: 51,
    title: 'Project Manager',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Leaders responsible for overseeing IT projects from initiation to completion.',
    fullDesc:
     'Project Managers oversee project timelines, budgets, and resources. They ensure that projects are delivered on time, within scope, and to stakeholder satisfaction by applying project management methodologies.',
    image: 'nodes/project-manager.jpg',
    yearsRequired: 1,
    nextNodes: [52],
  },

  52: {
    nodeIdx: 52,
    title: 'Project Manager',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Leaders responsible for overseeing IT projects from initiation to completion.',
    fullDesc:
     'Project Managers oversee project timelines, budgets, and resources. They ensure that projects are delivered on time, within scope, and to stakeholder satisfaction by applying project management methodologies.',
    image: 'nodes/project-manager.jpg',
    yearsRequired: 2,
    nextNodes: [53],
  },

  53: {
    nodeIdx: 53,
    title: 'Project Manager',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Leaders responsible for overseeing IT projects from initiation to completion.',
    fullDesc:
     'Project Managers oversee project timelines, budgets, and resources. They ensure that projects are delivered on time, within scope, and to stakeholder satisfaction by applying project management methodologies.',
    image: 'nodes/project-manager.jpg',
    yearsRequired: 4,
    nextNodes: [54],
  },

  54: {
    nodeIdx: 54,
    title: 'Project Manager',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Leaders responsible for overseeing IT projects from initiation to completion.',
    fullDesc:
     'Project Managers oversee project timelines, budgets, and resources. They ensure that projects are delivered on time, within scope, and to stakeholder satisfaction by applying project management methodologies.',
    image: 'nodes/project-manager.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  50: {
    nodeIdx: 50,
    title: 'Product Manager',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Professionals guiding the development and lifecycle of IT products.',
    fullDesc:
     'Product Managers define product vision, gather market and user data, and prioritize feature development. They lead cross-functional teams to deliver products that meet user needs and business goals.',
    image: 'nodes/product-manager.jpg',
    yearsRequired: 0,
    nextNodes: [55],
  },

  55: {
    nodeIdx: 55,
    title: 'Product Manager',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Professionals guiding the development and lifecycle of IT products.',
    fullDesc:
     'Product Managers define product vision, gather market and user data, and prioritize feature development. They lead cross-functional teams to deliver products that meet user needs and business goals.',
    image: 'nodes/product-manager.jpg',
    yearsRequired: 1,
    nextNodes: [56],
  },

  56: {
    nodeIdx: 56,
    title: 'Product Manager',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Professionals guiding the development and lifecycle of IT products.',
    fullDesc:
     'Product Managers define product vision, gather market and user data, and prioritize feature development. They lead cross-functional teams to deliver products that meet user needs and business goals.',
    image: 'nodes/product-manager.jpg',
    yearsRequired: 2,
    nextNodes: [57],
  },

  57: {
    nodeIdx: 57,
    title: 'Product Manager',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Professionals guiding the development and lifecycle of IT products.',
    fullDesc:
     'Product Managers define product vision, gather market and user data, and prioritize feature development. They lead cross-functional teams to deliver products that meet user needs and business goals.',
    image: 'nodes/product-manager.jpg',
    yearsRequired: 4,
    nextNodes: [58],
  },

  58: {
    nodeIdx: 58,
    title: 'Product Manager',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Professionals guiding the development and lifecycle of IT products.',
    fullDesc:
     'Product Managers define product vision, gather market and user data, and prioritize feature development. They lead cross-functional teams to deliver products that meet user needs and business goals.',
    image: 'nodes/product-manager.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  0: {
    nodeIdx: 0,
    title: 'Security',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Specialists responsible for protecting IT systems and data from threats.',
    fullDesc:
     'Security professionals develop and implement security protocols to protect systems and data from breaches and vulnerabilities. They monitor security events and respond to incidents while ensuring compliance with regulations.',
    image: 'nodes/infosec.jpg',
    yearsRequired: 0,
    nextNodes: [59, 60],
  },

  59: {
    nodeIdx: 59,
    title: 'Pentest',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Experts conducting penetration testing to identify security vulnerabilities.',
    fullDesc:
     'Penetration Testers simulate cyber-attacks to assess system vulnerabilities and recommend remediation strategies. They play a critical role in enhancing cybersecurity by identifying weaknesses before they can be exploited by malicious actors.',
    image: 'nodes/pentest.jpg',
    yearsRequired: 0,
    nextNodes: [61],
  },

  61: {
    nodeIdx: 61,
    title: 'Pentest',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Experts conducting penetration testing to identify security vulnerabilities.',
    fullDesc:
     'Penetration Testers simulate cyber-attacks to assess system vulnerabilities and recommend remediation strategies. They play a critical role in enhancing cybersecurity by identifying weaknesses before they can be exploited by malicious actors.',
    image: 'nodes/pentest.jpg',
    yearsRequired: 1,
    nextNodes: [62],
  },

  62: {
    nodeIdx: 62,
    title: 'Pentest',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Experts conducting penetration testing to identify security vulnerabilities.',
    fullDesc:
     'Penetration Testers simulate cyber-attacks to assess system vulnerabilities and recommend remediation strategies. They play a critical role in enhancing cybersecurity by identifying weaknesses before they can be exploited by malicious actors.',
    image: 'nodes/pentest.jpg',
    yearsRequired: 2,
    nextNodes: [63],
  },

  63: {
    nodeIdx: 63,
    title: 'Pentest',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Experts conducting penetration testing to identify security vulnerabilities.',
    fullDesc:
     'Penetration Testers simulate cyber-attacks to assess system vulnerabilities and recommend remediation strategies. They play a critical role in enhancing cybersecurity by identifying weaknesses before they can be exploited by malicious actors.',
    image: 'nodes/pentest.jpg',
    yearsRequired: 4,
    nextNodes: [64],
  },

  64: {
    nodeIdx: 64,
    title: 'Pentest',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Experts conducting penetration testing to identify security vulnerabilities.',
    fullDesc:
     'Penetration Testers simulate cyber-attacks to assess system vulnerabilities and recommend remediation strategies. They play a critical role in enhancing cybersecurity by identifying weaknesses before they can be exploited by malicious actors.',
    image: 'nodes/pentest.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  60: {
    nodeIdx: 60,
    title: 'Information Control',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Specialists managing data governance and compliance in IT.',
    fullDesc:
     'Information Control specialists ensure that data management policies are implemented effectively. They oversee access controls, data classification, and compliance measures to protect sensitive information within an organization.',
    image: 'nodes/information-control.jpg',
    yearsRequired: 0,
    nextNodes: [65],
  },

  65: {
    nodeIdx: 65,
    title: 'Information Control',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Specialists managing data governance and compliance in IT.',
    fullDesc:
     'Information Control specialists ensure that data management policies are implemented effectively. They oversee access controls, data classification, and compliance measures to protect sensitive information within an organization.',
    image: 'nodes/information-control.jpg',
    yearsRequired: 1,
    nextNodes: [66],
  },

  66: {
    nodeIdx: 66,
    title: 'Information Control',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Specialists managing data governance and compliance in IT.',
    fullDesc:
     'Information Control specialists ensure that data management policies are implemented effectively. They oversee access controls, data classification, and compliance measures to protect sensitive information within an organization.',
    image: 'nodes/information-control.jpg',
    yearsRequired: 2,
    nextNodes: [67],
  },

  67: {
    nodeIdx: 67,
    title: 'Information Control',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Specialists managing data governance and compliance in IT.',
    fullDesc:
     'Information Control specialists ensure that data management policies are implemented effectively. They oversee access controls, data classification, and compliance measures to protect sensitive information within an organization.',
    image: 'nodes/information-control.jpg',
    yearsRequired: 4,
    nextNodes: [68],
  },

  68: {
    nodeIdx: 68,
    title: 'Information Control',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Specialists managing data governance and compliance in IT.',
    fullDesc:
     'Information Control specialists ensure that data management policies are implemented effectively. They oversee access controls, data classification, and compliance measures to protect sensitive information within an organization.',
    image: 'nodes/information-control.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  1: {
    nodeIdx: 1,
    title: 'Robotics',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Experts in the design and implementation of robotic systems.',
    fullDesc:
     'Robotics professionals work on creating, programming, and deploying robotic systems for various applications. They integrate hardware and software to enhance automation processes across industries.',
    image: 'nodes/robotics.jpg',
    yearsRequired: 0,
    nextNodes: [69],
  },

  69: {
    nodeIdx: 69,
    title: 'Robotics',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Experts in the design and implementation of robotic systems.',
    fullDesc:
     'Robotics professionals work on creating, programming, and deploying robotic systems for various applications. They integrate hardware and software to enhance automation processes across industries.',
    image: 'nodes/robotics.jpg',
    yearsRequired: 1,
    nextNodes: [70],
  },

  70: {
    nodeIdx: 70,
    title: 'Robotics',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Experts in the design and implementation of robotic systems.',
    fullDesc:
     'Robotics professionals work on creating, programming, and deploying robotic systems for various applications. They integrate hardware and software to enhance automation processes across industries.',
    image: 'nodes/robotics.jpg',
    yearsRequired: 2,
    nextNodes: [71],
  },

  71: {
    nodeIdx: 71,
    title: 'Robotics',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Experts in the design and implementation of robotic systems.',
    fullDesc:
     'Robotics professionals work on creating, programming, and deploying robotic systems for various applications. They integrate hardware and software to enhance automation processes across industries.',
    image: 'nodes/robotics.jpg',
    yearsRequired: 4,
    nextNodes: [72],
  },

  72: {
    nodeIdx: 72,
    title: 'Robotics',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Experts in the design and implementation of robotic systems.',
    fullDesc:
     'Robotics professionals work on creating, programming, and deploying robotic systems for various applications. They integrate hardware and software to enhance automation processes across industries.',
    image: 'nodes/robotics.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  2: {
    nodeIdx: 2,
    title: 'Design',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Creative professionals crafting visual and functional designs for technology.',
    fullDesc:
     'Design experts develop visual elements for products and interfaces, ensuring user-centric solutions that are aesthetically pleasing and functional. Their work enhances the overall user experience.',
    image: 'nodes/ui-ux-designer.jpg',
    yearsRequired: 0,
    nextNodes: [73],
  },

  73: {
    nodeIdx: 73,
    title: 'UI/UX',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Experts in User Interface and User Experience design for technology products.',
    fullDesc:
     'UI/UX professionals focus on making technology user-friendly through design principles and user research. They aim to improve the usability and satisfaction of digital products by enhancing navigation and interaction.',
    image: 'nodes/ui-ux-designer.jpg',
    yearsRequired: 0,
    nextNodes: [74],
  },

  74: {
    nodeIdx: 74,
    title: 'UI/UX',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Experts in User Interface and User Experience design for technology products.',
    fullDesc:
     'UI/UX professionals focus on making technology user-friendly through design principles and user research. They aim to improve the usability and satisfaction of digital products by enhancing navigation and interaction.',
    image: 'nodes/ui-ux-designer.jpg',
    yearsRequired: 1,
    nextNodes: [75],
  },

  75: {
    nodeIdx: 75,
    title: 'UI/UX',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Experts in User Interface and User Experience design for technology products.',
    fullDesc:
     'UI/UX professionals focus on making technology user-friendly through design principles and user research. They aim to improve the usability and satisfaction of digital products by enhancing navigation and interaction.',
    image: 'nodes/ui-ux-designer.jpg',
    yearsRequired: 2,
    nextNodes: [76],
  },

  76: {
    nodeIdx: 76,
    title: 'UI/UX',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Experts in User Interface and User Experience design for technology products.',
    fullDesc:
     'UI/UX professionals focus on making technology user-friendly through design principles and user research. They aim to improve the usability and satisfaction of digital products by enhancing navigation and interaction.',
    image: 'nodes/ui-ux-designer.jpg',
    yearsRequired: 4,
    nextNodes: [77],
  },

  77: {
    nodeIdx: 77,
    title: 'UI/UX',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Experts in User Interface and User Experience design for technology products.',
    fullDesc:
     'UI/UX professionals focus on making technology user-friendly through design principles and user research. They aim to improve the usability and satisfaction of digital products by enhancing navigation and interaction.',
    image: 'nodes/ui-ux-designer.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  3: {
    nodeIdx: 3,
    title: 'Testing',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Professionals responsible for evaluating software quality and performance.',
    fullDesc:
     'Testing professionals develop and execute test plans to ensure software quality. They identify defects and validate that products meet specifications, contributing to overall product reliability.',
    image: 'nodes/tester.jpg',
    yearsRequired: 0,
    nextNodes: [78],
  },

  78: {
    nodeIdx: 78,
    title: 'QA',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Quality Assurance professionals ensuring technology products meet standards.',
    fullDesc:
     'QA experts implement processes and methodologies to verify software quality and performance. They test products throughout development to identify issues and ensure compliance with quality standards.',
    image: 'nodes/tester.jpg',
    yearsRequired: 0,
    nextNodes: [79],
  },

  79: {
    nodeIdx: 79,
    title: 'QA',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Quality Assurance professionals ensuring technology products meet standards.',
    fullDesc:
     'QA experts implement processes and methodologies to verify software quality and performance. They test products throughout development to identify issues and ensure compliance with quality standards.',
    image: 'nodes/tester.jpg',
    yearsRequired: 1,
    nextNodes: [80],
  },

  80: {
    nodeIdx: 80,
    title: 'QA',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Quality Assurance professionals ensuring technology products meet standards.',
    fullDesc:
     'QA experts implement processes and methodologies to verify software quality and performance. They test products throughout development to identify issues and ensure compliance with quality standards.',
    image: 'nodes/tester.jpg',
    yearsRequired: 2,
    nextNodes: [81],
  },

  81: {
    nodeIdx: 81,
    title: 'QA',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Quality Assurance professionals ensuring technology products meet standards.',
    fullDesc:
     'QA experts implement processes and methodologies to verify software quality and performance. They test products throughout development to identify issues and ensure compliance with quality standards.',
    image: 'nodes/tester.jpg',
    yearsRequired: 4,
    nextNodes: [82],
  },

  82: {
    nodeIdx: 82,
    title: 'QA',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Quality Assurance professionals ensuring technology products meet standards.',
    fullDesc:
     'QA experts implement processes and methodologies to verify software quality and performance. They test products throughout development to identify issues and ensure compliance with quality standards.',
    image: 'nodes/tester.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  4: {
    nodeIdx: 4,
    title: 'Ops',
    prefix: '',
    type: 'Branch',
    shortDesc: 'IT Operations professionals overseeing technology infrastructure and services.',
    fullDesc:
     'Ops specialists oversee the functioning of IT systems, ensuring uptime, performance, and efficiency. They manage day-to-day operations, monitor system performance, and respond to incidents effectively.',
    image: 'nodes/ops.jpg',
    yearsRequired: 0,
    nextNodes: [83, 84],
  },

  83: {
    nodeIdx: 83,
    title: 'DevOps',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Professionals combining software development and IT operations for efficiency.',
    fullDesc:
     'DevOps professionals aim to improve collaboration between development and operations teams through automation and continuous integration, facilitating faster and more reliable software releases.',
    image: 'nodes/devops.jpg',
    yearsRequired: 0,
    nextNodes: [5, 85],
  },

  85: {
    nodeIdx: 85,
    title: 'DevOps',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Professionals combining software development and IT operations for efficiency.',
    fullDesc:
     'DevOps professionals aim to improve collaboration between development and operations teams through automation and continuous integration, facilitating faster and more reliable software releases.',
    image: 'nodes/devops.jpg',
    yearsRequired: 1,
    nextNodes: [5, 86],
  },

  86: {
    nodeIdx: 86,
    title: 'DevOps',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Professionals combining software development and IT operations for efficiency.',
    fullDesc:
     'DevOps professionals aim to improve collaboration between development and operations teams through automation and continuous integration, facilitating faster and more reliable software releases.',
    image: 'nodes/devops.jpg',
    yearsRequired: 2,
    nextNodes: [5, 87],
  },

  87: {
    nodeIdx: 87,
    title: 'DevOps',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Professionals combining software development and IT operations for efficiency.',
    fullDesc:
     'DevOps professionals aim to improve collaboration between development and operations teams through automation and continuous integration, facilitating faster and more reliable software releases.',
    image: 'nodes/devops.jpg',
    yearsRequired: 4,
    nextNodes: [5, 88],
  },

  88: {
    nodeIdx: 88,
    title: 'DevOps',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Professionals combining software development and IT operations for efficiency.',
    fullDesc:
     'DevOps professionals aim to improve collaboration between development and operations teams through automation and continuous integration, facilitating faster and more reliable software releases.',
    image: 'nodes/devops.jpg',
    yearsRequired: 5,
    nextNodes: [5],
  },

  84: {
    nodeIdx: 84,
    title: 'MLOps',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Experts in managing machine learning model deployments and lifecycle.',
    fullDesc:
     'MLOps professionals optimize the lifecycle of machine learning models, ensuring they are robust, scalable, and continuously monitored. They enhance collaboration between data scientists and IT operations to streamline ML deployment.',
    image: 'nodes/mlops.jpg',
    yearsRequired: 0,
    nextNodes: [6, 89],
  },

  89: {
    nodeIdx: 89,
    title: 'MLOps',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Experts in managing machine learning model deployments and lifecycle.',
    fullDesc:
     'MLOps professionals optimize the lifecycle of machine learning models, ensuring they are robust, scalable, and continuously monitored. They enhance collaboration between data scientists and IT operations to streamline ML deployment.',
    image: 'nodes/mlops.jpg',
    yearsRequired: 1,
    nextNodes: [6, 90],
  },

  90: {
    nodeIdx: 90,
    title: 'MLOps',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Experts in managing machine learning model deployments and lifecycle.',
    fullDesc:
     'MLOps professionals optimize the lifecycle of machine learning models, ensuring they are robust, scalable, and continuously monitored. They enhance collaboration between data scientists and IT operations to streamline ML deployment.',
    image: 'nodes/mlops.jpg',
    yearsRequired: 2,
    nextNodes: [6, 91],
  },

  91: {
    nodeIdx: 91,
    title: 'MLOps',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Experts in managing machine learning model deployments and lifecycle.',
    fullDesc:
     'MLOps professionals optimize the lifecycle of machine learning models, ensuring they are robust, scalable, and continuously monitored. They enhance collaboration between data scientists and IT operations to streamline ML deployment.',
    image: 'nodes/mlops.jpg',
    yearsRequired: 4,
    nextNodes: [6, 92],
  },

  92: {
    nodeIdx: 92,
    title: 'MLOps',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Experts in managing machine learning model deployments and lifecycle.',
    fullDesc:
     'MLOps professionals optimize the lifecycle of machine learning models, ensuring they are robust, scalable, and continuously monitored. They enhance collaboration between data scientists and IT operations to streamline ML deployment.',
    image: 'nodes/mlops.jpg',
    yearsRequired: 5,
    nextNodes: [6],
  },

  5: {
    nodeIdx: 5,
    title: 'Development',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Professionals involved in software development and programming.',
    fullDesc:
     'Development specialists create software applications by writing and testing code. They work on different projects and technologies, contributing to the lifecycle of software development from concept to delivery.',
    image: 'nodes/dev.jpg',
    yearsRequired: 0,
    nextNodes: [93, 94, 95, 96, 97, 98, 99, 100, 101],
  },

  101: {
    nodeIdx: 101,
    title: 'Backend',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers focused on server-side application logic and databases.',
    fullDesc:
     'Backend developers create the server-side components of web applications, ensuring data management and server functionality. They work with databases, APIs, and application servers to enable seamless communication between the client and server.',
    image: 'nodes/backend-dev.jpg',
    yearsRequired: 0,
    nextNodes: [102, 103],
  },

  103: {
    nodeIdx: 103,
    title: 'Backend',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers focused on server-side application logic and databases.',
    fullDesc:
     'Backend developers create the server-side components of web applications, ensuring data management and server functionality. They work with databases, APIs, and application servers to enable seamless communication between the client and server.',
    image: 'nodes/backend-dev.jpg',
    yearsRequired: 1,
    nextNodes: [102, 104],
  },

  104: {
    nodeIdx: 104,
    title: 'Backend',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers focused on server-side application logic and databases.',
    fullDesc:
     'Backend developers create the server-side components of web applications, ensuring data management and server functionality. They work with databases, APIs, and application servers to enable seamless communication between the client and server.',
    image: 'nodes/backend-dev.jpg',
    yearsRequired: 2,
    nextNodes: [102, 105],
  },

  105: {
    nodeIdx: 105,
    title: 'Backend',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers focused on server-side application logic and databases.',
    fullDesc:
     'Backend developers create the server-side components of web applications, ensuring data management and server functionality. They work with databases, APIs, and application servers to enable seamless communication between the client and server.',
    image: 'nodes/backend-dev.jpg',
    yearsRequired: 4,
    nextNodes: [102, 106],
  },

  106: {
    nodeIdx: 106,
    title: 'Backend',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers focused on server-side application logic and databases.',
    fullDesc:
     'Backend developers create the server-side components of web applications, ensuring data management and server functionality. They work with databases, APIs, and application servers to enable seamless communication between the client and server.',
    image: 'nodes/backend-dev.jpg',
    yearsRequired: 5,
    nextNodes: [102],
  },

  100: {
    nodeIdx: 100,
    title: 'Frontend',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers creating user interfaces and client-side experiences.',
    fullDesc:
     'Frontend developers focus on the user interface and experience, transforming design prototypes into functional web pages. They utilize HTML, CSS, and JavaScript to enhance user interaction and accessibility.',
    image: 'nodes/frontend-dev.jpg',
    yearsRequired: 0,
    nextNodes: [107, 108],
  },

  108: {
    nodeIdx: 108,
    title: 'Frontend',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers creating user interfaces and client-side experiences.',
    fullDesc:
     'Frontend developers focus on the user interface and experience, transforming design prototypes into functional web pages. They utilize HTML, CSS, and JavaScript to enhance user interaction and accessibility.',
    image: 'nodes/frontend-dev.jpg',
    yearsRequired: 1,
    nextNodes: [107, 109],
  },

  109: {
    nodeIdx: 109,
    title: 'Frontend',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers creating user interfaces and client-side experiences.',
    fullDesc:
     'Frontend developers focus on the user interface and experience, transforming design prototypes into functional web pages. They utilize HTML, CSS, and JavaScript to enhance user interaction and accessibility.',
    image: 'nodes/frontend-dev.jpg',
    yearsRequired: 2,
    nextNodes: [107, 110],
  },

  110: {
    nodeIdx: 110,
    title: 'Frontend',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers creating user interfaces and client-side experiences.',
    fullDesc:
     'Frontend developers focus on the user interface and experience, transforming design prototypes into functional web pages. They utilize HTML, CSS, and JavaScript to enhance user interaction and accessibility.',
    image: 'nodes/frontend-dev.jpg',
    yearsRequired: 4,
    nextNodes: [107, 111],
  },

  111: {
    nodeIdx: 111,
    title: 'Frontend',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers creating user interfaces and client-side experiences.',
    fullDesc:
     'Frontend developers focus on the user interface and experience, transforming design prototypes into functional web pages. They utilize HTML, CSS, and JavaScript to enhance user interaction and accessibility.',
    image: 'nodes/frontend-dev.jpg',
    yearsRequired: 5,
    nextNodes: [107],
  },

  99: {
    nodeIdx: 99,
    title: 'Mobile',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Developers specializing in mobile application development.',
    fullDesc:
     'Mobile developers create applications for mobile devices, utilizing platforms such as Android and iOS. They focus on optimizing user experiences and functionalities specific to mobile environments.',
    image: 'nodes/mobile.jpg',
    yearsRequired: 0,
    nextNodes: [112, 113],
  },

  98: {
    nodeIdx: 98,
    title: 'Desktop',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Developers designing applications to run on desktop operating systems.',
    fullDesc:
     'Desktop developers create software applications for Windows, Mac, and Linux. They build programs that leverage the full capabilities of desktop environments, focusing on usability and system integration.',
    image: 'nodes/desktop.jpg',
    yearsRequired: 0,
    nextNodes: [114, 115, 116],
  },

  97: {
    nodeIdx: 97,
    title: 'OS',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Specialists in operating systems development and maintenance.',
    fullDesc:
     'OS professionals work on the design, development, and support of operating systems, ensuring system stability, security, and efficiency. They focus on kernel programming, user interfaces, and system performance enhancements.',
    image: 'nodes/os-dev.jpg',
    yearsRequired: 0,
    nextNodes: [117],
  },

  117: {
    nodeIdx: 117,
    title: 'OS',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Specialists in operating systems development and maintenance.',
    fullDesc:
     'OS professionals work on the design, development, and support of operating systems, ensuring system stability, security, and efficiency. They focus on kernel programming, user interfaces, and system performance enhancements.',
    image: 'nodes/os-dev.jpg',
    yearsRequired: 1,
    nextNodes: [118],
  },

  118: {
    nodeIdx: 118,
    title: 'OS',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Specialists in operating systems development and maintenance.',
    fullDesc:
     'OS professionals work on the design, development, and support of operating systems, ensuring system stability, security, and efficiency. They focus on kernel programming, user interfaces, and system performance enhancements.',
    image: 'nodes/os-dev.jpg',
    yearsRequired: 2,
    nextNodes: [119],
  },

  119: {
    nodeIdx: 119,
    title: 'OS',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Specialists in operating systems development and maintenance.',
    fullDesc:
     'OS professionals work on the design, development, and support of operating systems, ensuring system stability, security, and efficiency. They focus on kernel programming, user interfaces, and system performance enhancements.',
    image: 'nodes/os-dev.jpg',
    yearsRequired: 4,
    nextNodes: [120],
  },

  120: {
    nodeIdx: 120,
    title: 'OS',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Specialists in operating systems development and maintenance.',
    fullDesc:
     'OS professionals work on the design, development, and support of operating systems, ensuring system stability, security, and efficiency. They focus on kernel programming, user interfaces, and system performance enhancements.',
    image: 'nodes/os-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  96: {
    nodeIdx: 96,
    title: 'Embedded',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers designing software for embedded systems.',
    fullDesc:
     'Embedded systems developers create software for specialized hardware like IoT devices and appliances. They optimize code for performance and efficiency, often working with hardware constraints.',
    image: 'nodes/embedded.jpg',
    yearsRequired: 0,
    nextNodes: [121],
  },

  121: {
    nodeIdx: 121,
    title: 'Embedded',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers designing software for embedded systems.',
    fullDesc:
     'Embedded systems developers create software for specialized hardware like IoT devices and appliances. They optimize code for performance and efficiency, often working with hardware constraints.',
    image: 'nodes/embedded.jpg',
    yearsRequired: 1,
    nextNodes: [122],
  },

  122: {
    nodeIdx: 122,
    title: 'Embedded',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers designing software for embedded systems.',
    fullDesc:
     'Embedded systems developers create software for specialized hardware like IoT devices and appliances. They optimize code for performance and efficiency, often working with hardware constraints.',
    image: 'nodes/embedded.jpg',
    yearsRequired: 2,
    nextNodes: [123],
  },

  123: {
    nodeIdx: 123,
    title: 'Embedded',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers designing software for embedded systems.',
    fullDesc:
     'Embedded systems developers create software for specialized hardware like IoT devices and appliances. They optimize code for performance and efficiency, often working with hardware constraints.',
    image: 'nodes/embedded.jpg',
    yearsRequired: 4,
    nextNodes: [124],
  },

  124: {
    nodeIdx: 124,
    title: 'Embedded',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers designing software for embedded systems.',
    fullDesc:
     'Embedded systems developers create software for specialized hardware like IoT devices and appliances. They optimize code for performance and efficiency, often working with hardware constraints.',
    image: 'nodes/embedded.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  95: {
    nodeIdx: 95,
    title: 'Game',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers focused on creating video games across platforms.',
    fullDesc:
     'Game developers design and code interactive entertainment experiences, including gameplay mechanics, graphics, and sound. They apply creative and technical skills to deliver engaging gaming experiences.',
    image: 'nodes/game-dev.jpg',
    yearsRequired: 0,
    nextNodes: [125],
  },

  125: {
    nodeIdx: 125,
    title: 'Game',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers focused on creating video games across platforms.',
    fullDesc:
     'Game developers design and code interactive entertainment experiences, including gameplay mechanics, graphics, and sound. They apply creative and technical skills to deliver engaging gaming experiences.',
    image: 'nodes/game-dev.jpg',
    yearsRequired: 1,
    nextNodes: [126],
  },

  126: {
    nodeIdx: 126,
    title: 'Game',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers focused on creating video games across platforms.',
    fullDesc:
     'Game developers design and code interactive entertainment experiences, including gameplay mechanics, graphics, and sound. They apply creative and technical skills to deliver engaging gaming experiences.',
    image: 'nodes/game-dev.jpg',
    yearsRequired: 2,
    nextNodes: [127],
  },

  127: {
    nodeIdx: 127,
    title: 'Game',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers focused on creating video games across platforms.',
    fullDesc:
     'Game developers design and code interactive entertainment experiences, including gameplay mechanics, graphics, and sound. They apply creative and technical skills to deliver engaging gaming experiences.',
    image: 'nodes/game-dev.jpg',
    yearsRequired: 4,
    nextNodes: [128],
  },

  128: {
    nodeIdx: 128,
    title: 'Game',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers focused on creating video games across platforms.',
    fullDesc:
     'Game developers design and code interactive entertainment experiences, including gameplay mechanics, graphics, and sound. They apply creative and technical skills to deliver engaging gaming experiences.',
    image: 'nodes/game-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  94: {
    nodeIdx: 94,
    title: 'Blockchain',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Specialists focused on blockchain technology implementation and development.',
    fullDesc:
     'Blockchain professionals design decentralized systems using blockchain technology, ensuring security, transparency, and efficiency. They develop smart contracts and maintain ledger integrity while exploring innovative use cases.',
    image: 'nodes/blockchain-dev.jpg',
    yearsRequired: 0,
    nextNodes: [129],
  },

  129: {
    nodeIdx: 129,
    title: 'Blockchain',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Specialists focused on blockchain technology implementation and development.',
    fullDesc:
     'Blockchain professionals design decentralized systems using blockchain technology, ensuring security, transparency, and efficiency. They develop smart contracts and maintain ledger integrity while exploring innovative use cases.',
    image: 'nodes/blockchain-dev.jpg',
    yearsRequired: 1,
    nextNodes: [130],
  },

  130: {
    nodeIdx: 130,
    title: 'Blockchain',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Specialists focused on blockchain technology implementation and development.',
    fullDesc:
     'Blockchain professionals design decentralized systems using blockchain technology, ensuring security, transparency, and efficiency. They develop smart contracts and maintain ledger integrity while exploring innovative use cases.',
    image: 'nodes/blockchain-dev.jpg',
    yearsRequired: 2,
    nextNodes: [131],
  },

  131: {
    nodeIdx: 131,
    title: 'Blockchain',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Specialists focused on blockchain technology implementation and development.',
    fullDesc:
     'Blockchain professionals design decentralized systems using blockchain technology, ensuring security, transparency, and efficiency. They develop smart contracts and maintain ledger integrity while exploring innovative use cases.',
    image: 'nodes/blockchain-dev.jpg',
    yearsRequired: 4,
    nextNodes: [132],
  },

  132: {
    nodeIdx: 132,
    title: 'Blockchain',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Specialists focused on blockchain technology implementation and development.',
    fullDesc:
     'Blockchain professionals design decentralized systems using blockchain technology, ensuring security, transparency, and efficiency. They develop smart contracts and maintain ledger integrity while exploring innovative use cases.',
    image: 'nodes/blockchain-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  93: {
    nodeIdx: 93,
    title: '1C',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Professionals specializing in the 1C:Enterprise platform for business automation.',
    fullDesc:
     '1C specialists implement and support business automation solutions using the 1C framework. They develop applications that streamline various business processes for accounting and management.',
    image: 'nodes/1c-dev.jpg',
    yearsRequired: 0,
    nextNodes: [133],
  },

  133: {
    nodeIdx: 133,
    title: '1C',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Professionals specializing in the 1C:Enterprise platform for business automation.',
    fullDesc:
     '1C specialists implement and support business automation solutions using the 1C framework. They develop applications that streamline various business processes for accounting and management.',
    image: 'nodes/1c-dev.jpg',
    yearsRequired: 1,
    nextNodes: [134],
  },

  134: {
    nodeIdx: 134,
    title: '1C',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Professionals specializing in the 1C:Enterprise platform for business automation.',
    fullDesc:
     '1C specialists implement and support business automation solutions using the 1C framework. They develop applications that streamline various business processes for accounting and management.',
    image: 'nodes/1c-dev.jpg',
    yearsRequired: 2,
    nextNodes: [135],
  },

  135: {
    nodeIdx: 135,
    title: '1C',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Professionals specializing in the 1C:Enterprise platform for business automation.',
    fullDesc:
     '1C specialists implement and support business automation solutions using the 1C framework. They develop applications that streamline various business processes for accounting and management.',
    image: 'nodes/1c-dev.jpg',
    yearsRequired: 4,
    nextNodes: [136],
  },

  136: {
    nodeIdx: 136,
    title: '1C',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Professionals specializing in the 1C:Enterprise platform for business automation.',
    fullDesc:
     '1C specialists implement and support business automation solutions using the 1C framework. They develop applications that streamline various business processes for accounting and management.',
    image: 'nodes/1c-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  102: {
    nodeIdx: 102,
    title: 'Fullstack',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers skilled in both frontend and backend technologies.',
    fullDesc:
     'Fullstack developers have expertise in all layers of web application development, from the user interface to server-side logic. They can manage complete projects, understand databases, and create seamless user experiences.',
    image: 'nodes/fullstack-dev.jpg',
    yearsRequired: 0,
    nextNodes: [137],
  },

  137: {
    nodeIdx: 137,
    title: 'Fullstack',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers skilled in both frontend and backend technologies.',
    fullDesc:
     'Fullstack developers have expertise in all layers of web application development, from the user interface to server-side logic. They can manage complete projects, understand databases, and create seamless user experiences.',
    image: 'nodes/fullstack-dev.jpg',
    yearsRequired: 1,
    nextNodes: [138],
  },

  138: {
    nodeIdx: 138,
    title: 'Fullstack',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers skilled in both frontend and backend technologies.',
    fullDesc:
     'Fullstack developers have expertise in all layers of web application development, from the user interface to server-side logic. They can manage complete projects, understand databases, and create seamless user experiences.',
    image: 'nodes/fullstack-dev.jpg',
    yearsRequired: 2,
    nextNodes: [139],
  },

  139: {
    nodeIdx: 139,
    title: 'Fullstack',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers skilled in both frontend and backend technologies.',
    fullDesc:
     'Fullstack developers have expertise in all layers of web application development, from the user interface to server-side logic. They can manage complete projects, understand databases, and create seamless user experiences.',
    image: 'nodes/fullstack-dev.jpg',
    yearsRequired: 4,
    nextNodes: [140],
  },

  140: {
    nodeIdx: 140,
    title: 'Fullstack',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers skilled in both frontend and backend technologies.',
    fullDesc:
     'Fullstack developers have expertise in all layers of web application development, from the user interface to server-side logic. They can manage complete projects, understand databases, and create seamless user experiences.',
    image: 'nodes/fullstack-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  107: {
    nodeIdx: 107,
    title: 'SEO',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Specialists improving website visibility through search engine optimization.',
    fullDesc:
     "SEO professionals analyze and implement strategies to enhance a website's ranking in search engine results.They focus on keyword optimization, content creation, and technical factors to drive organic traffic.",
    image: 'nodes/seo.jpg',
    yearsRequired: 0,
    nextNodes: [141],
  },

  141: {
    nodeIdx: 141,
    title: 'SEO',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Specialists improving website visibility through search engine optimization.',
    fullDesc:
     "SEO professionals analyze and implement strategies to enhance a website's ranking in search engine results.They focus on keyword optimization, content creation, and technical factors to drive organic traffic.",
    image: 'nodes/seo.jpg',
    yearsRequired: 1,
    nextNodes: [142],
  },

  142: {
    nodeIdx: 142,
    title: 'SEO',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Specialists improving website visibility through search engine optimization.',
    fullDesc:
     "SEO professionals analyze and implement strategies to enhance a website's ranking in search engine results.They focus on keyword optimization, content creation, and technical factors to drive organic traffic.",
    image: 'nodes/seo.jpg',
    yearsRequired: 2,
    nextNodes: [143],
  },

  143: {
    nodeIdx: 143,
    title: 'SEO',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Specialists improving website visibility through search engine optimization.',
    fullDesc:
     "SEO professionals analyze and implement strategies to enhance a website's ranking in search engine results.They focus on keyword optimization, content creation, and technical factors to drive organic traffic.",
    image: 'nodes/seo.jpg',
    yearsRequired: 4,
    nextNodes: [144],
  },

  144: {
    nodeIdx: 144,
    title: 'SEO',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Specialists improving website visibility through search engine optimization.',
    fullDesc:
     "SEO professionals analyze and implement strategies to enhance a website's ranking in search engine results.They focus on keyword optimization, content creation, and technical factors to drive organic traffic.",
    image: 'nodes/seo.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  112: {
    nodeIdx: 112,
    title: 'Android',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers specializing in creating applications for the Android platform.',
    fullDesc:
     'Android developers design and build applications for devices running the Android operating system. They work with Android SDK and programming languages such as Java and Kotlin to create user-friendly mobile applications.',
    image: 'nodes/mobile-android-dev.jpg',
    yearsRequired: 0,
    nextNodes: [145, 146],
  },

  146: {
    nodeIdx: 146,
    title: 'Android',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers specializing in creating applications for the Android platform.',
    fullDesc:
     'Android developers design and build applications for devices running the Android operating system. They work with Android SDK and programming languages such as Java and Kotlin to create user-friendly mobile applications.',
    image: 'nodes/mobile-android-dev.jpg',
    yearsRequired: 1,
    nextNodes: [145, 147],
  },

  147: {
    nodeIdx: 147,
    title: 'Android',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers specializing in creating applications for the Android platform.',
    fullDesc:
     'Android developers design and build applications for devices running the Android operating system. They work with Android SDK and programming languages such as Java and Kotlin to create user-friendly mobile applications.',
    image: 'nodes/mobile-android-dev.jpg',
    yearsRequired: 2,
    nextNodes: [145, 148],
  },

  148: {
    nodeIdx: 148,
    title: 'Android',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers specializing in creating applications for the Android platform.',
    fullDesc:
     'Android developers design and build applications for devices running the Android operating system. They work with Android SDK and programming languages such as Java and Kotlin to create user-friendly mobile applications.',
    image: 'nodes/mobile-android-dev.jpg',
    yearsRequired: 4,
    nextNodes: [145, 149],
  },

  149: {
    nodeIdx: 149,
    title: 'Android',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers specializing in creating applications for the Android platform.',
    fullDesc:
     'Android developers design and build applications for devices running the Android operating system. They work with Android SDK and programming languages such as Java and Kotlin to create user-friendly mobile applications.',
    image: 'nodes/mobile-android-dev.jpg',
    yearsRequired: 5,
    nextNodes: [145],
  },

  113: {
    nodeIdx: 113,
    title: 'IOS',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers focused on creating applications for iOS devices.',
    fullDesc:
     'IOS developers create applications optimized for Apple devices using Swift and Objective-C. They are responsible for ensuring performance, user experience, and adherence to Apple’s guidelines.',
    image: 'nodes/mobile-ios-dev.jpg',
    yearsRequired: 0,
    nextNodes: [145, 150],
  },

  150: {
    nodeIdx: 150,
    title: 'IOS',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers focused on creating applications for iOS devices.',
    fullDesc:
     'IOS developers create applications optimized for Apple devices using Swift and Objective-C. They are responsible for ensuring performance, user experience, and adherence to Apple’s guidelines.',
    image: 'nodes/mobile-ios-dev.jpg',
    yearsRequired: 1,
    nextNodes: [145, 151],
  },

  151: {
    nodeIdx: 151,
    title: 'IOS',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers focused on creating applications for iOS devices.',
    fullDesc:
     'IOS developers create applications optimized for Apple devices using Swift and Objective-C. They are responsible for ensuring performance, user experience, and adherence to Apple’s guidelines.',
    image: 'nodes/mobile-ios-dev.jpg',
    yearsRequired: 2,
    nextNodes: [145, 152],
  },

  152: {
    nodeIdx: 152,
    title: 'IOS',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers focused on creating applications for iOS devices.',
    fullDesc:
     'IOS developers create applications optimized for Apple devices using Swift and Objective-C. They are responsible for ensuring performance, user experience, and adherence to Apple’s guidelines.',
    image: 'nodes/mobile-ios-dev.jpg',
    yearsRequired: 4,
    nextNodes: [145, 153],
  },

  153: {
    nodeIdx: 153,
    title: 'IOS',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers focused on creating applications for iOS devices.',
    fullDesc:
     'IOS developers create applications optimized for Apple devices using Swift and Objective-C. They are responsible for ensuring performance, user experience, and adherence to Apple’s guidelines.',
    image: 'nodes/mobile-ios-dev.jpg',
    yearsRequired: 5,
    nextNodes: [145],
  },

  145: {
    nodeIdx: 145,
    title: 'Crossplatform',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers creating applications that run on multiple platforms.',
    fullDesc:
     'Crossplatform developers use frameworks to build applications that operate on multiple operating systems. They ensure compatibility and consistent user experience regardless of the device used.',
    image: 'nodes/mobile-cross-dev.jpg',
    yearsRequired: 0,
    nextNodes: [154],
  },

  154: {
    nodeIdx: 154,
    title: 'Crossplatform',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers creating applications that run on multiple platforms.',
    fullDesc:
     'Crossplatform developers use frameworks to build applications that operate on multiple operating systems. They ensure compatibility and consistent user experience regardless of the device used.',
    image: 'nodes/mobile-cross-dev.jpg',
    yearsRequired: 1,
    nextNodes: [155],
  },

  155: {
    nodeIdx: 155,
    title: 'Crossplatform',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers creating applications that run on multiple platforms.',
    fullDesc:
     'Crossplatform developers use frameworks to build applications that operate on multiple operating systems. They ensure compatibility and consistent user experience regardless of the device used.',
    image: 'nodes/mobile-cross-dev.jpg',
    yearsRequired: 2,
    nextNodes: [156],
  },

  156: {
    nodeIdx: 156,
    title: 'Crossplatform',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers creating applications that run on multiple platforms.',
    fullDesc:
     'Crossplatform developers use frameworks to build applications that operate on multiple operating systems. They ensure compatibility and consistent user experience regardless of the device used.',
    image: 'nodes/mobile-cross-dev.jpg',
    yearsRequired: 4,
    nextNodes: [157],
  },

  157: {
    nodeIdx: 157,
    title: 'Crossplatform',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers creating applications that run on multiple platforms.',
    fullDesc:
     'Crossplatform developers use frameworks to build applications that operate on multiple operating systems. They ensure compatibility and consistent user experience regardless of the device used.',
    image: 'nodes/mobile-cross-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  114: {
    nodeIdx: 114,
    title: 'MAC',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating software for macOS.',
    fullDesc:
     'MAC developers design applications specifically for Mac computers, leveraging macOS features and ensuring seamless integration with Apple’s ecosystem.',
    image: 'nodes/desktop-mac-dev.jpg',
    yearsRequired: 0,
    nextNodes: [158],
  },

  158: {
    nodeIdx: 158,
    title: 'MAC',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating software for macOS.',
    fullDesc:
     'MAC developers design applications specifically for Mac computers, leveraging macOS features and ensuring seamless integration with Apple’s ecosystem.',
    image: 'nodes/desktop-mac-dev.jpg',
    yearsRequired: 1,
    nextNodes: [159],
  },

  159: {
    nodeIdx: 159,
    title: 'MAC',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating software for macOS.',
    fullDesc:
     'MAC developers design applications specifically for Mac computers, leveraging macOS features and ensuring seamless integration with Apple’s ecosystem.',
    image: 'nodes/desktop-mac-dev.jpg',
    yearsRequired: 2,
    nextNodes: [160],
  },

  160: {
    nodeIdx: 160,
    title: 'MAC',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating software for macOS.',
    fullDesc:
     'MAC developers design applications specifically for Mac computers, leveraging macOS features and ensuring seamless integration with Apple’s ecosystem.',
    image: 'nodes/desktop-mac-dev.jpg',
    yearsRequired: 4,
    nextNodes: [161],
  },

  161: {
    nodeIdx: 161,
    title: 'MAC',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating software for macOS.',
    fullDesc:
     'MAC developers design applications specifically for Mac computers, leveraging macOS features and ensuring seamless integration with Apple’s ecosystem.',
    image: 'nodes/desktop-mac-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  115: {
    nodeIdx: 115,
    title: 'Linux',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers focusing on Linux-based applications and systems.',
    fullDesc:
     'Linux developers create and maintain applications for Linux operating systems, optimizing performance and ensuring system stability within open-source environments.',
    image: 'nodes/desktop-linux-dev.jpg',
    yearsRequired: 0,
    nextNodes: [162],
  },

  162: {
    nodeIdx: 162,
    title: 'Linux',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers focusing on Linux-based applications and systems.',
    fullDesc:
     'Linux developers create and maintain applications for Linux operating systems, optimizing performance and ensuring system stability within open-source environments.',
    image: 'nodes/desktop-linux-dev.jpg',
    yearsRequired: 1,
    nextNodes: [163],
  },

  163: {
    nodeIdx: 163,
    title: 'Linux',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers focusing on Linux-based applications and systems.',
    fullDesc:
     'Linux developers create and maintain applications for Linux operating systems, optimizing performance and ensuring system stability within open-source environments.',
    image: 'nodes/desktop-linux-dev.jpg',
    yearsRequired: 2,
    nextNodes: [164],
  },

  164: {
    nodeIdx: 164,
    title: 'Linux',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers focusing on Linux-based applications and systems.',
    fullDesc:
     'Linux developers create and maintain applications for Linux operating systems, optimizing performance and ensuring system stability within open-source environments.',
    image: 'nodes/desktop-linux-dev.jpg',
    yearsRequired: 4,
    nextNodes: [165],
  },

  165: {
    nodeIdx: 165,
    title: 'Linux',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers focusing on Linux-based applications and systems.',
    fullDesc:
     'Linux developers create and maintain applications for Linux operating systems, optimizing performance and ensuring system stability within open-source environments.',
    image: 'nodes/desktop-linux-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  116: {
    nodeIdx: 116,
    title: 'Windows',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating applications for Windows OS.',
    fullDesc:
     'Windows developers focus on building software applications for the Windows operating system. They utilize Microsoft technologies and frameworks to enhance functionality and user experience.',
    image: 'nodes/desktop-windows-dev.jpg',
    yearsRequired: 0,
    nextNodes: [166],
  },

  166: {
    nodeIdx: 166,
    title: 'Windows',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating applications for Windows OS.',
    fullDesc:
     'Windows developers focus on building software applications for the Windows operating system. They utilize Microsoft technologies and frameworks to enhance functionality and user experience.',
    image: 'nodes/desktop-windows-dev.jpg',
    yearsRequired: 1,
    nextNodes: [167],
  },

  167: {
    nodeIdx: 167,
    title: 'Windows',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating applications for Windows OS.',
    fullDesc:
     'Windows developers focus on building software applications for the Windows operating system. They utilize Microsoft technologies and frameworks to enhance functionality and user experience.',
    image: 'nodes/desktop-windows-dev.jpg',
    yearsRequired: 2,
    nextNodes: [168],
  },

  168: {
    nodeIdx: 168,
    title: 'Windows',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating applications for Windows OS.',
    fullDesc:
     'Windows developers focus on building software applications for the Windows operating system. They utilize Microsoft technologies and frameworks to enhance functionality and user experience.',
    image: 'nodes/desktop-windows-dev.jpg',
    yearsRequired: 4,
    nextNodes: [169],
  },

  169: {
    nodeIdx: 169,
    title: 'Windows',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Developers specialized in creating applications for Windows OS.',
    fullDesc:
     'Windows developers focus on building software applications for the Windows operating system. They utilize Microsoft technologies and frameworks to enhance functionality and user experience.',
    image: 'nodes/desktop-windows-dev.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  6: {
    nodeIdx: 6,
    title: 'Data',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Professionals focused on managing and analyzing data for insights.',
    fullDesc:
     'Data specialists handle data collection, storage, and analysis processes. They work with databases, ensuring data integrity and harnessing information to support decision-making and strategies.',
    image: 'nodes/data.jpg',
    yearsRequired: 0,
    nextNodes: [170, 171, 172, 173, 174],
  },

  170: {
    nodeIdx: 170,
    title: 'Data Engineer',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: ' Specialists designing and maintaining data architectures.',
    fullDesc:
     'Data Engineers build and maintain systems that allow for efficient data collection, storage, and analysis. They work with big data technologies, ensuring that data pipelines are robust and scalable.',
    image: 'nodes/data-engineer.jpg',
    yearsRequired: 0,
    nextNodes: [175],
  },

  175: {
    nodeIdx: 175,
    title: 'Data Engineer',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: ' Specialists designing and maintaining data architectures.',
    fullDesc:
     'Data Engineers build and maintain systems that allow for efficient data collection, storage, and analysis. They work with big data technologies, ensuring that data pipelines are robust and scalable.',
    image: 'nodes/data-engineer.jpg',
    yearsRequired: 1,
    nextNodes: [176],
  },

  176: {
    nodeIdx: 176,
    title: 'Data Engineer',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: ' Specialists designing and maintaining data architectures.',
    fullDesc:
     'Data Engineers build and maintain systems that allow for efficient data collection, storage, and analysis. They work with big data technologies, ensuring that data pipelines are robust and scalable.',
    image: 'nodes/data-engineer.jpg',
    yearsRequired: 2,
    nextNodes: [177],
  },

  177: {
    nodeIdx: 177,
    title: 'Data Engineer',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: ' Specialists designing and maintaining data architectures.',
    fullDesc:
     'Data Engineers build and maintain systems that allow for efficient data collection, storage, and analysis. They work with big data technologies, ensuring that data pipelines are robust and scalable.',
    image: 'nodes/data-engineer.jpg',
    yearsRequired: 4,
    nextNodes: [178],
  },

  178: {
    nodeIdx: 178,
    title: 'Data Engineer',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: ' Specialists designing and maintaining data architectures.',
    fullDesc:
     'Data Engineers build and maintain systems that allow for efficient data collection, storage, and analysis. They work with big data technologies, ensuring that data pipelines are robust and scalable.',
    image: 'nodes/data-engineer.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  171: {
    nodeIdx: 171,
    title: 'ML Engineer',
    prefix: '',
    type: 'Branch',
    shortDesc: 'Engineers specializing in deploying machine learning models.',
    fullDesc:
     'Machine Learning Engineers develop and implement machine learning algorithms. They focus on optimizing models for performance and scalability, often collaborating with Data Scientists to bring ML solutions into production.',
    image: 'nodes/ml-engineer.jpg',
    yearsRequired: 0,
    nextNodes: [179, 180, 181],
  },

  180: {
    nodeIdx: 180,
    title: 'CV Engineer',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Engineers focusing on computer vision applications.',
    fullDesc:
     'Computer Vision Engineers design algorithms that enable machines to interpret and analyze visual information. They work on projects ranging from image processing to machine learning for visual data.',
    image: 'nodes/computer-vision.jpg',
    yearsRequired: 0,
    nextNodes: [182],
  },

  182: {
    nodeIdx: 182,
    title: 'CV Engineer',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Engineers focusing on computer vision applications.',
    fullDesc:
     'Computer Vision Engineers design algorithms that enable machines to interpret and analyze visual information. They work on projects ranging from image processing to machine learning for visual data.',
    image: 'nodes/computer-vision.jpg',
    yearsRequired: 1,
    nextNodes: [183],
  },

  183: {
    nodeIdx: 183,
    title: 'CV Engineer',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Engineers focusing on computer vision applications.',
    fullDesc:
     'Computer Vision Engineers design algorithms that enable machines to interpret and analyze visual information. They work on projects ranging from image processing to machine learning for visual data.',
    image: 'nodes/computer-vision.jpg',
    yearsRequired: 2,
    nextNodes: [184],
  },

  184: {
    nodeIdx: 184,
    title: 'CV Engineer',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Engineers focusing on computer vision applications.',
    fullDesc:
     'Computer Vision Engineers design algorithms that enable machines to interpret and analyze visual information. They work on projects ranging from image processing to machine learning for visual data.',
    image: 'nodes/computer-vision.jpg',
    yearsRequired: 4,
    nextNodes: [185],
  },

  185: {
    nodeIdx: 185,
    title: 'CV Engineer',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Engineers focusing on computer vision applications.',
    fullDesc:
     'Computer Vision Engineers design algorithms that enable machines to interpret and analyze visual information. They work on projects ranging from image processing to machine learning for visual data.',
    image: 'nodes/computer-vision.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  181: {
    nodeIdx: 181,
    title: 'Prompt Engineer',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Specialists optimizing interactions with AI language models.',
    fullDesc:
     'Prompt Engineers develop and refine inputs to AI models to improve their output. They focus on crafting effective queries and understanding model behaviors to achieve desired results in natural language processing tasks.',
    image: 'nodes/prompt-engineer.jpg',
    yearsRequired: 0,
    nextNodes: [186],
  },

  186: {
    nodeIdx: 186,
    title: 'Prompt Engineer',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Specialists optimizing interactions with AI language models.',
    fullDesc:
     'Prompt Engineers develop and refine inputs to AI models to improve their output. They focus on crafting effective queries and understanding model behaviors to achieve desired results in natural language processing tasks.',
    image: 'nodes/prompt-engineer.jpg',
    yearsRequired: 1,
    nextNodes: [187],
  },

  187: {
    nodeIdx: 187,
    title: 'Prompt Engineer',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Specialists optimizing interactions with AI language models.',
    fullDesc:
     'Prompt Engineers develop and refine inputs to AI models to improve their output. They focus on crafting effective queries and understanding model behaviors to achieve desired results in natural language processing tasks.',
    image: 'nodes/prompt-engineer.jpg',
    yearsRequired: 2,
    nextNodes: [188],
  },

  188: {
    nodeIdx: 188,
    title: 'Prompt Engineer',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Specialists optimizing interactions with AI language models.',
    fullDesc:
     'Prompt Engineers develop and refine inputs to AI models to improve their output. They focus on crafting effective queries and understanding model behaviors to achieve desired results in natural language processing tasks.',
    image: 'nodes/prompt-engineer.jpg',
    yearsRequired: 4,
    nextNodes: [189],
  },

  189: {
    nodeIdx: 189,
    title: 'Prompt Engineer',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Specialists optimizing interactions with AI language models.',
    fullDesc:
     'Prompt Engineers develop and refine inputs to AI models to improve their output. They focus on crafting effective queries and understanding model behaviors to achieve desired results in natural language processing tasks.',
    image: 'nodes/prompt-engineer.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  179: {
    nodeIdx: 179,
    title: 'NLP Engineer',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Specialists focused on developing natural language processing applications.',
    fullDesc:
     'NLP Engineers design and implement systems that enable machines to understand, interpret, and generate human language. They utilize machine learning, linguistic knowledge, and algorithms to create applications for tasks like sentiment analysis, chatbots, and translation systems, enhancing human-computer interaction through natural language understanding and generation.',
    image: 'nodes/nlp.jpg',
    yearsRequired: 0,
    nextNodes: [190],
  },

  190: {
    nodeIdx: 190,
    title: 'NLP Engineer',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Specialists focused on developing natural language processing applications.',
    fullDesc:
     'NLP Engineers design and implement systems that enable machines to understand, interpret, and generate human language. They utilize machine learning, linguistic knowledge, and algorithms to create applications for tasks like sentiment analysis, chatbots, and translation systems, enhancing human-computer interaction through natural language understanding and generation.',
    image: 'nodes/nlp.jpg',
    yearsRequired: 1,
    nextNodes: [191],
  },

  191: {
    nodeIdx: 191,
    title: 'NLP Engineer',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Specialists focused on developing natural language processing applications.',
    fullDesc:
     'NLP Engineers design and implement systems that enable machines to understand, interpret, and generate human language. They utilize machine learning, linguistic knowledge, and algorithms to create applications for tasks like sentiment analysis, chatbots, and translation systems, enhancing human-computer interaction through natural language understanding and generation.',
    image: 'nodes/nlp.jpg',
    yearsRequired: 2,
    nextNodes: [192],
  },

  192: {
    nodeIdx: 192,
    title: 'NLP Engineer',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Specialists focused on developing natural language processing applications.',
    fullDesc:
     'NLP Engineers design and implement systems that enable machines to understand, interpret, and generate human language. They utilize machine learning, linguistic knowledge, and algorithms to create applications for tasks like sentiment analysis, chatbots, and translation systems, enhancing human-computer interaction through natural language understanding and generation.',
    image: 'nodes/nlp.jpg',
    yearsRequired: 4,
    nextNodes: [193],
  },

  193: {
    nodeIdx: 193,
    title: 'NLP Engineer',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Specialists focused on developing natural language processing applications.',
    fullDesc:
     'NLP Engineers design and implement systems that enable machines to understand, interpret, and generate human language. They utilize machine learning, linguistic knowledge, and algorithms to create applications for tasks like sentiment analysis, chatbots, and translation systems, enhancing human-computer interaction through natural language understanding and generation.',
    image: 'nodes/nlp.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  172: {
    nodeIdx: 172,
    title: 'Data Scientist',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc:
     'Professionals combining analytical skills with programming to derive insights from data.',
    fullDesc:
     'Data Scientists utilize statistical analysis and machine learning to extract valuable insights from data, transforming raw data into actionable strategies that drive decision-making.',
    image: 'nodes/data-scientist.jpg',
    yearsRequired: 0,
    nextNodes: [194],
  },

  194: {
    nodeIdx: 194,
    title: 'Data Scientist',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc:
     'Professionals combining analytical skills with programming to derive insights from data.',
    fullDesc:
     'Data Scientists utilize statistical analysis and machine learning to extract valuable insights from data, transforming raw data into actionable strategies that drive decision-making.',
    image: 'nodes/data-scientist.jpg',
    yearsRequired: 1,
    nextNodes: [195],
  },

  195: {
    nodeIdx: 195,
    title: 'Data Scientist',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc:
     'Professionals combining analytical skills with programming to derive insights from data.',
    fullDesc:
     'Data Scientists utilize statistical analysis and machine learning to extract valuable insights from data, transforming raw data into actionable strategies that drive decision-making.',
    image: 'nodes/data-scientist.jpg',
    yearsRequired: 2,
    nextNodes: [196],
  },

  196: {
    nodeIdx: 196,
    title: 'Data Scientist',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc:
     'Professionals combining analytical skills with programming to derive insights from data.',
    fullDesc:
     'Data Scientists utilize statistical analysis and machine learning to extract valuable insights from data, transforming raw data into actionable strategies that drive decision-making.',
    image: 'nodes/data-scientist.jpg',
    yearsRequired: 4,
    nextNodes: [197],
  },

  197: {
    nodeIdx: 197,
    title: 'Data Scientist',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc:
     'Professionals combining analytical skills with programming to derive insights from data.',
    fullDesc:
     'Data Scientists utilize statistical analysis and machine learning to extract valuable insights from data, transforming raw data into actionable strategies that drive decision-making.',
    image: 'nodes/data-scientist.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  173: {
    nodeIdx: 173,
    title: 'Data Analyst',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc: 'Specialists interpreting data to inform business decisions.',
    fullDesc:
     'Data Analysts collect, analyze, and visualize data to uncover trends, helping organizations make informed decisions based on comprehensive data insights.',
    image: 'nodes/data-analyst.jpg',
    yearsRequired: 0,
    nextNodes: [198],
  },

  198: {
    nodeIdx: 198,
    title: 'Data Analyst',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc: 'Specialists interpreting data to inform business decisions.',
    fullDesc:
     'Data Analysts collect, analyze, and visualize data to uncover trends, helping organizations make informed decisions based on comprehensive data insights.',
    image: 'nodes/data-analyst.jpg',
    yearsRequired: 1,
    nextNodes: [199],
  },

  199: {
    nodeIdx: 199,
    title: 'Data Analyst',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc: 'Specialists interpreting data to inform business decisions.',
    fullDesc:
     'Data Analysts collect, analyze, and visualize data to uncover trends, helping organizations make informed decisions based on comprehensive data insights.',
    image: 'nodes/data-analyst.jpg',
    yearsRequired: 2,
    nextNodes: [200],
  },

  200: {
    nodeIdx: 200,
    title: 'Data Analyst',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc: 'Specialists interpreting data to inform business decisions.',
    fullDesc:
     'Data Analysts collect, analyze, and visualize data to uncover trends, helping organizations make informed decisions based on comprehensive data insights.',
    image: 'nodes/data-analyst.jpg',
    yearsRequired: 4,
    nextNodes: [201],
  },

  201: {
    nodeIdx: 201,
    title: 'Data Analyst',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc: 'Specialists interpreting data to inform business decisions.',
    fullDesc:
     'Data Analysts collect, analyze, and visualize data to uncover trends, helping organizations make informed decisions based on comprehensive data insights.',
    image: 'nodes/data-analyst.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },

  174: {
    nodeIdx: 174,
    title: 'Researcher',
    prefix: 'Intern',
    type: 'Profession',
    shortDesc:
     'Professionals conducting research to inform technology advancements and innovations.',
    fullDesc:
     'Researchers investigate emerging trends and new technologies, contributing valuable insights and empirical evidence that drive innovations and improvements in tech development.',
    image: 'nodes/researcher.jpg',
    yearsRequired: 0,
    nextNodes: [202],
  },

  202: {
    nodeIdx: 202,
    title: 'Researcher',
    prefix: 'Junior',
    type: 'Profession',
    shortDesc:
     'Professionals conducting research to inform technology advancements and innovations.',
    fullDesc:
     'Researchers investigate emerging trends and new technologies, contributing valuable insights and empirical evidence that drive innovations and improvements in tech development.',
    image: 'nodes/researcher.jpg',
    yearsRequired: 1,
    nextNodes: [203],
  },

  203: {
    nodeIdx: 203,
    title: 'Researcher',
    prefix: 'Middle',
    type: 'Profession',
    shortDesc:
     'Professionals conducting research to inform technology advancements and innovations.',
    fullDesc:
     'Researchers investigate emerging trends and new technologies, contributing valuable insights and empirical evidence that drive innovations and improvements in tech development.',
    image: 'nodes/researcher.jpg',
    yearsRequired: 2,
    nextNodes: [204],
  },

  204: {
    nodeIdx: 204,
    title: 'Researcher',
    prefix: 'Senior',
    type: 'Profession',
    shortDesc:
     'Professionals conducting research to inform technology advancements and innovations.',
    fullDesc:
     'Researchers investigate emerging trends and new technologies, contributing valuable insights and empirical evidence that drive innovations and improvements in tech development.',
    image: 'nodes/researcher.jpg',
    yearsRequired: 4,
    nextNodes: [205],
  },

  205: {
    nodeIdx: 205,
    title: 'Researcher',
    prefix: 'CEO',
    type: 'Profession',
    shortDesc:
     'Professionals conducting research to inform technology advancements and innovations.',
    fullDesc:
     'Researchers investigate emerging trends and new technologies, contributing valuable insights and empirical evidence that drive innovations and improvements in tech development.',
    image: 'nodes/researcher.jpg',
    yearsRequired: 5,
    nextNodes: [],
  },
};
