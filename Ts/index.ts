function nameInput(x? :string) :void {
    x ? console.log("안녕하세요 " + x) : console.log("이름이 없습니다.")
}

function numLen(x :number | string) : number {
    return x.toString().length;
}

function marry(돈 :number, 집 :boolean, 매력 :string) :boolean {
    let res : number = 돈;
    집 ? res += 500 : null;
    매력 === '상' ? res += 600 : null;
    return (res >= 600);
}

function cleaning(a : (number | string)[]) : number[] {
    let res :number[] = [];

    a.forEach((b) => {
        if (typeof b === 'string')
            res.push(parseFloat(b));
        else
            res.push(b);
    })
    return (res);
}

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function selectSubject(a:{ subject: string | string[]}) : string {
    if (typeof a.subject === "string")
        return a.subject
    else if (Array.isArray(a.subject))
        return a.subject[a.subject.length - 1];
    else
        return "No";
}

type animal : string | undefined | number;

