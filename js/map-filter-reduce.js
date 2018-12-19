const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersWithThreeLanguages = users.filter((user) => user.languages.length > 2)

const usersEmails = users.map((user) => user.email)

const totalYearsOfExperience = (users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0))

const averageYearsOfExperience =  totalYearsOfExperience / users.length

const longestEmailOfInstructors = users.reduce((longestEmailCurrently, user) => {
    if (user.email.length > longestEmailCurrently.length) {
        return user.email
    }
    return longestEmailCurrently
}, '');

const instructorNames = users.reduce((stringMessage, user)=> {
    return `${stringMessage} ${user.name}`;
}, 'Your Instructors are: ');

console.log(instructorNames);







