export const menuItems = [
    {
        title: "About us",
        subMenu: [
            {
                title: "Governing Bodies", subMenu: [
                    {title: "Board of trustees", path: "/about/trustees"},
                    {title: "Scientific Council", path: "/about/trustees"},
                    {title: "Rector", path: "/about/trustees"}
                ]
            },
            {
                title: "Staff", subMenu: [
                    {title: 'Vice-Rectors', path: "/about/trustees"},
                    {title: 'Departments', path: "/about/trustees"},
                    {title: 'Faculties and Chairs', path: "/about/trustees"},
                    {title: 'Organization Structure', path: "/about/trustees"}
                ]
            },
            {title: "Branches", path: "/about/trustees"},
            {
                title: "Documents", subMenu: [
                    {title: "Charter", path: "/about/trustees"},
                    {title: "Strategy", path: "/about/trustees"},
                    {title: "Reports", path: "/about/trustees"},
                    {title: "Regulations", path: "/about/trustees"},
                    {title: "Useful links ks", path: "/about/trustees"}
                ]
            },
            {
                title: 'Quality', subMenu: [
                    {title: 'Internal QA', path: "/about/trustees"},
                    {title: 'Accreditation', path: "/about/trustees"},
                ]
            },
            {title: "Vacancies", path: "/about/trustees"},
            {title: "University Ranking", path: "/about/trustees"},
            {title: "FAQ", path: "/about/trustees"},

        ],
    },
    {
        title: "Applicant", subMenu: [
            {title: 'Required Documents and Exam Samples', path: "/about/trustees"},
            {title: 'Tuition Fees', path: "/about/trustees"},
            {title: 'Foreign Applicants', path: "/about/trustees"},
            {title: 'Preparatory Courses', path: "/about/trustees"},
        ]
    },
    {
        title: "Education", subMenu: [
            {title: "Bachelor's Degree", path: "/about/trustees"},
            {title: "Masters's Degree", path: "/about/trustees"},
            {
                title: "Postgraduate Education", subMenu: [
                    {title: 'Doctorial Studies', path: "/about/trustees"},
                    {title: 'PHD Students', path: "/about/trustees"},
                    {title: 'Postgraduated Studies', path: "/about/trustees"},
                ]
            },
            {title: "Bachelor's Degree", path: "/about/trustees"},
            {title: "Bachelor's Degree", path: "/about/trustees"},
        ]
    },
    {
        title: "Science", subMenu: [
            {title: 'Scientific collection', path: "/about/trustees"},
            {title: 'Publications', path: "/about/trustees"},
            {title: 'Labaratories', path: "/about/trustees"},
        ]
    },
    {
        title: "Students", subMenu: [
            {title: 'Student Council', path: "/about/trustees"},
            {title: 'E-Learning Moodle', path: "/about/trustees"},
            {title: 'E-Library', path: "/about/trustees"},
            {title: 'Course Schedules, Academic Schedules', path: "/about/trustees"},
            {title: 'International Students', path: "/about/trustees"},
            {
                title: 'Financial aid', subMenu: [
                    {title: 'By the State', path: "/about/trustees"},
                    {title: 'By the Government', path: "/about/trustees"},
                ]
            },
        ]
    },
    {
        title: "Career", submenu: [
            {title: 'Career Development', path: "/about/trustees"},
            {
                title: 'Alumni', subMenu: [
                    {title: 'Alumni Union', path: "/about/trustees"},
                    {title: 'Alumni Acievments', path: "/about/trustees"},
                ]
            },
            {title: 'Jobs', path: "/about/trustees"},
        ]
    },
    {
        title: "Internationalization", subMenu: [
            {title: 'Our Partners', path: "/about/trustees"},
            {
                title: 'International and National Programs', subMenu: [
                    {title: 'Erasmus + Programs', path: "/about/trustees"},
                    {title: 'DAAD Programs', path: "/about/trustees"},
                    {title: 'Other Programs', path: "/about/trustees"},
                ]
            },
            {title: 'International Membership', path: "/about/trustees"},
        ]
    },
    // {title: "Media", pathUrl: "/news"},
    {
        title: "Media", subMenu: [
            {title: 'News', path: 'news'},
            {title: 'Announcements', path: "media/announcements"},
            {title: 'Events', path: "media/events"},
        ]
    },

    {title: "Contact us", path: "/contact"},
];

export async function getDictionary(locale) {
    try {
        const dict = await import(`../dictionaries/${locale}.json`);
        return dict.default;
    } catch (error) {
        console.error("Error loading dictionary:", error);
        return {};
    }
}
