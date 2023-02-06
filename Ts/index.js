function nameInput(x) {
    x ? console.log("안녕하세요 " + x) : console.log("이름이 없습니다.");
}
function numLen(x) {
    return x.toString().length;
}
function marry(돈, 집, 매력) {
    var res = 돈;
    집 ? res += 500 : null;
    매력 === '상' ? res += 600 : null;
    return (res >= 600);
}
function cleaning(a) {
    var res = [];
    a.forEach(function (b) {
        if (typeof b === 'string')
            res.push(parseFloat(b));
        else
            res.push(b);
    });
    return (res);
}
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function selectSubject(a) {
    if (typeof a.subject === "string")
        return a.subject;
    else if (Array.isArray(a.subject))
        return a.subject[a.subject.length - 1];
    else
        return "No";
}
string | undefined | number;
