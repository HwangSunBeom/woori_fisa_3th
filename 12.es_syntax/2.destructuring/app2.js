// const date = [1982, 12, 25];

// const [year, month, day] = date;

// console.log(year); // 1982

// const nestedArray = [1, 2, [3, 4]];

// const [one, two, [three, four]] = nestedArray;

// console.log(one, two, three, four); // 1 2 3 4

const movie = {
    movieTitle: 'Spiderman no way home',
    movieActor: {
        firstName: 'Tom',
        lastName: 'Holland',
    },
    hashTags: ['honey fun', 'handsome', 'thrill'],
}

const {movieTitle, movieActor, movieActor: {firstName, lastName}, hashTags: [tag1, tag2, tag3], moviedate = new Date()} = movie;

console.log(movieTitle, movieActor, firstName, lastName, tag1, tag2, tag3, moviedate); // Spiderman no way home Tom Holland honey fun handsome thrill 2022-01-06T14:52:45.000Z

// movie 객체
// const movie = {
//     movieTitle: 'Spiderman no way home',
//     movieActor: {
//         firstName: 'Tom',
//         lastName: 'Holland',
//     },
//     hashTags: ['honey fun', 'handsome', 'thrill'],
// }

// const {
//     movieTitle,
//     movieDate = new Date(), // new Date() : 현재 날짜, 기본 파라미터처럼 사용 할 수 있음
//     movieActor, // 객체만 따로 분해하고 싶을 때
//     movieActor: { firstName }, // 내부에서 별도로 디스트럭처링
//     hashTags: [tag1, tag2]
// } = movie;

// console.log(movieDate, movieActor, firstName, tag1, tag2);