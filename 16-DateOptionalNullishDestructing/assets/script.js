// Task1
let date = new Date();

function popup(time) {
    let times = String(time);
    // console.log(typeof times)
    alert(times)
    console.log(time)
}

window.onload = function () {
    // popup(date)
}



// Task2

const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
        email: " farid.ali@example.com ",
        phone: "555-1234",
        emergencyContact: {
            name: "Far For",
            relation: "Spouse"
        }
    }
};

let { name, department, contact } = employee;

let contactInfos = contact;

console.log(name, department, contact);
console.log(contactInfos);


// Task3

const apiResponse = [
    {
        id: 1,
        title: "JavaScript principes",
        author: "Said Mammadov",
        stats: [2500, 150, 30]
    },
    {
        id: 2,
        title: "Array Destructuring",
        author: "Leyla Aliyeva",
        stats: [1800, 220, 45]
    },
    {
        id: 3,
        title: "Modern JavaScript",
        author: "Tural Hasanli",
        stats: [3200, 380, 70]
    }
];


let { id, title, author, stats } = apiResponse[1];

console.log(id, title, author, stats)

const [read, like, comments] = stats;
console.log(stats)

console.log(`Article: ${title}, Author: ${author}, ${read} Read, ${like} Like, ${comments} Comments`);


// Task4
// {
//   user: {
//     username: "tahir2023",
//     profile: {
//       avatar: "/users/tahir.jpg",
//       bio: "JavaScript developer",
//     },
//     contact: {
//       email: " tahir@example.com "
//     },
//     account: {
//       premium: true
//     }
//   }
// }

function renderUserProfile(userData) {

    return {
        username: userData.user?.username ?? "Guest",
        avatar: userData?.user?.profile?.avatar ?? "/default-avatar.png",
        bio: userData?.user?.profile?.bio ?? "No info",
        email: userData?.user?.contact?.email ?? "Undendified",
        premium: userData?.user?.account?.premium ?? false
    }
}

console.log(renderUserProfile({
    user: {
        username: "tahir2023",
        profile: {
            avatar: "/users/tahir.jpg",
            bio: "JavaScript developer",
        },
        contact: {
            email: " tahir@example.com "
        },
        account: {
            premium: true
        }
    }
}));


console.log(renderUserProfile({
    user: {
        username: "aynur",
        profile: {
            bio: ""
        },
        contact: {}
    }
}));


console.log(renderUserProfile({
    user: {
        username: null
    }
}));

console.log(renderUserProfile({}));
