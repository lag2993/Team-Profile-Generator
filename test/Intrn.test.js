const Intrn = require('../lib/Intrn');


test('Test if school name can be stored',()=>{
    const s = "Fake International University";
    const tst = new Intrn('Luis',1,'test@email.com',s);
    expect(tst.school).toBe(s);
});
test('Test get school method',()=>{
    const s = "Fake International University";
    const tst = new Intrn('Luis',1,'test@email.com',s);
    expect(tst.getSchool()).toBe(s);
});
test('Test get role method',()=>{
    const r = 'Intern';
    const tst = new Intrn(r);
    expect(tst.getRole()).toBe(r);
});