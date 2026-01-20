
const votes = [
    'java',
    'python',
    'java',
    'python',
    'python',
    'ruby',
    'ruby',
    'ruby',
    'ruby',
    'rust',
    'rust',
    'golang',
    'golang',
    'c',
    'c'
]


const result = votes.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }

    return acc;
}, {})

console.log(result);
